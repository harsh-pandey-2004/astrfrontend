import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewKundli = () => {
  const navigate = useNavigate();

  const[boyerrors,setBoyerrors]=useState({});
  const [boyDetails, setBoyDetails] = useState({
    name: "",
    day: 1,
    month: 1,
    year: 1990,
    hour: 0,
    minute: 0,
    second: 0,
    birthPlace: ""
  });


  const [girlerrors,setGirlerrors]=useState({});
  const [girlDetails, setGirlDetails] = useState({
    name: "",
    day: 1,
    month: 1,
    year: 1990,
    hour: 0,
    minute: 0,
    second: 0,
    birthPlace: ""
  });

  const handleInputChange = (e, setDetails) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months[monthIndex];
  };



  const ValidateForm = () => {
    const newBoyerrors = {};
    const newGirlerrors = {};
  
    // Validating boy's details
    if (!boyDetails.name) newBoyerrors.name = "Name is required";
    if (!boyDetails.day) newBoyerrors.day = "Day is required";
    if (!boyDetails.month) newBoyerrors.month = "Month is required";
    if (!boyDetails.year) newBoyerrors.year = "Year is required";
    if (!boyDetails.hour) newBoyerrors.hour = "Hour is required";
    if (!boyDetails.minute) newBoyerrors.minute = "Minute is required";
    if (!boyDetails.second) newBoyerrors.second = "Second is required";
    if (!boyDetails.birthPlace) newBoyerrors.birthPlace = "BirthPlace is required";
  
    // Validating girl's details
    if (!girlDetails.name) newGirlerrors.name = "Name is required";
    if (!girlDetails.day) newGirlerrors.day = "Day is required";
    if (!girlDetails.month) newGirlerrors.month = "Month is required";
    if (!girlDetails.year) newGirlerrors.year = "Year is required";
    if (!girlDetails.hour) newGirlerrors.hour = "Hour is required";
    if (!girlDetails.minute) newGirlerrors.minute = "Minute is required";
    if (!girlDetails.second) newGirlerrors.second = "Second is required";
    if (!girlDetails.birthPlace) newGirlerrors.birthPlace = "BirthPlace is required";
  
    return { newBoyerrors, newGirlerrors };
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const { newBoyerrors, newGirlerrors } = ValidateForm();
  
    if (Object.keys(newBoyerrors).length > 0) {
      setBoyerrors(newBoyerrors);
    } else {
      setBoyerrors({});
    }
  
    if (Object.keys(newGirlerrors).length > 0) {
      setGirlerrors(newGirlerrors);
    } else {
      setGirlerrors({});
    }
  
    // If there are no errors, proceed with navigation
    if (Object.keys(newBoyerrors).length === 0 && Object.keys(newGirlerrors).length === 0) {
      console.log("Boy's Details:", boyDetails);
      console.log("Girl's Details:", girlDetails);
      const details = { boy: boyDetails, girl: girlDetails };
      navigate("/match-report", { state: { details } });
    }
  };
  

  return (
    <div className="w-full flex flex-col gap-1 px-4 md:px-12">
      <p className="text-2xl text-gray-700 font-semibold text-center">
        Fill in Partner's Information
      </p>

      <form  className="flex gap-4 justify-between w-full flex-col lg:flex-row mt-6">
        {/* Boy's Details */}
        <div className="py-4 md:p-4 w-full">
          <div>
            <p className="text-center bg-black text-white py-2 px-0 mb-6 rounded-lg">
              Boy's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="boyName">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                id="boyName"
                value={boyDetails.name}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                className="border border-black rounded-md p-1 focus:outline-none"
              />
              {boyerrors.name && <p className="text-red-600">{boyerrors.name}</p>}
            </div>

            {/* Birth Details */}
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boyDay">Day</label>
                  <select
                    name="day"
                    id="boyDay"
                    value={boyDetails.day}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                  {boyerrors.day && <p className="text-red-600">{boyerrors.day}</p>}
                </div>
              </div>

              {/* Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boyMonth">Month</label>
                  <select
                    name="month"
                    id="boyMonth"
                    value={boyDetails.month}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                  {boyerrors.month && <p className="text-red-600">{boyerrors.month}</p>}
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boyYear">Year</label>
                  <select
                    name="year"
                    id="boyYear"
                    value={boyDetails.year}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {Array.from({ length: 2025 - 1928 }, (_, index) => (
                      <option key={1928 + index} value={1928 + index}>
                        {1928 + index}
                      </option>
                    ))}
                  </select>
                  {boyerrors.year && <p className="text-red-600">{boyerrors.year}</p>}
                </div>
              </div>

              {/* Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boyHour">Hour</label>
                  <select
                    name="hour"
                    id="boyHour"
                    value={boyDetails.hour}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  {boyerrors.hour && <p className="text-red-600">{boyerrors.hour}</p>}
                </div>
              </div>

              {/* Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boyMinute">Minute</label>
                  <select
                    name="minute"
                    id="boyMinute"
                    value={boyDetails.minute}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                  {boyerrors.minute && <p className="text-red-600">{boyerrors.minute}</p>}
                </div>
              </div>

              {/* Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="boySecond">Second</label>
                  <select
                    name="second"
                    id="boySecond"
                    value={boyDetails.second}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(60).keys()].map((sec) => (
                      <option key={sec} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                  {boyerrors.second && <p className="text-red-600">{boyerrors.second}</p>}
                </div>
              </div>
            </div>

            {/* Birth place */}
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="boyBirthPlace">Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                name="birthPlace"
                id="boyBirthPlace"
                value={boyDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                className="border border-black rounded-md p-1 focus:outline-none"
              />
              {boyerrors.birthPlace && <p className="text-red-600">{boyerrors.birthPlace}</p>}
            </div>
          </div>
        </div>

        {/* Girl's Details */}
        <div className="py-4 md:p-4 w-full">
          <div>
            <p className="text-center bg-black text-white py-2 px-0 mb-6 rounded-lg">
              Girl's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="girlName">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                id="girlName"
                value={girlDetails.name}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                className="border border-black rounded-md p-1 focus:outline-none"
              />
              {girlerrors.name && <p className="text-red-600">{girlerrors.name}</p>}
            </div>

            {/* Birth Details */}
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlDay">Day</label>
                  <select
                    name="day"
                    id="girlDay"
                    value={girlDetails.day}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                  {girlerrors.day && <p className="text-red-600"> {girlerrors.day}</p>}
                </div>
              </div>

              {/* Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlMonth">Month</label>
                  <select
                    name="month"
                    id="girlMonth"
                    value={girlDetails.month}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                  {girlerrors.month && <p className="text-red-600">{girlerrors.month}</p>}
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlYear">Year</label>
                  <select
                    name="year"
                    id="girlYear"
                    value={girlDetails.year}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {Array.from({ length: 2025 - 1928 }, (_, index) => (
                      <option key={1928 + index} value={1928 + index}>
                        {1928 + index}
                      </option>
                    ))}
                  </select>
                  {girlerrors.year && <p className="text-red-600">{girlerrors.year}</p>}
                </div>
              </div>

              {/* Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlHour">Hour</label>
                  <select
                    name="hour"
                    id="girlHour"
                    value={girlDetails.hour}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                  {girlerrors.hour && <p className="text-red-600">{girlerrors.hour}</p>}
                </div>
              </div>

              {/* Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlMinute">Minute</label>
                  <select
                    name="minute"
                    id="girlMinute"
                    value={girlDetails.minute}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                  {girlerrors.minute && <p className="text-red-600">{girlerrors.minute}</p>}
                </div>
              </div>

              {/* Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="girlSecond">Second</label>
                  <select
                    name="second"
                    id="girlSecond"
                    value={girlDetails.second}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none"
                  >
                    {[...Array(60).keys()].map((sec) => (
                      <option key={sec} value={sec}>
                        {sec}
                      </option>
                    ))}
                  </select>
                  {girlerrors.second && <p className="text-red-600">{girlerrors.second}</p>}
                </div>
              </div>
            </div>

            {/* Birth place */}
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="girlBirthPlace">Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                name="birthPlace"
                id="girlBirthPlace"
                value={girlDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                className="border border-black rounded-md p-1 focus:outline-none"
              />
              {girlerrors.birthPlace && <p className="text-red-600">{girlerrors.birthPlace}</p>}
            </div>
          </div>
        </div>
      </form>
      
      <button
        onClick={handleSubmit}
        className="w-full border mt-2 rounded-full py-2 text-white bg-black hover:bg-yellow-400 hover:text-black transition duration-400 hover:border shadow-xl"
      >
        Match Horoscope
      </button> 

    </div>
  );
};

export default NewKundli;
