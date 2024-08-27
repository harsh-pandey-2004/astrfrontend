import React from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsBank2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";

function Sidebar({ response }) {
  const [curPage,setCurPage]=useState("profile");
  return (
    <div className="hidden mb-16  sidebar w-1/5 md:mt-[5rem] h-screen md:flex flex-col items-center bg-black text-yellow-400 overflow-y-auto ">
      {/* User Profile Section */}
      <div className="flex flex-col items-center gap-2 border-b-2 border-yellow-400 pt-6 pb-2 w-full">
        <div className="relative rounded-full">
          <img
            src={`https://astrobackend.onrender.com${response.image}`}
            alt="Profile"
            height={100}
            width={100}
            className="rounded-full"
          />
          <div className="absolute bottom-2 right-2 p-1 rounded-full bg-white text-black">
            <FaCamera />
          </div>
        </div>
        <p className="font-semibold text-white">
          {response && response.firstName + " " + response.lastName}
        </p>
        <p className="text-sm text-yellow-500">
          +91 {response && response.mobile}
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center gap-4 pt-4 text-center w-full">
        <Link
          to={`profile`}
          onClick={()=>{setCurPage("profile")}}
          className={` ${curPage=="profile" ?  "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
          <CgProfile />
          Edit Profile
        </Link>

        <Link
          to={`mail`}
          onClick={()=>{setCurPage("mail")}}
          className={` ${curPage=="mail" ?  "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
          <IoIosMail />
          Mail us
        </Link>

        <Link
          // to={`/panditdashboard/${response._id}/shedule`}
          to={`schedule`}
          onClick={()=>{setCurPage("schedule")}}
          className={` ${curPage=="schedule" ?  "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
           <FaCalendarAlt />
          Schedule
        </Link>



        <Link
          
          to={`panditbank`}
          onClick={()=>{setCurPage("bank")}}
          className={` ${curPage=="bank" ?  "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
          <BsBank2 />
          Bank Details
        </Link>

        <Link
          to="/bookings"
          onClick={()=>{setCurPage("bookings")}}
          className={`${curPage=="bookings" ? "bg-yellow-400 text-black" : " bg-black text-yellow-400" } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%]`}
        >
          Bookings
        </Link>

        <Link
          to="/stats"
          className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400"
        >
          Stats
        </Link>

        <div className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400">
          Support
        </div>

        <div className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400">
          Logout From Other Devices
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
