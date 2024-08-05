import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import axios from 'axios';

const Asthavarga = () => {
  const [chartData, setChartData] = useState(null);
  const location = useLocation();
  const [userLat, setUserLat] = useState(null);
  const [userLong, setUserLong] = useState(null);
  const [pointsArr, setPointsArr] = useState(null);
  const { formData } = location.state || {}; // Default to an empty object if location.state is undefined
  console.log(formData);

  // Fetching user's lat & long
  const getUserCoordinates = async (cityName) => {
    const apiKey = 'AIzaSyDZ-0Ods3pdyF7QL_4frjNnhSeaxxEvo00';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      if (response.data.status === 'OK') {
        const location = response.data.results[0].geometry.location;
        setUserLat(location.lat);
        setUserLong(location.lng);
      } else {
        throw new Error('Unable to find location');
      }
    } catch (error) {
      console.error('Error fetching user coordinates:', error);
    }
  };

  // Fetch Ashtakvarga details
  const fetchDetails = async () => {
   
    const tz = 5.5; // Time zone, adjust as necessary
    const apiKey = '290bddbe-4d06-5662-8aac-bfa5b725a565';

    const url = `https://api.vedicastroapi.com/v3-json/horoscope/ashtakvarga?dob=${formData.day}/${formData.month}/${formData.year}&tob=${formData.hour}:${formData.minute}&lat=${userLat}&lon=${userLong}&tz=${tz}&api_key=${apiKey}&lang=en`;

    try {
      const response = await axios.get(url);
      console.log(response.data.response.ashtakvarga_points);
      setPointsArr(response.data.response.ashtakvarga_points);
    } catch (error) {
      console.error('Error fetching Ashtakvarga details:', error);
    }
  };

  // Use effect to get coordinates and fetch details
  useEffect(() => {
    if (formData && formData.birthPlace) {
      getUserCoordinates(formData.birthPlace);
    }
  }, [formData]);

  // Fetch details once coordinates are set
  useEffect(() => {
    if (userLat && userLong) {
      fetchDetails(userLat, userLong);
    }
  }, [userLat, userLong]);

  // Update chart data when pointsArr is set
  useEffect(() => {
    if (pointsArr) {
      const radarChartData = {
        labels: ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Ascendant"],
        datasets: [
          {
            label: 'Points',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            data: pointsArr[3], // Example: using the fourth set of points
          },
        ],
      };

      setChartData(radarChartData);
    }
  }, [pointsArr]);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="asthavarga-container">
      <h2>Ashtakvarga</h2>
      <div className="chart">
        <Radar
          data={chartData}
          options={{
            scale: {
              ticks: { beginAtZero: true, max: 10 },
            },
            elements: {
              line: { tension: 0, borderWidth: 3 },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Asthavarga;
