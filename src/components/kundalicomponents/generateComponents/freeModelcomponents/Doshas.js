import React, { useState, useEffect } from "react";
import axios from "axios";

const Doshas = () => {
  const [activeTab, setActiveTab] = useState("Manglik");
  const [content, setContent] = useState({});

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      switch (activeTab) {
        case "Manglik":
          url =
            "https://api.vedicastroapi.com/v3-json/dosha/manglik-dosh?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=339e6e74-a1ea-5093-8ef3-e31f5e45cc79&lang=en";
          break;
        case "Kalsarpa":
          url =
            "https://api.vedicastroapi.com/v3-json/dosha/kaalsarp-dosh?dob=23/02/1985&tob=05:40&lat=11&lon=77&tz=5.5&api_key=339e6e74-a1ea-5093-8ef3-e31f5e45cc79&lang=en";
          break;
        case "Sadesati":
          url =
            "https://api.vedicastroapi.com/v3-json/dosha/pitra-dosh?dob=21/04/2021&tob=11:40&lat=11&lon=77&tz=5.5&api_key=339e6e74-a1ea-5093-8ef3-e31f5e45cc79&lang=en";
          break;
        default:
          break;
      }
      if (url) {
        try {
          const response = await axios.get(url);
          setContent(response.data.response);
        } catch (error) {
          setContent({ error: "Error fetching data" });
        }
      }
    };

    fetchData();
  }, [activeTab]);

  const renderContent = () => {
    if (content.error) {
      return <div>{content.error}</div>;
    }

    switch (activeTab) {
      case "Manglik":
        return (
          <div>
            <h3 className="font-bold text-xl">Manglik Dosha</h3>
            <p>{content.bot_response}</p>
            <p>
              <span className="font-bold text-xl">Score:</span> {content.score}%
            </p>
            <h4 className="font-bold text-xl">Factors:</h4>
            <ul>
              {content.factors?.map((factor, index) => (
                <li key={index}>{factor}</li>
              ))}
            </ul>
            <h4 className="font-bold text-xl">Aspects:</h4>
            <ul>
              {content.aspects?.map((aspect, index) => (
                <li key={index}>{aspect}</li>
              ))}
            </ul>
          </div>
        );
      case "Kalsarpa":
        return (
          <div>
            <h3 className="font-bold text-xl">Kalsarpa Dosha</h3>
            <p>{content.bot_response}</p>
            <p>
              <span className="font-bold text-xl">Dosha Direction:</span>{" "}
              {content.dosha_direction}
            </p>
            <p>
              <span className="font-bold text-xl">Dosha Type:</span>{" "}
              {content.dosha_type}
            </p>
            <p>
              <span className="font-bold text-xl">Rahu-Ketu Axis:</span>{" "}
              {content.rahu_ketu_axis}
            </p>
            <h4 className="font-bold text-xl">Remedies:</h4>
            <ul>
              {content.remedies?.map((remedy, index) => (
                <li key={index}>{remedy}</li>
              ))}
            </ul>
          </div>
        );
      case "Sadesati":
        return (
          <div>
            <h3 className="font-bold text-xl">Pitra Dosha</h3>
            <p>{content.bot_response}</p>
            <h4 className="font-bold text-xl">Effects:</h4>
            <ul>
              {content.effects?.map((effect, index) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
            <h4 className="font-bold text-xl">Remedies:</h4>
            <ul>
              {content.remedies?.map((remedy, index) => (
                <li key={index}>{remedy}</li>
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
        className="flex border-b border-gray-200 bg-white"
      >
        <li role="presentation" className="flex-auto">
          <button
            onClick={() => handleTabClick("Manglik")}
            type="button"
            role="tab"
            aria-selected={activeTab === "Manglik" ? "true" : "false"}
            className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${
              activeTab === "Manglik" ? "border-b-2 border-blue-500" : ""
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
              activeTab === "Kalsarpa" ? "border-b-2 border-blue-500" : ""
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
              activeTab === "Sadesati" ? "border-b-2 border-blue-500" : ""
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
