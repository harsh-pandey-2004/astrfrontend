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

  const [errors,setErrors]=useState({});
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const fetchSuggestions = async (input) => {
    if (!input) {
      setSuggestions([]);
      return;
    }

    const endpoint = `https://astrobackend.onrender.com/places`;

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

  



  const ValidateForm=()=>{
    const newErrors={};

    if(!formData.name) newErrors.name="Name is required";
    if(!formData.day) newErrors.day="Day is required";
    if(!formData.month) newErrors.month="Month is required";
    if(!formData.year) newErrors.year="Year is required";
    if(!formData.hour) newErrors.hour="Hour is required";
    if(!formData.minute) newErrors.minute="Minute is required";
    if(!formData.second) newErrors.second="Second is required";
    if(!formData.birthPlace) newErrors.birthPlace="BirthPlace is required";

     return newErrors;

  }





  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors=ValidateForm();
    if(Object.keys(validationErrors).length>0){
      setErrors(validationErrors);
      return;
    }
 
    setErrors({});


    console.log(formData)
    navigate("/freekundali/basic-details", { state: {formData} });
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return months[monthIndex];
  };

  return (
    <div className="w-full flex flex-col gap-3 ">
      <p className="text-xl text-gray-700 font-bold">New Kundli</p>
      <form className="md:p-6 sm:p-4 p-2 flex flex-col gap-4" onSubmit={handleSubmit}>
  {/* Name and Gender Section */}
  <div className="flex flex-col md:flex-row gap-4">
    <div className="w-full">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          id="name"
          name="name"
          className="border border-black rounded-md p-2 focus:outline-none"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
      </div>
    </div>

    <div className="w-full">
      <div className="flex flex-col gap-1 w-full mt-2 md:mt-0">
        <label htmlFor="gender">Gender</label>
        <select
  id="gender"
  name="gender"
  className="border border-black rounded-md p-2 text-slate-600 focus:outline-none w-full sm:w-auto"
  value={formData.gender}
  onChange={handleInputChange}
>
  <option>Male</option>
  <option>Female</option>
</select>

      </div>
    </div>
  </div>

  {/* Birth Details Section */}
  <div className="flex flex-col gap-3 mt-1">
    <p>Birth Details</p>
    <div className="flex flex-col sm:flex-row w-full gap-2">
      <div className="flex flex-col w-full">
        <label>Day</label>
        <select
          name="day"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.day && <p className="text-red-600">{errors.day}</p>}
      </div>

      <div className="flex flex-col w-full">
        <label>Month</label>
        <select
          name="month"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.month && <p className="text-red-600">{errors.month}</p>}
      </div>

      <div className="flex flex-col w-full">
        <label>Year</label>
        <select
          name="year"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.year && <p className="text-red-600">{errors.year}</p>}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row w-full gap-2">
      <div className="flex flex-col w-full">
        <label>Hour</label>
        <select
          name="hour"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.hour && <p className="text-red-600">{errors.hour}</p>}
      </div>

      <div className="flex flex-col w-full">
        <label>Minute</label>
        <select
          name="minute"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.minute && <p className="text-red-600">{errors.minute}</p>}
      </div>

      <div className="flex flex-col w-full">
        <label>Second</label>
        <select
          name="second"
          className="border border-black rounded-md p-2 focus:outline-none"
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
        {errors.second && <p className="text-red-600">{errors.second}</p>}
      </div>
    </div>
  </div>

  {/* Birth Place Section */}
  <div className="flex flex-col gap-1">
    <label>Birth Place</label>
    <input
      type="text"
      name="birthPlace"
      placeholder="Enter your birth place"
      className="border border-black rounded-md p-2 focus:outline-none"
      value={formData.birthPlace}
      onChange={handleInputChange}
    />
    {errors.birthPlace && <p className="text-red-600">{errors.birthPlace}</p>}
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

  {/* Submit Button */}
  <button
    type="submit"
    className="border mt-4 rounded-full py-2 text-white bg-black hover:bg-yellow-400 hover:text-black transition duration-400 hover:border shadow-xl"
  >
    Generate Horoscope
  </button>
</form>

    </div>
  );
};

export default NewKundli;
