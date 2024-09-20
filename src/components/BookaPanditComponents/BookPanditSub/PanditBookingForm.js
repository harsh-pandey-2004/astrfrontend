import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PanditBookingForm = () => {
  const Poojadate = localStorage.getItem("Poojadate");
  const location = useLocation();
  const Panditdata = location.state;
  const Pooja=localStorage.getItem('selectedPooja');
  const PinCode=localStorage.getItem('Pincode');
  const UserId=localStorage.getItem('userId');
  console.log(UserId);
  const panditId=localStorage.getItem('PanditId');
  
  const [formData, setFormData] = useState({
    userName: "",
    poojaName: Pooja ,
    panditName: Panditdata ? Panditdata[0].name : "", // Assuming Panditdata contains the pandit's name
    Day: Poojadate || "", // Assuming Poojadate is the selected day
    Gotra:"",
    Nakshatra:"",
    Rashi:"",
    pinCode:PinCode,
    address:"",
    userId:UserId,
    PanditId:panditId,
    Package:"Premium",
    Price:"10000",

    
   
    
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // To send this data to the backend via API
    // Implement API request here using axios

    try{
      const res=await axios.post("http://localhost:3000/api/bookpandit",formData);
      console.log(res);
      toast.success('Pandit booked successfully!');

    }catch(err){
      console.log(err);
      toast.error('Failed to book Pandit. Please try again.');
    }
  };

  return (
    <div
      className="w-full h-fit bg-contain relative top-20 bg-center pb-20"
      style={{
        backgroundImage:
          "url(https://backgroundimages.withfloats.com/actual/5f1d8896cc10b700014e236b.jpg)",
      }}
    >
      <div className="text-center pt-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#dde549] stroke-black">Book Your Pandit</span>
        </h1>
        <p className="text-lg text-[#ed6c22]">
          Invite Divine Blessings into Your Home!
        </p>
      </div>
      <div className="mt-2  animate-bounce mx-auto w-full justify-between flex">
        {/* Bouncing icons for visual appeal */}
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
        className="form w-full lg:w-[60%] mx-auto p-4 rounded-lg form-box shadow-bg1"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="p-2 border-2 outline-none rounded-lg w-full text-gray-500"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pooja">Your Selected Pooja</label>
          <input
          id="pooja"
            type="text"
            name="poojaName"
            value={formData.poojaName}
            readOnly
            className="mt-2 p-2 border-2 outline-none rounded-lg w-full text-gray-500"
            placeholder="Pooja Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pandit">Your Selected Pandit</label>
          <input
          id="pandit"
            type="text"
            name="panditName"
            value={formData.panditName}
            readOnly
            className="mt-2 p-2 border-2 outline-none rounded-lg w-full text-gray-500 bg-gray-200"
            placeholder="Pandit Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="day">Your Selected Date of Pooja</label>
          <input
            id="day"
            type="text"
            name="Day"
            value={formData.Day}
            readOnly
            className=" mt-2 p-2 border-2 outline-none rounded-lg w-full text-gray-500 bg-gray-200"
            placeholder="Pooja Date"
          />
        </div>
        <div className="flex items-center justify-between">

        
              <input
              type="text"
              name="Gotra"
              value={formData.Gotra}
              onChange={(e) => handleChange(e)}
              className=" mb-4 p-2 border-2 outline-none rounded-lg text-gray-500"
              placeholder="Gotra"
            />

          <input
              type="text"
              name="Nakshatra"
              value={formData.Nakshatra}
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
        </div>



        <div className="mb-4">
          <label htmlFor="pin">Your Selected PinCode</label>
          <input
            id="pin"
            type="text"
            name="Day"
            value={formData.pinCode}
            readOnly
            className=" mt-2 p-2 border-2 outline-none rounded-lg w-full text-gray-500 bg-gray-200"
            placeholder="PinCode"
          />
        </div>

        <input
            type="text"
            className="p-2 border-2 outline-none rounded-lg w-full text-gray-500"
            placeholder="Your Address within slected Pincode"
            name="address"
            value={formData.address}
            onChange={(e)=>{handleChange(e)}}
          />
       
 

        <button
          type="submit"
          className=" mt-2 w-full bg-[#f6c000] p-3 rounded-md hover:bg-yellow-400 text-white font-semibold"
        >
          Submit This
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PanditBookingForm;
