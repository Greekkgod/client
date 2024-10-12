import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'; // Importing the search icon

const SearchBar = () => {
  return (
    <div className=" flex border-2  border-black border-solid rounded-full p-2 items-center w-2/3 mx-auto">
      <input
        type="text"
        placeholder ="Search..."
        className="outline-none px-2 w-full bg-slate-300 rounded-full"
      />
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
    </div>
  );
};

export default SearchBar;
