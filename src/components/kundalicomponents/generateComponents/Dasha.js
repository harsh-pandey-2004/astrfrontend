import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashas = () => {
  const [activeTab, setActiveTab] = useState("vimshottari");
  const [dashas, setDashas] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.vedicastroapi.com/v3-json/dashas/yogini-dasha-sub",
          {
            params: {
              dob: "11/03/1994",
              tob: "11:40",
              lat: 11,
              lon: 77,
              tz: 5.5,
              api_key: "339e6e74-a1ea-5093-8ef3-e31f5e45cc79",
              lang: "en",
            },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        setDashas(response.data.response);
      } catch (error) {
        console.error("Error fetching dashas:", error);
      }
    };

    fetchData();
  }, []);

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
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
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
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
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
          {activeTab === "vimshottari" && (
            <div className="col-12">
              <div className="bg-white shadow-md rounded-md p-6">
                <div className="text-xl font-semibold">
                  Rahu Mahadasha{" "}
                  <span className="text-sm">(24-09-1987 - 23-09-2005)</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">
                    The conjunction of Rahu in the ninth of the Kundli could be
                    an ominous omen of certain events that could lead to
                    separation from siblings. It also hints at some parent
                    health issues being transferred to the child. However, this
                    won't be a serious kind of ailment. On the upside, when Rahu
                    camps in the favourable sign, you will have the fortune of
                    good education and your family will be blessed with the
                    opportunity to travel to foreign countries. Also, you will
                    have a friend circle that will help you in establishing your
                    professional goal. You will be lucky to find a loyal
                    partner, however, you must constrain your speech when with
                    them. <br />
                    <br />
                    The planet Rahu is in the Capricorn sign of the Kundli. This
                    placement will bring happiness and comfort to the life of
                    the native. Even though things won't go as smoothly as you
                    would like them to go, however, you will experience smooth
                    sailing when it comes to your love and professional life.
                    The placement of Rahu in Capricorn indicates that you will
                    find respect and reverence in society. There is a
                    possibility, however, that things change for worse towards
                    the end of this Dasha period if you are not careful about
                    your life decisions. Health and disease are something for
                    you to be on the lookout for. Rahu in Capricorn further
                    indicates that your happiness can be dependent on the
                    loyalty that your subordinates and your loved ones show to
                    you.
                  </p>
                </div>
              </div>
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
                <span className="text-blue-500">
                  {dashas.length > 0 && dashas[0].main_dasha}
                </span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Planet
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Start Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        End Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {dashas.length > 0 &&
                      dashas.map((dasha, index) =>
                        dasha.sub_dasha_list.map((subDasha, subIndex) => (
                          <tr
                            key={`${index}-${subIndex}`}
                            className={
                              subIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {subDasha}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {new Date(
                                dasha.sub_dasha_start_dates
                              ).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {new Date(
                                dasha.sub_dasha_end_dates[subIndex]
                              ).toLocaleDateString()}
                            </td>
                          </tr>
                        ))
                      )}
                  </tbody>
                </table>
              </div>
              <div className="note-yogini text-sm mt-4 text-gray-600">
                <span className="font-semibold">Note:</span> MAN: Mangala, PIN:
                Pingala, DHA: Dhanya, BHR: Bhramari, BHA: Bhadrika, ULK: Ulka,
                SID: Siddha, SAN: Sankata
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashas;
