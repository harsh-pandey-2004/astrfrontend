import React, { useState } from "react";
import RudrakshaComponent from "../secondSection.js/RudrakshaComponent";
import GemstonesComponent from "../secondSection.js/GemstonesComponent";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("rudraksha");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" mx-auto mt-8">
      <ul id="pills-report-tab-second" role="tablist" className="flex">
        <li className="flex-1">
          <button
            onClick={() => handleTabClick("rudraksha")}
            className={`py-2 px-4 w-full block text-center border-b-4 border-transparent hover:border-blue-500 focus:outline-none ${
              activeTab === "rudraksha" ? "border-blue-500" : ""
            }`}
          >
            Rudraksha
          </button>
        </li>
        <li className="flex-1">
          <button
            onClick={() => handleTabClick("gemstones")}
            className={`py-2 px-4 w-full block text-center border-b-4 border-transparent hover:border-blue-500 focus:outline-none ${
              activeTab === "gemstones" ? "border-blue-500" : ""
            }`}
          >
            Gemstones
          </button>
        </li>
      </ul>
      <div className="bg-white shadow-md rounded-md mt-4">
        <div className="p-4">
          {activeTab === "rudraksha" && <RudrakshaComponent />}
          {activeTab === "gemstones" && <GemstonesComponent />}
        </div>
      </div>
    </div>
  );
};

export default TabNavigation;
