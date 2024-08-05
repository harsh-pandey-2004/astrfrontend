import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Sidebar({ response }) {
  
  const [isShow, setIsShow] = useState(false)
  return (
    <div className="hidden mb-16 md:block sidebar w-1/5 md:mt-[6rem] h-screen flex flex-col items-center bg-black text-yellow-400 overflow-y-auto ">
      <div className="w-full flex flex-col items-center gap-2 border-b-2 border-yellow-400 pt-6 pb-2  ">
        <div className="relative rounded-full">
          <img
            src="https://aws.astrotalk.com/assets/images/profile_pic.webp"
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
        {/* <a href="tel:+919569676072">Call Us: +1 (234) 567-890</a> */}
        <p className="text-sm text-yellow-500">+91 {response && response.mobile}</p>
      </div>

      <div className="flex  flex-col items-center gap-4 pt-4 text-center w-full   h-full ">
        <Link
          to={`profile`}
          className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400"
        >
          Edit Profile
        </Link>

        <Link
          to={`mail`}
          className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400 flex items-center justify-center gap-2"
        >
          <IoIosMail />
          Mail us
        </Link>

        <Link
          // to={`/panditdashboard/${response._id}/shedule`}
          to={`schedule`}
          className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400"
        >
          Schedule
        </Link>

        <Link
          to="/bookings"
          className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400"
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
