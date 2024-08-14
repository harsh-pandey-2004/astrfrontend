import React, { useEffect } from "react";
import { SearchLogo } from "../icons/icons";
import Testimonials from "../components/BookAPoojaComponents/components/Testimonials";
import Stat from "../components/BookAPoojaComponents/components/Stat";
import Workflow from "../components/BookAPoojaComponents/components/Workflow";
import Destinations from "../components/BookAPoojaComponents/components/Destinations";
import Preference from "../components/BookAPoojaComponents/components/Preference";
import Header from "../components/BookAPoojaComponents/components/Header";
import ResponseCard from "../components/BookaPanditComponents/ResponseCard";
import Vedio3 from "../vedios/vedio4.mp4";
import Reviews from "./VastuPage/Reviews";
import PoojaHeader from "../components/BookAPoojaComponents/components/PoojaHeader";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookPooja = (props) => {
  const showblur = props.showblur;

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Animation only happens once
    });
  }, []);

  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
      } 
      flex flex-col bg-[#ffff] relative top-20 lg:top-0 w-full`}
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-col-reverse lg:flex-row lg:px-16 px-5 bg-black pb-2">
          <div
            className="lg:w-1/2 sm:pt-32 pt-10 w-full"
            data-aos="fade-right"
          >
            <h1 className="text-white text-base font-semibold pl-2 sm:text-lg w-fit">
              Perform Poojas Remotely at Prestigious Temples
            </h1>
            <div className="flex flex-col gap-2 text-white pl-2 mt-6">
              <p className="text-3xl lg:text-5xl">What We Generally</p>
              <p className="text-3xl lg:text-5xl"></p>
              <p className="text-3xl lg:text-5xl">Offers...</p>
            </div>
            <p className="mt-6 text-gray-400 pb-6 pl-2">
              Welcome to our platform where you can participate in traditional
              poojas remotely, connecting with spiritual practices from anywhere
              in the world. Immerse yourself in sacred rituals such as those
              performed at renowned temples like Pashupatinath in Nepal. Through
              our virtual pooja service, connect spiritually across distances,
              sharing moments of peace and devotion with loved ones globally.
              Experience the serenity of Pashupatinath Temple through
              live-streamed rituals guided by local priests. Simply choose your
              preferred temple and pooja ceremony, join via live video streaming,
              and receive blessings and prasad delivered to your doorstep. Enjoy
              the spiritual benefits of poojas without travel constraints, making
              sacred rituals accessible to everyone for personal solace, family
              gatherings, or special occasions. Start your virtual pooja journey
              today to explore prestigious temples, participate in authentic
              rituals, and embrace spiritual enrichment from the comfort of your
              home.
            </p>
          </div>
          <div
            className="lg:w-1/2 pt-5  relative lg:pl-10 w-full flex justify-center"
            data-aos="fade-left"
          >
        
            <img
              src={"https://miro.medium.com/v2/resize:fit:640/1*PrTF8PfLZ9_eSQE0w5xoEA.png"}
              alt="Temple"
              className="filter brightness-50 contrast-125 md:h-full  absolute top-14"
            />
          </div>
        </div>
        <PoojaHeader/>
      </div>
      <div className="flex flex-col items-center justify-center w-screen">
        {/* <Preference /> */}
        <Destinations />
        <Workflow />
        <Stat
          amount="22,758+"
          live="711"
          customers="45.5"
          type="pooja"
          data-aos="fade-up"
        />
        <Reviews />
      </div>
    </div>
  );
};

export default BookPooja;
