import React, { useState } from "react";
import GeneralComponent from "./freeModelcomponents/General";
import RemediesComponent from "./freeModelcomponents/Remedies";
import DoshaComponent from "./freeModelcomponents/Doshas";

const FreeModal = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "General":
        return <GeneralComponent />;
      case "Remedies":
        return <RemediesComponent />;
      case "Dosha":
        return <DoshaComponent />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      <ul
        id="pills-tab1"
        role="tablist"
        className="flex space-x-4"
      >
        <li role="presentation">
          <button
            id="pills-repo100-tab"
            type="button"
            className={`text-[#f5d713] px-4 py-2 rounded-md focus:outline-none focus:bg-yellow-100 ${
              activeTab === "General" ? "bg-yellow-100" : ""
            }`}
            onClick={() => handleTabClick("General")}
          >
            General
          </button>
        </li>
        <li role="presentation">
          <button
            id="pills-repo200-tab"
            type="button"
            className={`text-[#f5d713] px-4 py-2 rounded-md focus:outline-none focus:bg-yellow-100 ${
              activeTab === "Remedies" ? "bg-yellow-100" : ""
            }`}
            onClick={() => handleTabClick("Remedies")}
          >
            Remedies
          </button>
        </li>
        <li role="presentation">
          <button
            id="pills-repo300-tab"
            type="button"
            className={`text-[#f5d713] px-4 py-2 rounded-md focus:outline-none focus:bg-yellow-100 ${
              activeTab === "Dosha" ? "bg-yellow-100" : ""
            }`}
            onClick={() => handleTabClick("Dosha")}
          >
            Dosha
          </button>
        </li>
      </ul>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default FreeModal;
