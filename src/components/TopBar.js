import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the burger menu icon

const TopBar = ({ togglePanel }) => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <button onClick={togglePanel} className="text-white">
                <GiHamburgerMenu size={24} /> {/* Use the icon here */}
            </button>
            <span className="text-white text-lg font-semibold">Your Application</span>
            {/* Rest of your top bar */}
        </nav>
    );
};

export default TopBar;
