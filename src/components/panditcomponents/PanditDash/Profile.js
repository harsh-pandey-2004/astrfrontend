import React, { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";

const Profile = ({ response }) => {
  const [profileData, setProfileData] = useState({
    phone: "9595959595",
    mail: "RamaKrishna@gmail.com",
  });

  const [readphone, setReadphone] = useState(true);
  const [readmail, setReadmail] = useState(true);

  function ChangeHandler(e) {
    const { name, value, type } = e.target;
    setProfileData((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  }

  const [skills, setSkills] = useState(["Vedic Chanting", "Astrology"]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  return (
    <div className="w-4/5 h-screen py-4 absolute right-0 bg-orange-50 overflow-y-auto">
      <h1 className="text-center text-3xl  ">
        Welcome! {response && response.firstName + response.lastName}
      </h1>

      <div className="w-3/5   mx-auto mt-6 rounded-lg px-4 pb-2  shadow-md bg-yellow-100">
        <div className=" border-b border-black pb-2 ">
          <div className="md:flex xs:flex-col justify-between pt-2 ">
            <div className="flex flex-col ">
              <label htmlFor="firstname" className="text-gray-600 ">
               FirstName
              </label>
              <input
                id="firstname"
                type="text"
                value={response && response.firstName}
                className="bg-yellow-100 focus:outline-none "
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="lastname" className="text-gray-600">
                LastName
              </label>
              <input
                id="lastname"
                type="text"
                value={response && response.lastName}
                className="bg-yellow-100 focus:outline-none"
              />
            </div>
          </div>

          <div className="md:flex xs:flex-col justify-between mt-4">
            <div className="flex flex-col  ">
              <label htmlFor="gotra" className="text-gray-600">
                Gotram
              </label>
              <input
                id="gotra"
                type="text"
                className="bg-yellow-100 focus:outline-none"
                value="Kashyap"
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="gender" className="text-gray-600">
                Gender
              </label>
              <input
                id="gender"
                type="text"
                value={response && response.gender}
                className="bg-yellow-100 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className=" md:flex xs:flex-col  justify-between mt-6 border-b border-black  pb-2">
          <div>
            <label htmlFor="skills" className="text-gray-600">
              Experience
            </label>

            <div>
              <p>{response && response.experience} Years</p>
            </div>
          </div>

          <div className="flex flex-col pl-12 ">
            <label htmlFor="city" className="text-gray-600">
              Live in {response && response.city}
            </label>
            <input
              type="text"
              className="bg-yellow-100 focus:outline-none"
              value="Delhi"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="lang" className="text-gray-600">
              Languages
            </label>
            <input
              type="text"
              className="bg-yellow-100 focus:outline-none"
              value={response && response.languages}
            />
          </div>
        </div>

        <div className=" flex flex-col gap-4  ">
          <div className="flex flex-col gap-2  ">
            {/* Skills */}

            <div className="mt-4  rounded  w-full max-w-md">
              <h2 className="text-xl mb-2">Skills</h2>
              <ul className="mb-4">
                {response && response.Skills}
                <button
                  className="bg-yellow-300  px-2 py-1 rounded"
                  onClick={() => handleDeleteSkill(skill)}
                >
                  Delete
                </button>
              </ul>
              <div className="md:flex xs:flex-col mb-4">
                <input
                  type="text"
                  className="border px-2 flex-grow mr-2 rounded-md focus:outline-none bg-yellow-50"
                  placeholder="Add a new skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  onClick={handleAddSkill}
                >
                  Add
                </button>
              </div>
            </div>

            <div className=" relative  w-1/3 ">
              <button
                className="text-sm  absolute right-0 top-1"
                onClick={() => {
                  setReadphone(false);
                }}
              >
                {" "}
                <FaRegEdit />
              </button>
              <div className="md:flex xs:flex-col gap-2 w-1/2">
                <label htmlFor="phone" className="text-gray-600">
                  Phone:
                </label>
                <input
                  id="phone"
                  type="number"
                  name="phone"
                  value={response && response.mobile}
                  className="bg-yellow-100 focus:outline-none"
                  onChange={ChangeHandler}
                  readOnly={readphone}
                />
              </div>
            </div>

            <div className="md:flex xs:flex-col gap-2 w-1/2  relative ">
              <label htmlFor="mail" className="text-gray-600">
                Email:
              </label>
              <input
                id="mail"
                type="email"
                name="mail"
                value={"harshpandey123@gmail.com"}
                className="focus:outline-none bg-yellow-100 text-sm "
                onChange={ChangeHandler}
                readOnly={readmail}
              />
              <button
                className="text-sm  absolute right-0 top-1"
                onClick={() => {
                  setReadmail(false);
                }}
              >
                {" "}
                <FaRegEdit />
              </button>
            </div>
          </div>

          <div className=" flex  items-center justify-center w-full gap-2 ">
            <button className="px-4  py-1 border  rounded-md text-black  bg-yellow-300 ">
              Logout
            </button>
            <button className="px-4 py-1 border  rounded-md text-black bg-yellow-300">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
