import React from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
function Sidebar({ response }) {
  return (
    <div className="sidebar w-1/5   h-screen flex flex-col items-center  ">
      <div className="flex flex-col  items-center gap-2 border-b-2 border-black pt-6 pb-2 w-full">
        <div className="relative  rounded-full ">
          <img
            src="https://aws.astrotalk.com/assets/images/profile_pic.webp"
            height={100}
            width={100}
            className="rounded-full"
          />

          <div className="absolute bottom-2 right-2 p-1 rounded-full bg-white">
            <FaCamera />
          </div>
        </div>

        <p className="font-semibold text-blue-400">
          {response && response.firstName + "" + response.lastName}
        </p>
        <p className="font-semibold"> +91 {response && response.mobile}</p>
      </div>

      <div className="  flex flex-col items-center gap-4 pt-4  text-center">
        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full bg-slate-100  ">
          {" "}
          <Link to="/"> Edit Profile </Link>{" "}
        </div>

        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100  ">
          {" "}
          <Link to="/mail" className="flex items-center justify-center gap-2">
            {" "}
            <IoIosMail />
            Mail us{" "}
          </Link>
        </div>

        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 ">
          {" "}
          <Link to={`/panditdashboard/${response._id}/shedule`}>Schedule </Link>
        </div>

        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full bg-slate-100  ">
          {" "}
          <Link to="/bookings">Bookings </Link>
        </div>

        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100">
          {" "}
          <Link to="/stats">Stats </Link>
        </div>

        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 ">
          Support
        </div>
        <div className="py-2 px-3 rounded-full border hover:bg-yellow-400 transition hover:cursor-pointer hover:text-white text-sm w-full  bg-slate-100 ">
          Logout From Other Devices
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
