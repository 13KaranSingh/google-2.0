import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search";
// Export the Navbar component as a constant, making it available for import in other files
export const Navbar = ({ 
  // Destructure the darkTheme and setDarkTheme props from the parent component
  darkTheme, 
  setDarkTheme 
}) => {
  // Return the JSX that makes up the Navbar component
  return (
    // Create a container div with various Tailwind CSS classes for styling
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b">
      {/* // Create a child div with additional Tailwind CSS classes for styling */}
      <div className="flex justify-between items-center space-x-5 w-screen">
        {/* // Create a Link component ( likely from a library like React Router ) to the homepage */}
        <Link to="/">
          {/* // Create a paragraph element with Tailwind CSS classes for styling, containing the text "Engine2.0" and an eye emoji */}
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">Engine2.0 👀</p>
        </Link>
        {/* // Create a button element with an onClick event handler that toggles the darkTheme state */}
        <button type="button" onClick={() => setDarkTheme(!darkTheme)} 
          // Apply various Tailwind CSS classes for styling, including dynamic classes based on the darkTheme state
          className='text-xl dark:bg-gray-500 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg hover:shadow-purple-500'>
          {/* // Conditionally render the button text based on the darkTheme state */}
          {darkTheme ? 'Light Mode 💡' : 'Dark Mode 🌙'}
        </button>
      </div>
      {/* // Render the Search component (not defined in this code snippet) */}
      <Search/>
    </div>
  );
};
