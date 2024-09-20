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
    pincode:"",
    dob: "",
    belongsTo: "",
    image: "",
  };
  const [response, setResponse] = useState(initialState);
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

  if(!validateTextInput(response.firstName)){
    newErrors.firstName="First name must contain only letters and spaces.";
  }

  if(!validateTextInput(response.lastName)){
    newErrors.lastName="Last name must contain only letters and spaces";
  }

  if(!validateTextInput(response.city)){
    newErrors.city="City must contain only letters and spaces.";
  }

  if(!validateTextInput(response.belongsTo)){
    newErrors.belongsTo="Town must contain only letters and spaces";
  }

  if(!validateNumericInput(response.pincode)){
    newErrors.pincode="Pincode must contain only numbers";
  }

  if (!validateNumericInput(response.experience)) {
    newErrors.experience = "Experience must contain only numbers.";
  }

  if (!response.dob) {
    newErrors.dob = "Date of birth is required.";
  }

  
  if (response.Skills.length === 0) {
    newErrors.Skills = "At least one skill is required.";
  }

  if (response.languages.length === 0) {
    newErrors.languages = "At least one language is required.";
  }


  if (!response.gender) {
    newErrors.gender = "Gender is required.";
  }

  if (!response.ProfessionalQualifications.trim()) {
    newErrors.ProfessionalQualifications = "Professional qualifications are required.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}

  function handleChange(e) {
    console.log(response);
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
    console.log(response);
    
    if(validateForm()){try {
      console.log(slug);
      let a = await axios.patch(
        `https://astrobackend.onrender.com/api/update-pandit-profile/${slug}`,
        response
      );
      console.log(a.data);
      navigate(`/panditdashboard/${slug}`);
    } catch (error) {
      console.log("ERRR:", error);
    }}else {
      console.log("Validation failed. Please fill all the details correctly.");
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
    <div className="w-full  min-h-fit pb-28">
      <div className="bg-black shadow-md rounded pb-8 lg:w-1/2 w-[90%] mx-auto relative top-[6.8rem] lg:top-[6rem] md:w-3/4 sm:top-32 sm:w-4/5">
        <form
          autoComplete="on"
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <h1 className="text-lg font-bold mb-4 p-4 bg-yellow-400 text-center w-full rounded">
            Create Your Profile
          </h1>
          <div className="">
            <h6 className="text-lg text-center text-white">
              Fill in your profile details
            </h6>
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Profile Picture</h6>
            <input
              type="file"
              className="form-input outline-none rounded bg-gray-800 placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              onChange={(e) => handleChange(e)}
              name="image"
            />
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">First Name</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="First Name"
              onChange={(e) => handleChange(e)}
              name="firstName"
              required
            />
             {errors.firstName && (
                <span className="text-red-500">{errors.firstName}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Last Name</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Last Name"
              onChange={(e) => handleChange(e)}
              name="lastName"
              required
            />
             {errors.lastName && (
                <span className="text-red-500">{errors.lastName}</span>
              )}
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
                  onChange={(e) => handleChange(e)}
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
                  onChange={(e) => handleChange(e)}
                  required
                />
                Female
              </label>
            </div>
            {errors.gender && (
                <span className="text-red-500">{errors.gender}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Gotra</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Gotra"
              onChange={(e) => handleChange(e)}
              name="gotra"
              required
            />
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Belongs To</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Belongs To"
              onChange={(e) => handleChange(e)}
              name="belongsTo"
              value={response.belongsTo}
              required
            />
             {errors.belongsTo && (
                <span className="text-red-500">{errors.belongsTo}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">City</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="City"
              onChange={(e) => handleChange(e)}
              name="city"
              required
            />
             {errors.city && (
                <span className="text-red-500">{errors.city}</span>
              )}
          </div>
          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Pincode</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Pincode"
              onChange={(e) => handleChange(e)}
              name="pincode"
              required
            />
             {errors.pincode && (
                <span className="text-red-500">{errors.pincode}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Date of Birth</h6>
            <input
              type="date"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              onChange={(e) => handleChange(e)}
              name="dob"
              required
            />
             {errors.dob && (
                <span className="text-red-500">{errors.dob}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Experience</h6>
            <input
              type="text"
              className="form-input outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Experience"
              onChange={(e) => handleChange(e)}
              name="experience"
              required
            />
             {errors.experience && (
                <span className="text-red-500">{errors.experience}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Skills</h6>
            <Select
              isMulti
              name="Skills"
              options={skillsOptions}
              className="basic-multi-select text-black"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
              required
            />
             {errors.Skills && (
              <span className="text-red-500">{errors.Skills}</span>
              )}
          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">Languages</h6>
            <Select
              isMulti
              name="languages"
              options={languagesOptions}
              className="basic-multi-select text-black"
              classNamePrefix="select"
              styles={customStyles}
              onChange={handleSelectChange}
              required
            />
            {errors.languages && (
              <span className="text-red-500">{errors.languages}</span>
              )}

          </div>

          <div className="flex p-3 gap-2 rounded-lg flex-col items-start">
            <h6 className="text-lg font-sans text-white">
              Professional Qualifications
            </h6>
            <textarea
              className="form-textarea outline-none rounded bg-transparent placeholder:text-gray-400 border-2 w-full py-2 px-3 text-white focus:border-yellow-400"
              placeholder="Professional Qualifications"
              onChange={(e) => handleChange(e)}
              name="ProfessionalQualifications"
              required
            />
            {errors.ProfessionalQualifications && (
              <span className="text-red-500">{errors.ProfessionalQualifications}</span>
              )}
          </div>

          <button
            type="submit"
            className="bg-yellow-400 hover:box-shadow1 text-black font-sans py-2 px-4 rounded-lg w-[95%] mx-auto"
          >
            Submit <i className="fa fa-arrow-right"></i>
          </button>

          <div className="mt-1 text-sm">
            <p className="terms-line text-center text-white">
              By submitting, you agree to our{" "}
              <a
                href="https://astrotalk.com/terms-and-conditions"
                rel="noopener"
                target="_blank"
                className="text-yellow-400 underline"
              >
                Terms of Use
              </a>{" "}
              and{" "}
              <a
                href="https://astrotalk.com/privacy-policies"
                rel="noopener"
                target="_blank"
                className="text-yellow-400 underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
