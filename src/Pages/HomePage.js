import React from "react";
import AstrologerSection from "../components/HomeComponents/AstrologerSection";

import Carousel from "../components/HomeComponents/SliderSection";
import TestimonialSlider from "../components/HomeComponents/Testimonals";
import Services from '../components/kundalicomponents/Services'
import Horoscopes from "../components/kundalicomponents/Horoscopes";
import PanditsSection from "../components/HomeComponents/PanditsSection";
import AstroCouncellorsSection from "../components/HomeComponents/AstroCouncellorsSection";
import HomeStats from "../components/HomeComponents/HomeStats";
import HomeServices from "../components/HomeComponents/HomeServices";
import HomeTestimonial from "../components/HomeComponents/HomeTestimonial";

const HomePage = ({ showblur }) => {
  return (
    <div
      className={`${
        showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full w-full"
          : ""
      }`}
    >

    
           <Carousel showblur={showblur}/>
    
     
         {/* <Services/> */}
     <HomeServices/>
      <HomeStats/>
      <AstrologerSection showblur={showblur}/>
      <PanditsSection showblur={showblur}/>
      <AstroCouncellorsSection/>

      <Horoscopes/>
      {/* <TestimonialSlider showblur={showblur}/> */}
      <HomeTestimonial/>
    </div>
  );
};

export default HomePage;