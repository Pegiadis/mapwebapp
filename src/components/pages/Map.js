import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Assuming a filter prop is passed to the Map component
const Map = ({ filter }) => {
  const [markers, setMarkers] = useState([]);
  const centerPosition = [39.0742, 21.8243];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/mosquito_vision_data.json');
      const data = await response.json();
      // Apply the filter here if necessary; for example, based on a 'b3' value
      const filteredData = filter ? data.filter(point => point.b3 === filter) : data;
      const transformedMarkers = filteredData.map((point, index) => ({
        id: index,
        position: [point.lat, point.lon],
        info: `${point.a1} (${point.b1})`,
        m1: point.m1,
      }));
      setMarkers(transformedMarkers);
    };

    fetchData().catch(console.error);
  }, [filter]); // Reacting to changes in the filter prop

  const getColorBasedOnM1 = (m1Value) => {
    const colors = {
      1: '#00FF00', // Green
      2: '#7FFF00', // Lighter green
      3: '#FFFF00', // Yellow
      4: '#FF7F00', // Orange
      5: '#FF0000', // Red
    };
    return colors[m1Value] || '#3872a4'; // Default color changed as per the previous suggestion
  };

  return (
    <MapContainer center={centerPosition} zoom={6} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker) => (
        <CircleMarker
          key={marker.id}
          center={marker.position}
          radius={5}
          fillColor={getColorBasedOnM1(marker.m1)} // Dynamic color based on m1
          color="#000"
          weight={1}
          opacity={1}
          fillOpacity={0.8}
        >
          <Popup>{marker.info}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default Map;
