import React from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ChatCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className=" flex flex-col gap-3 border rounded-lg shadow-md shadow-gray-400 py-2 hover:cursor-pointer "
      onClick={() => navigate(`/call-to-astrologer/${props.obj.slug}`)}
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
            {props.obj.firstName} {props.obj.lastName}
          </p>
          <p className="text-gray-600 text-base">
            {props.obj.Skills.map((e) => (
              <span>{e} </span>
            ))}
          </p>
          <p className="text-gray-600 text-base">
            {props.obj.languages.map((e) => (
              <span>{e} </span>
            ))}
          </p>
          <p className="text-gray-600 text-base">
            Exp: {props.obj.experience} years
          </p>
          <p className="text-gray-600 text-base x`">
            ₹ {props.obj.chatPrice} / min
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center">
          <img
            src={props.obj.image}
            height={100}
            width={100}
            alt={props.obj.name}
            className="border border-gray-300 rounded-full  bg-slate-300"
          />

          <p className="text-sm text-gray-500">{props.obj.orders} orders</p>
        </div>
      </div>

      <button className="flex items-center justify-center py-1 gap-4 border border-green-600 text-green-600 hover:text-white hover:bg-green-600 transition duration-500 rounded-md  mx-auto w-9/12 ">
        <p>Chat Now</p> <LuPhone />
      </button>
    </div>
  );
}

export default ChatCard;
