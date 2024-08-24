import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react';
import axios from 'axios';

const RudrakshaComponent = () => {
const location=useLocation();
const{formData}=location.state;
console.log(formData);

const[report,setReport]=useState(null);
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
    const fetchReport=async()=>{
      try{
        const res=await fetch(`https://api.vedicastroapi.com/v3-json/extended-horoscope/rudraksh-suggestion?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=9e300788-82de-534a-ba13-47e11a18669f&lang=en`);
        const data=await res.json();
        console.log(data);
        setReport(data.response);

      }catch(err){
        console.log(err);
        console.log(err.message);
      }
    }

   
    if(userLat!=null && userLong!=null){
      fetchReport();
    }
     
  
  
  },[userLat,userLong,formData])


  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
    <div>
      <h3 className="text-xl font-bold mb-4">Rudraksha Recommendation</h3>
      <p className="text-gray-700 mb-6">
             { report && report.bot_response}
      </p>
      <h4 className="text-lg font-bold mb-2">Rudraksha & its importance</h4>
      <p className="text-gray-700 mb-6">
        { report && report.mukhi_description}
      </p>
      <p className="text-gray-700 mb-6">
        It is a belief that the wearer of Rudraksha not only pleases Lord Shiva but also Goddess Durga, Lord Indra, Lord Brahma, Lord Vishnu, Lord Ganesh, Lord Kartikeya, Lord Aditya, and many other deities. If you want to condemn your sins or faults and purify your life, a Rudraksha is a good tool to begin with. It is said that a person’s sins burn down to ashes by merely looking at a Rudraksha. On the other hand, wearing a Rudraksha helps in the fulfilment of the desires of the wearer.
      </p>
      <p className="text-gray-700 mb-6">
        The number of faces a Rudraksha has varies from 1-Mukhi to 21-Mukhi, all of which are used for different purposes. Henceforth, it is not advisable to buy any Rudraksha of your choice, wear it, and expect it to work. In fact, wearing the wrong Rudraksha can disturb a native’s life by exposing him to wrong energies or simply overpowering a certain planet or leaving it strengthless. Therefore, it is very important that you get a consultation from an astrologer to astrologically decide the most suitable Rudraksha for yourself.
      </p>
    </div>
  </div>
  )
}

export default RudrakshaComponent