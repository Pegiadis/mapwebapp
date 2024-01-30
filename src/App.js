import React, { useState } from 'react';
import TopBar from './components/TopBar'; // make sure the path is correct
import BurgerMenu from './components/BurgerMenu'; // make sure the path is correct

const App = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const togglePanel = () => setIsPanelOpen(!isPanelOpen);

    return (
        <div className="App">
            <TopBar togglePanel={togglePanel} />
            <BurgerMenu isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
            {/* Rest of your application */}
        </div>
    );
};

export default App;
