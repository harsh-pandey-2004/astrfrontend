import React from 'react';
import Testimonial from './Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {

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
    <div className='flex flex-col gap-12 py-6'>
        <h1  className="text-center text-2xl font-semibold px-12">Testimonials</h1>
        <Carousel responsive={responsive}
        infinite={true}
        className=" w-screen   ">
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </Carousel>
    </div>


  )
}

export default Testimonials