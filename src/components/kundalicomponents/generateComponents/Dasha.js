import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Kundali.css";

const Dashas = () => {
  const [activeTab, setActiveTab] = useState("vimshottari");
  const [dashas, setDashas] = useState([]);
  const [visibleRows, setVisibleRows] = useState(10);
  const [vimshottariData, setVimshottariData] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [selectedrashi, setSeletedRashi] = useState("");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const loadMoreRows = () => {
    setVisibleRows((prev) => prev + 10);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (activeTab === "vimshottari") {
          // Fetch Vimshottari Dasha data
          response = await axios.get(
            "https://api.vedicastroapi.com/v3-json/dashas/maha-dasha",
            {
              params: {
                dob: "11/03/1994",
                tob: "11:40",
                lat: 11,
                lon: 77,
                tz: 5.5,
                api_key: "f663f685-7535-59d4-965b-fafc8b1fb0be",
                lang: "en",
              },
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setVimshottariData(response.data.response); // Set Vimshottari Dasha data

          // Fetch predictions for Vimshottari Dasha
          const predictionsResponse = await axios.get(
            "https://api.vedicastroapi.com/v3-json/dashas/maha-dasha-predictions",
            {
              params: {
                dob: "11/03/1994",
                tob: "11:40",
                lat: 11,
                lon: 77,
                tz: 5.5,
                api_key: "f663f685-7535-59d4-965b-fafc8b1fb0be",
                lang: "en",
              },
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setPredictions(predictionsResponse.data.response.dashas); // Set predictions for Vimshottari Dasha
        } else if (activeTab === "yogini") {
          // Fetch Yogini Dasha data
          response = await axios.get(
            "https://api.vedicastroapi.com/v3-json/dashas/yogini-dasha-sub",
            {
              params: {
                dob: "11/03/1994",
                tob: "11:40",
                lat: 11,
                lon: 77,
                tz: 5.5,
                api_key: "f663f685-7535-59d4-965b-fafc8b1fb0be",
                lang: "en",
              },
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setDashas(response.data.response); // Set Yogini Dasha data
        }
      } catch (error) {
        console.error("Error fetching dashas:", error);
      }
    };

    fetchData();
  }, [activeTab]); // Fetch data when activeTab changes

  return (
    <div className="main_background_basic">
      <ul className="flex" role="tablist">
        <li
          className={`mr-2 cursor-pointer ${
            activeTab === "vimshottari" ? "active" : ""
          }`}
          onClick={() => handleTabClick("vimshottari")}
        >
          <button
            className={`px-4 py-2 rounded-t-lg focus:outline-none ${
              activeTab === "vimshottari"
                ? "bg-[#f5d713] text-white"
                : "bg-yellow-200 text-yellow-700"
            }`}
            role="tab"
            aria-selected={activeTab === "vimshottari" ? "true" : "false"}
          >
            Vimshottari
          </button>
        </li>
        <li
          className={`mr-2 cursor-pointer ${
            activeTab === "yogini" ? "active" : ""
          }`}
          onClick={() => handleTabClick("yogini")}
        >
          <button
            className={`px-4 py-2 rounded-t-lg focus:outline-none ${
              activeTab === "yogini"
                ? "bg-[#f5d713] text-white"
                : "bg-yellow-200 text-yellow-700"
            }`}
            role="tab"
            aria-selected={activeTab === "yogini" ? "true" : "false"}
          >
            Yogini
          </button>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className={`tab-pane fade ${
            activeTab === "vimshottari" ? "active show" : ""
          }`}
          role="tabpanel"
        >
          {activeTab === "vimshottari" && vimshottariData && (
            <div className="col-12">
              <div className="bg-white kundali-boxes-shadow rounded-md p-6 mt-5">
                <div className="text-xl font-semibold">
                  <p className="text-center text-3xl text-[#f5d713] text-shadow ">
                    MahaDashas
                  </p>
                  <p className="text-[#f5d713] text-shadow ">
                    Start Year :{" "}
                    <span className="text-yellow-300">
                      {vimshottariData.start_year}
                    </span>
                  </p>
                  <p className="text-[#f5d713] text-shadow ">
                    Start Date :{" "}
                    <span className="text-yellow-300">
                      {vimshottariData.dasha_start_date}
                    </span>
                  </p>
                  <p className="text-[#f5d713] text-shadow ">
                    Dasha Remaining at Birth :{" "}
                    <span className="text-yellow-300">
                      {vimshottariData.dasha_remaining_at_birth}
                    </span>
                  </p>
                </div>
                <div>
                  <select
                    onChange={(e) => setSeletedRashi(e.target.value)}
                    className="w-full  border-2 border-yellow-400 px-4 py-2 mt-5 rounded outline-yellow-400"
                  >
                    {vimshottariData.mahadasha.map((e) => (
                      <option value={e}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>
              {predictions.length > 0 && (
                <div className="col-12 mt-5">
                  <div className="bg-white kundali-boxes-shadow rounded-md p-6">
                    <div className=" font-semibold text-center mb-4 text-4xl text-[#f5d713] text-shadow ">
                      Stats
                    </div>
                    {predictions
                      .filter((e) => e.dasha === selectedrashi)
                      .map((dasha, index) => (
                        <div key={index} className="mb-4">
                          <p className="text-yellow-700 font-bol text-3xl font-semibold">
                            {dasha.dasha}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="text-[#f5d713] text-xl">
                              End Year :{" "}
                            </span>
                            {dasha.dasha_end_year}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="text-[#f5d713] text-xl">
                              Start Year :{" "}
                            </span>
                            {dasha.dasha_start_year}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="text-[#f5d713] text-xl">
                              Your Planet in zodiac :{" "}
                            </span>
                            {dasha.planet_in_zodiac}
                          </p>

                          <p className="text-sm text-gray-600">
                            <span className="text-[#f5d713] text-xl">
                              Predictions :{" "}
                            </span>
                            {dasha.prediction}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "yogini" ? "active show" : ""
          }`}
          role="tabpanel"
        >
          {activeTab === "yogini" && (
            <div className="dasha_kundli">
              <h2 className="dasha-heading text-center font-bold text-xl mb-4">
                <span className="text-[#f5d713]">
                  {dashas.length > 0 && dashas[0].main_dasha}
                </span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-yellow-200 divide-y divide-yellow-200">
                  <thead className="bg-yellow-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium bg-[#f5d713] uppercase tracking-wider border-2">
                        Planet
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium bg-[#f5d713] uppercase tracking-wider">
                        Start Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium bg-[#f5d713] uppercase tracking-wider border-2">
                        End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-yellow-200">
                    {dashas.length > 0 &&
                      dashas.slice(0, visibleRows).map((dasha, index) =>
                        dasha.sub_dasha_list.map((subDasha, subIndex) => (
                          <tr
                            key={`${index}-${subIndex}`}
                            className={
                              subIndex % 2 === 0 ? "bg-yellow-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-2">
                              {subDasha.sub_dasha}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {subDasha.start_date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-2">
                              {subDasha.end_date}
                            </td>
                          </tr>
                        ))
                      )}
                  </tbody>
                </table>
              </div>
              {visibleRows < dashas.length && (
                <div className="flex justify-center mt-4">
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-[#f5d713] rounded-md hover:bg-yellow-500 focus:outline-none"
                    onClick={loadMoreRows}
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashas;
