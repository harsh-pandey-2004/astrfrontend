import React from "react";
import temples from "../BookAPoojaComponents/components/data";
import TopPandits from "./TopPandits";
import TopPooja from "./TopPooja";

const TrendingPooja = () => {
  return (
    <div className="ml-10">
      <h1 className="text-3xl lg:text-3xl text-[#f6c003] font-bold mb-6 text-center">
        Trending Poojas
      </h1>
      <div className="grid-cols-4 grid gap-5">
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
