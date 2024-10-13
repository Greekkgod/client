import React from 'react';
import Navbar from './compounds/Navbar';
import SearchBar from './compounds/SearchBar';
import Body from './compounds/Body';

const App = () => {
  return (
    <div className="h-screen bg-sky-200">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content with padding to account for the fixed Navbar */}
      <div className="pt-20 px-5 flex justify-end">
        <SearchBar />
      </div>

      {/* Container for body with horizontal scroll */}
      <div className="overflow-x-auto ">
        <Body />
      </div>
    </div>
  );
};

export default App;
