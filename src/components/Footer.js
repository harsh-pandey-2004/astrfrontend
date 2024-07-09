import React from "react";
import {
  Arrowright,
  EmailLogo,
  FacebookLogo,
  InstaLogo,
  LinkedINLogo,
  TelLogo,
  TwitterLogo,
  UtubeLogo,
} from "../icons/icons";

const Footer = ({ showblur }) => {
  return (
    <div
      className={`bg-black text-white  flex flex-col py-3  relative top-10  ${
        showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none overflow-hidden"
          : ""
      }`}
    >
      <div className=" px-5">
        <h1 className="text-center text-5xl font-bold md:text-left my-5">
          Astro<span className="text-[#f6c300]">Captain</span>
        </h1>
        <p className="font-serif text-sm">
          Astrotalk is the best astrology website for online Astrology
          predictions. Talk to Astrologer on call and get answers to all your
          worries by seeing the future life through Astrology Kundli Predictions
          from the best Astrologers from India. Get best future predictions
          related to Marriage, love life, Career or Health over call, chat,
          query or report.
        </p>
      </div>
      <div className=" flex flex-col p-5 gap-4  w-full md:justify-between lg:px-10 ">
        <div className="grid grid-cols-2 md:gap-10 gap-10 flex-col sm:flex-row sm:flex sm:justify-between">
          <div>
            <h1 className="border-b-2 border-white py-2">Topic 1</h1>
            <p className="flex items-center text-sm mt-1">
              <Arrowright />
              Service 1
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 2
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 3
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 4
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 5
            </p>
          </div>
          <div>
            <h1 className="border-b-2 border-white py-2">Topic 2</h1>
            <p className="flex items-center text-sm mt-1F">
              <Arrowright />
              Service 1
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 2
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 3
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 4
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Service 5
            </p>
          </div>
          <div>
            <h1 className="border-b-2 border-white py-2">Quick Contact</h1>
            <div>
              <p className="flex items-center gap-1">
                <EmailLogo />
                Email
              </p>
              <p className="flex items-center gap-1">
                <TelLogo />
                Mobile No
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-5  justify-between  flex p-4  flex-col">
        <div className="md:flex md:items-center md:flex-col">
          <div className="flex justify-between w-full">
            <button className="p-2 bg-white text-black rounded border-2 border-black sm:p-4">
              Get it on Playstore
            </button>
            <button className=" bg-white text-black p-2 rounded border-2 border-black sm:p-4">
              Get it on Appstore
            </button>
          </div>
          <div className=" gap-5 items-center justify-center md:flex  mt-5 flex">
            <p className="social-logo">
              <FacebookLogo />
            </p>
            <p className="social-logo">
              <TwitterLogo />
            </p>
            <p className="social-logo">
              <UtubeLogo />
            </p>
            <p className="social-logo">
              <InstaLogo />
            </p>
            <p className="social-logo">
              <LinkedINLogo />
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col items-center">
          <p>Copyright 2024 © Sedulous Softtech , All Rights Reserved.</p>
          <p>Terms & Condition | Privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
