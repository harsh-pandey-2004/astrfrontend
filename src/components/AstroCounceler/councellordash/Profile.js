import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ response }) => {
  const [newSkill, setNewSkill] = useState('');
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode
console.log(response);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    mail: 'RamaKrishna@gmail.com',
    Skills: ['Vedic Chanting', 'Astrology'],
    experience: '',
    languages: '',
    chatPrice: '',
  });

  useEffect(() => {
    if (response) {
      setFormData({
        firstName: response.firstName || '',
        lastName: response.lastName || '',
        mobile: response.mobile || '',
        mail: 'RamaKrishna@gmail.com',
        Skills: response.Skills || ['Vedic Chanting', 'Astrology'],
        experience: response.experience || '',
        languages: response.languages || '',
        chatPrice: response.chatPrice || '',
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
    const updatedSkills = [...formData.Skills];
    updatedSkills[index] = value;
    setFormData({
      ...formData,
      Skills: updatedSkills,
    });
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !formData.Skills.includes(newSkill.trim())) {
      setFormData({
        ...formData,
        Skills: [...formData.Skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = formData.Skills.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      Skills: updatedSkills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const respond = await axios.patch(
        `http://localhost:3000/api/update-astroCouncelor-profile/${response._id}`,
        formData
      );
      console.log(respond.data); // Handle the response data if needed
      toggleEditMode(); // Exit edit mode after saving
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-4/5 h-screen py-4 absolute right-0 bg-orange-50 overflow-y-auto">
      <h1 className="text-center text-3xl">
        Welcome! Astro {formData.firstName}
      </h1>

      <div className="md:w-3/5 xs:w-full mx-auto mt-6 rounded-lg px-4 pb-2 shadow-md bg-yellow-100">
        <form onSubmit={handleSubmit}>
          <div className="border-b border-black pb-2">
            <div className="md:flex xs:flex-col gap-28 pt-2">
              <div className="flex gap-1 md:flex-col">
                <p className="text-gray-600">FirstName</p>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-yellow-100 focus:outline-none"
                  readOnly={!editMode}
                />
              </div>

              <div className="flex gap-1 md:flex-col">
                <p className="text-gray-600">LastName</p>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-yellow-100 focus:outline-none"
                  readOnly={!editMode}
                />
              </div>
            </div>

            <div className="md:flex xs:flex-col gap-36 mt-4">
              <div className="flex gap-1 md:flex-col">
                <p className="text-gray-600">ChatPrice</p>
                <input
                  type="text"
                  name="chatPrice"
                  value={formData.chatPrice}
                  onChange={handleInputChange}
                  className="bg-yellow-100 focus:outline-none"
                  readOnly={!editMode}
                />
              </div>

              <div className="flex md:flex-col">
                <label htmlFor="gender" className="text-gray-600">
                  Gender
                </label>
                <p className="bg-yellow-100">{response.gender}</p>
              </div>
            </div>
          </div>

          <div className="md:flex xs:flex-col md:justify-between mt-6 border-b border-black pb-2">
            <div>
              <p className="text-gray-600 text-center">Experience</p>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="bg-yellow-100 focus:outline-none text-center"
                readOnly={!editMode}
              />
            </div>

            <div className="flex md:flex-col pl-12 justify-center items-center">
              <p className="text-gray-600">Live in(city)</p>
              <p className="bg-yellow-100">{response.city}</p>
            </div>

            <div className="flex md:flex-col justify-center items-center">
              <p className="text-gray-600">Languages</p>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                className="bg-yellow-100 focus:outline-none text-center"
                readOnly={!editMode}
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="mt-4 rounded w-full max-w-md">
              <h2 className="text-xl mb-2">Skills</h2>
              <ul className="mb-4">
                {formData.Skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center mb-2"
                  >
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) =>
                        handleSkillsChange(index, e.target.value)
                      }
                      className="bg-yellow-100 focus:outline-none"
                      readOnly={!editMode}
                    />
                    {editMode && (
                      <button
                        type="button"
                        className="bg-yellow-300 px-2 py-1 rounded"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        Delete
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              {editMode && (
                <div className="md:flex xs:flex-col mb-4">
                  <input
                    type="text"
                    className="border px-2 flex-grow mr-2 rounded-md focus:outline-none bg-yellow-50"
                    placeholder="Add a new skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={handleAddSkill}
                  >
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center w-full gap-2 mt-4">
            <button
              type="button"
              className="px-4 py-1 border rounded-md text-black bg-yellow-300"
              onClick={toggleEditMode}
            >
              {editMode ? 'Cancel' : 'Edit'}
            </button>
            {editMode && (
              <button
                type="submit"
                className="px-4 py-1 border rounded-md text-black bg-yellow-300"
              >
                Save
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
