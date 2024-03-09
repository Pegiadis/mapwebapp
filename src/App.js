import React, { useState } from 'react';
import TopBar from './components/Layout/Sidebars/TopBar';
import LeftSidebar from './components/Layout/Sidebars/LeftSidebar';
import RightSidebar from './components/Layout/Sidebars/RightSidebar';
import Map from './components/pages/Map';
import Chartography from './components/pages/Chartography';
import InteractiveMap from "./components/pages/InteractiveMap";

const App = () => {
  const [currentPage, setCurrentPage] = useState('map');
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'map':
        return (
          <div className="flex h-full">
            <LeftSidebar onFilterChange={handleFilterChange} />
            <div className="flex-grow">
              <Map filter={selectedFilter} />
            </div>
            <RightSidebar />
          </div>
        );
      case 'chartography':
        return <Chartography filter={selectedFilter} />;
      case 'interactiveMap':
        return (
            <div className="flex h-full">
              <LeftSidebar onFilterChange={handleFilterChange} />
              <div className="flex-grow">
                <InteractiveMap />
              </div>
              <RightSidebar />
            </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <TopBar setCurrentPage={setCurrentPage} />
      {currentPage === 'chartography' ? (
        <div className="flex flex-col flex-grow">
          {renderPage()}
        </div>
      ) : (
        renderPage()
      )}
    </div>
  );
};

export default App;
