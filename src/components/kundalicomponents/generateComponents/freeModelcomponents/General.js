import React, { useState } from "react";
import GeneralTab from "../firstSection.js/GeneralTab";
import PlanetaryTab from "../firstSection.js/PlanetaryTab";
import VimshottariDashaTab from "../firstSection.js/VimshottariDashaTab";
import YogaTab from "../firstSection.js/YogaTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    console.log(activeTab);
  };

  return (
    <div>
      <ul
        id="pills-report-tab1"
        role="tablist"
        className="flex border-b border-gray-200 bg-white"
      >
        {["General", "Planetary", "MahaDashas", "Yoga"].map((tabName) => (
          <li
            key={tabName}
            role="presentation"
            className={`-mb-px mr-1 flex-auto ${
              activeTab === tabName ? "border-[#f5d713]" : ""
            }`}
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === tabName ? "true" : "false"}
              className={`inline-flex items-center justify-center w-full py-2 px-4 font-medium text-sm leading-5 text-gray-700 bg-white border border-transparent focus:outline-none transition duration-150 ease-in-out ${
                activeTab === tabName ? "text-[#f5d713] border-[#f5d713]" : ""
              }`}
              style={{
                borderBottomWidth: activeTab === tabName ? "2px" : "0px",
                borderBottomColor: activeTab === tabName ? "#f5d713" : "",
                backgroundColor: activeTab === tabName ? "#f5d713" : "",
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
        <div className={`py-4 px-4 ${activeTab === "MahaDashas" ? "block" : "hidden"}`}>
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
