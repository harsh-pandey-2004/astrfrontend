import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ message, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-lg font-bold mb-4">{message}</h2>
      <button onClick={onClose} className="bg-[#f6c000] text-white px-4 py-2 rounded">
        Close
      </button>
    </div>
  </div>
);

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
  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.userName) newErrors.userName = "Name is required.";
    if (!formData.Gotra) newErrors.Gotra = "Gotra is required.";
    if (!formData.Nakshatra) newErrors.Nakshatra = "Nakshatra is required.";
    if (!formData.Rashi) newErrors.Rashi = "Rashi is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // To send this data to the backend via API
    // Implement API request here using axios
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try{
      const res=await axios.post("https://astrobackend.onrender.com/api/bookpandit",formData);
      // console.log(res);
      // toast.success('Pandit booked successfully!');
      setModalMessage('Pandit booked successfully!');
      setIsModalOpen(true);

    }catch(err){
      // console.log(err);
      // toast.error('Failed to book Pandit. Please try again.');
      setModalMessage('Failed to book Pandit. Please try again.');
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
  };

  return (
    <div
      className="w-full h-fit bg-contain relative top-20 bg-center pb-20 "
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/48/4a/97/484a9743a27dc0745da35b65f7b0fc9f.jpg)",
      }}
    >
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
      <div className="text-center pt-12">
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          <span className="text-[#dde549] stroke-black">Book Your Pandit</span>
        </h1>
        <p className="text-lg text-[#dde549]">
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
        className="form w-full lg:w-[60%] mx-auto  p-4 rounded-lg form-box shadow-bg1 outline outline-"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className={`p-2 border-2 outline-none rounded-lg w-full text-gray-500 ${errors.userName ? 'border-red-500' : ''}`}
            placeholder="Your Name"
          />
          {errors.userName && <p className="text-red-500">{errors.userName}</p>}
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
        <div className="flex flex-col md:flex-row  md:items-center justify-between">

        
              <input
              type="text"
              name="Gotra"
              value={formData.Gotra}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.userName ? 'border-red-500' : ''}`}
              placeholder="Gotra"
            />
            {errors.Gotra && <p className="text-red-500">{errors.Gotra}</p>}
          <input
              type="text"
              name="Nakshatra"
              value={formData.Nakshatra}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.userName ? 'border-red-500' : ''}`}
              placeholder="Birth Star / Janma Nakshatram"
            />
            {errors.Nakshatra && <p className="text-red-500">{errors.Nakshatra}</p>}
            <input
              type="text"
              name="Rashi"
              value={formData.Rashi}
              onChange={(e) => handleChange(e)}
              className={`mb-4 p-2 border-2 outline-none rounded-lg text-gray-500 ${errors.userName ? 'border-red-500' : ''}`}
              placeholder="Rashi / Zodiac Sign"
            />
            {errors.Rashi && <p className="text-red-500">{errors.Rashi}</p>}
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
            className={`p-2 border-2 outline-none rounded-lg w-full text-gray-500 ${errors.userName ? 'border-red-500' : ''}`}
            placeholder="Your Address within slected Pincode"
            name="address"
            value={formData.address}
            onChange={(e)=>{handleChange(e)}}
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}
 

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
