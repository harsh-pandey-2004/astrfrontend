import React from "react";
import Vedio3 from "../../vedios/vedio4.mp4";
import ServicesVastu from "./ServicesVastu";
import ServicesWeProvide from "./ServicesWeProvide";
import OurSpecialists from "./OurSpecialists";
import Stats from "./Stats";
import Reviews from "./Reviews";

const VastuMainPage = ({ showblur }) => {
  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full top-20"
      } 
         flex flex-col bg-[#ffff]  relative top-20 lg:top-0   w-full`}
    >
      <div className="w-full min-h-screen h-fit">
        <div className="w-full flex flex-col min-h-screen h-fit">
          <div className="flex flex-col-reverse lg:flex-row lg:px-16 px-5 bg-black pb-2 lg:h-screen items-center">
            <div className="lg:w-1/2 outline md:pt-32 pt-10 w-full">
              <h1 className=" text-white text-base font-semibold pl-2 sm:text-lg   w-fit ">
                Vastu Shastra: Harmonizing Your Space
              </h1>
              <div className="flex flex-col gap-2 text-white pl-2 mt-6">
                <p className="text-3xl lg:text-4xl">
                  Creating Balance and Harmony in Your{" "}
                </p>
                <p className="text-3xl lg:text-5xl"></p>
                <p className=" text-3xl lg:text-4xl">Living Environment</p>
              </div>
              <p className="mt-6 text-gray-400 pb-6 pl-2">
                Vastu Shastra, an ancient Indian science of architecture and
                design, aims to harmonize living spaces with natural elements
                and energies. By integrating Vastu principles, you can enhance
                the flow of positive energy, promote well-being, and create a
                serene environment in your home or office. Whether you're
                constructing a new building or renovating an existing space,
                incorporating Vastu can help you achieve a balanced and
                harmonious living space that supports your health, happiness,
                and prosperity.
              </p>
            </div>

            <div className="lg:w-1/2 md:pt-20  lg:pt-36 relative lg:pl-10 w-full animate-pulse ">
              <div className="absolute inset-0 bg-black opacity-20 rounded-md z-10"></div>
              <img
                src="https://th.bing.com/th/id/R.b3ee389dea86803d8445065eb87f77ea?rik=GNwqdkJKWQVlYA&riu=http%3a%2f%2fvastusolutions.co.uk%2fwp-content%2fuploads%2f2013%2f09%2fVastu-Pyramid-copy-1024x657.png&ehk=5AFQKGm0nTLN%2fyaTfE4GswHIq22ClPPo3HVRXT8QzfM%3d&risl=&pid=ImgRaw&r=0"
                className="h-96 w-[90%] md:w-full md:h-full mx-auto"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <ServicesVastu/>
      <ServicesWeProvide/>
      <OurSpecialists/>
      <Stats/>
      <Reviews/>
    </div>
  );
};

export default VastuMainPage;
