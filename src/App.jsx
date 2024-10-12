import React from 'react';
import Navbar from './compounds/Navbar'; // Import the Navbar component
import SearchBar from './compounds/SearchBar';
import Body from './compounds/Body';

const App = () => {
  return (
    <div className="h-screen bg-sky-200">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with padding to account for the fixed Navbar */}
      <div className="pt-24 px-5 flex justify-center">
        <SearchBar />
      </div>
      <div>
        <Body/>
      </div>
    </div>
  );
};

export default App;
