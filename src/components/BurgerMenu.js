import React, { useState } from 'react';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Burger Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {/* Icon for burger menu (can be replaced with an actual icon) */}
        <div className="block w-6 h-0.5 bg-white mb-1"></div>
        <div className="block w-6 h-0.5 bg-white mb-1"></div>
        <div className="block w-6 h-0.5 bg-white"></div>
      </button>

      {/* Side Panel */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-50 shadow-lg">
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white px-3 py-2 text-sm"
          >
            Close
          </button>
          {/* Menu Content */}
          <div className="p-4">
            <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 1</div>
            <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 2</div>
            <div className="mb-4 bg-gray-600 p-3 rounded">Menu Item 3</div>
            {/* ... more items */}
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
