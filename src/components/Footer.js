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
import PlayStore from "../images/Playstore.webp";
import AppStore from "../images/AppleStore.webp";
import AddressIcon from "../images/AddressIcon.webp";
import EmailIcon from "../images/EmailIcon.webp";
import CallIcon from "../images/CallIcon.webp";
import { Bold } from "react-feather";
import AstroLogo from "../images/AstrocaptainLogo.jpeg"
const Footer = ({ showblur }) => {
  return (
    <><div
      className={`bg-black text-white flex flex-col pt-3 relative   ${showblur
          ? "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none overflow-hidden"
          : ""}`}
    >
      <div className="mx-2 pb-2">
{/* 1st Section */}
        <div>
           {/* <div className="flex justify-start">
                 <img src={AstroLogo} className=" w-1/5 h-1/5" />
                </div> */}
              <h1 className="text-center justify-center text-lg lg:text-5xl font-bold  my-3">
            Astro<span className="text-[#f6c300]">Captain</span>
              </h1>
              <p className="font-sans text-sm text-sm p-2 my-4 text-center">
          Astrotalk is the best astrology website for online Astrology
          predictions. Talk to Astrologer on call and get answers to all your
          worries by seeing the future life through Astrology Kundli Predictions
          from the best Astrologers from India. Get best future predictions
          related to Marriage, love life, Career or Health over call, chat,
          query or report.
             </p>
        </div>
{/* 2nd Section */}
        <div className="justify-center items-center md:border-t-2 border-none  lg:grid lg:grid-cols-3 gap-2 sm:px-1 my-1 md:my-5 md:py-1 ">
          <div className="justify-center items-center col-start-1 col-end-3 ">  
               <div className="">
                  <div>
                   <h1 className="text-base font-bold mb-1 mx-4 text-[#f6c300] md:border-hidden border-b-2 ">Our Services</h1>
                  </div>    
                  <div className="grid grid-cols-2 px-1">
                    <div>
                       <p className="items-center text-sm">
                          {/* <Arrowright /> */} 
                           →  Book Pandit
                       </p>
                       <p className="items-center text-sm">
                       {/* <Arrowright /> */}
                       →  Book Pooja
                       </p>
                       <p className="items-center text-sm">
                          {/* <Arrowright /> */}
                          →  Kundali Making
                        </p>
                         <p className="items-center text-sm">
                          {/* <Arrowright /> */}
                          → Call Astrologer
                         </p>
                     </div>
                     <div>
                         {/* <h1 className="font-bold text-2xl mb-1 text-[#f6c300]">Resources</h1> */}
                        <p className="items-center text-sm">
                          {/* <Arrowright /> */}
                          → Chat Astrologer
                        </p>
                        <p className="items-center text-sm">
                           {/* <Arrowright /> */}
                           → Call AstroCounseler
                        </p>
                        <p className="items-center text-sm">
                          {/* <Arrowright /> */}
                          → Chat AstroCounseler
                        </p>
                        <p className="items-center text-sm">
                          {/* <Arrowright /> */}
                          → Vastu Making
                        </p>
                      </div>
                  </div>
               </div>
          </div>
          <div className="justify-center items-center col-start-3 col-end-4">
            <div>
               <h1 className="text-base font-bold mb-1 mx-4 text-[#f6c300] md:border-hidden border-b-2">Contact Us </h1>
            </div> 
            <div className="grid grid-rows gap-2 md:justify-start justify-center py-2">
               <div className="flex text-sm gap-3 sm:text-xs"><img src={AddressIcon} className="md:h-6 h-4"/><p>- abcdxyz12345ADDRESS</p></div>
               <div className="flex text-sm gap-3 sm:text-xs"><img src={EmailIcon} className="md:h-6 h-4" /><p>- abcdef123@gmail.com</p></div>
               <div className="flex text-sm gap-3 sm:text-xs"><img src={CallIcon} className="md:h-6 h-4"/><p>- +91 1234567890</p></div>
            </div>
          </div>
          <div className="justify-center items-center col-start-5 col-end-10">
          <div>
               <h1 className="text-base font-bold mb-1 text-center text-white">Choose your native platform and get started! </h1>
            </div> 
            <div className="justify-center items-center gap-2 grid grid-cols-2 py-1 text-sm">
            <button className=" justify-between bg-black text-white rounded border-2 border-white my-3 sm:px-1 px-2 sm:p-2 ">
              <img className="inline h-4 mx-1 mr-2 px-1" src={PlayStore}/>Get it on Playstore
            </button>
            <button className=" justify-between bg-black text-white rounded border-2  border-white sm:px-1 px-2 sm:p-2 ">
              <img className="inline h-4 mx-1 mr-2 px-1" src={AppStore}/>Get it on Appstore
            </button>
          </div>
          </div>
        </div>
      </div>
 {/* 3rd Section */}
    <div className="gap-1  grid p-0 grid-col-2">
        <div className="md:grid md:items-center md:grid-col-2">
          <div>
            <div className=" gap-5 items-center justify-center md:flex sm:m-0 mt-0 flex">
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
        </div>
        <div>
          <div className="flex text-sm justify-between flex-col m-0 items-center text-center">
          <p>Copyright 2024 © Sedulous Softtech , All Rights Reserved.</p>
          <p><b>Terms & Condition | Privacy policy</b></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
