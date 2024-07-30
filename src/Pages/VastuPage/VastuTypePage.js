import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VastuTypePage = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const { type } = location.state; // Access the passed data
  console.log(type);
  return (
    <div className="w-full h-fit pb-20 relative top-24">
      <div className="w-full bg-contain">
        <img
          src={type.img}
          alt={type.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-6xl mx-auto">
        <p className="text-3xl font-semibold text-[#f6c300] my-5">
          {type.name}
        </p>
        <p>{type.description}</p>
        <p className="text-3xl font-semibold text-[#f6c300] my-5">Myths for {type.name}</p>
        <p>{type.myths}</p>
      </div>
      <div className="text-center mt-10">
        <button className="px-8 py-3 bg-[#f6c300] text-white font-semibold text-lg rounded shadow-lg hover:bg-yellow-500 transition-colors duration-300" onClick={()=>navigate("/vastupricing")}>
          Get Consultation
        </button>
      </div>
    </div>
  );
};

export default VastuTypePage;
