import React from "react";

const Breadcrumbs = () => {
  return (
    <div className="container mx-auto px-4 py-4 bg-white shadow-md rounded-lg">
      <ul className="flex items-center space-x-4 text-gray-700">
        <li>
          <a
            href="/"
            aria-label="home"
            className="text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="/freekundli" className="text-blue-600 hover:text-blue-800">
            Free Kundli
          </a>
        </li>
        <li>
          <div className="current active text-capitalize font-semibold">
            Kundli Details
          </div>
        </li>
        <li className="ml-auto">
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center space-x-2 transition duration-300">
            <span>Share</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
