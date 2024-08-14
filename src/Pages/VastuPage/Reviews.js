import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample images for reviews
const reviews = [
  {
    id: 1,
    name: 'John Doe',
    location: 'Noida',
    review: 'Great Vastu consultation, very insightful and helpful!',
    image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'Noida',
    review: 'Highly recommend their services. Very professional.',
    image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
  {
    id: 3,
    name: 'Sam Wilson',
    location: 'Noida',
    review: 'The best Vastu experience I’ve ever had. Thank you!',
    image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  },
];

const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={`custom-arrow ${direction}`}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
  </div>
);

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: true, // Animation only happens once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  };

  return (
    <div className="reviews-carousel w-full py-12 bg-gray-100">
      <h2 className="carousel-title my-5 text-center text-5xl font-serif text-black" data-aos="fade-up">
        Client <span className='text-[#f6c300]'>Reviews</span>
      </h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide relative bg-white shadow-lg p-6 rounded-lg text-center" data-aos="fade-up">
            <div className="review-image mb-4">
              <img src={review.image} alt={review.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
            </div>
            <p className="review-text text-lg italic mb-4">{`"${review.review}"`}</p>
            <p className="review-author text-md font-semibold">{`- ${review.name}`}</p>
            <p className="review-location text-sm text-[#f6c300]">{review.location}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
