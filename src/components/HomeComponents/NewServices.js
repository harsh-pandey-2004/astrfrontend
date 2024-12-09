import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import New from "../../images/newservice1.webp"
import New2 from "../../images/newservice2.webp"
import New3 from "../../images/newservice3.webp"
import New4 from "../../images/newservice4.webp"

const NewServices = () => {
  const [service, setService] = useState("kundli");




   const ClickHandler=(service,id)=>{

      
    setService(service);
    if(window.innerWidth<=375){
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
   }

 

  return (
    <div className="md:pl-20 pb-12 bg-black NewServices sm:pt-10 px-4">
    <h1 id="Section" className="text-3xl font-semibold text-start pb-4 text-white">
      Astro Services That we Provide
    </h1>
    <div className="sm:flex sm:flex-row items-center gap-5 md:gap-36 flex flex-col-reverse">
      <div className="md:w-2/5 w-full">
        <p className="text-gray-400">
          Our services include booking poojas, astrology consultations, Vastu
          making, and more. We aim to provide spiritual guidance, harmony in
          living spaces, and personalized astrological insights to enhance
          your overall well-being and spiritual journey.
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-8 outline">
          <div
            className={`border border-slate-700 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-400 h-34 rounded-md p-2 hover:cursor-pointer transition`}
            onClick={() => {
              ClickHandler("kundli", "Section");
            }}
          >
            <p className="text-white">Free Kundli</p>
            <p className="text-gray-400">
              Get your personalized Kundli for free, offering deep insights
              into your life and future.
            </p>
          </div>

          <div
            className={`border border-slate-700 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-400 h-34 rounded-md p-2 hover:cursor-pointer transition`}
            onClick={() => {
              ClickHandler("vastu", "Section");
            }}
          >
            <p className="text-white">Vastu Making</p>
            <p className="text-gray-400">
              Achieve harmony and balance in your home with our expert Vastu
              making services.
            </p>
          </div>

          <div
            className={`border border-slate-700 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-400 h-34 rounded-md p-2 hover:cursor-pointer transition`}
            onClick={() => {
              ClickHandler("compatibility", "Section");
            }}
          >
            <p className="text-white">Compatibility</p>
            <p className="text-gray-400">
              Discover your compatibility with personalized astrological
              insights for harmonious relationships.
            </p>
          </div>

          <div
            className={`border border-slate-700 hover:border-yellow-400 hover:shadow-md hover:shadow-yellow-400 h-34 rounded-md p-2 hover:cursor-pointer transition`}
            onClick={() => {
              ClickHandler("prasaad", "Section");
            }}
          >
            <p className="text-white">Prasaad</p>
            <p className="text-gray-400">
              Enjoy sacred prasad delivered to your doorstep, bringing divine
              blessings and positivity.
            </p>
          </div>
        </div>
      </div>

      <div className="ServiceImg md:w-2/5 w-full p-2 rounded-md border border-yellow-400 shadow-md shadow-yellow-400">
        {/* Images that change based on the service on hover */}
        <div className="overflow-hidden group">
          {service === "kundli" && (
            <img
              src="https://media.istockphoto.com/id/1387867659/photo/couple-holding-hands-at-beach.jpg?s=1024x1024&w=is&k=20&c=Z0PnGfGpIO5USDHsohPV3IldKPjEIA3IUo_PYJvQY9E="
              className="rounded-md group-hover:scale-105 group-hover:cursor-pointer transition duration-300"
            />
          )}
          {service === "vastu" && (
            <img
              src="https://media.istockphoto.com/id/1156187680/photo/asian-traditional-vishuddha-chakra-symbol.jpg?s=1024x1024&w=is&k=20&c=tTIKjLszDr_TgvsnNBBRPPsUjQWC3LtHz-Ha_8cG2GQ="
              className="rounded-md group-hover:scale-105 group-hover:cursor-pointer transition duration-300"
            />
          )}
          {service === "compatibility" && (
            <img
              src="https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?s=1024x1024&w=is&k=20&c=elzlmgFzBjKr0DdOvejGao5iP26yDorzW3emSrY7w5Y="
              className="rounded-md group-hover:scale-105 group-hover:cursor-pointer transition duration-300"
            />
          )}
          {service === "prasaad" && (
            <img
              src="https://cdn.cdnparenting.com/articles/2019/03/22122134/1018347370-H-1024x700.jpg"
              className="rounded-md group-hover:scale-105 group-hover:cursor-pointer transition duration-300"
            />
          )}
        </div>
      </div>
    </div>
  </div>
  );
};

export default NewServices;
