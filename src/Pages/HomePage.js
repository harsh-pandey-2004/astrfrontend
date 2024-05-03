import React from "react";
import AstrologerSection from "../components/AstrologerSection";

import Carousel from "../components/SliderSection";
import TestimonialSlider from "../components/Testimonals";
import Services from '../components/kundalicomponents/Services'
import Horoscopes from "../components/kundalicomponents/Horoscopes";
const HomePage = ({ showblur }) => {
  return (
    <div
      className={`${
        showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
          : ""
      }`}
    >
      <Carousel showblur={showblur} />
      <Services/>
      <AstrologerSection showblur={showblur}/>
      <Horoscopes/>
      <TestimonialSlider showblur={showblur} />
    </div>
  );
};

export default HomePage;