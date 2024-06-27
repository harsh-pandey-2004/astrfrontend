import React, { useState, useEffect } from "react";
import axios from "axios";

const GemstoneCard = ({ title, subtitle, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h6 className="text-xl font-semibold text-gray-800 mb-2">{subtitle}</h6>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4 bg-gray-100 border-t border-gray-200">
        <table className="w-full">
          <tbody>
            {title && (
              <tr>
                <td className="text-gray-500">{title}</td>
                <td className="text-gray-700">{subtitle}</td>
              </tr>
            )}
            <tr>
              <td className="text-gray-500">How to wear</td>
              <td className="text-gray-700">{content}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const GemstoneDetails = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4 p-4">
      <h2 className="text-2xl font-semibold mb-4">{data.name}</h2>
      <p>{data.description}</p>
      <h3 className="text-xl font-semibold mt-4">Good Results</h3>
      <ul className="list-disc list-inside">
        {data.good_results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Diseases Cure</h3>
      <ul className="list-disc list-inside">
        {data.diseases_cure.map((disease, index) => (
          <li key={index}>{disease}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Not to Wear With</h3>
      <ul className="list-disc list-inside">
        {data.not_to_wear_with.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">Flaw Results</h3>
      <ul className="list-disc list-inside">
        {data.flaw_results.map((flaw, index) => (
          <li key={index}>
            <strong>{flaw.flaw_type}:</strong> {flaw.flaw_effects}
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-4">How to Wear</h3>
      <p>{data.time_to_wear}</p>
      <h3 className="text-xl font-semibold mt-4">Mantra</h3>
      <p>{data.mantra}</p>
    </div>
  );
};

const GemstoneSection = () => {
  const [selectedGem, setSelectedGem] = useState("coral");
  const [gemData, setGemData] = useState(null);

  const gemOptions = [
    "cat_eye",
    "diamond",
    "ruby",
    "pearl",
    "coral",
    "gomedhaka",
    "yellow_sapphire",
    "blue_sapphire",
    "emerald",
  ];

  useEffect(() => {
    const fetchGemData = async () => {
      try {
        const response = await axios.get(
          `https://api.vedicastroapi.com/v3-json/utilities/gem-details?gem=${selectedGem}&lang=en&api_key=339e6e74-a1ea-5093-8ef3-e31f5e45cc79`
        );
        setGemData(response.data.response.response);
      } catch (error) {
        console.error("Error fetching gemstone data:", error);
      }
    };

    fetchGemData();
  }, [selectedGem]);

  return (
    <div className="container mx-auto mt-8 p-4">
      <div className="mb-4">
        <label
          htmlFor="gem-select"
          className="block text-gray-700 font-semibold mb-2"
        >
          Select Gemstone:
        </label>
        <select
          id="gem-select"
          value={selectedGem}
          onChange={(e) => setSelectedGem(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md"
        >
          {gemOptions.map((gem) => (
            <option key={gem} value={gem}>
              {gem.replace("_", " ")}
            </option>
          ))}
        </select>
      </div>
      <GemstoneDetails data={gemData} />
    </div>
  );
};

export default GemstoneSection;
