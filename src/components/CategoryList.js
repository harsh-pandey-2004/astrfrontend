import React from "react";
import Category from "../images/category.webp"

const CategoryList = ({ categories }) => {
  return (
    <div className="mb-8  px-4 w-full  ">
      <h1 className="text-center text-2xl mb-5 font-sans font-semibold  py-4  flex items-center justify-center gap-2">
        <img
          src={Category}
          alt="1"
          className="w-10 h-10"
        ></img>
        <p className="flex items-center flex-col">
          Categories
          <span className="text-gray-400 text-xs">Some Trending Topics</span>
        </p>
      </h1>
      <ul className="flex flex-wrap">
        {categories.map((category, index) => (
          <li key={index} className="mr-4 mb-2">
            <button className="bg-white hover:bg-orange-400 rounded-full px-4 py-2 hover:text-white transition-all border-2 border-orange-400">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
