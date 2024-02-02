import React, { useState } from 'react';
import TopBar from './components/TopBar';
import LeftSidebar from './components/Layout/TwoSidebars/LeftSidebar';
import RightSidebar from './components/Layout/TwoSidebars/RightSidebar';
import Map from './components/Map';
import Chartography from './components/pages/Chartography';

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
