import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './UpcomingEvents.css'; // For custom styles
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// Initialize AOS
// AOS.init({
//   duration: 1000,
//   easing: 'ease-in-out',
//   once: true,
// });

const events = [
  {
    title: "Ganesha Chaturthi",
    date: "September 07 2024, Saturday",
    description: "Ganesha Chaturthi is also famously known as Vinayaka Chaturthi. It is celebrated as the birthday of Lord Ganesha. The festival begins on the fourth day of the Hindu month Bhadra.",
    day: "07",
    dayName: "Saturday",
    image: "https://via.placeholder.com/400x200.png?text=Ganesha+Chaturthi"
  },
  {
    title: "Bhadrapada Purnima",
    date: "September 17 2024, Tuesday",
    description: "The Full Moon day in the month of Bhadrapada is referred to as Bhadrapada Purnima.",
    day: "17",
    dayName: "Tuesday",
    image: "https://via.placeholder.com/400x200.png?text=Bhadrapada+Purnima"
  },
  {
    title: "Pitru Paksha",
    date: "September 17 2024, Tuesday",
    description: "Pitru Paksha is a 16 day period in Hindu calendar when Hindus pay homage to their ancestors (Pitru) through Puja and food offerings.",
    day: "17",
    dayName: "Tuesday",
    image: "https://via.placeholder.com/400x200.png?text=Pitru+Paksha"
  },
  // Add more events as needed
];

const UpcomingEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center" >Upcoming <span className='text-[#f6c300]'>Events</span></h2>
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="px-4" >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 h-[32rem]" >
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
                <div className="mt-4 flex justify-center">
                  <div className="bg-[#f6c300] text-white rounded-md w-16 h-16 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{event.day}</p>
                      <p className="text-sm">{event.dayName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default UpcomingEvents;
