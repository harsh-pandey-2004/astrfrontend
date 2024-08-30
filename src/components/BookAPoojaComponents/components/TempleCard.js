import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const TempleCard = ({ obj }) => {
  const navigate = useNavigate()
  console.log('TempleCard props:', obj);
  const temple = Array.isArray(obj) ? obj[0] : obj;
  // console.log(obj.map((item)=>(
  //   console.log(item.name)
  // )))
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col border-2 border-black rounded-md  h-64  bg-black hover:shadow-md hover:shadow-gray-100 hover:cursor-pointer"
    onClick={()=>navigate('/book-a-pooja/lkj',{state:{temple}})}
    >
      <img src={temple?.img} className="object-cover w-full h-3/4  " />
      <div className="text-center ">
        <p className="bg-black text-white">{temple?.name || 'Unknown Temple'}</p>
        <div className="text-xs ">
          {/* <p className="bg-black text-white">{obj.god}</p> */}
          <p className="bg-black text-white">{temple?.place || 'Unknown Place'}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TempleCard;
