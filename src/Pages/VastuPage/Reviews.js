import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Review.css';

const reviews = [
  {
    id: 1,
    name: 'John Doe',
    review: 'Great Vastu consultation, very insightful and helpful!',
  },
  {
    id: 2,
    name: 'Jane Smith',
    review: 'Highly recommend their services. Very professional.',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    review: 'The best Vastu experience I’ve ever had. Thank you!',
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="reviews-carousel ">
      <h2 className="carousel-title">Client Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="review-slide">
            <p className="review-text">{`"${review.review}"`}</p>
            <p className="review-author">{`- ${review.name}`}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
