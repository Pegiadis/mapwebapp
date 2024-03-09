// src/components/Helpers/PopupMarker.js
import React, { useState } from 'react';
import { Marker, Popup } from 'react-leaflet';

const PopupMarker = ({ position }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        // Logic to handle the submission of the inputValue
        // This could be an API call or a state update, etc.
        console.log('Submitted value:', inputValue);
        // Reset the input after submission for next entry
        setInputValue('');
    };

    return (
        <Marker position={position}>
            <Popup>
                <div style={{ textAlign: 'center' }}>
                    <input
                        type="text"
                        placeholder="Enter data here"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button onClick={handleSubmit}>
                        Save
                    </button>
                </div>
            </Popup>
        </Marker>
    );
};

export default PopupMarker;
