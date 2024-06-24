import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';

const Asthavarga = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Mock data for testing purposes
    const mockData = {
      ashtakvarga_order: ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn", "Ascendant"],
      ashtakvarga_points: [
        [3, 3, 2, 3, 6, 4, 5, 5],
        [6, 3, 4, 7, 4, 4, 3, 5],
        [3, 3, 2, 5, 4, 3, 3, 3],
        [2, 6, 4, 4, 4, 4, 6, 5],
        [4, 5, 4, 4, 6, 3, 5, 6],
        [5, 5, 7, 5, 2, 4, 5, 2],
        [3, 2, 2, 5, 4, 3, 2, 3],
        [6, 5, 2, 8, 1, 1, 3, 7],
      ]
    };

    // Process the mock data for chart rendering
    const radarChartData = {
      labels: mockData.ashtakvarga_order,
      datasets: [
        {
          label: 'Points',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
          data: mockData.ashtakvarga_points[0], // Using the first set of points for simplicity
        },
      ],
    };

    // Set the chart data state
    setChartData(radarChartData);
  }, []);

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
