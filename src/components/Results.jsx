import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useResultsContext } from "../contexts/ResultContextProvider";

export const Results = () => {
  const { results, isLoading, getResults } = useResultsContext();
  const location = useLocation(); // This gives you the URL: images/news/videos/etc.

  useEffect(() => {
    const testSearchTerm = 'React Tutorial'; // Hard-coded search term for testing
  
    if (testSearchTerm) {
      if (location.pathname === '/videos') {
        getResults(`${testSearchTerm} videos`); // Use the test search term
      } else {
        getResults(testSearchTerm); // For other paths, just use the search term
      }
    }
  }, []); // Added dependencies for proper reactivity

  if (isLoading) return <Loading />;

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
          {results?.results?.map(({ link, title }, index) => (
            <div key={index} className="md:w-2/5 w-full">
              <a href={link} target="_blank" rel="noreferrer">
                <p className="text-sm">
                  {link.length > 30 ? link.substring(0, 30) : link}
                </p>
                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                  {title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/images":
      return <div>Image search results will be displayed here.</div>;
    case "/news":
      return <div>News search results will be displayed here.</div>;
    case "/videos":
      return <div>Video search results will be displayed here.</div>;
    default:
      return <div>Error! Page not found.</div>;
  }
};
