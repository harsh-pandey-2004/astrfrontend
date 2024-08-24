import React from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../BookPoojaReview/BookPoojaReview.css';

  const reviews = [
    {
        id: 1,
        name: 'Rajesh Kumar',
        location: 'Delhi',
        image: 'https://example.com/images/reviewer_rajesh.jpg',
        review: 'The Pooja service was conducted with utmost devotion and care. Highly recommended for a peaceful experience.'
      },
      {
        id: 2,
        name: 'Sonia Patel',
        location: 'Mumbai',
        image: 'https://example.com/images/reviewer_sonia.jpg',
        review: 'The rituals were performed professionally, and the overall experience was very satisfying. Excellent service!'
      },
      {
        id: 3,
        name: 'Anil Sharma',
        location: 'Bangalore',
        image: 'https://example.com/images/reviewer_anil.jpg',
        review: 'Very impressed with the Pooja arrangements. The team was punctual and thorough. Worth every penny!'
      },
      {
        id: 4,
        name: 'Meera Desai',
        location: 'Chennai',
        image: 'https://example.com/images/reviewer_meera.jpg',
        review: 'The Pooja was conducted with great attention to detail. It brought a sense of tranquility to our home.'
      },
      {
        id: 5,
        name: 'Ravi Kumar',
        location: 'Hyderabad',
        image: 'https://example.com/images/reviewer_ravi.jpg',
        review: 'Professional and respectful service. The Pooja was conducted smoothly and met all our expectations.'
      },
      {
        id: 6,
        name: 'Aarti Singh',
        location: 'Pune',
        image: 'https://example.com/images/reviewer_aarti.jpg',
        review: 'A wonderful experience. The Pooja was well-organized and performed with dedication. Highly recommend.'
      },
      {
        id: 7,
        name: 'Vikram Raj',
        location: 'Ahmedabad',
        image: 'https://example.com/images/reviewer_vikram.jpg',
        review: 'Very happy with the service. The Pooja was performed with precision and respect for traditions.'
      },
      {
        id: 8,
        name: 'Priya Rani',
        location: 'Jaipur',
        image: 'https://example.com/images/reviewer_priya.jpg',
        review: 'The service was exceptional. The Pooja was conducted with great care and attention to detail.'
      },
      {
        id: 9,
        name: 'Suresh Iyer',
        location: 'Kolkata',
        image: 'https://example.com/images/reviewer_suresh.jpg',
        review: 'Excellent service and execution of rituals. The entire process was smooth and fulfilling.'
      },
      {
        id: 10,
        name: 'Sunita Agarwal',
        location: 'Noida',
        image: 'https://example.com/images/reviewer_sunita.jpg',
        review: 'The Pooja was done with utmost sincerity and respect. A calming and uplifting experience.'
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

const BookPoojaReviews = () => {
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

export default BookPoojaReviews;
