import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import axios from 'axios'; // Import axios to make API calls

const Popup = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
     
    >
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative h-[25rem] flex gap-6">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 h-5 w-5"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-1/2">
          <img src={item.image} alt={item.name} className="w-[100%] h-64 object-cover mb-4" />
          <button className="w-full py-2 bg-[#f6c300] text-white rounded hover:bg-yellow-500">Buy Now</button>
        </div>
        <div className="flex flex-col overflow-scroll w-1/2">
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
          <p className="text-lg text-gray-700 mb-2">${item.price}</p>
          <p className="text-sm text-gray-600 mb-4">SKU: {item.sku}</p>
          <p className="text-sm text-gray-600 mb-4"><strong>Benefits:</strong> {item.advantages.join(', ')}</p>
          <p className="text-sm text-gray-600 mb-4"><strong>Total Orders:</strong> {item.totalOrders}</p>
          <p className="text-sm text-gray-600 mb-4"><strong>Ratings:</strong> {item.ratings}</p>
          <div className="flex flex-col space-y-2 mb-4">
            <label className="text-sm text-gray-700">Size</label>
            <select className="border p-2 rounded">
              <option value="">Select</option>
              {/* Add your options here */}
            </select>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <label className="text-sm text-gray-700">Color: {item.color}</label>
            <div className="w-6 h-6 bg-black rounded-full border border-gray-300"></div>
          </div>
          <div className="flex flex-col space-y-2 mb-4">
            <label className="text-sm text-gray-700">Quantity</label>
            <input type="number" min="1" defaultValue="1" className="border p-2 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // AOS.init(); // Initialize AOS on component mount

    // Fetch items from the API
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://astrobackend.onrender.com/api/getitems');
        const sortedItems = response.data.sort((a, b) => b.totalOrders - a.totalOrders);
        setItems(sortedItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = async (itemId) => {
    try {
      const response = await axios.get(`https://astrobackend.onrender.com/api/getitems/${itemId}`);
      setSelectedItem(response.data);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

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
      <h2 className="text-3xl font-bold text-center mb-3">Trending Items</h2>
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4"
            
            onClick={() => handleCardClick(item._id)}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-t-lg"
                
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default TrendingItems;
