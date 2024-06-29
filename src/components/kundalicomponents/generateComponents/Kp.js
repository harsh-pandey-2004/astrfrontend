import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Kundali.css"
const Kp = () => {
  const [kpPlanets, setKpPlanets] = useState([]);
  const [kpHouses, setKpHouses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch KP Planets
        const planetsResponse = await axios.get(
          "https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-planets?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=f663f685-7535-59d4-965b-fafc8b1fb0be&lang=en"
        );
        setKpPlanets(planetsResponse.data.response);

        // Fetch KP Houses
        const housesResponse = await axios.get(
          "https://api.vedicastroapi.com/v3-json/extended-horoscope/kp-houses?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=f663f685-7535-59d4-965b-fafc8b1fb0be&lang=en"
        );
        setKpHouses(housesResponse.data.response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
