import React from "react";
import TrendingPooja from "../components/BookaPanditComponents/TrendingPooja";
import { SearchLogo } from "../icons/icons";

const BookPandit = (props) => {
  const IsMenuClicked = props.IsmenuClicked;
  const showblur = props.showblur;
  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
      } 
       flex flex-col bg-[#ffff] gap-1 relative top-20 lg:top-0  pt-10 py-20 w-full`}
    >
      <h1 className="text-2xl text-center font-sans font-semibold md:text-3xl text-[#f6c003]">
        Book Pandit
      </h1>
      <p className="text-xl text-center font-sans font-semibold text-[#f1d980] md:text-2xl">
        Get Pandit filter by price location and type of Pooja
      </p>
      <div className="flex flex-col  items-center justify-center w-screen  ">
        <div className="flex items-center px-12  w-full mt-2">
          <div className="h-px w-full bg-[#f1d980] "></div>
          <img src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp" />
          <div className="h-px w-full bg-[#f1d980] "></div>
        </div>
      </div>
      <TrendingPooja/>
    </div>
  );
};

export default BookPandit;
