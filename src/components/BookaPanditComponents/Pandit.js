import React from "react";
import { motion } from "framer-motion";
const Pandit = ({ obj }) => {
  return (
   
    <div className="relative w-[70%] h-[70%] rounded-full cursor-pointer hover:scale-1">
      <img src={obj.img} className="w-full h-full rounded-t-full"></img>
      <div className="absolute bottom-0  flex flex-col items-center  justify-center w-full shadow-bg">
        <h1 className="text-[#ccac38]">{obj.name}</h1>
        <p className="text-[#ead071]">{obj.Region}</p>
      </div>
    </div>
   
  );
};

export default Pandit;
