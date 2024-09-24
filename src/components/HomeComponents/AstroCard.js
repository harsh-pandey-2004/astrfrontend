import React from "react";
import { Link } from "react-router-dom";

function AstroCard({ obj }) {
  console.log(obj);
  return (
    <div className="flex justify-center mt-6 hover:cursor-pointer ">
      <div className="relative w-full mx-4 border border-gray-100 py-2 bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl ">
        <div>
          {/* <button className='w-1/4 absolute top-0 bg-green-300 text-xs rounded-r-md '>Book Now</button> */}
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md bg-gradient-to-r from-yellow-500 to-yellow-300"
            src={obj.image}
            alt={obj.name}
          />
        </div>
        <div className="px-6 py-2 text-center">
          <div className="font-semibold text-lg  text-gray-900">{obj.name}</div>
          <p className="text-gray-600 text-base">{obj.desc}</p>
          <div className="flex items-center justify-between">
            <Link to="/chat-with-astrologer">
              {" "}
              <button>
                <div className="w-6 h-6 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 w-5"
                  >
                    <path
                     stroke="black"
                      strokeWidth="8px"
                      fill="#FFD43B"
                      d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"
                    />
                  </svg>
                </div>
              </button>
            </Link>
            <p>
              <span className="text-gray-600">Exp:</span> {obj.experience}+ years
            </p>
            <Link to="/call-to-astrologer">
              {" "}
              <button>
                <div className="w-6 h-6 rounded-full ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 "
                  
                  >
                    <path
                      fill="#FFD43B"
                      stroke="black"
                      strokeWidth="4px"
                      d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                    />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AstroCard;
