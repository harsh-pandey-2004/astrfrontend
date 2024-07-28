import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const OurSpecialists = () => {
  return (
    <div className="w-full mx-auto   bg-gray-50">
      <h1 className="mt-5 text-center text-5xl font-serif text-black ">
        Our Specialists
      </h1>
      <div className=" my-10 mx-5">
        <div className="bg-white p-10 w-full md:w-3/4 flex flex-col  cursor-pointer md:flex-row gap-10 items-center float-left justify-between shadow-xl rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
          <div className="flex-shrink-0">
            <img
              src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="rounded-full w-48 h-48 border-4 border-yellow-400"
              alt="Specialist"
            />
          </div>
          <div className="flex-grow text-left">
            <p className="text-xl  text-gray-800">
              Name: <span className="text-yellow-600 ">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Occupation: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Qualifications: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Achievements: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Experience: <span className="text-yellow-600">ABC</span>
            </p>
          </div>
          <div className="flex-shrink-0 text-left">
            <div className="flex gap-5 mt-2">
              <a
                href="#"
                className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-10 w-full md:w-3/4 flex flex-col  cursor-pointer md:flex-row gap-10 items-center float-right  mt-10 justify-between shadow-xl rounded-xl transform transition duration-500 hover:scale-105 hover:shadow-md hover:shadow-yellow-400">
          <div className="flex-shrink-0">
            <img
              src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              className="rounded-full w-48 h-48 border-4 border-yellow-400"
              alt="Specialist"
            />
          </div>
          <div className="flex-grow text-left">
            <p className="text-xl  text-gray-800">
              Name: <span className="text-yellow-600 ">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Occupation: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Qualifications: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Achievements: <span className="text-yellow-600">ABC</span>
            </p>
            <p className="text-xl  text-gray-800">
              Experience: <span className="text-yellow-600">ABC</span>
            </p>
          </div>
          <div className="flex-shrink-0 text-left">
            <div className="flex gap-5 mt-2">
              <a
                href="#"
                className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialists;
