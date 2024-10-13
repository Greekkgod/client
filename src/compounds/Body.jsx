import React from 'react';

const Body = () => {
  // Array of names for the boxes
  const names = ['Grocery 1', 'Grocery 2', 'Grocery 3', 'Grocery 4'];

  return (
    <div className="h-screen flex flex-col justify-end p-4"> {/* Ensure Body is full height and content is at the bottom */}
      <div className="bg"></div>
      <div className="overflow-x-auto"> {/* Enable horizontal scrolling */}
        <div className="flex space-x-4 pb-4"> {/* Flex container for horizontal arrangement with spacing */}
          {/* Example of multiple green square boxes with rounded edges, text */}
          {names.map((name, index) => (
            <div 
              key={index} 
              className="w-60 h-60 bg-green-500 rounded-lg flex flex-col justify-center items-center"
            >
              <p className="text-white text-xl">{name}</p> {/* Use unique name from the array */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
