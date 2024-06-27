import React from 'react';
import { Link } from 'react-router-dom';



function AstroCard({ obj }) {
  return (
    <div className="flex justify-center mt-6 hover:cursor-pointer ">
      <div className="relative w-full mx-4 border border-gray-100 py-2 bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl ">
        <div >
            <button className='w-1/4 absolute top-0 bg-green-300 text-xs rounded-r-md '>Book Now</button>
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md bg-gradient-to-r from-yellow-500 to-yellow-300"
            src={obj.img}
            alt={obj.name}
          />
        </div>
        <div className="px-6 py-2 text-center">
          <div className="font-semibold text-lg  text-gray-900">{obj.name}</div>
          <p className="text-gray-600 text-base">{obj.desc}</p>
         <div className='flex items-center justify-between'>
           <Link to="/chat-with-astrologer"> <button>
            <div className="W-6 h-6 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/423/920/original/vector-chat-icon.jpg"
              className="w-full h-full "
            ></img>
          </div>
            </button></Link>
          <p><span className='text-gray-600'>Exp:</span> {obj.exp}+ years</p>
      <Link to="/call-to-astrologer">  <button>
           <div className="w-6 h-6 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://www.clipartkey.com/mpngs/m/218-2180655_phone-call-icon-png.png"
              className="w-full h-full"
            ></img>
          </div>
        </button></Link>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default AstroCard;
