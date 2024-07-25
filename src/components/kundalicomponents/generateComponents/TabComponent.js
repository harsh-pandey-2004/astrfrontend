import React, { useState } from "react";
import Breadcrumbs from "./BreadCrimps";
import Basic from "./Basic";
import Kundli from "./Kundali";
import KP from "./Kp";
import Ashtakvarga from "./Asthavarga";
import Charts from "./Charts";
import Dasha from "./Dasha";
import FreeReport from "./FreeModel";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("pills-basic");

  const renderTabContent = () => {
    switch (activeTab) {
      case "pills-basic":
        return <Basic />;
      case "pills-kundli":
        return <Kundli />;
      case "pills-KP":
        return <KP />;
      case "pills-ashtakvarga":
        return <Ashtakvarga />;
      case "pills-divisional":
        return <Charts />;
      case "pills-dasha":
        return <Dasha />;
      case "pills-report":
        return <FreeReport />;
      default:
        return <Basic />;
    }
  };

  const tabs = [
    { id: "pills-basic", label: "Basic" },
    { id: "pills-kundli", label: "Kundli" },
    { id: "pills-KP", label: "KP" },
    { id: "pills-ashtakvarga", label: "Ashtakvarga" },
    { id: "pills-divisional", label: "Charts" },
    { id: "pills-dasha", label: "Dasha" },
    { id: "pills-report", label: "Free Report" },
  ];

  return (
    <div className="w-full min-h-screen h-fit relative top-0 bg-gray-50 ">
      <Breadcrumbs />
      <div className="container mx-auto py-6 pb-20">
        <ul
          role="tablist"
          className="nav nav-pills flex flex-wrap justify-evenly space-x-6  border-[#fae13b] pb-3 border-b-[2px] outline"
        >
          {tabs.map((tab) => (
            <li key={tab.id} role="presentation" className="nav-item">
              <button
                onClick={() => setActiveTab(tab.id)}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                className={`nav-link px-4 py-2 rounded-t-lg focus:outline-none ${
                  activeTab === tab.id
                    ? "active bg-[#f5d713] text-white shadow-md"
                    : "text-gray-700 hover:bg-[#f5d713]"
                } transition duration-300`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content mt-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default TabComponent;
