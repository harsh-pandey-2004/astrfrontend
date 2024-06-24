import React, { useEffect, useState } from "react";

const Charts = () => {
  const [moonChartData, setMoonChartData] = useState(null);
  const [sunChartData, setSunChartData] = useState(null);
  const [chalitChartData, setChalitChartData] = useState(null);

  const fetchChartData = async (api, setChartData) => {
    const apiKey = "39284b51d5d7ca12b77994ac10fc9e5205474669";
    const data = {
      day: 6,
      month: 1,
      year: 2000,
      hour: 7,
      min: 45,
      lat: 19.132,
      lon: 72.342,
      tzone: 5.5,
    };

    const auth = "Basic " + btoa(`631185:${apiKey}`);

    try {
      const response = await fetch(`https://json.astrologyapi.com/v1/${api}`, {
        method: "POST",
        headers: {
          Authorization: auth,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(`Data for ${api}:`, result); // Log the data for debugging
      setChartData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchChartData("horo_chart_image/MOON", setMoonChartData);
    fetchChartData("horo_chart_image/D1", setSunChartData);
    fetchChartData("horo_chart_image/D2 ", setChalitChartData);
  }, []);

  return (
    <div className="kundali-chart">
      <h1 className="text-center text-2xl font-bold mb-4">Kundali Chart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {moonChartData && (
          <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-semibold mb-2">Moon</h2>
            <div
              className="chart"
              dangerouslySetInnerHTML={{ __html: moonChartData.svg }}
            />
          </div>
        )}
        {sunChartData && (
          <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-semibold mb-2">Sun Chart</h2>
            <div
              className="chart"
              dangerouslySetInnerHTML={{ __html: sunChartData.svg }}
            />
          </div>
        )}
        {chalitChartData && (
          <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-center text-xl font-semibold mb-2">Hora Chart</h2>
            <div
              className="chart"
              dangerouslySetInnerHTML={{ __html: chalitChartData.svg }}
            />
          </div>
        )}
      </div>
      {moonChartData && sunChartData && chalitChartData && (
        <div className="comparison">
          <h3>Comparison of Moon, Sun, and Chalit Charts</h3>
          <pre>Moon Chart: {JSON.stringify(moonChartData, null, 2)}</pre>
          <pre>Sun Chart: {JSON.stringify(sunChartData, null, 2)}</pre>
          <pre>Chalit Chart: {JSON.stringify(chalitChartData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Charts;
