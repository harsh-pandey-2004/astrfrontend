import React, { useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./GrahPooja.css"; // Import custom CSS for scrollbar styling

const GrahPooja = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-6  relative top-28 pb-32 w-full">
      <div className="bg-gray-100 rounded-lg flex flex-col md:flex-row">
        {/* Left Column */}
        <div className="w-full md:w-2/3 pr-4">
          <h1 className="text-3xl font-bold mb-4 text-[#f6c300]">Grah Pooja</h1>
          <Tabs>
            <TabList className="flex space-x-2 mb-4">
              <Tab className="flex-1 py-2 text-center bg-white border border-gray-300 rounded-t-lg cursor-pointer hover:bg-[#f6c300] hover:text-white transition-colors">
                Method 1
              </Tab>
              <Tab className="flex-1 py-2 text-center bg-white border border-gray-300 rounded-t-lg cursor-pointer hover:bg-[#f6c300] hover:text-white transition-colors">
                Method 2
              </Tab>
              <Tab className="flex-1 py-2 text-center bg-white border border-gray-300 rounded-t-lg cursor-pointer hover:bg-[#f6c300] hover:text-white transition-colors">
                Method 3
              </Tab>
              <Tab className="flex-1 py-2 text-center bg-white border border-gray-300 rounded-t-lg cursor-pointer hover:bg-[#f6c300] hover:text-white transition-colors">
                Method 4
              </Tab>
              <Tab className="flex-1 py-2 text-center bg-white border border-gray-300 rounded-t-lg cursor-pointer hover:bg-[#f6c300] hover:text-white transition-colors">
                Method 5
              </Tab>
            </TabList>

            {/* Method 1 */}
            <TabPanel>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-[#f6c300]">
                  Method 1: Traditional Approach
                </h2>
                {/* Content for Method 1 */}
              </div>
            </TabPanel>

            {/* Method 2 */}
            <TabPanel>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-[#f6c300]">
                  Method 2: Modern Approach
                </h2>
                {/* Content for Method 2 */}
              </div>
            </TabPanel>

            {/* Method 3 */}
            <TabPanel>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-[#f6c300]">
                  Method 3: Quick Pooja
                </h2>
                {/* Content for Method 3 */}
              </div>
            </TabPanel>

            {/* Method 4 */}
            <TabPanel>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-[#f6c300]">
                  Method 4: Evening Pooja
                </h2>
                {/* Content for Method 4 */}
              </div>
            </TabPanel>

            {/* Method 5 */}
            <TabPanel>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-2 text-[#f6c300]">
                  Method 5: Personalized Pooja
                </h2>
                {/* Content for Method 5 */}
              </div>
            </TabPanel>
          </Tabs>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 mt-6 md:mt-0 max-h-[600px] overflow-y-auto custom-scrollbar">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-[#f6c300]">
              Blog / Pictures
            </h2>
            <p className="mb-4">
              Explore more about Grah Pooja through our blog posts and images.
              Learn about different pooja methods, their significance, and see
              images from past ceremonies.
            </p>
            <img
              src="https://via.placeholder.com/300"
              alt="Grah Pooja"
              className="w-full h-auto mb-4 rounded-lg"
            />
            <p className="text-gray-700 mb-2">
              Read our latest blog post to get detailed insights and tips for
              performing Grah Pooja in various ways.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full">
        <a
          href="#"
          className="bg-[#f6c300] text-white py-2 px-4 rounded-lg shadow-lg hover:bg-[#d6a800] transition-colors w-full"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default GrahPooja;
