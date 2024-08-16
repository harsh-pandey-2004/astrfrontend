import React, { useState } from 'react';
import { IoMdInformationCircle } from "react-icons/io";

const Settings = () => {
  const [isChatOn, setIsChatOn] = useState(false);
  const [isCallOn, setIsCallOn] = useState(false);
  const [isVideoCallOn, setIsVideoCallOn] = useState(false);
  const [isEmergencyChat, setEmergencyChat] = useState(false);
  const [isEmergencyCall, setEmergencyCall] = useState(false);

  const handleChatClick = () => {
    setIsChatOn((prevState) => !prevState); // Toggle the state for Chat
  };

  const handleCallClick = () => {
    setIsCallOn((prevState) => !prevState); // Toggle the state for Call
  };

  const handleVideoCallClick = () => {
    setIsVideoCallOn((prevState) => !prevState); // Toggle the state for Video Call
  };

  const handleEmergencyChat = () => {
    setEmergencyChat((prevState) => !prevState); // Toggle the state for Emergency Chat
  };

  const handleEmergencyCall = () => {
    setEmergencyCall((prevState) => !prevState); // Toggle the state for Emergency Call
  };

  return (
    <div className=' md:mt-20 w-4/5 pt-8 pb-4 absolute right-0 h-screen flex flex-col gap-6 items-center justify-center bg-gray-800 text-yellow-400'>
      <div className='flex flex-col gap-2 max-w-2xl mx-auto mt-12'>

        {/* Choose option selection */}
        <div className='items-center justify-center rounded-lg border border-yellow-400 bg-black py-4'>
          {/* Header */}
          <div className='flex flex-row justify-between max-w-xl mx-auto px-3'>
            <span className='font-semibold pl-10'>Type</span>
            <span className='font-semibold'>Status</span>
            <span className='font-semibold text-center pr-6'>Next Online Time</span>
          </div>

          {/* Options */}
          <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
            <div className="flex flex-col items-start">
              <span className='pl-10'>Chat</span>
              <span className="pl-5 text-gray-400">India: $9.0</span>
            </div>
            <button onClick={handleChatClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isChatOn ? 'bg-yellow-400' : 'bg-gray-300'}`}>
              <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isChatOn ? 'translate-x-12' : ''}`} />
              <span className={`absolute left-2 text-xs font-medium ${isChatOn ? 'text-gray-700' : 'text-gray-700'}`}>OFF</span>
              <span className={`absolute right-4 text-xs font-medium ${isChatOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
            </button>
            <span className="border border-yellow-400 flex items-center justify-center p-2 rounded">
              03 May 24, 11:00 AM
            </span>
          </div>

          <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
            <div className="flex flex-col items-start">
              <span className='pl-10'>Call</span>
              <span className="pl-5 text-gray-400">India: $9.0</span>
            </div>
            <button onClick={handleCallClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isCallOn ? 'bg-yellow-400' : 'bg-gray-300'}`}>
              <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isCallOn ? 'translate-x-12' : ''}`} />
              <span className={`absolute left-2 text-xs font-medium ${isCallOn ? 'text-gray-700' : 'text-gray-700'}`}>OFF</span>
              <span className={`absolute right-4 text-xs font-medium ${isCallOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
            </button>
            <span className="border border-yellow-400 flex items-center justify-center p-2 rounded">
              03 May 24, 11:00 AM
            </span>
          </div>

          <div className="flex flex-row justify-between pl-10 pr-10 items-center my-4">
            <div className="flex flex-col items-start">
              <span className='pl-5'>Video Call</span>
              <span className="pl-5 text-gray-400">India: $9.0</span>
            </div>
            <button onClick={handleVideoCallClick} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isVideoCallOn ? 'bg-yellow-400' : 'bg-gray-300'}`}>
              <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isVideoCallOn ? 'translate-x-12' : ''}`} />
              <span className={`absolute left-2 text-xs font-medium ${isVideoCallOn ? 'text-gray-700' : 'text-gray-700'}`}>OFF</span>
              <span className={`absolute right-4 text-xs font-medium ${isVideoCallOn ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
            </button>
            <span className="border border-yellow-400 flex items-center justify-center p-2 rounded">
              03 May 24, 11:00 AM
            </span>
          </div>

          <div>

            <div className="flex flex-row justify-between pl-10 pr-40 items-center my-4">
              <div className="flex flex-col items-start">
                <span>Emergency Chat</span>
                <span className="pl-5 text-gray-400">India: $9.0</span>
              </div>
              <div className='pr-6'>
                <button onClick={handleEmergencyChat} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isEmergencyChat ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                  <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isEmergencyChat ? 'translate-x-12' : ''}`} />
                  <span className={`absolute left-2 text-xs font-medium ${isEmergencyChat ? 'text-gray-700' : 'text-gray-700'}`}>OFF</span>
                  <span className={`absolute right-4 text-xs font-medium ${isEmergencyChat ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
                </button>
              </div>
              <div>
                <span className='text-gray-400'>Used: 0</span>

              </div>
            </div>
            <div className="flex flex-row justify-between pl-10 pr-36 items-center my-4">
              <div className="flex flex-col items-start">
                <span>Emergency Call</span>
                <span className="pl-5 text-gray-400">India: $9.0</span>
              </div>
              <div className='pl-16'>
                <button onClick={handleEmergencyCall} className={`relative rounded-full w-24 h-8 flex items-center p-1 ${isEmergencyCall ? 'bg-yellow-400' : 'bg-gray-300'}`}>
                  <div className={`absolute left-1 top-1 rounded-full w-9 h-6 bg-white shadow-md transform transition-transform ${isEmergencyCall ? 'translate-x-12' : ''}`} />
                  <span className={`absolute left-2 text-xs font-medium ${isEmergencyCall ? 'text-gray-700' : 'text-gray-700'}`}>OFF</span>
                  <span className={`absolute right-4 text-xs font-medium ${isEmergencyCall ? 'text-gray-700' : 'text-gray-300'}`}>ON</span>
                </button>
              </div>
              <div className='pl-20'>
                <span className='pl-2 text-gray-400'>Total: 150</span>
                <p className='pl-5'><IoMdInformationCircle /></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* view performance */}
      <div className='bg-yellow-400 p-3 w-full border border-black rounded flex items-center justify-between'>
        <div className='pl-4'>
          <p className='text-black font-semibold'>Check Your Performance</p>
          <p className='text-black'>Look into your daily rating, earning and performance on AstroCaptain</p>
        </div>
        <div>
          <button className='bg-black text-yellow-400 border rounded p-4 hover:bg-gray-800'>
            View my Score
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
