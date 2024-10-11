import React from 'react';
import Navbar from './compounds/navbar'; // Import the Navbar component

const App = () => {
  return (
    <div className='h-screen bg-sky-200'>
      <div className='h-[90%] flex'>
        <Navbar /> {/* Use Navbar with a capital 'N' */}
      </div>
    </div>
  );
};

export default App;
