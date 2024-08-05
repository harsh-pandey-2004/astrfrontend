import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Kundali.css"
import { useLocation } from "react-router-dom";
const Kundali = () => {
  const [selectedType, setSelectedType] = useState("Basic Kundali");
  const [horoscopeData, setHoroscopeData] = useState(null);
  const [planetReportData, setPlanetReportData] = useState(null);
  const [personalCharacteristicsData, setPersonalCharacteristicsData] = useState(null);
  const [ascendantReportData, setAscendantReportData] = useState(null);
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
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const horoscopeResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/horoscope/planet-details?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`
        );
        console.log(horoscopeResponse.data.response);
        setHoroscopeData(horoscopeResponse.data.response);

        const planetReportResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/horoscope/planet-report?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565&planet=Jupiter&lang=en`
        );
        console.log(planetReportResponse);
     
        setPlanetReportData(planetReportResponse.data.response[0]);

        const personalCharacteristicsResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/horoscope/personal-characteristics?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`
        );
        setPersonalCharacteristicsData(personalCharacteristicsResponse.data.response);

        const ascendantReportResponse = await axios.get(
          `https://api.vedicastroapi.com/v3-json/horoscope/ascendant-report?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565`
        );
        setAscendantReportData(ascendantReportResponse.data.response[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the function to fetch data
    if(userLat !== null && userLong !==null){
      fetchData();
    }
   
  }, [userLat,userLong]);

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const renderHoroscopeDetails = () => {
    if (!horoscopeData) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Horoscope Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {Object.values(horoscopeData).slice(0, 4).map((planet, index) => (
            <div key={index} className="border p-4 rounded-md kundali-boxes-shadow">
              <h3 className="text-2xl font-medium mb-2 text-center text-[#f5d713] text-shadow">{planet.full_name}</h3>
              <p><strong className="text-[#f5d713] text-md">Zodiac:</strong> {planet.zodiac}</p>
              <p><strong className="text-[#f5d713] text-md">House:</strong> {planet.house}</p>
              <p><strong className="text-[#f5d713] text-md">Nakshatra:</strong> {planet.nakshatra}</p>
              <p><strong className="text-[#f5d713] text-md">Nakshatra Lord:</strong> {planet.nakshatra_lord}</p>
              <p><strong className="text-[#f5d713] text-md">Speed (Radians per Day):</strong> {planet.speed_radians_per_day || '-'}</p>
              <p><strong className="text-[#f5d713] text-md">Is Combust:</strong> {planet.is_combust ? 'Yes' : 'No'}</p>
              <p><strong className="text-[#f5d713] text-md">Lord Status:</strong> {planet.lord_status}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 bg-yellow-400 text-white py-2 px-4 rounded-md shadow-md hover:bg-yellow-500" onClick={loadMoreHoroscope}>
          Load More
        </button>
      </div>
    );
  };

  const loadMoreHoroscope = () => {
    // Implement logic to load more horoscope details
    // For demonstration purposes, here we could fetch more data or toggle display of more items
    console.log("Load more horoscope details");
  };

  const renderPlanetReport = () => {
    if (!planetReportData) return null;

    return (
      <div className="mb-8">
       
        <div className="border p-4 rounded-md  kundali-boxes-shadow">
          <h3 className="text-4xl font-medium mb-2 text-[#f5d713] text-center text-shadow ">{planetReportData.planet_considered}</h3>
          <p><strong className="text-[#f5d713] text-2xl">General Prediction:</strong> {planetReportData.general_prediction}</p>
          <p><strong className="text-[#f5d713] text-2xl">Planet Definitions:</strong> {planetReportData.planet_definitions}</p>
          <p><strong className="text-[#f5d713] text-2xl">Personalized Prediction:</strong> {planetReportData.personalised_prediction}</p>
          <p><strong className="text-[#f5d713] text-2xl">Verbal Location:</strong> {planetReportData.verbal_location}</p>
          <p><strong className="text-[#f5d713] text-2xl">Character Keywords Positive:</strong> {planetReportData.character_keywords_positive.join(', ')}</p>
          <p><strong className="text-[#f5d713] text-2xl">Character Keywords Negative:</strong> {planetReportData.character_keywords_negative.join(', ')}</p>
        </div>
      </div>
    );
  };

  const renderPersonalCharacteristics = () => {
    if (!personalCharacteristicsData) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Personal Characteristics</h2>
        {personalCharacteristicsData.map((characteristic, index) => (
          <div key={index} className="border p-4 rounded-md mb-4  kundali-boxes-shadow">
            <h3 className="text-center font-medium mb-2 text-[#f5d713] text-2xl">{`House ${characteristic.current_house}`}</h3>
            <p><strong className="text-[#f5d713] text-lg">Current Zodiac:</strong> {characteristic.current_zodiac}</p>
            <p><strong className="text-[#f5d713] text-lg">Lord of Zodiac:</strong> {characteristic.lord_of_zodiac}</p>
            <p><strong className="text-[#f5d713] text-lg">Lord Zodiac Location:</strong> {characteristic.lord_zodiac_location}</p>
            <p><strong className="text-[#f5d713] text-lg">Personalized Prediction:</strong> {characteristic.personalised_prediction}</p>
          </div>
        ))}
      </div>
    );
  };

  const renderAscendantReport = () => {
    if (!ascendantReportData) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Ascendant Report: {ascendantReportData.ascendant}</h2>
        <div className="border p-4 rounded-md bg-yellow-100 shadow-md">
          <h3 className="text-lg font-medium mb-2">{`Lord of the Ascendant: ${ascendantReportData.ascendant_lord}`}</h3>
          <p><strong>General Prediction:</strong> {ascendantReportData.general_prediction}</p>
          <p><strong>Personalized Prediction:</strong> {ascendantReportData.personalised_prediction}</p>
          <p><strong>Zodiac Characteristics:</strong> {ascendantReportData.zodiac_characteristics}</p>
          <p><strong>Lucky Gem:</strong> {ascendantReportData.lucky_gem}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8">
      <div className="change-graph-type flex justify-between border-b border-gray-200 mb-8">
        <button
          className={`selector-item px-4 py-2 rounded-md ${
            selectedType === "Basic Kundali"
              ? "active bg-yellow-400 text-white hover:bg-yellow-500"
              : "bg-white text-black hover:bg-yellow-200"
          }`}
          onClick={() => handleTypeChange("Basic Kundali")}
        >
          Basic Kundali
        </button>
        <button
          className={`selector-item px-4 py-2 rounded-md ${
            selectedType === "More Info"
              ? "active bg-yellow-400 text-white hover:bg-yellow-500"
              : "bg-white text-black hover:bg-yellow-200"
          }`}
          onClick={() => handleTypeChange("More Info")}
        >
          More Info
        </button>
      </div>

      {/* Render each section based on selected type */}
      {selectedType === "Basic Kundali" && (
        <>
          {renderHoroscopeDetails()}
          {renderPlanetReport()}
        </>
      )}

      {selectedType === "More Info" && (
        <>
          {renderPersonalCharacteristics()}
          {renderAscendantReport()}
        </>
      )}
    </div>
  );
};

export default Kundali;
