import React from 'react';

function PanditCard({ obj }) {
  return (
    <div className="flex justify-center mt-6">
      <div className=" bg-white rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className=" p-4 ">
          <img
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md bg-gradient-to-r from-yellow-500 to-yellow-300"
            src={obj.img}
            alt={obj.name}
          />
        </div>
        <div className="px-6 py-4 text-center">
          <div className="font-bold text-xl mb-2 text-gray-900">{obj.name}</div>
          <p className="text-gray-600 text-base">{obj.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default PanditCard;
