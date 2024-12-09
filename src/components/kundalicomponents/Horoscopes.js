import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { horoscope, responsive } from "../kundalicomponents/Data";
import Horoscope from "../kundalicomponents/Horoscope";
import { useMediaQuery } from "@mui/material";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Horoscopes.css"; // Import your custom CSS
// import TodayHoroscope from "../../Pages/TodayHoroscope";
import { useNavigate } from "react-router-dom";

function Horoscopes() {
  const isScreenWidthReached = useMediaQuery("(max-width: 464px)");
  const [selectedHoroscope,setSelectedHoroscope]=useState(null);
  const navigate=useNavigate();
  let myVariable = false;
  if (isScreenWidthReached) {
    myVariable = true;
  }

  const handleHoroScopeClick=(horoscope)=>{
    console.log('horoscope clicked')
    setSelectedHoroscope(horoscope);
    navigate("/todayhoroscope", { state: { horoscope } });
  }

  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <div className="carousel-arrow left-arrow" onClick={onClick} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="#f6c300" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const CustomRightArrow = ({ onClick }) => (
    <div className="carousel-arrow right-arrow" onClick={onClick} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="yellow" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  return (
    <div className="sm:px-12 px-5 py-5 lg:py-14 relative sm:top-[4rem] lg:top-0">
      <h1 className="text-center text-2xl sm:text-4xl font-semibold">
        TODAY'S HOROSCOPE
      </h1>

      <Carousel
        showDots={myVariable}
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsive}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        autoPlay={true}           
        autoPlaySpeed={1500}         
        infinite={true}              
        keyBoardControl={true}       
        className="mt-8 pr-20"
      >
        {horoscope.map((obj) => (
          <Horoscope onClick={() => handleHoroScopeClick(obj)} key={obj.id} obj={obj} />
        ))}
      </Carousel>
    </div>
  );
}

export default Horoscopes;
