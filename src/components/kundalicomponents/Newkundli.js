import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewKundli = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "Male",
    day: "",
    month: "",
    year: 1990,
    hour: 15,
    minute: 22,
    second: 10,
    birthPlace: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const endpoint = `http://localhost:3000/places`;

    try {
      const response = await axios.get(endpoint, {
        params: { input },
      });
      setSuggestions(response.data.predictions);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "birthPlace") {
      fetchSuggestions(value);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setFormData((prevData) => ({
      ...prevData,
      birthPlace: suggestion.description,
    }));
    setSuggestions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    navigate("/freekundali/basic-details", { state: formData });
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return months[monthIndex];
  };

  return (
    <div className="md:w-3/5 xs:w-full flex flex-col gap-3">
      <p className="text-xl text-gray-700 font-semibold">New Kundli</p>
      <form className="p-3 border-[1px] rounded-lg flex flex-col gap-4 shadow-md" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            className="border rounded-md p-1 focus:outline-none"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            className="border rounded-md p-1 text-slate-600 focus:outline-none"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* Birth Details */}
        <div className="flex flex-col gap-3">
          <p>Birth Details</p>
          <div className="md:flex xs:flex-col flex-wrap w-full justify-between">
            <div className="flex flex-col">
              <label>Day</label>
              <select
                name="day"
                className="border rounded-md p-1 focus:outline-none pr-32"
                value={formData.day}
                onChange={handleInputChange}
              >
                <option disabled>Day</option>
                {[...Array(31).keys()].map((date) => (
                  <option key={date + 1} value={date + 1}>
                    {date + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label>Month</label>
              <select
                name="month"
                className="border rounded-md p-1 focus:outline-none pr-32"
                value={formData.month}
                onChange={handleInputChange}
              >
                <option disabled>Month</option>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {getMonthName(index)}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label>Year</label>
              <select
                name="year"
                className="border rounded-md p-1 focus:outline-none pr-32"
                value={formData.year}
                onChange={handleInputChange}
              >
                <option disabled>Year</option>
                {Array.from({ length: 2025 - 1928 }, (_, index) => (
                  <option key={1928 + index} value={1928 + index}>
                    {1928 + index}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="md:flex xs:flex-col flex-wrap w-full justify-between">
            <div className="flex flex-col">
              <label>Hour</label>
              <select
                name="hour"
                className="border rounded-md p-1 focus:outline-none pr-32"
                value={formData.hour}
                onChange={handleInputChange}
              >
                <option disabled>Hour</option>
                {[...Array(24).keys()].map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label>Minute</label>
              <select
                name="minute"
                className="border rounded-md p-1 focus:outline-none pr-28"
                value={formData.minute}
                onChange={handleInputChange}
              >
                <option disabled>Minute</option>
                {[...Array(60).keys()].map((min) => (
                  <option key={min} value={min}>
                    {min}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label>Second</label>
              <select
                name="second"
                className="border rounded-md p-1 focus:outline-none pr-24"
                value={formData.second}
                onChange={handleInputChange}
              >
                <option disabled>Second</option>
                {[...Array(60).keys()].map((sec) => (
                  <option key={sec} value={sec}>
                    {sec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Birth place */}
        <div className="flex flex-col gap-1">
          <label>Birth Place</label>
          <input
            type="text"
            name="birthPlace"
            placeholder="Enter your birth place"
            className="border rounded-md p-1 focus:outline-none"
            value={formData.birthPlace}
            onChange={handleInputChange}
          />
          {suggestions && suggestions.length > 0 && (
            <ul className="border rounded-md bg-white mt-2 max-h-40 overflow-y-auto">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="submit"
          className="border mt-2 rounded-full py-2 text-yellow-400 bg-gray-800 hover:bg-yellow-400 hover:text-black transition duration-400 hover:border shadow-xl"
        >
          Generate Horoscope
        </button>
      </form>
    </div>
  );
};

export default NewKundli;
