import React from 'react';
import HomeTest from './HomeTest';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import reviews from './ReviewData';

const HomeTestimonial = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };




  return (
    <div className='flex flex-col gap-12 py-6 mb-6'>
        <h1  className="text-center text-3xl font-semibold px-12">Customer Reviews</h1>
        <Carousel responsive={responsive}
        infinite={true}
        className=" w-screen   ">
          {reviews.map((obj)=>{return <HomeTest obj={obj}/>})}
        </Carousel>
    </div>


  )
}

export default HomeTestimonial;