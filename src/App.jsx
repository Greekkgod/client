import React from 'react';
import Navbar from './compounds/Navbar';
import SearchBar from './compounds/SearchBar';
import Body from './compounds/Body';

const App = () => {
  return (
    <div className="min-h-screen bg-sky-200 relative"> 
      
      <Navbar />

 
      <div className="pt-20 px-5">
        <Body />
      </div>

      <div className="absolute right-5 top-[66%] transform -translate-y-1/2 w-1/3"> 
        <SearchBar />
      </div>
     
    </div>
 
  );
};

export default App;
