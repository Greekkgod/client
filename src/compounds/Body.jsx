import React from 'react';


const Body = () => {
  return (
    <div className="h-screen flex flex-col justify-end p-4"> {/* Ensure Body is full height and content is at the bottom */}
      <div className="bg"></div>
      <div className="overflow-x-auto mt-20 scrollbar-hide"> {/* Added scrollbar-hide class */}
        <div className="flex space-x-40 pb-4"> {/* Increased horizontal spacing between the boxes */}

          {/* First wider green box */}
          <div className="w-80 h-60 bg-green-500 rounded-lg flex flex-col justify-center items-center">
            <p className="text-white text-xl">Grocery 1</p>
           <div className="ig"></div>
          </div>

          {/* Second wider green box */}
          <div className="w-80 h-60 bg-green-500 rounded-lg flex flex-col justify-center items-center">
            <p className="text-white text-xl">Grocery 2</p>
          </div>

          {/* Third wider green box */}
          <div className="w-80 h-60 bg-green-500 rounded-lg flex flex-col justify-center items-center">
            <p className="text-white text-xl">Grocery 3</p>
          </div>

          {/* Fourth wider green box */}
          <div className="w-80 h-60 bg-green-500 rounded-lg flex flex-col justify-center items-center">
            <p className="text-white text-xl">Grocery 4</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Body;
