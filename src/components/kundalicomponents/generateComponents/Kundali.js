import React, { useState } from "react";

const Kundali = () => {
  const [selectedType, setSelectedType] = useState("north");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <div className="change-graph-type flex justify-between border-b border-gray-200">
      <button
        className={`selector-item px-4 py-2 rounded-md ${
          selectedType === "north"
            ? "active bg-blue-500 text-white hover:bg-blue-600"
            : "bg-white text-gray-500 hover:bg-gray-100"
        }`}
        onClick={() => handleTypeChange("north")}
      >
        North Indian
      </button>
      <button
        className={`selector-item px-4 py-2 rounded-md ${
          selectedType === "south"
            ? "active bg-blue-500 text-white hover:bg-blue-600"
            : "bg-white text-gray-500 hover:bg-gray-100"
        }`}
        onClick={() => handleTypeChange("south")}
      >
        South Indian
      </button>
    </div>
  );
};

export default Kundali;
