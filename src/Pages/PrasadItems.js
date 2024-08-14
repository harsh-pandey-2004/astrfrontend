import React, { useState, useEffect } from "react";
import Fengsui from "../../src/images/fengshui.jpg";
import Gems from "../../src/images/gem.jpg";
import Plant from "../../src/images/plant.jpg";
import Yantra from "../../src/images/yantra.jpg";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Popup = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      data-aos="fade-in"
      data-aos-duration="500"
    >
      <div className="bg-white p-8 rounded-lg max-w-3xl w-full relative h-[25rem] flex gap-6">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 h-5 w-5"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="w-1/2">
          <img src={item.img} alt={item.name} className="w-[100%] h-64 object-cover mb-4" />
          <button className="w-full py-2 bg-[#f6c300] text-white rounded hover:bg-yellow-500">Buy Now</button>
        </div>
        <div className="flex flex-col overflow-scroll w-1/2">
          <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
          <p className="text-lg text-gray-700 mb-2">{item.price}</p>
          <p className="text-sm text-gray-600 mb-4">SKU: {item.sku}</p>
          <p className="text-sm text-gray-600 mb-4"><strong>Benefits:</strong> {item.benefits}</p>
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
            <label className="text-sm text-gray-700">Color: Black</label>
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

const items = [
  {
    id: "yantra",
    name: "Astrology Yantras",
    img: Yantra,
    price: "$19.99",
    sku: "0003",
    description: "Discover powerful yantras to enhance your spiritual journey.",
    benefits: "Enhances spiritual growth, brings good luck.",
    totalOrders: 150,
    ratings: "4.5/5",
  },
  {
    id: "plant",
    name: "Sacred Plants",
    img: Plant,
    price: "$9.99",
    sku: "0004",
    description: "Bring home plants that bring peace and prosperity.",
    benefits: "Purifies air, brings positive energy.",
    totalOrders: 200,
    ratings: "4.7/5",
  },
  {
    id: "fengshui",
    name: "Feng Shui Items",
    img: Fengsui,
    price: "$29.99",
    sku: "0005",
    description: "Enhance your home's energy with our feng shui items.",
    benefits: "Balances home energy, brings harmony.",
    totalOrders: 120,
    ratings: "4.6/5",
  },
  {
    id: "gems",
    name: "Precious Gems",
    img: Gems,
    price: "$49.99",
    sku: "0006",
    description: "Explore our collection of precious and semi-precious gems.",
    benefits: "Improves health, brings prosperity.",
    totalOrders: 80,
    ratings: "4.8/5",
  },
];

const PrasadItems = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mb-16">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">Our Products</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full max-w-md py-3 px-3 border-black outline-none focus:ring-2 focus:ring-yellow-500 focus:border-none"
          data-aos="fade-up"
          data-aos-delay="200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            onClick={() => handleCardClick(item)}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
              data-aos="fade-in"
              data-aos-duration="1000"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-500 mt-2">{item.price}</p>
              <button className="mt-4 w-full py-2 bg-[#f6c300] text-white rounded hover:bg-yellow-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default PrasadItems;
