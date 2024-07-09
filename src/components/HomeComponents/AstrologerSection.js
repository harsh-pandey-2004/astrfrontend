import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AstroCard from './AstroCard';
import AstroCarsdata from './AstroCarsdata';


function AstrologerSection({showblur}) {
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
          className="hidden 980px:block  md:absolute md:top-12 md:right-20 transform -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-2 w-10 h-10 "
          onClick={onClick}
        >
          {"<"}
        </button>
      );
    
      const CustomRightArrow = ({ onClick }) => (
        <button
          className="hidden 980px:block md:absolute md:top-12 md:right-4 transform -translate-y-1/2 z-10 bg-yellow-400  rounded-full p-2 w-10 h-10"
          onClick={onClick}
        >
          {">"}
        </button>
      );
  return (
    <div className="w-[95%] mx-auto h-fit top-16 relative px-12   lg:top-0  py-6   ">
    <h1  className="text-center text-2xl font-semibold md:absolute  md:top-8  md:left-1/3 md:pl-24 ">Our Astrologers</h1>
    <h2 className=" text-center text-xl md:absolute md:top-16 md:left-1/4   ">14000+ Best Astrologers from India To Predict your Destiny</h2>
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
      className='pb-12 pt-20  '
    >
    
      {
        AstroCarsdata.map((obj)=>{return <AstroCard obj={obj}/> })
      }
    
     
    </Carousel>
  </div>
  )
}

export default AstrologerSection;