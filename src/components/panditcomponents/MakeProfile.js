import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

function ProfileForm() {
  const location = useLocation();
  const slug = location.pathname.split("/").pop();
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

  function handleSelectChange(selectedOptions, action) {
    const { name } = action;
    setResponse((prevData) => ({
      ...prevData,
      [name]: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
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

  const skillsOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
  ];

  const languagesOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
    { value: "Marathi", label: "Marathi" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Tamil", label: "Tamil" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "gray",
      color: "black",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "lightgray",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "black",
    }),
    input: (provided) => ({
      ...provided,
      color: "black",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-400 p-4 mb-8 relative top-[5rem]">
      <div className="shadow-bg1 rounded-lg shadow-xl p-4 w-[80%]">
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
              className="w-full p-2 border rounded text-black"
              onChange={(e) => handleChange(e)}
              name="image"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="First Name"
                onChange={(e) => handleChange(e)}
                name="firstName"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded text-black"
                placeholder="Last Name"
                onChange={(e) => handleChange(e)}
                name="lastName"
              />
            </div>
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
                  className="mr-2 text-black"
                  onChange={(e) => handleChange(e)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2 text-black"
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
              className="w-full p-2 border rounded text-black"
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
              className="w-full p-2 border rounded text-black"
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
              className="w-full p-2 border rounded text-black"
              placeholder="City"
              onChange={(e) => handleChange(e)}
              name="city"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded text-black"
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
              className="w-full p-2 border rounded text-black"
              placeholder="Experience"
              onChange={(e) => handleChange(e)}
              name="experience"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Skills
            </label>
            <Select
              isMulti
              name="Skills"
              options={skillsOptions}
              className="basic-multi-select text-black"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Languages
            </label>
            <Select
              isMulti
              name="languages"
              options={languagesOptions}
              className="basic-multi-select text-black"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Professional Qualifications
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded text-black"
              placeholder="Professional Qualifications"
              onChange={(e) => handleChange(e)}
              name="professionalQualifications"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
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
