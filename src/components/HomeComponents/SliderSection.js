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
import Banner from "../../images/Banner1-1.png";
import BannerN from "../../images/BannerN.jpg";
import BannerT from "../../images/BannerT.png";
import KalashM from "../../images/kalashM.jpg";
import Homebanner from "../../images/Homebanner.png"
import Artboard from"../../images/Artboard.png"
import yantra from"../../images/yantra.png"
import pandit from "../../images/pandit.png"
import CartM from "../../images/CartM.jpg";
import PrasaadM from "../../images/PrasaadM.jpg";
import Panditicon from "../../images/Panditicon.jpg";
import vastu from "../../images/vastu.png";
import Astrologers from "../../images/Astrologers (1).png";

const Carousel = () => {
  const settings = {
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
      className={`w-full h-[70vh] main-Slider relative overflow-hidden top-20 lg:top-0 flex flex-col min-h-fit items-center lg:h-[85vh] sm:h-[89vh] xl:h-[90vh]`}
    >
      <div className="px-2 w-[100%] h-fit mx-auto pt-3 rounded-md lg:w-[90%]  md:mt-20 ">
        <Slider {...settings}>
          <div>
            <img
              src={Homebanner}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={Artboard}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={yantra}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={pandit}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={vastu}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={Astrologers}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>

          <div>
            <img
              src={BannerN}
              className="w-full h-auto sm:h-80 md:h-96 lg:h-[30rem] bg-cover object-cover"
            />
          </div>
        </Slider>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-[85%] gap-6 sm:gap-6 lg:gap-8 mt-20 md:mt-0  mx-auto">
        <Link to="/book-a-pooja">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16">
              <img
                src={KalashM}
                className="w-full h-full rounded-full bg-transparent"
              />
            </div>
            <p className="text-xs font-sans sm:text-base text-center">
              Book a Pooja
            </p>
          </div>
        </Link>

        <Link to="/shop-on-astro">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16">
              <img
                src={PrasaadM}
                className="w-full h-full rounded-full bg-transparent"
              />
            </div>
            <p className="text-xs font-sans sm:text-base text-center">
              Prasadam
            </p>
          </div>
        </Link>

        <Link to="/book-a-pandit">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16 bg-white">
              <img
                src={Panditicon}
                className="w-fit h-full rounded-full bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-base text-center">
              Book a Pandit
            </p>
          </div>
        </Link>

        <Link to="/chat-with-astrologer">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-1 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16">
              <img
                src="https://www.svgrepo.com/show/263720/chat.svg"
                className="w-full h-full rounded-full bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-sm font-normal text-center">
              Chat with Astrologer
            </p>
          </div>
        </Link>

        <Link to="/call-to-astrologer">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16 object-contain">
              <img
                src={Phone}
                className="w-full h-full rounded-full bg-white"
              />
            </div>
            <p className="text-sm font-sans text-center">Call to Astrologer</p>
          </div>
        </Link>

        <Link to="/shop-on-astro">
          <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 py-4 w-full min-w-35 hover:shadow-lg hover:-translate-y-2 transition duration-300">
            <div className="w-20 h-20 rounded-full xl:w-16 xl:h-16">
              <img
                src={CartM}
                className="w-full h-full rounded-full object-contain bg-white"
              />
            </div>
            <p className="text-xs font-sans sm:text-base text-center">Shop</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;
