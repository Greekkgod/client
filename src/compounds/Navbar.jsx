import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-5 bg-slate-950 shadow md:flex md:items-center md:justify-between fixed w-full top-0 left-0 z-50">
      <ul className="md:flex md:items-center">
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-white hover:text-green-500 duration-500">HOME</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-white hover:text-green-500 duration-500">ABOUT US</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-white hover:text-green-500 duration-500">SERVICE</a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a href="#" className="text-white hover:text-green-500 duration-500">CONTACT</a>
        </li>
      </ul>
      <div className="ml-auto">
        <button className="bg-violet-600 text-white duration-500 px-6 py-2 mx-4 hover:bg-green-800 rounded-full font-sans antialiased">
          LOGIN
        </button>
        <button className="bg-green-800 text-white duration-500 px-6 py-2 mx-4 rounded-full font-sans antialiased">
          SIGN UP
        </button>

      </div>
    </nav>
  );
};

export default Navbar;

