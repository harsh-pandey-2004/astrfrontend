import React from 'react'
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import CallDetails from './CallDetails';
import ChatDetails from './ChatDetails';
const OrderHistory = () => {


  const[curTab,setCurTab]=useState("call");

  return (
    <div className='h-screen font-semibold relative top-24 mb-28'>
      <div className='flex gap-4 px-2 pt-2  text-sm'>
        <button onClick={()=>{setCurTab("call")}} className={`${curTab=="call" ? "bg-yellow-400 text-black" :"bg-black text-yellow-400"} w-full py-2 border rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2`}> <FaPhoneAlt /> Call</button>
        <button  onClick={()=>{setCurTab("chat")}} className={`${curTab=="chat" ? "bg-yellow-400 text-black" :"bg-black text-yellow-400"} w-full py-2 border rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2`}> <MdChatBubble /> Chat</button>
        <button  onClick={()=>{setCurTab("report")}} className={`${curTab=="report" ? "bg-yellow-400 text-black" :"bg-black text-yellow-400"} w-full py-2 border rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2`}> <MdReportProblem /> Report</button>
        <button  onClick={()=>{setCurTab("shop")}} className={`${curTab=="shop" ? "bg-yellow-400 text-black" :"bg-black text-yellow-400"} w-full py-2 border rounded-full hover:bg-yellow-400 hover:text-black transition flex items-center justify-center gap-2`}> <FaShoppingCart /> AstroShop</button>
      </div>

      
        {curTab=="call" && 
        <div className='mt-6 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
          <CallDetails/><CallDetails/><CallDetails/>
          </div>}


          {curTab=="chat" && 
        <div className='mt-6 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1'>
          <ChatDetails/> <ChatDetails/> <ChatDetails/>
          </div>}
      
    </div>
  )
}

export default OrderHistory