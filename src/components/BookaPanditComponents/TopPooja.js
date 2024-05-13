import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const TopPooja = ({ obj }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col border-2 border-black rounded-md  h-64  bg-black hover:shadow-md hover:shadow-gray-100 hover:cursor-pointer"
    >
      <img src={obj.img} className="object-cover w-full h-3/4  " />
      <div className="text-center shadow-bg">
        <p className="bg-black text-white">{obj.name}</p>
        <div className="text-xs ">
          <p className="bg-black text-white">{obj.god}</p>
          <p className="bg-black text-white">{obj.place}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TopPooja;
