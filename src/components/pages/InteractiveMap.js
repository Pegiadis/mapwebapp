import React, { useState } from 'react';
import { MapContainer, TileLayer, useMapEvents, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define your custom icon
const customIcon = new L.Icon({
    iconUrl: '/mosquito-svgrepo-com.svg',
    iconSize: [35, 35], // Size of the icon
    iconAnchor: [17, 35], // Point of the icon which will correspond to marker's location
    popupAnchor: [0, -35], // Point from which the popup should open relative to the iconAnchor
});

const InteractiveMap = () => {
    const [activeMarker, setActiveMarker] = useState(null);

    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                setActiveMarker(e.latlng);
            },
        });
        return null;
    };

    return (
        <MapContainer center={[39.0742, 21.8243]} zoom={6} className="h-full w-full">
            <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                attribution='&copy; contributors of OpenTopoMap (CC-BY-SA)'
            />
            <MapClickHandler />
            {activeMarker && (
                <Marker
                    position={activeMarker}
                    icon={customIcon} // Use the custom icon here
                >
                    <Popup>
                        <div style={{ textAlign: 'center' }}>
                            <input
                                type="text"
                                placeholder="Enter data here"
                            />
                            <br />
                            <button>Save</button>
                        </div>
                    </Popup>
                </Marker>
            )}
        </MapContainer>
    );
};

export default InteractiveMap;
