import React, { useState } from "react";
import { useNavigate} from "react-router-dom";

const NewKundli = () => {

 const navigate=useNavigate();
 
 

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
    const { id, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Boy's Details:", boyDetails);
    console.log("Girl's Details:", girlDetails);
    const details={boy:boyDetails,girl:girlDetails};
    navigate("/match-report", { state: { details } });
  };

  return (
    <div className="w-full flex flex-col gap-1 px-12">
      <p className="text-2xl text-gray-700 font-semibold text-center ">
      Fill in Partner's Information
      </p>

      <form onSubmit={handleSubmit} className="flex gap-4 justify-between w-full flex-col lg:flex-row mt-6">
        {/* Boy's Details */}
        <div className=" p-4 w-full">
          <div>
            <p className="text-center bg-black text-white py-2 px-0 mb-6 rounded-lg">
              Boy's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                value={boyDetails.name}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                className="border border-black rounded-md p-1 focus:outline-none "
              />
            </div>

            {/* Birth Details */}
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="day">Day</label>
                  <select
                    id="day"
                    value={boyDetails.day}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="month">Month</label>
                  <select
                    id="month"
                    value={boyDetails.month}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                     className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="year">Year</label>
                  <select
                    id="year"
                    value={boyDetails.year}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {Array.from({ length: 2025 - 1928 }, (_, index) => (
                      <option key={1928 + index} value={1928 + index}>
                        {1928 + index}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="hour">Hour</label>
                  <select
                    id="hour"
                    value={boyDetails.hour}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                     className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="minute">Minute</label>
                  <select
                    id="minute"
                    value={boyDetails.minute}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="second">Second</label>
                  <select
                    id="second"
                    value={boyDetails.second}
                    onChange={(e) => handleInputChange(e, setBoyDetails)}
                     className="border border-black rounded-md p-1 focus:outline-none "
                  >
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
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="birthPlace">Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                id="birthPlace"
                value={boyDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setBoyDetails)}
                 className="border border-black rounded-md p-1 focus:outline-none "
              />
            </div>
          </div>
        </div>

        {/* Girl's Details */}
        <div className=" p-4 w-full">
          <div>
            <p className="text-center bg-black text-white py-2 px-0 mb-6 rounded-lg">
              Girl's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                value={girlDetails.name}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                 className="border border-black rounded-md p-1 focus:outline-none "
              />
            </div>

            {/* Birth Details */}
            <div className="grid grid-cols-3 gap-4">
              {/* Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="day">Day</label>
                  <select
                    id="day"
                    value={girlDetails.day}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(31).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="month">Month</label>
                  <select
                    id="month"
                    value={girlDetails.month}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                   className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="year">Year</label>
                  <select
                    id="year"
                    value={girlDetails.year}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {Array.from({ length: 2025 - 1928 }, (_, index) => (
                      <option key={1928 + index} value={1928 + index}>
                        {1928 + index}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="hour">Hour</label>
                  <select
                    id="hour"
                    value={girlDetails.hour}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="minute">Minute</label>
                  <select
                    id="minute"
                    value={girlDetails.minute}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                     className="border border-black rounded-md p-1 focus:outline-none "
                  >
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="second">Second</label>
                  <select
                    id="second"
                    value={girlDetails.second}
                    onChange={(e) => handleInputChange(e, setGirlDetails)}
                    className="border border-black rounded-md p-1 focus:outline-none "
                  >
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
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="birthPlace">Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                id="birthPlace"
                value={girlDetails.birthPlace}
                onChange={(e) => handleInputChange(e, setGirlDetails)}
                className="border border-black rounded-md p-1 focus:outline-none "
              />
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
