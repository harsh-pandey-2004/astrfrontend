import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Import all banner images
import Homebanner from "../../images/Homebanner.png";
import Artboard from "../../images/Artboard.png";
import Yantra from "../../images/yantra.png";
import Pandit from "../../images/pandit.png";
import Vastu from "../../images/vastu.png";
import Astrologers from "../../images/Astrologers (1).png";
import BannerN from "../../images/BannerN.jpg";

// Import menu item images
import KalashM from "../../images/kalashM.jpg";
import PrasaadM from "../../images/PrasaadM.jpg";
import Panditicon from "../../images/Panditicon.jpg";
import Phone from "../../images/phone-icon.webp";
import CartM from "../../images/CartM.jpg";

const Carousel = () => {
  const banners = [
    Homebanner,
    Artboard,
    Yantra,
    Pandit,
    Vastu,
    Astrologers,
    BannerN,
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="w-full relative sm:top-24 flex flex-col items-center pb-28 top-20">
      <div className="w-full  px-4">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index} className="w-full">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-full md:h-[70vh] lg:h-[60vh] bg-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 w-full max-w-7xl gap-4 mt-8 px-4">
        {[
          { icon: KalashM, title: "Book a Pooja", link: "/book-a-pooja" },
          { icon: PrasaadM, title: "Prasadam", link: "/shop-on-astro" },
          { icon: Panditicon, title: "Book a Pandit", link: "/book-a-pandit" },
          {
            icon: "https://www.svgrepo.com/show/263720/chat.svg",
            title: "Chat with Astrologer",
            link: "/chat-with-astrologer",
          },
          {
            icon: Phone,
            title: "Call to Astrologer",
            link: "/call-to-astrologer",
          },
          { icon: CartM, title: "Shop", link: "/shop-on-astro" },
        ].map((item, index) => (
          <Link to={item.link} key={index}>
            <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4 hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <div className="w-16 h-16 rounded-full mb-2">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-sm text-center">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
