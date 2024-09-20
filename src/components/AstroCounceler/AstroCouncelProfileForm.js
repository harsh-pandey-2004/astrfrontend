import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";

function AstroCouncellorProfileForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    Skills: [],
    professionalQualifications: "",
    gender: "",
    languages: [],
    experience: "",
    city: "",
    dob: "",
    zodiacSign: "",
    image: "",
    chatPrice: "",
    talkPrice: ""
  };
  const [formData, setFormData] = useState(initialState);
  const[errors,setErrors]=useState({});


  // Validation functions
  function validateTextInput(value) {
    const regex = /^[A-Za-z\s]*$/; // Allows only letters and spaces
    return regex.test(value);
  }

  function validateNumericInput(value) {
    const regex = /^[0-9]*$/; // Allows only numbers
    return regex.test(value);
  }

  function validateForm(){
    const newErrors={};
   
    if(!validateTextInput(formData.firstName)){
      newErrors.firstName="First name must contain only letters and spaces.";
    }

    if(!validateTextInput(formData.lastName)){
      newErrors.lastName="Last name must contain only letters and spaces."
    }

    if(!validateTextInput(formData.city)){
      newErrors.city="City must contain only letters and spaces."
    }

    if(!validateTextInput(formData.zodiacSign)){
      newErrors.zodiacSign="zodiacSign must contain only letters and spaces."
    }

    if (!validateNumericInput(formData.chatPrice)) {
      newErrors.chatPrice = "Chat price must contain only numbers.";
    }

    if (!validateNumericInput(formData.talkPrice)) {
      newErrors.talkPrice = "Talk price must contain only numbers.";
    }

    if (!validateNumericInput(formData.experience)) {
      newErrors.experience = "Experience must contain only numbers.";
    }

    if (!formData.gender) {
      newErrors.gender = "Gender is required.";
    }

    if (formData.Skills.length === 0) {
      newErrors.Skills = "At least one skill is required.";
    }

    if (formData.languages.length === 0) {
      newErrors.languages = "At least one language is required.";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    }

    if (!formData.professionalQualifications.trim()) {
      newErrors.professionalQualifications = "Professional qualifications are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;


  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSelectChange(selectedOptions, action) {
    const { name } = action;
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOptions
        ? selectedOptions.map((option) => option.value)
        : [],
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(validateForm()){
    try {
      const response = await axios.patch(
        `https://astrobackend.onrender.com/api/update-astroCouncelor-profile/${id}`,
        formData
      );
      console.log(response.data);
      console.log(response.data.Astrologer.slug);
      navigate(`/astrocouncellordashboard/${response.data.Astrologer.slug}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }else{
    console.log("Validation failed. Please fill all the details correctly.");
  }
  }

  const skillsOptions = [
    { value: "Vedic Astrology", label: "Vedic Astrology" },
    { value: "Numerology", label: "Numerology" },
    { value: "Vastu Shastra", label: "Vastu Shastra" },
    { value: "Palmistry", label: "Palmistry" },
    { value: "Tarot Reading", label: "Tarot Reading" },
  ];

  const languagesOptions = [
    { value: "Hindi", label: "Hindi" },
    { value: "English", label: "English" },
    { value: "Marathi", label: "Marathi" },
    { value: "Gujarati", label: "Gujarati" },
    { value: "Tamil", label: "Tamil" },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      borderColor: state.isFocused ? "#FFD700" : "#555",
      color: "#fff",
      boxShadow: state.isFocused ? "0 0 0 1px #FFD700" : "none",
      "&:hover": {
        borderColor: "#FFD700",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#333",
      color: "#fff",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#444",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#aaa",
    }),
  };

  return (
    <div className="w-full min-h-screen mb-20 p-4 relative top-[5rem]">
      <div className="bg-black shadow-md rounded-lg p-6 lg:w-1/2 w-[90%] mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h1 className="text-lg font-bold mb-4 p-4 bg-yellow-400 text-center w-full rounded">
            Create Your Profile
          </h1>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Profile Picture</h6>
            <input
              type="file"
              className="form-input outline-none rounded bg-gray-800 placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              onChange={handleChange}
              name="image"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 p-3 rounded-lg">
            <div>
              <h6 className="text-lg font-sans text-white">First Name</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
                required
              />
               {errors.firstName && (
                <span className="text-red-500">{errors.firstName}</span>
              )}
            </div>
            <div>
              <h6 className="text-lg font-sans text-white">Last Name</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
                required
              />
               {errors.lastName && (
                <span className="text-red-500">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Gender</h6>
            <div className="flex items-center text-white">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  onChange={handleChange}
                  required
                />
                Female
              </label>
            </div>
            {errors.gender && (
                <span className="text-red-500">{errors.gender}</span>
              )}
          </div>

          <div className="grid grid-cols-2 gap-2 p-3 rounded-lg">
            <div>
              <h6 className="text-lg font-sans text-white">Zodiac Sign</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="Zodiac Sign"
                onChange={handleChange}
                name="zodiacSign"
                value={formData.zodiacSign}
                required
              />
               {errors.zodiacSign && (
                <span className="text-red-500">{errors.zodiacSign}</span>
              )}
            </div>
            <div>
              <h6 className="text-lg font-sans text-white">City</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="City"
                onChange={handleChange}
                name="city"
                value={formData.city}
                required
              />
               {errors.city && (
                <span className="text-red-500">{errors.city}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 p-3 rounded-lg">
            <div>
              <h6 className="text-lg font-sans text-white">Price for Chat</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="Price for Chat"
                onChange={handleChange}
                name="chatPrice"
                value={formData.chatPrice}
                required
              />
               {errors.chatPrice && (
                <span className="text-red-500">{errors.chatPrice}</span>
              )}
            </div>
            <div>
              <h6 className="text-lg font-sans text-white">Price for Call per Min</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="Price for Call per Min"
                onChange={handleChange}
                name="talkPrice"
                value={formData.talkPrice}
                required
              />
               {errors.talkPrice && (
                <span className="text-red-500">{errors.talkPrice}</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 p-3 rounded-lg">
            <div>
              <h6 className="text-lg font-sans text-white">Date of Birth</h6>
              <input
                type="date"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                onChange={handleChange}
                name="dob"
                value={formData.dob}
                required
              />
               {errors.dob && (
                <span className="text-red-500">{errors.dob}</span>
              )}
            </div>
            <div>
              <h6 className="text-lg font-sans text-white">Experience</h6>
              <input
                type="text"
                className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
                placeholder="Experience"
                onChange={handleChange}
                name="experience"
                value={formData.experience}
                required
              />
               {errors.experience && (
                <span className="text-red-500">{errors.experience}</span>
              )}
            </div>
          </div>

          <div className="p-3 rounded-lg">
            <h6 className="text-lg font-sans text-white">Skills</h6>
            <Select
              isMulti
              name="Skills"
              options={skillsOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
              required
            />
             {errors.Skills && (
                <span className="text-red-500">{errors.Skills}</span>
              )}
          </div>

          <div className="p-3 rounded-lg">
            <h6 className="text-lg font-sans text-white">Languages</h6>
            <Select
              isMulti
              name="languages"
              options={languagesOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
              required
            />
             {errors.languages && (
                <span className="text-red-500">{errors.languages}</span>
              )}
          </div>

          <div className="p-3 rounded-lg">
            <h6 className="text-lg font-sans text-white">Professional Qualifications</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Professional Qualifications"
              onChange={handleChange}
              name="professionalQualifications"
              value={formData.professionalQualifications}
              required
            />
             {errors.professionalQualifications && (
                <span className="text-red-500">{errors.professionalQualifications}</span>
              )}
          </div>

          <div className="flex items-center justify-center p-4">
            <button
              type="submit"
              className="bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AstroCouncellorProfileForm;
