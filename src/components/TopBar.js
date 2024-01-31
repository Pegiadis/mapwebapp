import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';

const TopBar = ({ setCurrentPage }) => {
    // Define the mapping of button text to page identifiers
    const buttons = [
        { label: 'Συγκροτηματική επιτροπή', page: 'map' },
        { label: 'Χαρτογράφηση', page: 'chartography' },
        { label: 'Εντοπισμός' },
        { label: 'Επιδημιολογική επιτήρηση'},
        { label: 'Εργασίες - Παρατηρήσεις'},
        { label: 'Επικοινωνία Κλήσεις - Παράπονα'},
        { label: 'Ύδρo - Μετεωρολογικά στοιχεία'},
        { label: 'Quality Control'},
        { label: 'DSS'}
    ];

    return (
        <nav className="bg-gray-800 px-4 py-2 flex items-center justify-between shadow-lg z-50">
            <div className="flex items-center">
                <button onClick={() => setCurrentPage('menu')} className="text-white p-2 lg:hidden">
                    <GiHamburgerMenu size={24} />
                </button>
                <span className="text-white text-xl font-semibold hidden lg:block">ePIgnosis</span>
            </div>
            <div className="flex overflow-x-auto scrollbar-hide">
                {buttons.map((button, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(button.page)}
                        className="text-white text-sm px-3 py-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 mr-2 whitespace-nowrap">
                        {button.label}
                    </button>
                ))}
                <button className="text-white p-2 mr-4">
                    <AiOutlineSearch size={24} />
                </button>
                <button className="text-white p-2">
                    <AiOutlineBell size={24} />
                </button>
            </div>
        </nav>
    );
};

export default TopBar;
