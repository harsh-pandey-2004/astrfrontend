import React, { useState } from "react";
import GeneralTab from "../firstSection.js/GeneralTab";
import PlanetaryTab from "../firstSection.js/PlanetaryTab";
import VimshottariDashaTab from "../firstSection.js/VimshottariDashaTab";
import YogaTab from "../firstSection.js/YogaTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <ul
        id="pills-report-tab1"
        role="tablist"
        className="flex border-b border-gray-200 bg-white"
      >
        {["General", "Planetary", "Vimshottari Dasha", "Yoga"].map((tabName) => (
          <li
            key={tabName}
            role="presentation"
            className={`-mb-px mr-1 flex-auto ${
              activeTab === tabName ? "border-blue-500" : ""
            }`}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === tabName ? "true" : "false"}
              className={`inline-flex items-center justify-center w-full py-2 px-4 font-medium text-sm leading-5 text-gray-700 bg-white border border-transparent focus:outline-none transition duration-150 ease-in-out ${
                activeTab === tabName ? "text-blue-500 border-blue-500" : ""
              }`}
              style={{
                borderBottomWidth: activeTab === tabName ? "2px" : "0px",
                borderBottomColor: activeTab === tabName ? "#4299e1" : "",
                backgroundColor: activeTab === tabName ? "#f0f5f9" : "",
              }}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </button>
          </li>
        ))}
      </ul>
      <div className="bg-white">
        <div className={`py-4 px-4 ${activeTab === "General" ? "block" : "hidden"}`}>
          <GeneralTab />
        </div>
        <div className={`py-4 px-4 ${activeTab === "Planetary" ? "block" : "hidden"}`}>
          <PlanetaryTab />
        </div>
        <div className={`py-4 px-4 ${activeTab === "Vimshottari Dasha" ? "block" : "hidden"}`}>
          <VimshottariDashaTab />
        </div>
        <div className={`py-4 px-4 ${activeTab === "Yoga" ? "block" : "hidden"}`}>
          <YogaTab />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
