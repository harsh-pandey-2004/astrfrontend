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
  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const handleChange = (e) => {
   
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.First_name) newErrors.First_name = "First name is required.";
    if (!formData.Last_name) newErrors.Last_name = "Last name is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.Nakshtra) newErrors.Nakshtra = "Nakshatra is required.";
    if (!formData.Rashi) newErrors.Rashi = "Rashi is required.";
    if (!formData.Gotra) newErrors.Gotra = "Gotra is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      console.log(formData);
      let a = await axios.post(
        "http://localhost:3000/api/book-pooja/user-deatils/66b4a5ad3de3438014454957",
        formData
      );
      setPopupMessage("Form submitted successfully!");
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setPopupMessage("Failed to submit the form. Please try again.");
      setIsSuccess(false);
    }
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className=" w-full h-fit bg-contain relative bg-center   pb-20"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/48/4a/97/484a9743a27dc0745da35b65f7b0fc9f.jpg)"
      }}
    >
      <div className="text-center pt-5 ">
        <h1 className="text-5xl font-bold mb-4 mt-20">
          <span className="text-[#dde549] stroke-black">Book Pooja</span>
        </h1>
        <p className="text-lg text-[#ed6c22] ">
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
                className={` mb-4 p-2 border-2 outline-none rounded-lg w-1/2 text-gray-500 ${errors.First_name ? 'border-red-500' : ''}`}
                placeholder="First Name"
              />
               {errors.First_name && <p className="text-red-500">{errors.First_name}</p>}
              <input
                type="text"
                name="Last_name"
                value={formData.Last_name}
                onChange={(e) => handleChange(e)}
                className={` mb-4 p-2 border-2 outline-none rounded-lg w-1/2 text-gray-500 ${errors.First_name ? 'border-red-500' : ''}`}
                placeholder="Last Name"
              />
              {errors.Last_name && <p className="text-red-500">{errors.Last_name}</p>}
            </div>
            <input
              type="text"
              name="dob"
              value={formData.dob}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.First_name ? 'border-red-500' : ''}`}
              placeholder="Date of Birth"
              data-date-format="dd-mm-yyyy"
            />
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
            <input
              type="text"
              name="Nakshtra"
              value={formData.Nakshtra}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.First_name ? 'border-red-500' : ''}`}
              placeholder="Birth Star / Janma Nakshatram"
            />
            {errors.Nakshtra && <p className="text-red-500">{errors.Nakshtra}</p>}
            <input
              type="text"
              name="Rashi"
              value={formData.Rashi}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.Rashi ? 'border-red-500' : ''}`}
              placeholder="Rashi / Zodiac Sign"
            />
            {errors.Rashi && <p className="text-red-500">{errors.Rashi}</p>}
            <input
              type="text"
              name="Gotra"
              value={formData.Gotra}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500`}
              placeholder="Gotra"
            />
            {errors.Gotra && <p className="text-red-500">{errors.Gotra}</p>}
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

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className={`bg-white p-6 rounded-md shadow-md text-center ${isSuccess ? 'border-green-500' : 'border-red-500'}`}>
            <h2 className="text-xl font-bold">{isSuccess ? "Success!" : "Error!"}</h2>
            <p className="mt-2">{popupMessage}</p>
            <button className="mt-4 px-4 py-2 bg-[#f6c000] text-white rounded" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PujaCartForm;
