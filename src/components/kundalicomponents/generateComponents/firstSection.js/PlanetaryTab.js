import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const PlanetaryTab = () => {
  const location=useLocation();
  const {formData}=location.state;
  console.log(formData);
  
  const [desc,setDesc]=useState();
  const [report,setReport]=useState();

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


  const fetchPlanetReport=async()=>{
    try{
      const response=await fetch(`https://api.vedicastroapi.com/v3-json/horoscope/planet-report?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=9e300788-82de-534a-ba13-47e11a18669f&planet=Jupiter&lang=en`);
      const data= await response.json();
      console.log(data);
      setDesc(data.response[0].general_prediction);
      setReport(data.response[0]);

    }catch(err){
      console.log(err);
      console.log(err.message);

    }
  }

  useEffect(()=>{
    if(userLat!=null && userLong!=null){
      fetchPlanetReport();
    }
  
  },[userLat,userLong])



  return (
    <div>
       <div className="card bg-white rounded-lg shadow-md overflow-hidden ">
      <div className="card-header bg-[#f5d713] text-white text-lg font-semibold py-2 px-4 ">{report && report.planet_considered} Consideration</div>
      <div className="card-body p-4">
        <p className="card-text text-gray-700">
          {desc}
        </p>

        <p className=" mt-4 card-text text-gray-700">
        { report && report.personalised_prediction}
        </p>
      </div>
    </div>
    </div>
  )
}

export default PlanetaryTab