import React from "react";
import temples from "../BookAPoojaComponents/components/data";
import TopPandits from "./TopPandits";
import TopPooja from "./TopPooja";

const TrendingPooja = () => {
  return (
    <div className="mx-12">
      <h1 className="text-3xl lg:text-3xl text-[#f6c003] font-bold mb-6 text-center">
        Trending Poojas
      </h1>
      <div className="   grid gap-5    xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
        {temples.map((e) => (
          <TopPooja key={e.id} obj={e} />
        ))}
      </div>
      <div className="mt-10">
        <h1 className="text-3xl lg:text-3xl text-[#f6c003] font-bold mb-6 text-center">
          Our Pandits
        </h1>
        <TopPandits />
      </div>
    </div>
  );
};

export default TrendingPooja;
