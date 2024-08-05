import React from "react";
import { Link } from "react-router-dom";
import God from "../../images/ashtalakshmi-Rahu-laf-Hp.webp"
import Circle from "../../images/blog1.webp"
import Circle2 from "../../images/blog2.webp"


const Blogs = () => {
  return (
    <div className=" text-center w-full   md:flex xs:flex-col gap-6 pb-4  sm:px-14">
      {/* News */}
      <div className=" rounded-md md:w-1/3 xs:w-full  px-4 bg-white ">
        <h1 className="text-start text-2xl font-semibold py-3">
          What's the News?
        </h1>

        <div>
          <img
            src={God}
            className="border-2 rounded-md border-gray-100"
          />
          <div className="text-xl text-start font-normal my-3">
            <p>Last Few Hrs: Invoke Boons of 8</p>
            <p>Lakshmi & Rahu in Pisces</p>
          </div>

          <p className="text-start text-gray-500">
            Last Few Hours to invoke the 8 forms of Wealth Goddess Lakshmi and
            the benefic blessings of Rahu in Pisces to remove obstacles to
            wealth creation, fulfill sincere...
          </p>

          <Link to="/">
            <p className="hover:text-yellow-500 hover:border-b-yellow-500  my-8 text-[#f6c300] border-b-[#f6c300] border-b w-fit ml-32">
              View all News and Events
            </p>
          </Link>
        </div>
      </div>

      {/* Blogs */}
      <div className=" rounded-md md:w-2/3 xs:w-full px-4 bg-white ">
        <h1 className="sm:text-start text-2xl font-semibold py-3 text-center">
          Blogs & Articles
        </h1>
        <div className="mt-3  sm:hidden block">
          <p className="text-start text-lg font-semibold">
            Some Trending Topics
          </p>
          <div className="md:flex xs:flex-col  items-center gap-4 mt-2 grid grid-cols-2">
            <button className="px-2 py-2 sm:py-1 rounded-full border-2 border-yellow-500 hover:bg-[#f6c300] hover:text-white text-xs">
              Astrology Basics
            </button>
            <button className="px-2 py-2 sm:py-1 rounded-full border-2 border-[#f6c300] hover:bg-[#f6c300] hover:text-white text-xs">
              Planetry influences
            </button>
            <button className="px-2 py-2 sm:py-1 rounded-full border-2 border-[#f6c300] hover:bg-[#f6c300] hover:text-white text-xs">
              Relationships
            </button>
          </div>
        </div>
        <div className="md:flex items-center xs:flex-col md:flex-row  gap-2 mt-2 flex flex-col-reverse">
          <div className="md:w-1/3 xs:w-full">
            <img
              src={Circle}
              className="rounded-md "
            />
            <p className="text-gray-500 font-semibold text-start py-2">
              ASTROLOGY
            </p>
            <p className=" text-start text-lg font-semibold">
              4 Zodiac Signs with
            </p>
            <p className=" text-start text-lg font-semibold">Singing Talent</p>
          </div>

          <div className="md:w-1/3 xs:w-full">
            <img
              src={Circle2}
              className="rounded-md md:h-40"
            />
            <p className="text-gray-500 font-semibold text-start py-2">
              HOROSCOPES
            </p>
            <p className=" text-start text-lg font-semibold">
              4 Zodiac Signs who have
            </p>
            <p className=" text-start text-lg font-semibold">Soft Voice</p>
          </div>

          <div className="md:w-1/3 xs:w-full">
            <img
              src={Circle}
              className="rounded-md"
            />
            <p className="text-gray-500 font-semibold text-start py-2">
              ASTROLOGY
            </p>
            <p className=" text-start text-lg font-semibold">
              4 Zodiac Signs with
            </p>
            <p className=" text-start text-lg font-semibold">Singing Talent</p>
          </div>
        </div>
        <div className="mt-8  hidden sm:block">
          <p className="text-start text-lg font-semibold">
            Some Trending Topics
          </p>
          <div className="md:flex xs:flex-col  items-center gap-4 mt-2 grid grid-cols-2">
            <button className="px-2 py-1 rounded-full border-2 border-yellow-500 hover:bg-[#f6c300] hover:text-white">
              Astrology Basics
            </button>
            <button className="px-2 py-1 rounded-full border-2 border-[#f6c300] hover:bg-[#f6c300] hover:text-white">
              Planetry influences
            </button>
            <button className="px-2 py-1 rounded-full border-2 border-[#f6c300] hover:bg-[#f6c300] hover:text-white">
              Relationships
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
