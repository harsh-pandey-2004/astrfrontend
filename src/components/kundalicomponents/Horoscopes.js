import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { horoscope, responsive } from "../kundalicomponents/Data";
import Horoscope from "../kundalicomponents/Horoscope";
import { useMediaQuery } from "@material-ui/core";

function Horoscopes() {
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");

  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }

  return (
    <div className="bg-yellow-100 my-32s px-12 py-5">
      <h1 className="text-center text-2xl font-semibold">TODAY'S HOROSCOPE</h1>
      <Carousel
        showDots={myVariable}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        className="mt-8  pr-20 "
      >
        {horoscope.map((obj) => {
          return <Horoscope key={obj.id} obj={obj} />;
        })}
      </Carousel>
    </div>
  );
}

export default Horoscopes;
