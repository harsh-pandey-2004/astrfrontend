import React from 'react';
import { FaComments, FaShareAlt } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";
const ChatDetails = () => {
  return (
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:shadow-gray-400 hover:cursor-pointer transition">
      <div className="flex justify-between items-center mb-4 gap-2">
        <span className="text-gray-600">Order Id: #1722774691304</span>
        <button className="bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-300">
          HELP
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-black">
          M
        </div>
        <div className="ml-4">
          <p className="font-bold">Meenakshhi</p>
          <p className="text-gray-600">04 Aug 24, 06:01 PM</p>
          <p className="text-green-500">Completed</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Chat type:</span>
          <span>₹ 5/min session</span>
        </div>
        <div className="flex justify-between">
          <span>Rate:</span>
          <span>₹ 5/min</span>
        </div>
        <div className="flex justify-between">
          <span>Duration:</span>
          <span>5 minutes</span>
        </div>
        <div className="flex justify-between">
          <span>Deduction:</span>
          <span>₹ 20</span>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-black">
          ₹
        </div>
        <div className="ml-4">
          <p className="font-bold">₹ 39/min</p>
          <p className="text-gray-600">Chat</p>
          {/* <p className="text-red-500">Currently offline</p> */}
        </div>
        <div className='bg-yellow-400 ml-20 rounded-full p-3 hover:cursor-pointer'><MdDeleteForever className='h-6 w-6'/></div>
      </div>

      {/* <div className="flex items-center justify-center mb-6">
        <span className="flex">
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-yellow-400">★</span>
          <span className="text-gray-300">☆</span>
        </span>
      </div> */}

      <div className="flex justify-between">
        <button className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-gray-800 transition duration-300 w-full mr-2">
          <FaComments className="mr-2" />
          Chat
        </button>
        <button className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-gray-800 transition duration-300 w-full ml-2">
          <FaShareAlt className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default ChatDetails;
