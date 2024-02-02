// LeftSidebar.js
import React from 'react';

const LeftSidebar = ({ onFilterChange }) => {
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
      
      {/* ... other filters and content ... */}
    </div>
  );
};

export default LeftSidebar;
