import React, { useEffect } from 'react';
import HomeTest from './HomeTest';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import reviews from './ReviewData';
import './HomeTestimonial.css'; // Import your custom CSS
// import AOS from 'aos';
// import 'aos/dist/aos.css';

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

    const CustomLeftArrow = ({ onClick }) => (
        <div className="carousel-arrow left-arrow" onClick={onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="yellow" d="M15 19l-7-7 7-7" />
            </svg>
        </div>
    );

    const CustomRightArrow = ({ onClick }) => (
        <div className="carousel-arrow right-arrow" onClick={onClick} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path fill="yellow" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    );

    // useEffect(() => {
    //     AOS.init({ duration: 1000 });
    // }, []);

    return (
        <div className='flex justify-center flex-col gap-12 py-6 mt-6'>
            <h1 className="text-center text-4xl sm:text-4xl font-semibold sm:px-12 px-5" >
                Customer Reviews
            </h1>
            <div className="flex justify-center carousel-container">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    className="w-[94%]"
                >
                    {reviews.map((obj) => (
                        <HomeTest key={obj.id} obj={obj}  />
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default HomeTestimonial;
