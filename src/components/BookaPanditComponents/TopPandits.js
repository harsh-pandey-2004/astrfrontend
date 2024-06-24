import React from "react";
import Pandit from "./Pandit";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PandirArray, responsive } from "../kundalicomponents/Data";
import { useMediaQuery } from "@mui/material";

const TopPandits = () => {
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");

  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }
  return (
    <div>
      <Carousel
        showDots={myVariable}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        className="mt-8  pl-20 relative"
      > 
        {PandirArray.map((obj) => {
          return <Pandit key={obj.id} obj={obj} />;
        })}
      </Carousel>

        
    </div>
  );
};

export default TopPandits;
