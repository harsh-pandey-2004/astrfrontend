import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const dummyData = [
  {
    id: 1,
    name: 'Mystic Stone',
    img: 'https://via.placeholder.com/300',
    description: 'A beautiful mystic stone to enhance your aura.',
  },
  {
    id: 2,
    name: 'Healing Crystal',
    img: 'https://via.placeholder.com/300',
    description: 'A crystal that promotes healing and well-being.',
  },
  {
    id: 3,
    name: 'Feng Shui Item',
    img: 'https://via.placeholder.com/300',
    description: 'An item to balance the energy in your home.',
  },
  {
    id: 4,
    name: 'Sacred Gem',
    img: 'https://via.placeholder.com/300',
    description: 'A gem that brings prosperity and luck.',
  },
];

const TrendingItems = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-3" data-aos="fade-up">Trending Items</h2>
      <Slider {...settings}>
        {dummyData.map((item) => (
          <div
            key={item.id}
            className="p-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
                data-aos="fade-in"
                data-aos-duration="1000"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingItems;
