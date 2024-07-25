import React from 'react';
import './Kundali.css'; // Assuming this file contains your custom styles
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Basic = () => {
const location=useLocation();
const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);
const { formData } = location.state;
  console.log(formData);


//fetching user's lat&long
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




  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg bg-white p-8 kundali-boxes-shadow">
          <h2 className="text-3xl font-bold mb-6 text-[#fae13b] text-shadow">Basic Details</h2>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
            <div className="font-semibold">Name:</div>
            <div className="text-yellow-700">{formData.name}</div>
            <div className="font-semibold">Date:</div>
            <div className="text-yellow-700">{formData.day}/{formData.month}/{formData.year}</div>
            <div className="font-semibold">Time:</div>
            <div className="text-yellow-700">{formData.hour}:{formData.minute} PM</div>
            <div className="font-semibold">Place:</div>
            <div className="text-yellow-700">{formData.birthPlace}</div>
            <div className="font-semibold">Latitude:</div>
            <div className="text-yellow-700">{userLat}</div>
            <div className="font-semibold">Longitude:</div>
            <div className="text-yellow-700">{userLong}</div>
            <div className="font-semibold">Timezone:</div>
            <div className="text-yellow-700">GMT<span>+</span>5.5</div>
            <div className="font-semibold">Sunrise:</div>
            <div className="text-yellow-700">7:14:10</div>
            <div className="font-semibold">Sunset:</div>
            <div className="text-yellow-700">17:35:10</div>
            <div className="font-semibold">Ayanamsha:</div>
            <div className="text-yellow-700">23.71738</div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-lg bg-white p-8 kundali-boxes-shadow">
          <h2 className="text-3xl font-bold mb-6 text-[#fae13b] text-shadow">Avakhada Details</h2>
          <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
            <div className="font-semibold">Varna:</div>
            <div className="text-yellow-700">Vaishya</div>
            <div className="font-semibold">Vashya:</div>
            <div className="text-yellow-700">Nara</div>
            <div className="font-semibold">Yoni:</div>
            <div className="text-yellow-700">Ashva</div>
            <div className="font-semibold">Gan:</div>
            <div className="text-yellow-700">Rakshasa</div>
            <div className="font-semibold">Nadi:</div>
            <div className="text-yellow-700">Adhya</div>
            <div className="font-semibold">Sign:</div>
            <div className="text-yellow-700">Aquarius</div>
            <div className="font-semibold">Sign Lord:</div>
            <div className="text-yellow-700">Saturn</div>
            <div className="font-semibold">Nakshatra-Charan:</div>
            <div className="text-yellow-700">Shatabhisha</div>
            <div className="font-semibold">Yog:</div>
            <div className="text-yellow-700">Siddhi</div>
            <div className="font-semibold">Karan:</div>
            <div className="text-yellow-700">Bav</div>
            <div className="font-semibold">Tithi:</div>
            <div className="text-yellow-700">Shukla Panchami</div>
            <div className="font-semibold">Yunja:</div>
            <div className="text-yellow-700">Antya</div>
            <div className="font-semibold">Tatva:</div>
            <div className="text-yellow-700">Air</div>
            <div className="font-semibold">Name alphabet:</div>
            <div className="text-yellow-700">Go</div>
            <div className="font-semibold">Paya:</div>
            <div className="text-yellow-700">Copper</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic;
