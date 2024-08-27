import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Sample images for reviews
// const reviews = [
//   {
//     id: 1,
//     name: 'John Doe',
//     location: 'Noida',
//     review: 'Great Vastu consultation, very insightful and helpful!',
//     image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     location: 'Noida',
//     review: 'Highly recommend their services. Very professional.',
//     image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   },
//   {
//     id: 3,
//     name: 'Sam Wilson',
//     location: 'Noida',
//     review: 'The best Vastu experience I’ve ever had. Thank you!',
//     image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?w=119&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//   },
// ];
  const reviews = [
    {
      id: 1,
      name: 'Vastu with Pandit Rajesh Sharma',
      location: 'Noida',
      image: 'https://example.com/images/vastu_rajesh.jpg',
      review: 'Specializing in comprehensive Vastu consultations for residential and commercial properties. Over 15 years of experience in creating harmonious living spaces.'
    },
    {
      id: 2,
      name: 'Vastu Insights by Pandit Ankit Sharma',
      location: 'Delhi',
      image: 'https://example.com/images/vastu_ankit.jpg',
      review: 'Expert in Vastu corrections and remedies. Offers personalized solutions for optimizing space and enhancing well-being.'
    },
    {
      id: 3,
      name: 'Professional Vastu Services with Pandit Sunita Gupta',
      location: 'Mumbai',
      image: 'https://example.com/images/vastu_sunita.jpg',
      review: 'Provides effective Vastu solutions for residential and commercial properties. Known for precise and actionable insights.'
    },
    {
      id: 4,
      name: 'Holistic Vastu by Pandit Arjun Kumar',
      location: 'Kolkata',
      image: 'https://example.com/images/vastu_arjun.jpg',
      review: 'Renowned for his deep understanding of Vastu Shastra. Offers detailed consultations and practical solutions for space optimization.'
    },
    {
      id: 5,
      name: 'Astrological Vastu Corrections with Pandit Neelam Verma',
      location: 'Chennai',
      image: 'https://example.com/images/vastu_neelam.jpg',
      review: 'Specializes in combining astrology with Vastu principles to provide effective remedies and improvements for your space.'
    },
    {
      id: 6,
      name: 'Expert Vastu Consultations by Pandit Vikram Singh',
      location: 'Bangalore',
      image: 'https://example.com/images/vastu_vikram.jpg',
      review: 'Offers detailed Vastu consultations with a focus on personal and professional spaces. Provides holistic and practical advice.'
    },
    {
      id: 7,
      name: 'Practical Vastu Solutions with Pandit Aarti Joshi',
      location: 'Hyderabad',
      image: 'https://example.com/images/vastu_aarti.jpg',
      review: 'Provides clear and actionable Vastu solutions for improving living and working environments. Expert in effective space planning.'
    },
    {
      id: 8,
      name: 'In-Depth Vastu Analysis with Pandit Rajiv Mehta',
      location: 'Pune',
      image: 'https://example.com/images/vastu_rajiv.jpg',
      review: 'Known for his extensive knowledge in Vastu Shastra. Offers thorough analysis and practical remedies for various issues.'
    },
    {
      id: 9,
      name: 'Vastu Expertise by Pandit Sanya Kapoor',
      location: 'Ahmedabad',
      image: 'https://example.com/images/vastu_sanya.jpg',
      review: 'Specializes in Vastu Shastra with a focus on creating balanced and harmonious spaces. Provides detailed consultations and effective solutions.'
    },
    {
      id: 10,
      name: 'Comprehensive Vastu Guidance with Pandit Rahul Choudhury',
      location: 'Jaipur',
      image: 'https://example.com/images/vastu_rahul.jpg',
      review: 'Offers expert guidance in Vastu Shastra for enhancing personal and professional spaces. Known for a holistic approach and effective solutions.'
    }
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
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Duration of animations
  //     easing: 'ease-in-out', // Easing function
  //     once: true, // Animation only happens once
  //   });
  // }, []);

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
      <h2 className="carousel-title my-5 text-center text-5xl font-serif text-black" >
        Client <span className='text-[#f6c300]'>Reviews</span>
      </h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide relative bg-white shadow-lg p-6 rounded-lg text-center" >
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
