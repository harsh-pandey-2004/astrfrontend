import React, { useEffect } from "react";
import AstrologerSection from "../components/HomeComponents/AstrologerSection";

import Carousel from "../components/HomeComponents/SliderSection";
import TestimonialSlider from "../components/HomeComponents/Testimonals";
import Services from "../components/kundalicomponents/Services";
import Horoscopes from "../components/kundalicomponents/Horoscopes";
import PanditsSection from "../components/HomeComponents/PanditsSection";
import AstroCouncellorsSection from "../components/HomeComponents/AstroCouncellorsSection";
import HomeStats from "../components/HomeComponents/HomeStats";
import HomeServices from "../components/HomeComponents/HomeServices";
import HomeTestimonial from "../components/HomeComponents/HomeTestimonial";
import Blogs from "../components/HomeComponents/Blogs";
import NewServices from "../components/HomeComponents/NewServices";
import { Whyastro } from "../components/HomeComponents/Whyastro";
import Faqs from "../components/HomeComponents/Faqs";

const HomePage = ({ showblur }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div
    className={`${
      showblur
        ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full w-full"
        : ""
    }`}
  >
      <Carousel showblur={showblur} />

      <NewServices />

      <AstrologerSection showblur={showblur} />
      <PanditsSection showblur={showblur} />
      <AstroCouncellorsSection />
      <HomeStats />
      <Horoscopes />
      {/* <TestimonialSlider showblur={showblur}/> */}
      <HomeTestimonial />
      <Blogs />
      <Whyastro />
      <Faqs />
    </div>
  );
};

export default HomePage;
