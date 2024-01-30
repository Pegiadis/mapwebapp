import React from 'react';

const BurgerMenu = ({ isPanelOpen, togglePanel }) => {
    return (
        <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out ${isPanelOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button onClick={togglePanel} className="text-gray-300 hover:text-white px-3 py-2 text-sm">
                Close
            </button>
            <div className="p-4">
                <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 1</div>
                <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 2</div>
                <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 3</div>
                {/* ... more items */}
            </div>
        </div>
    );
};

export default BurgerMenu;
