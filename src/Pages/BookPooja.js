import React from "react";
import { SearchLogo } from "../icons/icons";

const BookPooja = () => {
  return (
    <div className="mt-5  md:mx-20 flex flex-col gap-1 relative top-24 lg:top-0 max-w-7xl mx-auto">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-center font-sans font-semibold md:text-3xl">
          Online Prasaad
        </h1>
        <p className="text-xl text-center font-sans font-semibold text-gray-500 md:text-2xl">
          Get Holy Prasad from different Religious Places
        </p>
        <div className="border-b-4 relative flex justify-center my-10">
          <img
            src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp"
            alt="astrologo"
            className="absolute top-[-1.5rem] "
          ></img>
        </div>
      </div>
      <div className="w-full flex justify-end relative">
        <input
          type="text "
          placeholder="Let's Find What you are looking for..?"
          className="px-8 py-3 border-2 w-96 outline-none border-yellow-500 rounded-lg shadow-2xl relative"
        ></input>
        <div className="absolute top-[0.12rem] right-[0rem] bg-orange-500 p-3  px-4 cursor-pointer hover:bg-orange-600 rounded-lg">
          <SearchLogo />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-3/4">
        <div className="relative rounded-md hover:box-shadow cursor-pointer h-64 transition-all shadow-lg">
          <img
            src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/300x300/images/a7b11ca4-eca7-46c5-8981-baca7b103e37.jpg"
            className="rounded-md w-full h-full bg-cover"
          ></img>
          <div className="absolute bottom-0 text-white flex flex-col gap-1 px-4 py-2 border-t-2 filter rounded-lg z-50 shadow-bg px-4;
    py-2;
    border-t-2;">
            <p>VIP E-POOJA</p>
            <p>Almost everything runs on internet today...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPooja;
