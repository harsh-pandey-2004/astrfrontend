import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Prasaad.css";
import Fengsui from "../../src/images/fengshui.jpg";
import Gems from "../../src/images/gem.jpg";
import Plant from "../../src/images/plant.jpg";
import Yantra from "../../src/images/yantra.jpg";
import PrasadItems from "./PrasadItems";
import TrendingItems from "./TrendingItems";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className="relative top-20"
      role="region"
      tabIndex="-1"
      aria-label="Slideshow"
    >
      <Slider {...settings}>
        <div>
          <div className="relative h-[498px] ">
            <img
              src={Yantra}
              alt="Yantra"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-5 text-center">
              <h1 className="text-white text-4xl font-bold">
                Astrology Yantras
              </h1>
              <p className="text-white text-lg mt-2">
                Discover powerful yantras to enhance your spiritual journey.
              </p>
              <p className="text-white text-sm mt-1">
                Our yantras are crafted with precision to help you balance
                energies and bring positivity into your life. Each yantra is
                designed based on ancient astrological principles.
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[498px]">
            <img
              src={Plant}
              alt="Plant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-5 text-center">
              <h1 className="text-white text-4xl font-bold">Sacred Plants</h1>
              <p className="text-white text-lg mt-2">
                Bring home plants that bring peace and prosperity.
              </p>
              <p className="text-white text-sm mt-1">
                Our sacred plants are known for their ability to purify the air
                and bring tranquility to your home. They are carefully selected
                to ensure they thrive in your environment.
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[498px]">
            <img
              src={Fengsui}
              alt="Feng Shui"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-5 text-center">
              <h1 className="text-white text-4xl font-bold">Feng Shui Items</h1>
              <p className="text-white text-lg mt-2">
                Enhance your home's energy with our feng shui items.
              </p>
              <p className="text-white text-sm mt-1">
                Our feng shui items are designed to attract positive energy and
                harmony into your living space. From crystals to wind chimes,
                find the perfect addition to your home.
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-[498px]">
            <img src={Gems} alt="Gems" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center flex-col justify-center bg-black bg-opacity-50 p-5 text-center">
              <h1 className="text-white text-4xl font-bold">Precious Gems</h1>
              <p className="text-white text-lg mt-2">
                Explore our collection of precious and semi-precious gems.
              </p>
              <p className="text-white text-sm mt-1">
                Our gems are sourced from the finest locations and are known for
                their quality and brilliance. Whether for astrological purposes
                or as a beautiful accessory, we have the perfect gem for you.
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Slider>
      <TrendingItems/>
      <PrasadItems/>
    </div>
  );
};

export default Slideshow;
