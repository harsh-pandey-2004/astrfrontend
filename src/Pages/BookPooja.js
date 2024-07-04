import React from "react";
import { SearchLogo } from "../icons/icons";
import Testimonials from "../components/BookAPoojaComponents/components/Testimonials";
import Stat from "../components/BookAPoojaComponents/components/Stat";
import Workflow from "../components/BookAPoojaComponents/components/Workflow";
import Destinations from "../components/BookAPoojaComponents/components/Destinations";
import Preference from "../components/BookAPoojaComponents/components/Preference";
import Header from "../components/BookAPoojaComponents/components/Header";
import ResponseCard from "../components/BookaPanditComponents/ResponseCard";
import Vedio3 from "../vedios/vedio4.mp4";

const BookPooja = (props) => {
  const showblur = props.showblur;

  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
      } 
         flex flex-col bg-[#ffff]  relative top-20 lg:top-0   w-full`}
    >
      <div className="flex   px-16 bg-black pb-2">
        <div className="w-1/2 outline pt-16 ">
          <h1 className=" text-white text-lg font-semibold pl-2   w-fit ">
            Perform Poojas Remotely at Prestigious Temples
          </h1>
          <div className="flex flex-col gap-2 text-white pl-2 mt-6">
            <p className=" text-5xl">What We Generally</p>
            <p className=" text-5xl"></p>
            <p className=" text-5xl">Offers...</p>
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

        <div className="w-1/2  pt-16 relative pl-10">
          <div className="absolute inset-0 bg-black opacity-20 rounded-md z-10"></div>
          <video
            autoPlay
            loop
            muted
            className="rounded-md z-20"
            style={{ filter: "brightness(70%) contrast(120%)" }}
          >
            <source src={Vedio3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center w-screen  ">
        <Header />

        {/* <Preference /> */}

        <Destinations />

        <Workflow />

        <Stat amount="22,758+" live="711" customers="45.5" type="pooja" />

        <Testimonials />
      </div>
    </div>
  );
};

export default BookPooja;
