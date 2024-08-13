import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { horoscope, responsive } from "../kundalicomponents/Data";
import Horoscope from "../kundalicomponents/Horoscope";
import { useMediaQuery } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Horoscopes.css"; // Import your custom CSS

function Horoscopes() {
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");

  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <div className="carousel-arrow left-arrow" onClick={onClick} data-aos="fade-right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#f6c300" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div className="carousel-arrow right-arrow" onClick={onClick} data-aos="fade-left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="yellow" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <div className="sm:px-12 px-5 py-5 lg:py-14 relative sm:top-[4rem] lg:top-0">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold" data-aos="fade-up">
        TODAY'S HOROSCOPE
      </h1>
      <Carousel
        showDots={myVariable}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        className="mt-8 pr-20"
      >
        {horoscope.map((obj) => (
          <Horoscope key={obj.id} obj={obj} data-aos="fade-up" />
        ))}
      </Carousel>
    </div>
  );
}

export default Horoscopes;
