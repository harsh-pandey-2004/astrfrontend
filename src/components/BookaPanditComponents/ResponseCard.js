import React from "react";
import { Link } from "react-router-dom";

function ResponseCard({ filterData }) {
  return (
    <>
      {filterData && filterData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full p-4">
          {filterData.map((e) => (
            <div
              key={e._id}
              className="flex flex-col items-center justify-center border-2 border-black rounded-lg overflow-hidden relative"
              style={{ height: "300px" }}
            >
              <Link to={`/poojapandit/${e._id}`} className="w-full h-full">
                <img
                  src={e.image}
                  className="w-full h-full object-cover absolute top-0 left-0"
                  alt="Image"
                />
              </Link>
              <div className="h-1/3 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white w-full relative z-10 p-2 bottom-0">
                <p className="text-lg font-semibold">{e.belongsTo}</p>
                <p className="text-sm">8000-12000</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl text-black  flex items-center justify-center h-[50vh]">
          Search for Responses....
        </div>
      )}
    </>
  );
}

export default ResponseCard;
