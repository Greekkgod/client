import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="h-screen flex flex-col p-4">
      <div className="bg"></div>
      <div className="mt-20">
        <div className="flex justify-between pb-4">

          {/* First green box with image */}
          <div className="grocery-box">
            <img src="/src/assets/image1.png" alt="Grocery" className="grocery-image" />
            <p className="grocery-text">Grocery</p>
          </div>

          {/* Second green box with image */}
          <div className="grocery-box">
            <img src="/src/assets/image2.png" alt="Fruit and Vegetable" className="grocery-image" />
            <p className="grocery-text">Fruit and Vegetable</p>
          </div>

          {/* Third green box with image */}
          <div className="grocery-box">
            <img src="/src/assets/image5.png" alt="Beverages" className="grocery-image" />
            <p className="grocery-text">Beverages</p>
          </div>

          {/* Fourth green box with image */}
          <div className="grocery-box">
            <img src="/src/assets/image4.png" alt="Medicine" className="grocery-image" />
            <p className="grocery-text">Medicine</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Body;
