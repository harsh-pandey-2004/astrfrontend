import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

 


function ChatCard({ obj, type }) {

  const navigate = useNavigate();

 
  return (
    <div
      className=" flex flex-col gap-3 border rounded-lg shadow-md shadow-gray-400 py-2 hover:cursor-pointer "
      onClick={() => navigate(`/call-to-astrologer/${obj.slug}`)}
    >
   <div className="w-full  flex justify-end px-6  ">

      <div className="text-sm  flex items-center w-2/3   text-yellow-500 px-6">
       
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar /> <IoIosStarHalf />
        
        <div  
         className={`${obj.status==true ? " bg-green-500 shadow-green-600 ": "bg-red-500 shadow-red-600"} h-3 w-3 rounded-full shadow-md self-end ml-32`}>
         </div>
        
         

       
      </div>

      
   </div>
      
      <div className="astrocard flex     items-center justify-center gap-28">
        <div className="">
          <p className="font-medium text-lg">
            {obj.firstName} {obj.lastName}
          </p>
          <p className="text-gray-600 text-base">
            {obj.Skills.map((e) => (
              <span>{e} </span>
            ))}
          </p>
          <p className="text-gray-600 text-base">
            {obj.languages.map((e) => (
              <span>{e} </span>
            ))}
          </p>
          <p className="text-gray-600 text-base">Exp: {obj.experience} years</p>
          <p className="text-gray-600 text-base x`">
            ₹ {type == "chat" ? obj.chatPrice : obj.talkPrice} / min
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center">
          <img
            src={obj.image}
            height={100}
            width={100}
            alt={obj.name}
            className="border border-gray-300 rounded-full  bg-slate-300"
          />

          <p className="text-sm text-gray-500">{obj.orders} orders</p>
        </div>
      </div>

      <button className="flex items-center justify-center py-1 gap-4 border border-[#f6c300] text-[#f6c300] hover:text-white hover:bg-[#f6c300] transition duration-500 rounded-md  mx-auto w-9/12 ">
        <p>{type == "chat" ? "Chat Now" : "Talk Now"}</p> <LuPhone />
      </button>
    </div>
  );
}

export default ChatCard;
