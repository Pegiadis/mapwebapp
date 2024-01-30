import React from 'react';

const TopBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <img src="/your-logo.png" alt="Your Logo" className="h-8 w-8 mr-2" />
                    <span className="text-white text-lg font-semibold">Your Application</span>
                </div>
                <div className="flex items-center">
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
