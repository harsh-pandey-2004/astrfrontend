import React from "react";

const Pandit = ({ obj }) => {
  return (
   
    <div className="relative w-[70%] h-[70%] rounded-full cursor-pointer hover:scale-1  ">
      <img src={obj.img} className=" rounded-t-full w-full h-full"/>
      <div className="absolute bottom-0  flex flex-col items-center  justify-center w-full bg-black">
        <h1 className="text-[#ccac38]">{obj.name}</h1>
        <p className="text-[#ead071]">{obj.Region}</p>
      </div>
    </div>
   
  );
};

export default Pandit;
