import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LeftSidebar = ({ onFilterChange }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/mosquito_vision_data.json');
      const data = await response.json();
      // Transform the data for the chart
      // This is just an example; adjust it according to your actual data structure
      const aggregatedData = data.reduce((acc, curr) => {
        // Example transformation
        const key = curr.b3;
        if (!acc[key]) {
          acc[key] = { name: key, count: 0 };
        }
        acc[key].count += 1;
        return acc;
      }, {});
      setChartData(Object.values(aggregatedData));
    };

    fetchData().catch(console.error);
  }, []);

  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="w-64 bg-gray-700 h-full p-4">
      <h2 className="text-white text-lg mb-4">Filters</h2>
      <select
        onChange={handleFilterChange}
        className="w-full bg-gray-600 text-white p-2 rounded"
      >
        <option value="">Regional Unit</option>
        {/* Populate these options based on the unique values of b3 in your data */}
        <option value="THESSALONIKI">Thessaloniki</option>
        <option value="IMATHIA">Imathia</option>
        <option value="PELLA">Pella</option>
        <option value="KILKIS">Kilkis</option>
        <option value="IMATHIA">Imathia</option>
        <option value="SERRES">Serres</option>
        <option value="PIERIA">Pieria</option>
        {/* ... more options */}
        <option value="">Regional Unit</option>
      </select>
      
      {/* Adjusted chart size for better fit */}
      <div className="chart-container" style={{ width: '100%', height: 'auto', minHeight: '250px', marginLeft: '-30px', marginTop: ' 10px' }}>
        <BarChart width={230} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default LeftSidebar;
