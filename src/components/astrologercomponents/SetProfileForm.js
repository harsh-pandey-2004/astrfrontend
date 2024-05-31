import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AstrologerProfileForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    skills: "",
    professionalQualifications: "",
    gender: "",
    languages: "",
    experience: "",
    city: "",
    dob: "",
    zodiacSign: "",
    image: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/update-astrologer-profile/${id}`,
        formData
      );
      console.log(response.data);
      navigate(`/astrologerdashboard/${id}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 p-4">
      <div className="shadow-bg1 rounded-lg shadow-xl p-4 w-[80%]">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Profile Picture
            </label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              name="image"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Gender
            </label>
            <div className="flex items-center">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2 text-black"
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2 text-black"
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Zodiac Sign
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="Zodiac Sign"
                onChange={handleChange}
                name="zodiacSign"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                City
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="City"
                onChange={handleChange}
                name="city"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full p-2 border text-black rounded"
                onChange={handleChange}
                name="dob"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-1">
                Experience
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="Experience"
                onChange={handleChange}
                name="experience"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Skills
            </label>
            <select
              className="w-full p-2 border rounded text-black"
              onChange={handleChange}
              name="skills"
            >
              <option>Vedic Astrology</option>
              <option>Numerology</option>
              <option>Vastu Shastra</option>
              <option>Palmistry</option>
              <option>Tarot Reading</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Languages
            </label>
            <select
              className="w-full p-2 border rounded text-black"
              onChange={handleChange}
              name="languages"
            >
              <option>Hindi</option>
              <option>English</option>
              <option>Marathi</option>
              <option>Gujarati</option>
              <option>Tamil</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block text-gray-700 text-sm font-semibold mb-1">
              Professional Qualifications
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Professional Qualifications"
              onChange={handleChange}
              name="professionalQualifications"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-orange-600 text-white font-bold py-2 px-4 rounded hover:bg-orange-700 w-full"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AstrologerProfileForm;
