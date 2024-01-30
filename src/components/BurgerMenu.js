import React from 'react';
import { FaHome, FaInfo, FaServicestack, FaTimes } from 'react-icons/fa'; // Import specific icons

const BurgerMenu = ({ isPanelOpen, togglePanel }) => {
    return (
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${isPanelOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button onClick={togglePanel} className="text-gray-300 hover:text-white px-3 py-2 text-sm flex items-center">
                <FaTimes className="mr-2" /> Close
            </button>
            <div className="p-4">
                <div className="mb-4 bg-gray-600 p-3 rounded flex items-center">
                    <FaHome className="mr-2" /> Menu Item 1
                </div>
                <div className="mb-4 bg-gray-600 p-3 rounded flex items-center">
                    <FaInfo className="mr-2" /> Menu Item 2
                </div>
                <div className="mb-4 bg-gray-600 p-3 rounded flex items-center">
                    <FaServicestack className="mr-2" /> Menu Item 3
                </div>
                {/* ... more items */}
            </div>
        </div>
    );
};

export default BurgerMenu;
