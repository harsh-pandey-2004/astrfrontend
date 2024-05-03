import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AstrologerSection = ({showblur}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 684 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 684, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 w-10 h-10 hover:bg-gray-100"
      onClick={onClick}
    >
      {"<"}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-200 rounded-full p-2 w-10 h-10 hover:bg-gray-100"
      onClick={onClick}
    >
      {">"}
    </button>
  );

  return (
    <div className="w-full h-fit top-20 relative px-5 shadow-2xl my-4 bg-orange-400 lg:top-0">
      <h1 className="text-2xl text-center font-bold py-5">Our Astrologers</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlaySpeed={100}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-3">
          <img
            className="w-1/5 h-1/5 rounded-full mx-auto"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Name1</div>
            <p className="text-gray-700 text-base">Vedic Astrologer</p>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-3">
          <img
            className="w-1/5 h-1/5 rounded-full mx-auto"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Name2</div>
            <p className="text-gray-700 text-base">Vedic Astrologer</p>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-lg overflow-hidden shadow-lg p-3">
          <img
            className="w-1/5 h-1/5 rounded-full mx-auto"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Name3</div>
            <p className="text-gray-700 text-base">Vedic Astrologer</p>
          </div>
        </div>

        <div className="max-w-xs mx-auto mb-8 bg-white rounded-lg overflow-hidden shadow-lg p-3">
          <img
            className="w-1/5 h-1/5 rounded-full mx-auto"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Name4</div>
            <p className="text-gray-700 text-base">Vedic Astrologer</p>
          </div>
        </div>
        <div className="max-w-xs mx-auto mb-8 bg-white rounded-lg overflow-hidden shadow-lg p-3">
          <img
            className="w-1/5 h-1/5 rounded-full mx-auto"
            src="https://via.placeholder.com/300"
            alt="Placeholder"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">Name5</div>
            <p className="text-gray-700 text-base">Vedic Astrologer</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default AstrologerSection;
