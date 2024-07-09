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
        className="absolute top-12 right-20 transform -translate-y-1/2 z-10 "
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-10 w-10"
        >
          {" "}
          <path
            fill="#FFD43B"
            d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM231 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-71 71L376 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-182.1 0 71 71c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L119 273c-9.4-9.4-9.4-24.6 0-33.9L231 127z"
          />
        </svg>
      </button>
      );
    
      const CustomRightArrow = ({ onClick }) => (
        <button
      className="absolute top-12 right-4 transform -translate-y-1/2 z-10  "
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10">
        <path
          fill="#FFD43B"
          d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L136 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l182.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L393 239c9.4 9.4 9.4 24.6 0 33.9L281 385z"
        />
      </svg>
    </button>
      );
  return (
    <div className="w-[95%] mx-auto h-fit top-16 relative px-12   lg:top-0  py-6  ">
    <h1 className=" text-2xl font-semibold absolute  top-0  left-1/3 pl-32 ">Our Pandits</h1>
    <h2 className=" text-xl absolute top-8 left-1/4 pl-32   ">13000+ Best Pandits from India for You</h2>
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
      className=' pb-12 pt-12'
    >
    
      {
        PanditCarsdata.map((obj)=>{return <PanditCard obj={obj}/> })
      }
    
     
    </Carousel>
  </div>
  )
}

export default PanditsSection