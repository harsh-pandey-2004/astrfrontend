import React, { useState } from "react";
import axios from "axios";

const VastuForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerDob: "",
    phoneNumber: "",
    countryCode: "+91", // Default country code
    email: "",
    plotAddress: "",
    plotSize: "",
    facingDirection: "",
    boundaryWalls: true,
    nearbyStructures: "",
    additionalInfo: "",
    mainDoor: "",
    userId: "64bdef2f59b1c25dbb3c6b7a",
    images: []
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const validateStep1 = () => {
    const errors = {};
    if (!formData.ownerName) errors.ownerName = "Owner's Name is required";
    if (!formData.ownerDob) errors.ownerDob = "Owner's Date of Birth is required";
    if (!formData.phoneNumber.match(/^\d{10}$/)) errors.phoneNumber = "Phone Number must be 10 digits";
    if (!formData.email.includes("@")) errors.email = "Email must contain '@'";
    return errors;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.plotAddress) errors.plotAddress = "Plot Address is required";
    if (!formData.plotSize || isNaN(formData.plotSize)) errors.plotSize = "Plot Size must be a number";
    if (!formData.facingDirection) errors.facingDirection = "Facing Direction is required";
    return errors;
  };

  const validateStep3 = () => {
    const errors = {};
    if (!formData.mainDoor) errors.mainDoor = "Main Door is required";
    if (formData.images.length === 0) errors.images = "At least one image is required";
    return errors;
  };

  const validateCurrentStep = () => {
    switch (step) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      default:
        return {};
    }
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === 'file') {
      setFormData({
        ...formData,
        [name]: Array.from(files),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCountryCodeChange = (e) => {
    setFormData({
      ...formData,
      countryCode: e.target.value,
    });
  };

  const handleNext = () => {
    const validationErrors = validateCurrentStep();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateCurrentStep();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length !== 0) return;

    const data = new FormData();
    data.append("ownerName", formData.ownerName);
    data.append("ownerDob", formData.ownerDob);
    data.append("phoneNumber", formData.countryCode + formData.phoneNumber);
    data.append("email", formData.email);
    data.append("plotAddress", formData.plotAddress);
    data.append("plotSize", formData.plotSize);
    data.append("facingDirection", formData.facingDirection);
    data.append("boundaryWalls", formData.boundaryWalls);
    data.append("nearbyStructure", formData.nearbyStructures);
    data.append("additionalInfo", formData.additionalInfo);
    data.append("mainDoor", formData.mainDoor);
    data.append("userId", formData.userId);
    formData.images.forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await axios.post(
        "https://astrobackend.onrender.com/api/createvastubook",
        data
      );
      console.log("Response:", response.data);
      alert("Vastu booking created successfully!");
    } catch (error) {
      console.error("There was an error creating the booking!", error);
      alert("Failed to create the booking. Please try again.");
    }
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/48/4a/97/484a9743a27dc0745da35b65f7b0fc9f.jpg')",
      }}
    >
      <div className="w-full space-y-8">
        <div className="p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-center text-white">
            Vastu <span className="text-[#f6c300]">Consultation</span>
          </h1>
          <p className="mt-4 text-center text-white">
            Get expert advice on your property according to Vastu Shastra
            principles. Fill out the form below to get started.
          </p>
        </div>
        <div className="p-8 shadow-lg rounded-lg max-w-6xl mx-auto bg-black bg-opacity-60">
          <h2 className="text-3xl font-bold text-center text-[#f6c300] mb-6">
            Vastu Consultation Form
          </h2>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Owner's Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    className={`mt-1 block w-full p-3 py-2 outline-none border-2 rounded-md shadow-sm ${errors.ownerName ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.ownerName && <p className="text-red-500 text-xs">{errors.ownerName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Owner's Date of Birth
                  </label>
                  <input
                    type="date"
                    name="ownerDob"
                    value={formData.ownerDob}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.ownerDob ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.ownerDob && <p className="text-red-500 text-xs">{errors.ownerDob}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      className={`w-1/4 py-2 outline-none border-2 rounded-md shadow-sm ${errors.phoneNumber ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      {/* Add more country codes as needed */}
                    </select>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className={`w-3/4 ml-2 py-2 outline-none border-2 rounded-md shadow-sm ${errors.phoneNumber ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                      required
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.email ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Plot Address
                  </label>
                  <input
                    type="text"
                    name="plotAddress"
                    value={formData.plotAddress}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.plotAddress ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.plotAddress && <p className="text-red-500 text-xs">{errors.plotAddress}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Plot Size (sq. feet)
                  </label>
                  <input
                    type="number"
                    name="plotSize"
                    value={formData.plotSize}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.plotSize ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.plotSize && <p className="text-red-500 text-xs">{errors.plotSize}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Facing Direction
                  </label>
                  <select
                    name="facingDirection"
                    value={formData.facingDirection}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.facingDirection ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  >
                    <option value="">Select</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="Northeast">Northeast</option>
                    <option value="Northwest">Northwest</option>
                    <option value="Southeast">Southeast</option>
                    <option value="Southwest">Southwest</option>
                  </select>
                  {errors.facingDirection && <p className="text-red-500 text-xs">{errors.facingDirection}</p>}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Main Door
                  </label>
                  <select
                    name="mainDoor"
                    value={formData.mainDoor}
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.mainDoor ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  >
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                  {errors.mainDoor && <p className="text-red-500 text-xs">{errors.mainDoor}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleChange}
                    className={`mt-1 block w-full py-2 outline-none border-2 rounded-md shadow-sm ${errors.images ? 'border-red-500' : 'border-[#f6c300]'} text-[#f6c300] focus:border-yellow-500 focus:ring-yellow-500`}
                    required
                  />
                  {errors.images && <p className="text-red-500 text-xs">{errors.images}</p>}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-2 bg-gray-500 text-white rounded-md"
                >
                  Back
                </button>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 bg-[#f6c300] text-black rounded-md"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#f6c300] text-black rounded-md"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VastuForm;
