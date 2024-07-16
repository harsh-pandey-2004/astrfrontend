import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
function ProfileForm() {
  const location = useLocation();
  const slug=location.pathname.split('/').pop();
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    Skills: [],
    ProfessionalQualifications: "",
    gender: "",
    languages: [],
    experience: "",
    city: "",
    dob: "",
    belongsTo: "",
    image: "",
  };
  const [response, setResponse] = useState(initialState);

  function handleChange(e) {
    setResponse({ ...response, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let a = await axios.patch(
        `https://astrobackend.onrender.com/api/update-pandit-profile/${slug}`,
        response
      );
      console.log(a.data);
      navigate(`/panditdashboard/${slug}`);
    } catch (error) {
      console.log("ERRR:", error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(e)}
              name="image"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
              name="firstName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Last Name"
              onChange={(e) => handleChange(e)}
              name="lastName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2"
                  onChange={(e) => handleChange(e)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2"
                  onChange={(e) => handleChange(e)}
                />
                Female
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gotra
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Gotra"
              onChange={(e) => handleChange(e)}
              name="gotra"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Belongs To
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Belongs To"
              onChange={(e) => handleChange(e)}
              name="belongsTo"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="city"
              onChange={(e) => handleChange(e)}
              name="city"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Date of Birth"
              onChange={(e) => handleChange(e)}
              name="dob"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Experience
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="experience"
              onChange={(e) => handleChange(e)}
              name="experience"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Skills
            </label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(e)}
              name="Skills"
            >
              <option>JavaScript</option>
              <option>React</option>
              <option>Node.js</option>
              <option>Python</option>
              <option>Java</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Languages
            </label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => handleChange(e)}
              name="languages"
            >
              <option>Hindi</option>
              <option>English</option>
              <option>Marathi</option>
              <option>Gujrati</option>
              <option>Tamil</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Professional Qualifications
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Professional Qualifications"
              onChange={(e) => handleChange(e)}
              name="professionalqualifications"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
