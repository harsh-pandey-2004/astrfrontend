import React from "react";
import AstrologerSection from "../components/AstrologerSection";

import Carousel from "../components/SliderSection";
import TestimonialSlider from "../components/Testimonals";
import Services from '../components/kundalicomponents/Services'
import Horoscopes from "../components/kundalicomponents/Horoscopes";
import PanditsSection from "../components/PanditsSection";
import AstroCouncellorsSection from "../components/AstroCouncellorsSection";
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
      <AstrologerSection showblur={showblur}/>
      <PanditsSection showblur={showblur}/>
      <AstroCouncellorsSection/>

      <Horoscopes/>
      <TestimonialSlider showblur={showblur}/>
    </div>
  );
};

export default HomePage;