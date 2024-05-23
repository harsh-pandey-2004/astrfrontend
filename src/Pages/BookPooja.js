import React from "react";
import { SearchLogo } from "../icons/icons";
import Testimonials from "../components/BookAPoojaComponents/components/Testimonials";
import Stat from "../components/BookAPoojaComponents/components/Stat";
import Workflow from "../components/BookAPoojaComponents/components/Workflow";
import Destinations from "../components/BookAPoojaComponents/components/Destinations";
import Preference from "../components/BookAPoojaComponents/components/Preference";
import Header from "../components/BookAPoojaComponents/components/Header";
const BookPooja = (props) => {
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
        Book Pooja
      </h1>
      <p className="text-xl text-center font-sans font-semibold text-[#f1d980] md:text-2xl">
        Get Pooja Done in various holy temples on behalf of your Name
      </p>
      <div className="flex flex-col  items-center justify-center w-screen  ">
        <Header />

        <div className="flex items-center px-12  w-full mt-2">
          <div className="h-px w-full bg-[#f1d980] "></div>
          <img src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp" />
          <div className="h-px w-full bg-[#f1d980] "></div>
        </div>

        <Preference  />

        <Destinations />

        <Workflow />

        <Stat amount="22,758+" live="711" customers="45.5" type="pooja"/>

        <Testimonials />
      </div>
    </div>
  );
};

export default BookPooja;
