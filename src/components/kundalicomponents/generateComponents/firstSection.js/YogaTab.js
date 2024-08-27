import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom'

const YogaTab = () => {
const location=useLocation();
const {formData}=location.state;
const[yogas,setYogas]=useState(null);
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
  const fetchYogas=async()=>{
    try{
       const res=await fetch("https://api.vedicastroapi.com/v3-json/extended-horoscope/yoga-list?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=9e300788-82de-534a-ba13-47e11a18669f&lang=en");
       const data=await res.json();
       setYogas(data.response.yogas_list);
       console.log(data);

    }catch(err){
      console.log(err);
    console.log(err.message);
  }
}
if(userLat!=null && userLong!=null){
  fetchYogas();  
}
    
},[userLat,userLong])




  return (
    <div>
      {yogas && yogas.map((obj)=>{return  <div className="card prediction free-report-yoga bg-white shadow-md rounded-lg p-6  mb-6">
      <div className="text-lg font-semibold bg-[#f5d713] py-2 px-4 flex justify-between items-center">
        <p>{obj.yoga}</p>
        <p className='text-sm font-semibold'>strength in percentage:<span className='text-green-400 pl-2'>{obj.strength_in_percentage}%</span></p></div>
      {/* <h6 className="text-sm font-semibold">Any planets in the twelfth house from the Moon.</h6> */}
      <p className="text-gray-700 mt-2">
        {obj.meaning}
      </p>
    </div>})}
     
    </div>
  )
}

export default YogaTab