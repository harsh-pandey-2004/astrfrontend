import React, { useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
const PujaCartForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    bookingDate: `${new Date().getDate()}-${
      new Date().getMonth() + 1
    }-${new Date().getFullYear()}`,
    First_name: "",
    Last_name: "",
    dob: "",
    Nakshtra: "",
    Rashi: "",
    Gotra: ""
  });

  const handleChange = (e) => {
   
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let a = await axios.post(
      "https://astrobackend.onrender.com/api/book-pooja/user-deatils/6641c9829e2a39f948f0a8ad",
      formData
    );
    
  };

  return (
    <div
      className=" w-full h-fit bg-contain relative bg-center   pb-20"
      style={{
        backgroundImage:
          "url(https://backgroundimages.withfloats.com/actual/5f1d8896cc10b700014e236b.jpg)"
      }}
    >
      <div className="text-center pt-5">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#dde549] stroke-black">Book Pooja</span>
        </h1>
        <p className="text-lg text-[#ed6c22]">
          Transform your space with positive energy!
        </p>
      </div>
      <div className="mt-8 animate-bounce mx-auto w-full justify-between flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fc6003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fc6003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#fc6003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <form
        className="form w-full lg:w-[60%] mx-auto  p-4 rounded-lg form-box shadow-bg1"
        onSubmit={handleSubmit}
      >
        <div className="input-append date controls date-picker-2 w-full">
          <span className=" mx-auto flex w-1/3 mb-3">
            <DatePicker
              selected={formData.date}
              onChange={(date) => setFormData({ ...formData, date })}
              className="date-picker border rounded w-full px-7 py-2 text-gray-500"
              placeholderText="Select your Prefered Date"
            />
            <img
              src="https://epuja.co.in/img/calendar-icon.png"
              alt="calendar"
              onClick={() => document.getElementById("quick_puja_date").click()}
            />
          </span>
        </div>
        <div className="clearfix flex flex-col">
          <div className="flex flex-col border-b-2 pt-3 border-b-gray-200 ">
            <div className="flex justify-between w-full gap-1">
              <input
                type="text"
                name="First_name"
                value={formData.First_name}
                onChange={(e) => handleChange(e)}
                className=" mb-4 p-2 border-2 outline-none rounded-lg w-1/2 text-gray-500"
                placeholder="First Name"
              />
              <input
                type="text"
                name="Last_name"
                value={formData.Last_name}
                onChange={(e) => handleChange(e)}
                className=" mb-4 p-2 border-2 outline-none rounded-lg w-1/2 text-gray-500"
                placeholder="Last Name"
              />
            </div>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={(e) => handleChange(e)}
              className=" mb-4 p-2 border-2 outline-none rounded-lg text-gray-500"
              placeholder="Date of Birth"
              data-date-format="dd-mm-yyyy"
            />
            <input
              type="text"
              name="Nakshtra"
              value={formData.Nakshtra}
              onChange={(e) => handleChange(e)}
              className=" mb-4 p-2 border-2 outline-none rounded-lg text-gray-500"
              placeholder="Birth Star / Janma Nakshatram"
            />
            <input
              type="text"
              name="Rashi"
              value={formData.Rashi}
              onChange={(e) => handleChange(e)}
              className=" mb-4 p-2 border-2 outline-none rounded-lg text-gray-500"
              placeholder="Rashi / Zodiac Sign"
            />
            <input
              type="text"
              name="Gotra"
              value={formData.Gotra}
              onChange={(e) => handleChange(e)}
              className=" mb-4 p-2 border-2 outline-none rounded-lg text-gray-500"
              placeholder="Gotra"
            />
          </div>
        </div>
        <button className="w-full bg-[#f6c000] p-3 rounded-md hover:bg-yellow-400 text-white font-semibold mb-3">
          Submit This
        </button>
      </form>
      <div className="mt-8 animate-bounce mx-auto w-full justify-between flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#f6c003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#f6c003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#f6c003] animate-ping"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 00-.894.553l-4 8a1 1 0 00.895 1.447h7.179a1 1 0 00.895-1.447l-4-8A1 1 0 0010 3zm-1.303 7H5.124L10 5.65 14.875 10H11.7l-.003.001a1 1 0 01-.878-1.777z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default PujaCartForm;
