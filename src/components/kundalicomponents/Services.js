import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Array, responsive } from "../kundalicomponents/Data";
import Service from "./Service";
import { useMediaQuery } from "@mui/material";

function Services() {
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");

  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }

  return (
    <div className="py-10 px-12 max-h-fit bg-gray-100 relative top-24 lg:top-0">
      <h1 className="text-center text-2xl font-semibold">
        COMPLIMENTARY ASTROLOGY SERVICES
      </h1>

      <Carousel
        showDots={myVariable}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        className="mt-8  pl-20 relative"
      >
        {Array.map((obj) => {
          return <Service key={obj.id} obj={obj} />;
        })}
      </Carousel>
    </div>
  );
}

export default Services;
