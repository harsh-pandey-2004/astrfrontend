import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const Doshas = () => {
  const [activeTab, setActiveTab] = useState("Manglik");
  const [content, setContent] = useState({});
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

     const location=useLocation();
     const {formData}=location.state;
     console.log(formData);

 

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
      let url = "";
      switch (activeTab) {
        case "Manglik":
          url =
            `https://api.vedicastroapi.com/v3-json/dosha/manglik-dosh?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565&lang=en`;
          break;
        case "Kalsarpa":
          url =
            `https://api.vedicastroapi.com/v3-json/dosha/kaalsarp-dosh?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565&lang=en`;
          break;
        case "Sadesati":
          url =
            `https://api.vedicastroapi.com/v3-json/dosha/pitra-dosh?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=5.5&api_key=290bddbe-4d06-5662-8aac-bfa5b725a565&lang=en`;
          break;
        default:
          break;
      }
      if (url) {
        try {
          const response = await axios.get(url);
          console.log(response.data.response);
          setContent(response.data.response);
        } catch (error) {
          setContent({ error: "Error fetching data" });
        }
      }
    };

    if(userLat!=null && userLong!=null){
      fetchData();
    }
    
  }, [activeTab]);

  const renderContent = () => {
    if (content.error) {
      return <div>{content.error}</div>;
    }

    switch (activeTab) {
      case "Manglik":
        return (
          <div>
            <h3 className="font-bold text-2xl text-[#f5d713]">Manglik Dosha</h3>
            <p className="text-md">{content.bot_response}</p>
            <p>
              <span className="font-bold text-2xl text-[#f5d713]">Score:</span>{" "}
              {content.score}%
            </p>
            <h4 className="font-bold text-2xl text-[#f5d713]">Factors:</h4>
            <ul>
              {content.factors?.map((factor, index) => (
                <li key={index} className="text-md">
                  {factor}
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-2xl text-[#f5d713]">Aspects:</h4>
            <ul>
              {content.aspects?.map((aspect, index) => (
                <li key={index} className="text-md">
                  {aspect}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Kalsarpa":
        return (
          <div>
            <h3 className="font-bold text-2xl text-[#f5d713]">
              Kalsarpa Dosha
            </h3>
            <p className="">{content.bot_response}</p>
            <p>
              <span className="font-bold text-2xl text-[#f5d713]">
                Dosha Direction:
              </span>{" "}
              {content.dosha_direction}
            </p>
            <p>
              <span className="font-bold text-2xl text-[#f5d713]">
                Dosha Type:
              </span>{" "}
              <p className="text-md">{content.dosha_type}</p>
            </p>
            <p>
              <span className="font-bold text-2xl text-[#f5d713]">
                Rahu-Ketu Axis:
              </span>{" "}
              <p className="text-md">{content.rahu_ketu_axis}</p>
            </p>
            <h4 className="font-bold text-2xl text-[#f5d713]">Remedies:</h4>
            <ul>
              {content.remedies?.map((remedy, index) => (
                <li key={index} className="text-md">
                  {remedy}
                </li>
              ))}
            </ul>
          </div>
        );
      case "Sadesati":
        return (
          <div>
            <h3 className="font-bold text-2xl text-[#f5d713]">Pitra Dosha</h3>
            <p className="text-md">{content.bot_response}</p>
            <h4 className="font-bold text-2xl text-[#f5d713]">Effects:</h4>
            <ul>
              {content.effects?.map((effect, index) => (
                <li key={index} className="text-md">
                  {effect}
                </li>
              ))}
            </ul>
            <h4 className="font-bold  text-[#f5d713] text-2xl">Remedies:</h4>
            <ul>
              {content.remedies?.map((remedy, index) => (
                <li key={index} className="text-md">
                  {remedy}
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <ul
        id="pills-report-tab-third"
        role="tablist"
        className="flex border-b border-yellow-200 bg-white"
      >
        <li role="presentation" className="flex-auto">
          <button
            onClick={() => handleTabClick("Manglik")}
            type="button"
            role="tab"
            aria-selected={activeTab === "Manglik" ? "true" : "false"}
            className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${
              activeTab === "Manglik" ? "border-b-2 border-[#f5d713]" : ""
            }`}
          >
            Manglik
          </button>
        </li>
        <li role="presentation" className="flex-auto">
          <button
            onClick={() => handleTabClick("Kalsarpa")}
            type="button"
            role="tab"
            aria-selected={activeTab === "Kalsarpa" ? "true" : "false"}
            className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${
              activeTab === "Kalsarpa" ? "border-b-2 border-[#f5d713]" : ""
            }`}
          >
            Kalsarpa
          </button>
        </li>
        <li role="presentation" className="flex-auto">
          <button
            onClick={() => handleTabClick("Sadesati")}
            type="button"
            role="tab"
            aria-selected={activeTab === "Sadesati" ? "true" : "false"}
            className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${
              activeTab === "Sadesati" ? "border-b-2 border-[#f5d713]" : ""
            }`}
          >
            Sadesati
          </button>
        </li>
      </ul>
      <div className="p-4 bg-white">{renderContent()}</div>
    </div>
  );
};

export default Doshas;
