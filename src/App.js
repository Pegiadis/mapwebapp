// App.js
import React, { useState } from 'react';
import TopBar from './components/TopBar';
import LeftSidebar from './components/Layout/TwoSidebars/LeftSidebar';
import RightSidebar from './components/Layout/TwoSidebars/RightSidebar';
import Map from './components/Map';
import Chartography from './components/Chartography'; // Import the new Chartography component

const App = () => {
  const [currentPage, setCurrentPage] = useState('map');

  const renderContent = () => {
    switch (currentPage) {
      case 'map':
        return <Map />;
      case 'chartography':
        return <Chartography />;
      default:
        return <Map />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <TopBar setCurrentPage={setCurrentPage} />
      <div className="flex flex-grow">
        <LeftSidebar />
        <div className="flex-grow">
          {renderContent()}
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

export default App;
