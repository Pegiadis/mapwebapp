import React from 'react';
import TopBar from './components/TopBar'; // Assuming TopBar is in the same directory
import LeftSidePanel from './components/LeftSidePanel'; // Import the new LeftSidePanel component
import BurgerMenu from './components/BurgerMenu'; // Import the new BurgerMenu component

const App = () => {
    return (
        <div className="flex">
          <BurgerMenu /> {/* Render the burger menu */}
            <div className="flex-1">
                <TopBar />
                {/* Rest of your application */}
            </div>
        </div>
    );
};

export default App;
