import React from "react";
import {
  FacebookLogo,
  InstaLogo,
  LinkedINLogo,
  TwitterLogo,
  UtubeLogo,
} from "../icons/icons";
import PlayStore from "../images/Playstore.webp";
import AppStore from "../images/AppleStore.webp";
import AddressIcon from "../images/AddressIcon.webp";
import EmailIcon from "../images/EmailIcon.webp";
import CallIcon from "../images/CallIcon.webp";
import { Link } from "react-router-dom";

const Footer = ({ showblur }) => {
  return (
    <div
      className={`bg-black text-white flex flex-col items-center py-5 relative mt-10 ${
        showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none overflow-hidden"
          : ""
      }`}
    >
      {/* Footer Top Section */}
      <div className="w-full max-w-8xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4 border-b border-gray-600">
          {/* About Section */}
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl lg:text-4xl font-bold mb-2">
              Astro<span className="text-[#f6c300]">Captain</span>
            </h1>
            <p className="text-sm lg:text-base text-gray-400 mb-4">
              AstroCaptain is your trusted platform for online astrology
              predictions. Connect with expert astrologers over a call and
              receive personalized guidance to address all your concerns. Get
              insights into your future through accurate Kundli predictions from
              our top astrologers, empowering you to make informed decisions
              with AstroCaptain's trusted astrology services.
            </p>
            <div className="flex justify-start space-x-3">
              <button className="bg-black border-2 border-white py-2 px-4 rounded flex items-center text-sm hover:bg-gray-800 transition duration-300 ease-in-out">
                <img className="h-4 mr-2" src={PlayStore} alt="Play Store" />
                Playstore
              </button>
              <button className="bg-black border-2 border-white py-2 px-4 rounded flex items-center text-sm hover:bg-gray-800 transition duration-300 ease-in-out">
                <img className="h-4 mr-2" src={AppStore} alt="App Store" />
                Appstore
              </button>
            </div>
          </div>

          {/* Contact & Services */}
          <div className="flex flex-col lg:pl-8">
            <h1 className="text-lg font-bold mb-2 text-[#f6c300]">
              Contact Us
            </h1>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <img src={AddressIcon} className="h-5 mr-2" alt="Address" />
                <span>1234, Example Street, City</span>
              </div>
              <div className="flex items-center">
                <img src={EmailIcon} className="h-5 mr-2" alt="Email" />
                <span>info@astrocaptain.com</span>
              </div>
              <div className="flex items-center">
                <img src={CallIcon} className="h-5 mr-2" alt="Call" />
                <span>+91 1234567890</span>
              </div>
            </div>

            <h1 className="text-lg font-bold mt-4 mb-2 text-[#f6c300]">
              Our Services
            </h1>
            <ul className="grid grid-cols-2 gap-1 text-sm text-gray-400">
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/book-a-pandit"}>
                → Book Pandit
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/book-a-pooja"}>
                → Book Pooja
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/freekundali"}>
                → Kundali Making
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/call-to-astrologer"}>
                → Call Astrologer
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link  to={"/chat-with-astrologer"}>
                → Chat Astrologer
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/talk-astrocouncellor"}>
                → Call AstroCounselor
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/chat-astrocouncellor"}>
                → Chat AstroCounselor
                </Link>
              </li>
              <li className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
                <Link to={"/blogs"}>
                → Vastu Making
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center px-4 py-3">
        {/* Social Media */}
        <div className="flex space-x-4 cursor-pointer">
          <FacebookLogo className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer" />
          <TwitterLogo className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer" />
          <UtubeLogo className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer" />
          <InstaLogo className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer" />
          <LinkedINLogo className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer" />
        </div>

        {/* Copyright & Links */}
        <div className="text-center text-xs text-gray-400 mt-4 md:mt-0">
          <p>© 2024 Sedulous Softtech, All Rights Reserved.</p>
          <p className="mt-1">
            <b className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
              Terms & Conditions
            </b>{" "}
            |{" "}
            <b className="hover:text-[#f6c300] transition duration-300 ease-in-out cursor-pointer">
              Privacy Policy
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
