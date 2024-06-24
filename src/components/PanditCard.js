import React from 'react';


function PanditCard({ obj }) {
  return (
    <div className="flex justify-center mt-6  ">
      <div className=" w-full mx-4 bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className=' relative'>
            <button className='w-1/4 absolute top-0 bg-green-200 text-xs rounded-r-md '>Book Now</button>
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md bg-gradient-to-r from-yellow-500 to-yellow-300"
            src={obj.img}
            alt={obj.name}
          />
        </div>
        <div className="px-6 py-2 text-center">
          <div className="font-semibold text-xl  text-gray-900">{obj.name}</div>
          <p className="text-gray-600 text-base">{obj.desc}</p>
          <p><span className='text-gray-600'>Exp:</span> {obj.exp}+ years</p>
          {/* <button className="flex items-center justify-center py-1 gap-4 border border-green-600 text-green-600 hover:text-white hover:bg-green-600 transition duration-500 rounded-md  mx-auto w-1/2 ">
        <p>Book Now</p> 
      </button> */}
        </div>
      </div>
    </div>
  );
}

export default PanditCard;
