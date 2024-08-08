import React, { useState } from "react";

const VastuForm = () => {
  const [formData, setFormData] = useState({
    propertyType: "Empty Plot",
    ownerName: "",
    ownerDOB: "",
    phoneNumber: "",
    email: "",
    plotAddress: "",
    plotSize: "",
    facingDirection: "",
    boundaryWalls: "",
    nearbyStructures: "",
    additionalInfo: "",
    uploadImages: null,
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle form submission, e.g., make an API call
  };

  return (
    <div
      className="h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed  px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/OIP.Tpy8PEcp-R991lDpzSHPsAHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')",
      }}
    >
      <div className="w-full space-y-8">
        <div className="p-8 rounded-lg ">
          <h1 className="text-4xl font-bold text-center text-white">
            Vastu <span className="text-[#f6c300]">Consultation</span>
          </h1>
          <p className="mt-4 text-center text-white">
            Get expert advice on your property according to Vastu Shastra
            principles. Fill out the form below to get started.
          </p>
        </div>
        <div className="p-8 shadow-lg rounded-lg max-w-6xl mx-auto bg-black bg-opacity-60  ">
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
                    className="mt-1 block w-full p-3 py-2 outline-none border-2 border-[#f6c300] text-[#f6c300] rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Owner's Date of Birth
                  </label>
                  <input
                    type="date"
                    name="ownerDOB"
                    value={formData.ownerDOB}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
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
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Plot Address
                  </label>
                  <textarea
                    name="plotAddress"
                    value={formData.plotAddress}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    rows="3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Boundary Walls (Yes/No)
                  </label>
                  <input
                    type="text"
                    name="boundaryWalls"
                    value={formData.boundaryWalls}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Nearby Structures
                  </label>
                  <textarea
                    name="nearbyStructures"
                    value={formData.nearbyStructures}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    rows="3"
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Plot Size
                  </label>
                  <input
                    type="text"
                    name="plotSize"
                    value={formData.plotSize}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Facing Direction
                  </label>
                  <input
                    type="text"
                    name="facingDirection"
                    value={formData.facingDirection}
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    name="uploadImages"
                    onChange={handleChange}
                    className="mt-1 block w-full py-2 outline-none border-2 border-[#f6c300] text-[#f6c300]  rounded-md shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    required
                  />
                </div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="py-2 px-4 bg-gray-700 text-white font-semibold rounded-md shadow-md hover:bg-gray-800"
                >
                  Back
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  className="py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600"
                >
                  Next
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="py-2 px-4 bg-yellow-500 text-black font-semibold rounded-md shadow-md hover:bg-yellow-600"
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
