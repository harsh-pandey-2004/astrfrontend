import React, { useState } from "react";

const Doshas = () => {
  const [activeTab, setActiveTab] = useState("Manglik");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <ul id="pills-report-tab-third" role="tablist" className="flex border-b border-gray-200 bg-white">
      <li role="presentation" className="flex-auto">
        <button
          onClick={() => handleTabClick("Manglik")}
          type="button"
          role="tab"
          aria-selected={activeTab === "Manglik" ? "true" : "false"}
          className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${activeTab === "Manglik" ? "border-b-2 border-blue-500" : ""}`}
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
          className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${activeTab === "Kalsarpa" ? "border-b-2 border-blue-500" : ""}`}
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
          className={`text-gray-700 px-4 py-2 w-full focus:outline-none ${activeTab === "Sadesati" ? "border-b-2 border-blue-500" : ""}`}
        >
          Sadesati
        </button>
      </li>
    </ul>
  );
};

export default Doshas;
