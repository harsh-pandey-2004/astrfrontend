import React from "react";
import { FilterIcon, SearchLogo, SortIcon } from "../icons/icons";

const CallwithAstrologer = () => {
  return (
    <div className="max-w-7xl h-screen relative top-28 mx-auto px-5 lg:top-0">
      <div className="flex lg:justify-between items-center py-5 flex-col lg:flex-row gap-5">
        <div className="flex gap-5 w-full items-center lg:justify-between justify-center">
          <h1 className=" px-2 py-2 rounded-md bg-orange-500  hover:shadow-lg  border-2 transition-all text-md w-44 lg:px-8 lg:py-4 lg:w-60 text-white  text-center">
            Talk to Astrologer
          </h1>
          <p>Balance : $0</p>
        </div>
        <div className="flex gap-3 flex-row lg:flex-row sm:flex-row w-full justify-evenly  lg:justify-end">
          <button className="px-3 py-1 rounded bg-white text-green-500 hover:shadow-lg hover:bg-green-500 border-2 border-green-500 hover:text-white transition-all">
            Recharge
          </button>
          <button className="px-3 py-1 rounded bg-white  hover:shadow-lg  border-2 transition-all text-sans flex gap-1">
            <FilterIcon />
            Filter
          </button>
          <button className="px-3 py-1 rounded bg-white  hover:shadow-lg  border-2 transition-all text-sans flex gap-1">
            <SortIcon />
            Sort by
          </button>
          <div className="relative hidden sm:block">
            <input
              placeholder="Search name..."
              className="px-3 py-1 rounded bg-white  hover:shadow-lg  border-2 transition-all text-sans"
            ></input>
            <div className="absolute right-0 top-[0.15rem] bg-orange-500 py-1 px-2 rounded cursor-pointer hover:bg-orange-400">
              <SearchLogo />
            </div>
          </div>
        </div>
        <div className="relative  sm:hidden block w-full">
          <input
            placeholder="Search name..."
            className="px-3 py-1 rounded bg-white  hover:shadow-lg  border-2 transition-all text-sans w-full"
          ></input>
          <div className="absolute right-0 top-[0.15rem] bg-orange-500 py-1 px-2 rounded cursor-pointer hover:bg-orange-400">
            <SearchLogo />
          </div>
        </div>
      </div>

      {/* ///card sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-5">
        <div className="flex gap-4  p-5 justify-between rounded-md shadow-2xl font-sans border-2 hover:box-shadow cursor-pointer">
          <div className="flex flex-col gap-3 items-center justify-center">
            <img
              src="https://th.bing.com/th/id/R.0301819f445a8855c4a577a6763fb62d?rik=TT%2fgaYZuz1YEig&riu=http%3a%2f%2fanhede.se%2fwp-content%2fuploads%2f2014%2f01%2f130221-2528.jpg&ehk=LToqkipED3KxGj7CVuMoQrvi487RY2HN6IPZ59FCWNQ%3d&risl=&pid=ImgRaw&r=0"
              className="w-14 h-14 rounded-full bg-cover  bg-center"
            ></img>
            <div>⭐⭐⭐⭐⭐</div>
            <p className="text-gray-400">1980 orders</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="hover:text-green-400 cursor-pointer">Prashi</p>
            <p>Tarot</p>
            <p>English, Hindi</p>
            <p>Exp: 4yrs</p>
            <p className="text-red-500 text-sans text-xl">Free</p>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p className="items-end flex">✅</p>
            <button className="p-2 bg-green-600 rounded text-white hover:shadow-xl hover:bg-green-500">
              Call Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallwithAstrologer;
