import React from 'react';

const LeftSidePanel = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-700 text-white">
            {/* Placeholder boxes for menu options */}
            <div className="p-4">
                <div className="mb-4 bg-gray-600 p-3 rounded">XXX</div>
                <div className="mb-4 bg-gray-600 p-3 rounded">XXX</div>
                <div className="mb-4 bg-gray-600 p-3 rounded">XXX</div>
                {/* ... more boxes as needed */}
            </div>

            {/* Status indicator at the bottom */}
            <div className="mt-auto bg-yellow-400 p-3">
                <span>Indicator 1</span>
            </div>
        </div>
    );
};

export default LeftSidePanel;
