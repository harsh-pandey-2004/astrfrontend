import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PanditCard from './PanditCard';
import PanditCarsdata from './PanditCarsdata';


function PanditsSection({showblur}) {
    
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
    <div className="w-full h-fit top-20 relative px-12    lg:top-0  py-6 ">
    <h1  className="text-center text-2xl font-semibold ">Our Pandits</h1>
    <h2 className="text-center text-xl ">13000+ Best Pandits from India for You</h2>
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
      className=' pb-12 mt-4'
    >
    
      {
        PanditCarsdata.map((obj)=>{return <PanditCard obj={obj}/> })
      }
    
     
    </Carousel>
  </div>
  )
}

export default PanditsSection