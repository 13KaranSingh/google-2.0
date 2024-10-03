import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl">Engine2.0</p>
        </Link>
        <button onClick={() => setDarkTheme(!darkTheme)}>
          Toggle Theme
        </button>
      </div>
    </div>
  );
};













