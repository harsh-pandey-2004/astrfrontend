import React from "react";

import Marquee from "react-fast-marquee";
const TestimonialSlider = ({ showblur }) => {
  return (
    <div
      className={`p-5 w-full sm:w-[75%] mx-auto relative top-36 lg:top-0 ${
        showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none overflow-hidden"
          : ""
      }`}
    >
      <div className="flex flex-col gap-3 items-center">
        <p className="uppercase text-gray-500">What people Say</p>
        <h1 className="text-4xl font-serif">
          Our <span className="text-orange-500">Testimonials...</span>
        </h1>
      </div>
      <div className="flex  w-full shadow-lg my-10 p-2 rounded justify-between">
        <Marquee>
          <div className="flex flex-col items-center justify-center border-2 px-10 gap-5 py-10 border-b-4 border-b-orange-500 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              className="w-28 h-28 rounded-full"
            ></img>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">lorem isopknjejvbjbvbrvjbbj</p>
              <p className="text-xl font-serif">Harshu</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-2 px-10 gap-5 mx-5 py-10 border-b-4 border-b-orange-500 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              className="w-28 h-28 rounded-full"
            ></img>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">lorem isopknjejvbjbvbrvjbbj</p>
              <p className="text-xl font-serif">Harshu</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-2 px-10 gap-5 mx-5 py-10 border-b-4 border-b-orange-500 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              className="w-28 h-28 rounded-full"
            ></img>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">lorem isopknjejvbjbvbrvjbbj</p>
              <p className="text-xl font-serif">Harshu</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center border-2 px-10 gap-5 mx-5 py-10 border-b-4 border-b-orange-500 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              className="w-28 h-28 rounded-full"
            ></img>
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm">lorem isopknjejvbjbvbrvjbbj</p>
              <p className="text-xl font-serif">Harshu</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TestimonialSlider;
