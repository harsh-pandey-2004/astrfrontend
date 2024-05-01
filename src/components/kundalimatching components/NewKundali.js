import React from "react";

const NewKundli = () => {
  function getMonthName(monthIndex) {
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
      "Dec",
    ];
    return months[monthIndex];
  }

  return (
    <div className=" w-full flex flex-col  gap-1">
      
        <p className="text-xl text-gray-700 font-semibold text-center">
          Fill Up Partner's Detail
        </p>
      
      <form className=" flex gap-4 justify-between w-full flex-col lg:flex-row">
        {/* Boy's Details */}
        <div className="border-[1px] rounded-lg shadow-md p-4 w-full">
          <div className=''>
            <p className="text-center bg-yellow-300 py-2 px-0 mb-6 rounded-lg">
              Boy's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                className="border  rounded-md p-1 focus:outline-none"
              />
            </div>
            {/* Birth Details */}

            
            <div className="grid grid-cols-3 gap-4">
              {/* Row 1, Column 1: Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="day">Day</label>
                  <select
                    id="day"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1}
                  >
                    <option disabled>Day</option>
                    {[...Array(30).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 1, Column 2: Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="month">Month</label>
                  <select
                    id="month"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1}
                  >
                    <option disabled>Month</option>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 1, Column 3: Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="year">Year</label>
                  <select
                    id="year"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1990}
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

              {/* Row 2, Column 1: Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="hour">Hour</label>
                  <select
                    id="hour"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
                  >
                    <option disabled>Hour</option>
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2, Column 2: Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="minute">Minute</label>
                  <select
                    id="minute"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
                  >
                    <option disabled>Minute</option>
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2, Column 3: Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="second">Second</label>
                  <select
                    id="second"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
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

            <div className="flex flex-col gap-1 pt-4">
              <label>Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                className="border  rounded-md p-1 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Girl Details */}
        <div className="border-[1px] rounded-lg shadow-md p-4 w-full">
          <div className=''>
            <p className="text-center bg-yellow-300 py-2 px-0 mb-6 rounded-lg">
              Girl's Details
            </p>
            <div className="flex flex-col gap-1 pb-4">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                placeholder="Enter Name"
                id="name"
                className="border  rounded-md p-1 focus:outline-none"
              />
            </div>
            {/* Birth Details */}

            
            <div className="grid grid-cols-3 gap-4">
              {/* Row 1, Column 1: Day */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="day">Day</label>
                  <select
                    id="day"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1}
                  >
                    <option disabled>Day</option>
                    {[...Array(30).keys()].map((day) => (
                      <option key={day + 1} value={day + 1}>
                        {day + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 1, Column 2: Month */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="month">Month</label>
                  <select
                    id="month"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1}
                  >
                    <option disabled>Month</option>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 1, Column 3: Year */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="year">Year</label>
                  <select
                    id="year"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={1990}
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

              {/* Row 2, Column 1: Hour */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="hour">Hour</label>
                  <select
                    id="hour"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
                  >
                    <option disabled>Hour</option>
                    {[...Array(24).keys()].map((hour) => (
                      <option key={hour} value={hour}>
                        {hour}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2, Column 2: Minute */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="minute">Minute</label>
                  <select
                    id="minute"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
                  >
                    <option disabled>Minute</option>
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2, Column 3: Second */}
              <div className="col-span-1">
                <div className="flex flex-col">
                  <label htmlFor="second">Second</label>
                  <select
                    id="second"
                    className="border rounded-md p-1 focus:outline-none pr-8"
                    defaultValue={0}
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

            <div className="flex flex-col gap-1 pt-4">
              <label>Birth Place</label>
              <input
                type="text"
                placeholder="Enter your birth place"
                className="border  rounded-md p-1 focus:outline-none"
              />
            </div>
          </div>
        </div>
        
      </form>
      <button className="w-full border mt-2 rounded-full py-2 text-yellow-400 bg-gray-800 hover:bg-yellow-400 hover:text-black transition duration-400 hover:border shadow-xl">
          Match Horoscope
        </button>
      
      
        
      
    </div>
  );
};

export default NewKundli;