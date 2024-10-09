import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { BsBank2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { FaCalendarAlt } from "react-icons/fa";
function Sidebar({ response,onLogout }) {
  const [isShow, setIsShow] = useState(false);
  const [curPage, setCurPage] = useState("profile");
  // console.log(response);
  return (
    <div className="md:w-1/5">
      <div className="hidden mb-16  sidebar w-full md:mt-[5rem] h-screen md:flex flex-col items-center bg-black text-yellow-400 overflow-y-auto  mr-24 ">
        <div className="w-full flex flex-col items-center gap-2 border-b-2 border-yellow-400 pt-6 pb-2  ">
          <div className="relative rounded-full">
            <img
              src={`https://astrobackend.onrender.com${response.image}`}
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
          <p className="text-sm text-yellow-500">
            +91 {response && response.mobile}
          </p>
        </div>

        <div className="flex  flex-col items-center gap-4 pt-4 text-center w-full   h-full ">
          <Link
            to={`profile`}
            onClick={() => {
              setCurPage("profile");
            }}
            className={`${
              curPage == "profile"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <CgProfile />
            Profile
          </Link>

          <Link
            to={`mail`}
            onClick={() => {
              setCurPage("mail");
            }}
            className={`${
              curPage == "mail"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <IoIosMail />
            Mail us
          </Link>

          <Link
            to={`settings`}
            onClick={() => {
              setCurPage("settings");
            }}
            className={`${
              curPage == "settings"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <IoMdSettings />
            Settings
          </Link>

          {/* <Link
            to={`schedule`}
            onClick={() => {
              setCurPage("schedule");
            }}
            className={`${
              curPage == "schedule"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <FaCalendarAlt />
            Schedule
          </Link> */}

          <Link
            // to={`/panditdashboard/${response._id}/shedule`}
            to={`chats`}
            onClick={() => {
              setCurPage("chats");
            }}
            className={`${
              curPage == "chats"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <BsChatSquareQuoteFill />
            Chats
          </Link>

          <Link
            // to={`/panditdashboard/${response._id}/shedule`}
            to={`bank`}
            onClick={() => {
              setCurPage("bank");
            }}
            className={`${
              curPage == "bank"
                ? "bg-yellow-400 text-black"
                : " bg-black text-yellow-400"
            } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
          >
            <BsBank2 />
            Bank Details
          </Link>

          {/* <Link
          to={`performance`}
          onClick={()=>{setCurPage("performance")}}
          className={`${curPage=="performance" ? "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
          <ImStatsBars />
          Performance
        </Link> */}

          <div className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400">
            Support
          </div>
          <div onClick={onLogout}
           className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black hover:cursor-pointer transition text-sm w-[75%] bg-black text-yellow-400">
            Logout 
          </div>
        </div>
      </div>
      {isShow && (
        <div className="  sidebar w-4/5 md:hidden h-screen flex-col items-center bg-black text-yellow-400 overflow-y-auto absolute right-0 top-0 z-50 ">
          <div className="absolute" onClick={() => setIsShow(!isShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full flex flex-col items-center gap-2 border-b-2 border-yellow-400 pt-6 pb-2  ">
            <div className="relative rounded-full">
              <img
                src={`https://astrobackend.onrender.com${response.image}`}
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
            <p className="text-sm text-yellow-500">
              +91 {response && response.mobile}
            </p>
          </div>

          <div className="flex  flex-col items-center gap-4 pt-4 text-center w-full   h-full ">
            <Link
              to={`profile`}
              onClick={() => {
                setCurPage("profile");
              }}
              className={`${
                curPage == "profile"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <CgProfile />
              Profile
            </Link>

            <Link
              to={`mail`}
              onClick={() => {
                setCurPage("mail");
              }}
              className={`${
                curPage == "mail"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <IoIosMail />
              Mail us
            </Link>

            <Link
              to={`settings`}
              onClick={() => {
                setCurPage("settings");
              }}
              className={`${
                curPage == "settings"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <IoMdSettings />
              Settings
            </Link>

            <Link
              to={`schedule`}
              onClick={() => {
                setCurPage("schedule");
              }}
              className={`${
                curPage == "schedule"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <FaCalendarAlt />
              Schedule
            </Link>

            <Link
              // to={`/panditdashboard/${response._id}/shedule`}
              to={`chats`}
              onClick={() => {
                setCurPage("chats");
              }}
              className={`${
                curPage == "chats"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <BsChatSquareQuoteFill />
              Chats
            </Link>

            <Link
              // to={`/panditdashboard/${response._id}/shedule`}
              to={`bank`}
              onClick={() => {
                setCurPage("bank");
              }}
              className={`${
                curPage == "bank"
                  ? "bg-yellow-400 text-black"
                  : " bg-black text-yellow-400"
              } py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
            >
              <BsBank2 />
              Bank Details
            </Link>

            {/* <Link
          to={`performance`}
          onClick={()=>{setCurPage("performance")}}
          className={`${curPage=="performance" ? "bg-yellow-400 text-black" : " bg-black text-yellow-400"} py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] flex items-center justify-center gap-2`}
        >
          <ImStatsBars />
          Performance
        </Link> */}

            <div className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400">
              Support
            </div>
            <div className="py-2 px-3 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-sm w-[75%] bg-black text-yellow-400">
              Logout From Other Devices
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsShow(!isShow)}
        className="absolute top-0 right-5 z-40   bg-opacity-50 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#0000"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#f6c300"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default Sidebar;
