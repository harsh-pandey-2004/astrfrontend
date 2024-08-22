import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Vedio1 from "../../vedios/vedio1.mp4";
import Kalash from "../../images/kalash.webp";
import Sweet from "../../images/ladoo.webp";
import Pandit from "../../images/indian-pandit.webp";
import Phone from "../../images/phone-icon.webp";
import Cart from "../../images/cart.webp";

const Carousel = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true, // Animation only happens once on scroll
  //   });
  // }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false, // Hide arrows on smaller screens
        },
      },
    ],
  };

  return (
    <div
      className={`w-full h-[70vh] main-Slider relative overflow-hidden top-20 lg:top-0 flex flex-col min-h-fit items-center lg:h-[85vh] sm:h-[89vh] xl:h-[80vh]`}
    >
      <div className="px-2 w-[100%] h-[65vh] mx-auto pt-3 rounded-md lg:w-[90%]">
        <Slider {...settings}>
          <div>
            <video width="1520" height="120" autoPlay loop muted>
              <source src={Vedio1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div >
            <video width="1520" height="120" autoPlay loop muted>
              <source src={Vedio1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div >
            <video width="1620" height="120" autoPlay loop muted>
              <source src={Vedio1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-3 relative top-[-5rem] sm:top-0 sm:grid-cols-3 lg:grid-cols-6 w-[100%] sm:w-[90%] lg:w-[88%] sm:gap-4 xl:w-[80%]">
        <Link to="/book-a-pooja">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
              <img
                src={Kalash}
                className="w-full h-full rounded-full bg-transparent"
              />
            </div>
            <p className="text-xs font-sans sm:text-base">Book a Pooja</p>
          </div>
        </Link>

        <Link to="/shop-on-astro">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-1 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
              <img
                src={Sweet}
                className="w-full h-full rounded-full bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-base">Book a Prasad</p>
          </div>
        </Link>

        <Link to="/book-a-pandit">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-1 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full bg-white xl:w-12 xl:h-12">
              <img
                src={Pandit}
                className="w-fit h-full rounded-full bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-base">Book a Pandit</p>
          </div>
        </Link>

        <Link to="/chat-with-astrologer">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-1 lg:py-3 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
              <img
                src="https://www.svgrepo.com/show/263720/chat.svg"
                className="w-full h-full rounded-full bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-sm font-normal">
              Chat with Astrologer
            </p>
          </div>
        </Link>

        <Link to="/call-to-astrologer">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 p-1 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full object-contain xl:w-12 xl:h-12">
              <img
                src={Phone}
                className="w-full h-full rounded-full bg-white"
              />
            </div>
            <p className="text-sm font-sans">Call to Astrologer</p>
          </div>
        </Link>

        <Link to="/shop-on-astro">
          <div
            className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 w-full min-w-36 hover:shadow-white hover:-translate-y-2 transition duration-300"
            
          >
            <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
              <img
                src={Cart}
                className="w-full h-full rounded-full object-contain bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-base">Shop</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
