import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing React Icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../BookPanditReview/BookPanditReview.css';
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
      name: 'Pandit Rajesh Sharma',
      location: 'Noida',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMjeeornJdOe6FD8JTzqih-CByVmSWpSD0g&s',
      review: 'Expert in Vastu Shastra with 15 years of experience. Known for insightful consultations.'
    },
    {
      id: 2,
      name: 'Pandit Ankit Sharma',
      location: 'Delhi',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdsyAuTua0DEVbJaaFWNI9QM1Y9_3oEmtHA&s',
      review: 'Experienced astrologer specializing in personalized predictions and guidance.'
    },
    {
      id: 3,
      name: 'Pandit Sunita Gupta',
      location: 'Mumbai',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s',
      review: 'Highly skilled in Vastu and astrology. Provides accurate and effective solutions.'
    },
    {
      id: 4,
      name: 'Pandit Arjun Kumar',
      location: 'Kolkata',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8JFrYAGEJ7d8ldSknkvpsi4OJGMkQB5vUg&s',
      review: 'Renowned for his expertise in Vastu and holistic remedies. Trusted by many clients.'
    },
    {
      id: 5,
      name: 'Pandit Neelam Verma',
      location: 'Chennai',
      image: 'https://images.unsplash.com/photo-1593839686924-4b344fac3f8f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw5NDUyNDk0fHxlbnwwfHx8fHw%3D',
      review: 'Specializes in astrological counseling and Vastu corrections. Known for her precise readings.'
    },
    {
      id: 6,
      name: 'Pandit Vikram Singh',
      location: 'Bangalore',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&s',
      review: 'Offers detailed consultations in Vastu and astrology. Highly recommended for personal and professional advice.'
    },
    {
      id: 7,
      name: 'Pandit Aarti Joshi',
      location: 'Hyderabad',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNc8ME2NIu5tpu0-S9N8W1VhkFGp1V4-zApg&s',
      review: 'Expert in astrology with a focus on practical solutions. Provides clear and actionable guidance.'
    },
    {
      id: 8,
      name: 'Pandit Rajiv Mehta',
      location: 'Pune',
      image: 'https://techcrunch.com/wp-content/uploads/2016/03/matt-jospeh.jpeg',
      review: 'Known for his deep knowledge of Vastu and astrology. Offers effective remedies for various issues.'
    },
    {
      id: 9,
      name: 'Pandit Sanya Kapoor',
      location: 'Ahmedabad',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg',
      review: 'Specializes in Vastu Shastra and astrological predictions. Provides insightful and reliable consultations.'
    },
    {
      id: 10,
      name: 'Pandit Rahul Choudhury',
      location: 'Jaipur',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpWYsLSeY1sLvwgFNwBeJGjszUfEofDpwJw&s',
      review: 'Expert in astrology with a holistic approach. Offers detailed and effective guidance for personal growth.'
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

const BookPanditReviews = () => {
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

export default BookPanditReviews;
