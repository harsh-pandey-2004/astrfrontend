import React, { useState } from "react";
import axios from "axios";
const ProfileEditComponent = ({CloseModal}) => {
  const [formData, setFormData] = useState({
    profileImg: "",
    mobile: "9569676072",
    name: "Aishwary Pratap",
    lastName: "",
    gender: "Male",
    Dob: "2000-01-30",
    Tobirth: "23:59",
    Placeofbirth: "Azamgarh, Uttar Pradesh, India",
    address: "",
    city: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };




 async function PatchUserData(){

  const userId=localStorage.getItem('userId');
        
  try {
    const response = await axios.patch(
      `https://astrobackend.onrender.com/api/updateUserdata/${userId}`,
      formData
    );

    console.log(response);
    
  } catch (error) {
    console.error("Error:", error);
  }

  }

  const handleEdit = () => {
    // Handle form submission logic here
    console.log(formData);
    PatchUserData();




    CloseModal();
    alert("Profile updated!");
  };

  return (
    <div className="max-w-2xl mx-auto pb-6 bg-black   rounded-md shadow-lg ">
      <h1 className="text-xl  mb-6 text-center text-black bg-yellow-400 py-2 rounded-t-md ">Edit Your Profile</h1>

      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Profile Image</label>
        <input
          type="file"
          name="profileImg"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Phone Number</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-800 text-white"
        />
      </div>
     
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">First Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Date of Birth</label>
        <input
          type="date"
          name="Dob"
          value={formData.Dob}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Time of Birth</label>
        <input
          type="time"
          name="Tobirth"
          value={formData.Tobirth}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Place of Birth</label>
        <input
          type="text"
          name="Placeofbirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Current Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Flat, House no, Building, Apartment"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">City, State, Country</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your birth place"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <div className="mb-4 px-6">
        <label className="block text-white font-bold mb-2">Pincode</label>
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Enter Pincode"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>
      <button
        onClick={handleEdit}
        className="w-[93%] ml-6 py-2  mt-4 text-lg  text-black bg-yellow-400 rounded-md hover:box-shadow1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        Update
      </button>
    </div>
  );
};

export default ProfileEditComponent;
