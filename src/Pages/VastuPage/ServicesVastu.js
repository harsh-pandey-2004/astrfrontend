import React from "react";
import { Link } from "react-router-dom";

const ServicesVastu = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-96 bg-fixed bg-parallax bg-cover ">
      <h1 className="text-4xl text-white text-center ">
        Get Your 3D / 2D Vastu instructions
      </h1>
      <div className="mt-2 flex flex-col md:flex-row justify-center items-center gap-8 py-2">
        <Link to="/chat-with-astrologer">
          <button className="border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300 ">
            Get 2D Designs + Consultaion
          </button>
        </Link>
        <Link to="/call-to-astrologer">
          <button className="border border-white rounded-full text-white px-12 py-3 hover:bg-white hover:text-black transition duration-300">
          Get 3D Designs + Consultaion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesVastu;
