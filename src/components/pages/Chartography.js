import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import LeftSidebar from '../Layout/TwoSidebars/LeftSidebar';

const Chartography = ({ filter, onFilterChange }) => {
  const centerPosition = [40.6401, 22.9444]; // Center on Thessaloniki

  return (
    <div className="flex h-full bg-gray-100">
      {/* LeftSidebar with border */}
      <div className="border-r border-gray-300">
        <LeftSidebar onFilterChange={onFilterChange} />
      </div>

      {/* Main content area with border */}
      <div className="flex flex-col flex-grow border-l border-gray-300">
        {/* Map area */}
        <div className="flex-grow relative" style={{ height: '500px' }}>
          <MapContainer center={centerPosition} zoom={12} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </div>

        {/* Bottom bar with increased height */}
        <div className="bg-gray-700 p-4 border-t border-gray-300" style={{ height: '200px' }}>
          <h2 className="text-white text-lg mb-4">Data Results</h2>
          {/* Add your DataGrid component here */}
        </div>
      </div>
    </div>
  );
};

export default Chartography;
