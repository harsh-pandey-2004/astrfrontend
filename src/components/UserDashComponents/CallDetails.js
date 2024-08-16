import React from 'react';
import { FaPhone, FaShareAlt } from 'react-icons/fa';
import { MdDeleteForever } from "react-icons/md";

const CallDetails = () => {
  return (
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:shadow-gray-400 hover:cursor-pointer transition">
      <div className="flex justify-between items-center mb-4 gap-2">
        <span className="text-gray-600">Order Id: #1722512225821</span>
        <button className="bg-yellow-400 text-black font-semibold py-1 px-3 rounded hover:bg-yellow-500 transition duration-300">
          HELP
        </button>
      </div>

      <div className="flex items-center mb-4">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-black">
          L
        </div>
        <div className="ml-4">
          <p className="font-bold">Lakshmanan</p>
          <p className="text-gray-600">01 Aug 24, 05:07 PM</p>
          <p className="text-green-500">Completed</p>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span>Call rate:</span>
          <span>₹ 5/min</span>
        </div>
        <div className="flex justify-between">
          <span>Duration:</span>
          <span>1 minute</span>
        </div>
        <div className="flex justify-between">
          <span>Deduction:</span>
          <span>₹ 0</span>
        </div>
      </div>

      <div className="flex  items-center mb-6">
        <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold text-black">
          ₹
        </div>
        <div className="ml-4">
          <p className="font-bold">₹ 6/min</p>
          <p className="text-gray-600">Call</p>
          <p className="text-gray-600">Wait ~ 20m</p>
        </div>
        <div className='bg-yellow-400 ml-20 rounded-full p-3 hover:cursor-pointer'><MdDeleteForever className='h-6 w-6'/></div>
        
      </div>

      <div className="flex justify-between">
        <button className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-gray-800 transition duration-300 w-full mr-2">
          <FaPhone className="mr-2" />
          Call
        </button>
        <button className="bg-black text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-gray-800 transition duration-300 w-full ml-2">
          <FaShareAlt className="mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default CallDetails;
