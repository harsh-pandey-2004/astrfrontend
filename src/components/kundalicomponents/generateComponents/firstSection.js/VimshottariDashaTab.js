import React from 'react'
import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const VimshottariDashaTab = () => {
  const location=useLocation();
  const {formData}=location.state;
  console.log(formData);

  const[dashas,setDashas]=useState(null);
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


  useEffect(()=>{
    const fetchDasha=async()=>{
      try{
        const res=await fetch(`https://api.vedicastroapi.com/v3-json/dashas/maha-dasha-predictions?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565&lang=en`);
        const data=await res.json();
        console.log(data);
        setDashas(data.response.dashas);
      

      }catch(err){
        console.log(err);
        console.log(err.message);
      }
    }


    if(userLat!=null && userLong!=null){
      fetchDasha();
    }
     

  },[userLat,userLong]);

 
  return (
    <div>
       <div className="col-12 ">
      {dashas && dashas.map((obj)=>{return <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6" obj={obj}>
        <div className="bg-[#f5d713] text-white py-4 px-6 flex justify-between items-center">
          <span className="text-lg font-semibold">{obj.dasha} Mahadasha</span>
          <span className="text-sm  text-black">{obj.dasha_start_year} - {obj.dasha_start_year}</span>
        </div>
        <div className="p-6">
          <p className="text-gray-700">
            {obj.prediction}
           
           
          </p>
        </div>
      </div> })}

      
    </div>
    </div>
  )
}

export default VimshottariDashaTab