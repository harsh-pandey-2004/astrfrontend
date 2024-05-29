import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  const [activeTab, setActiveTab] = useState('booking');

  const bookingData = {
    labels: ['Total Bookings', 'Upcoming', 'Completed', 'Cancelled', 'Pending'],
    datasets: [
      {
        label: 'Bookings',
        data: [150, 5, 140, 5, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const financialData = {
    labels: ['Total Earnings', 'Monthly Earnings', 'Pending Payments'],
    datasets: [
      {
        label: 'Earnings in ₹',
        data: [50000, 5000, 2000],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const servicePerformanceData = {
    labels: ['Poojas', 'Japs', 'Consultations'],
    datasets: [
      {
        label: 'Service Count',
        data: [70, 50, 30],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const engagementData = {
    labels: ['Profile Views', 'Conversion Rate', 'Repeat Customers'],
    datasets: [
      {
        label: 'Engagement',
        data: [200, 75, 30],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'booking':
        return <Bar data={bookingData}  />;
      case 'financial':
        return <Bar data={financialData} />;
      case 'service':
        return <Bar data={servicePerformanceData} />;
      case 'engagement':
        return <Bar data={engagementData} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-4/5 h-screen absolute right-0 bg-yellow-50 p-8 flex flex-col items-center overflow-y-auto">
      <h1 className="text-3xl  mb-8">Pandit Stats</h1>
      <div className="w-full max-w-6xl">
        <div className="flex justify-around mb-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'booking' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('booking')}
          >
            Booking Stats
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'financial' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('financial')}
          >
            Financial Stats
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'service' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('service')}
          >
            Service Performance
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'engagement' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('engagement')}
          >
            Engagement Stats
          </button>
        </div>
        <div className="bg-white mt-6 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
          {renderTabContent()}
        </div>



         <div>
            {activeTab=='booking' && <div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold">Total Bookings</h3>
                <p className="text-gray-600">Number of all-time bookings</p>
                <p className="text-2xl font-bold mt-2">150</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold">Upcoming Bookings</h3>
                <p className="text-gray-600">Bookings scheduled in the future</p>
                <p className="text-2xl font-bold mt-2">5</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold">Completed Bookings</h3>
                <p className="text-gray-600">Bookings that have been completed</p>
                <p className="text-2xl font-bold mt-2">140</p>
              </div>
            </div>
                </div>}



           {activeTab=='financial' && <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold">Total Earnings</h3>
                <p className="text-gray-600">Total earnings till date</p>
                <p className="text-2xl font-bold mt-2">₹50,000</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold">Monthly Earnings</h3>
                <p className="text-gray-600">Earnings for the current month</p>
                <p className="text-2xl font-bold mt-2">₹5,000</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold">Pending Payments</h3>
                <p className="text-gray-600">Payments yet to be received</p>
                <p className="text-2xl font-bold mt-2">₹2,000</p>
                </div>
                </div>}


                {activeTab=='service' && <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold">Total Poojas</h3>
                <p className="text-gray-600">Number of Poojas performed</p>
                <p className="text-2xl font-bold mt-2">70</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold">Total Japs</h3>
                <p className="text-gray-600">Number of Japs performed</p>
                <p className="text-2xl font-bold mt-2">50</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold">Total Consultations</h3>
                <p className="text-gray-600">Number of Consultations given</p>
                <p className="text-2xl font-bold mt-2">30</p>
                </div>
                </div>}

            
            {activeTab=='engagement' && <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold">Profile Views</h3>
                <p className="text-gray-600">Number of profile views</p>
                <p className="text-2xl font-bold mt-2">200</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold">Conversion Rate</h3>
                <p className="text-gray-600">Rate of booking conversions</p>
                <p className="text-2xl font-bold mt-2">75%</p>
              </div>
              <div className="p-4 bg-white shadow-lg rounded-lg border-l-4 border-green-500">
                <h3 className="text-xl font-semibold">Repeat Customers</h3>
                <p className="text-gray-600">Number of repeat customers</p>
                <p className="text-2xl font-bold mt-2">30</p>
              </div>
            </div>}

         </div>

      </div>
    </div>
  );
};

export default Stats;
