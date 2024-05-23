import React from "react";
import TrendingPooja from "../components/BookaPanditComponents/TrendingPooja";
import { SearchLogo } from "../icons/icons";
import Stat from "../components/BookAPoojaComponents/components/Stat";
import Testimonials from "../components/BookAPoojaComponents/components/Testimonials";
import { Link } from "react-router-dom";

const BookPandit = (props) => {
  const IsMenuClicked = props.IsmenuClicked;
  const showblur = props.showblur;
  // const navigate=useNavigate();
  return (
    <div
      className={`${
        showblur &&
        "filter blur-sm opacity-50 cursor-not-allowed pointer-events-none relative overflow-hidden h-full"
      } 
       flex flex-col bg-[#ffff] gap-1 relative top-20 lg:top-0  pt-10 py-20 w-full`}
    >
      <h1 className="text-2xl text-center font-sans font-semibold md:text-3xl text-[#f6c003]">
        Book Pandit
      </h1>
      <p className="text-xl text-center font-sans font-semibold text-[#f1d980] md:text-2xl">
        Get Pandit filter by price location and type of Pooja
      </p>
      <div className="flex flex-col  items-center justify-center w-screen  ">
        <div className="flex items-center px-12  w-full mt-2">
          <div className="h-px w-full bg-[#f1d980] "></div>
          <img src="https://aws.astrotalk.com/assets/images/astrotalk-mini-logo.webp" />
          <div className="h-px w-full bg-[#f1d980] "></div>
        </div>
      </div>
      <TrendingPooja/>
      <Stat amount="10,500" live="711" customers="45.5" type="pandit"/>
      <Testimonials/>
     


     <Link to="/panditfilter" className="flex justify-center items-center">

               <button className=" border  bg-yellow-400  rounded-md max-w-fit mx-auto px-6 py-2  font-semibold hover:shadow-lg transition text-gray-700 hover:text-black mt-6" >Book Now</button>
     
     </Link>
              
      
    </div>
  );
};

export default BookPandit;
