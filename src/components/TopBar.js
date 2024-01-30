import React from 'react';

const TopBar = ({ togglePanel }) => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <button onClick={togglePanel} className="text-white">
                {/* Here you would include your burger menu icon */}
                <span>Menu</span>
            </button>
            <span className="text-white text-lg font-semibold">Your Application</span>
            {/* Rest of your top bar */}
        </nav>
    );
};

export default TopBar;
