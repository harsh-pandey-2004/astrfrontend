import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  return (
    <div className="flex flex-col gap-4 items-center Justify center w-full px-12 pt-2">
        <div className=" md:flex  gap-8  xs:flex-col    md:justify-end xs:justify-center     w-full mt-6 ">
        <div className="flex items-center border rounded-full px-2   border-yellow-400  relative py-2 bg-gray-100">
          <input
            placeholder="Search by City"
            className="  focus:outline-none pl-2 bg-gray-100 "
          />
          <button className="absolute right-8 top-2  py-1  ">
            <IoSearchSharp />
          </button>
        </div>

        <div className="SearchBar flex items-center border rounded-full px-2 py-2  border-yellow-400 relative  md:mt-0 sm:mt-4 bg-gray-100">
          <input
            placeholder="Search by God"
            className=" focus:outline-none pl-2 bg-gray-100"
          />
          <button className="absolute right-8 top-2  py-1   ">
            <IoSearchSharp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
