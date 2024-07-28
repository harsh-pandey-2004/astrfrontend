import React from 'react';
import Homeimg from "../../images/home.png"
import lampimg from "../../images/lamp.png"
import officeimg from "../../images/office.png"
import valueimg from "../../images/value.png"
const ServicesWeProvide = () => {
  return (
    <div className=" h-fit py-10 ">
      <h1 className="mt-5 text-center text-4xl font-serif text-black font-medium">Services We Provide</h1>
      <div className="grid grid-cols-1 gap-8 justify-center p-8 flex-col sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="service-card bg-white text-black p-6 rounded-lg shadow-custom transition-transform duration-300 hover:transform hover:-translate-y-2 border-t-4 border-[#f6c300] ">
         <img src={Homeimg} alt='# ' className='h-14 w-14 mx-auto'></img>
          <h3 className="text-xl font-bold mb-3 text-center">Home Vastu</h3>
          <p>Key principles of Home Vastu include the proper orientation of rooms, placement of furniture, and selection of colors to optimize energy flow.</p>
        </div>
        <div className="service-card bg-white text-black p-6 rounded-lg shadow-custom transition-transform duration-300 hover:transform hover:-translate-y-2 border-t-4 border-[#f6c300] ">
        <img src={officeimg} alt='#' className='h-14 w-14 mx-auto'></img>

         <h3 className="text-xl font-bold mb-3 text-center">Office Vastu</h3>
          <p>Office Vastu focuses on the strategic arrangement of office elements to harness positive energy flows.</p>
        </div>
        <div className="service-card bg-white text-black p-6 rounded-lg shadow-custom transition-transform duration-300 hover:transform hover:-translate-y-2 border-t-4 border-[#f6c300] ">
        <img src={valueimg} alt='#' className='h-14 w-14 mx-auto'></img>

          <h3 className="text-xl font-bold mb-3 text-center">Commercial Vastu</h3>
          <p>The layout and orientation of commercial spaces are believed to influence financial stability, customer flow, and overall business growth.</p>
        </div>
        <div className="service-card bg-white text-black p-6 rounded-lg shadow-custom transition-transform duration-300 hover:transform hover:-translate-y-2 border-t-4 border-[#f6c300] ">
        <img src={lampimg} alt='#' className='h-14 w-14 mx-auto'></img>

          <h3 className="text-xl font-bold mb-3 text-center">Vastu Tips</h3>
          <p>Vastu tips offer practical guidance for aligning your living or working space with harmonious energies to enhance well-being and prosperity.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesWeProvide;
