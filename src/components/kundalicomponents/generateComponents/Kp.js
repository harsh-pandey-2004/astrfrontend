import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Kundali.css"
const Kp = () => {
  const [kpPlanets, setKpPlanets] = useState([]);
  const [kpHouses, setKpHouses] = useState([]);
  const location=useLocation();
  const {formData}=location.state;
  console.log(formData);


  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);

  const getUserCoordinates = async (cityName) => {
    const apiKey = 'AIzaSyDZ-0Ods3pdyF7QL_4frjNnhSeaxxEvo00';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`;
  
    try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        setUserLat(location.lat);
        setUserLong(location.lng);
        console.log('User Coordinates:', { userLat: location.lat, userLong: location.lng });
      } else {
        throw new Error('Unable to find location');
      }
    } catch (error) {
      console.error('Error fetching user coordinates:', error);
    }
  };


  useEffect(() => {
    getUserCoordinates(formData.birthPlace);
   
  }, [formData]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch KP Planets
        const planetsResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-planets?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`
        );
        console.log(planetsResponse.data.response)
        setKpPlanets(planetsResponse.data.response);

        // Fetch KP Houses
        const housesResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-houses?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`
        );
        setKpHouses(housesResponse.data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
if(userLat!=null && userLong!=null){
  fetchData();
}
   
  }, [userLat,userLong]);

  return (
    <div className="kundali-boxes-shadow p-6">
      <div className="flex flex-wrap -mx-4">
        {/* KP Planets */}
        <div className="w-full px-4 mb-6">
          <div className=" p-6 kundali-boxes-shadow rounded">
            <h2 className="text-3xl font-bold mb-4 text-shadow  text-[#f5d713]">KP Planets</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-yellow-300">
                <thead>
                  <tr className="bg-yellow-200">
                    <th className="border border-yellow-300 px-4 py-2">Name</th>
                    <th className="border border-yellow-300 px-4 py-2">House</th>
                    <th className="border border-yellow-300 px-4 py-2">Zodiac</th>
                    <th className="border border-yellow-300 px-4 py-2">
                      Sub Lord
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(kpPlanets).map((planet, index) => (
                    <tr key={index}>
                      <td className="border border-yellow-300 px-4 py-2">
                        {planet.full_name}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {planet.house}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {planet.zodiac}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {planet.sub_lord}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* KP Houses */}
        <div className="w-full px-4 mb-6">
          <div className="bg-white p-6 kundali-boxes-shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-[#f5d713] text-shadow ">KP Houses</h2>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-yellow-300">
                <thead>
                  <tr className="bg-yellow-200">
                    <th className="border border-yellow-300 px-4 py-2">
                      Start Rasi
                    </th>
                    <th className="border border-yellow-300 px-4 py-2">
                      End Rasi
                    </th>
                    <th className="border border-yellow-300 px-4 py-2">
                      End Rasi Lord
                    </th>
                    <th className="border border-yellow-300 px-4 py-2">House</th>
                    <th className="border border-yellow-300 px-4 py-2">
                      Bhavmadhya
                    </th>
                    <th className="border border-yellow-300 px-4 py-2">
                      Cusp Sub Lord
                    </th>
                    <th className="border border-yellow-300 px-4 py-2">
                      Cusp Sub Sub Lord
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(kpHouses).map((house, index) => (
                    <tr key={index}>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.start_rasi}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.end_rasi}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.end_rasi_lord}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.house}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.bhavmadhya}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.cusp_sub_lord}
                      </td>
                      <td className="border border-yellow-300 px-4 py-2">
                        {house.cusp_sub_sub_lord}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kp;
