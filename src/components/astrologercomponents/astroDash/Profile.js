import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = ({ response }) => {
  const [newSkill, setNewSkill] = useState("");
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    mail: "RamaKrishna@gmail.com",
    skills: ["Vedic Chanting", "Astrology"],
    experience: "",
    languages: "",
    chatPrice: "",
  });

  useEffect(() => {
    if (response) {
      setFormData({
        firstName: response.firstName || "",
        lastName: response.lastName || "",
        mobile: response.mobile || "",
        mail: "RamaKrishna@gmail.com",
        skills: response.skills || ["Vedic Chanting", "Astrology"],
        experience: response.experience || "",
        languages: response.languages || "",
        chatPrice: response.chatPrice || "",
      });
    }
  }, [response]);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = [...formData.skills];
    updatedSkills[index] = value;
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        skills: [...formData.skills, newSkill.trim()],
      });
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      skills: updatedSkills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respond = await axios.patch(
        `https://astrobackend.onrender.com/api/update-astrologer-profile/${response._id}`,
        formData
      );
      console.log(respond.data); // Handle the response data if needed
      toggleEditMode(); // Exit edit mode after saving
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full h-full md:mt-24 flex flex-col items-center p-4 overflow-auto">
      <div className="w-full md:h-auto h-full bg-[#f6c300] rounded-lg shadow-lg p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-start text-gray-800 mb-4">
          Welcome, Astro {formData.firstName}!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">
                <b>First Name</b>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                readOnly={!editMode}
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">
                <b>Last Name</b>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                readOnly={!editMode}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Chat Price</label>
              <input
                type="text"
                name="chatPrice"
                value={formData.chatPrice}
                onChange={handleInputChange}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                readOnly={!editMode}
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Gender</label>
              <p className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm">
                {response.gender}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-medium">Experience</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                readOnly={!editMode}
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">
                Live in (City)
              </label>
              <p className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm">
                {response.city}
              </p>
            </div>
            <div className="">
              <label className="text-gray-700 font-medium">Skills</label>
              <ul className="space-y-2">
                {formData.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm"
                  >
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleSkillsChange(index, e.target.value)
                      }
                      className="flex-grow bg-transparent border-none focus:outline-none"
                      readOnly={!editMode}
                    />
                    {editMode && (
                      <button
                        type="button"
                        className="ml-2 bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {editMode && (
                <div className="flex mt-2 gap-1">
                  <input
                    type="text"
                    className="flex-grow bg-gray-100 border border-gray-300 rounded-lg p-2 text-sm"
                    placeholder="Add a new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />

                  <button
                    type="button"
                    className="bg-blue-600 text-white px-5 py-1 rounded-lg hover:bg-blue-700 transition"
                    onClick={handleAddSkill}
                  >
                    Add
                  </button>
                </div>
              )}
            </div>

            <div>
              <label className="text-gray-700 font-medium">Languages</label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                readOnly={!editMode}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-4">
              {editMode && (
                <button
                  type="submit"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-white bg-green-500 hover:bg-green-600 transition"
                >
                  Save
                </button>
              )}
            </div>

            <div className="flex w-full space-x-4">
              {!editMode && (
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-white bg-blue-700 hover:bg-black transition"
                  onClick={toggleEditMode}
                >
                  Edit
                </button>
              )}
              {editMode && (
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-white bg-red-600 hover:bg-red-700 transition"
                  onClick={toggleEditMode}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default Profile;
