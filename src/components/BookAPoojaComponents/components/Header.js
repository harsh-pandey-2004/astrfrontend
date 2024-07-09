import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-black py-4 w-full">
      <div className="w-full mx-auto px-6">
        <div className="flex items-center justify-between gap-5 max-w-3xl mx-auto flex-col md:flex-row ">
          {/* Search by City */}
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center border border-yellow-400 rounded-md px-2 py-1 w-full">
              <input
                placeholder="Search by City"
                className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full"
              />
            </div>
          </div>

          {/* Search by God */}
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center border border-yellow-400 rounded-md px-2 py-1 w-full">
              <input
                placeholder="Search by God"
                className="bg-transparent focus:outline-none text-white placeholder-gray-400 w-full"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 max-w-3xl mx-auto">
          <button className="w-full bg-yellow-400 text-black py-2 px-4 rounded-md text-center">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
