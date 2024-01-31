import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const [markers, setMarkers] = useState([]);
    const centerPosition = [39.0742, 21.8243]; // Central position for the map

    useEffect(() => {
        // Fetching marker data
        fetch('/mosquito_vision_data.json')
            .then(response => response.json())
            .then(data => {
                // Transform the data into markers
                const transformedMarkers = data.map((point, index) => ({
                    id: index,
                    position: [point.lat, point.lon],
                    info: `${point.a1} (${point.b1})`,
                    m1: point.m1,
                }));
                // Update the state with the new markers
                setMarkers(transformedMarkers);
            });
    }, []);

    // Function to determine the color of the marker based on m1 value
    const getColorBasedOnM1 = (m1Value) => {
        const colors = {
            1: '#00FF00', // Green
            2: '#7FFF00', // Lighter green
            3: '#FFFF00', // Yellow
            4: '#FF7F00', // Orange
            5: '#FF0000', // Red
        };
        return colors[m1Value] || '#FFFFFF'; // Default to white if no match
    };

    return (
        <div className="h-screen w-full">
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
                        fillColor={getColorBasedOnM1(marker.m1)}
                        color="#000"
                        weight={1}
                        opacity={1}
                        fillOpacity={0.8}
                    >
                        <Popup>{marker.info}</Popup>
                    </CircleMarker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Map;
