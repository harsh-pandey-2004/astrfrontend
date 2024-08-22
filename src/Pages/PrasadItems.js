import React, { useState, useEffect } from "react";
// import AOS from 'aos'; // Import AOS
// import 'aos/dist/aos.css'; // Import AOS styles
import axios from "axios"; // Import axios for making API calls

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

const PrasadItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleItemsCount, setVisibleItemsCount] = useState(4); // Initial number of items shown

  useEffect(() => {
    // AOS.init(); // Initialize AOS on component mount
    fetchItems(); // Fetch all items on component mount
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://astrobackend.onrender.com/api/getitems");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleCardClick = async (itemId) => {
    try {
      const response = await axios.get(`https://astrobackend.onrender.com/api/getitems/${itemId}`);
      setSelectedItem(response.data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 4); // Show 4 more items
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 mb-24">
      <h1 className="text-3xl font-bold text-center mb-8" >Our Products</h1>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded w-full max-w-md py-3 px-3 border-black outline-none focus:ring-2 focus:ring-yellow-500 focus:border-none"
          
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.slice(0, visibleItemsCount).map((item) => (
          <div
            key={item._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            onClick={() => handleCardClick(item._id)}
            
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
              
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-gray-500 mt-2">${item.price}</p>
              <button className="mt-4 w-full py-2 bg-[#f6c300] text-white rounded hover:bg-yellow-500">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length > visibleItemsCount && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMoreItems}
            className="px-6 py-2 bg-[#f6c300] text-white rounded hover:bg-yellow-500"
            
          >
            Load More
          </button>
        </div>
      )}

      {selectedItem && <Popup item={selectedItem} onClose={handleClosePopup} />}
    </div>
  );
};

export default PrasadItems;
