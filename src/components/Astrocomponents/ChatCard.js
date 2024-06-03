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
      <div className="text-sm  flex justify-center text-yellow-500">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar /> <IoIosStarHalf />
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

      <button className="flex items-center justify-center py-1 gap-4 border border-green-600 text-green-600 hover:text-white hover:bg-green-600 transition duration-500 rounded-md  mx-auto w-9/12 ">
        <p>{type == "chat" ? "Chat Now" : "Talk Now"}</p> <LuPhone />
      </button>
    </div>
  );
}

export default ChatCard;
