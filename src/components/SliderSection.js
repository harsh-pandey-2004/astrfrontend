import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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
      className={`w-full h-[100vh] main-Slider relative top-20  lg:top-0 flex flex-col min-h-fit items-center lg:h-[85vh] sm:h-[89vh] xl:h-[80vh] `}
    >
      <div className="w-[95%] h-[50vh] mx-auto py-10 rounded-md lg:w-[90%]">
        <Slider {...settings}>
          <div>
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              alt="Image 1"
              className="w-full h-[50vh] rounded-md"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              alt="Image 2"
              className="w-full h-[50vh] rounded-md"
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg"
              alt="Image 3"
              className="w-full h-[50vh] rounded-md"
            />
          </div>
        </Slider>
      </div>
      <div className="grid grid-cols-3 relative top-16 sm:grid-cols-3 lg:grid-cols-6 w-[90%] sm:w-[90%] lg:w-[88%] lg:top-20 sm:gap-4 xl:w-[80%] ">
        <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://clipartspub.com/images600_/wedding-clipart-png-kalash- 9.png"
              className="w-full h-full rounded-full bg-transparent"
            ></img>
          </div>
          <p className="text-xs font-sans sm:text-base">Book a Pooja</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:bg-white  rounded-lg lg:px-5 lg:py-3 py-1 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://th.bing.com/th?id=OIP.LzVXShDGn1HH05l37ITCxQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              className="w-full h-full "
            ></img>
          </div>
          <p className="text-xs font-sans sm:text-base">Book a Prasad</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:bg-white  rounded-lg lg:px-5 lg:py-3 py-1 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://cdn.vectorstock.com/i/1000v/83/91/indian-pandit-cartoon-vector-35888391.jpg"
              className="w-full h-full "
            ></img>
          </div>
          <p className="text-xs font-sans sm:text-base">Call a Pandit</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:bg-white  rounded-lg lg:px-1 lg:py-3 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://www.svgrepo.com/show/263720/chat.svg"
              className="w-full h-full "
            ></img>
          </div>
          <p className="text-xs font-sans sm:text-sm font-normal">Chat with Astrologer</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:bg-white rounded-lg lg:px-5 lg:py-3 p-1 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://cdn.vectorstock.com/i/1000v/80/35/phone-icon-on-green-button-eps-10-vector-26438035.jpg"
              className="w-full h-full"
            ></img>
          </div>
          <p className="text-sm font-sans ">Call to Astrologer</p>
        </div>
        <div className="flex flex-col items-center justify-center sm:bg-white  rounded-lg lg:px-5 lg:py-3 w-full min-w-36">
          <div className="W-10 h-10 rounded-full xl:w-12 xl:h-12">
            <img
              src="https://th.bing.com/th/id/OIP.EartXcMOlfNCdGoVdwWURAHaF7?rs=1&pid=ImgDetMain"
              className="w-full h-full"
            ></img>
          </div>
          <p className="text-xs font-sans sm:text-base">Shop</p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
