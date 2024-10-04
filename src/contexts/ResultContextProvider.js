import React, { createContext, useContext, useState } from "react";

const ResultsContext = createContext();

const baseUrl = "http://localhost:5001/search"; // Update to point to your Express server

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastRequestTime, setLastRequestTime] = useState(0); // State for last request time

  const requestLimit = 2000; // 2 seconds throttle limit

  const getResults = async (query) => {
    const now = Date.now();

    // Check if enough time has passed since the last request
    if (now - lastRequestTime < requestLimit) {
      console.log("Request throttled. Please wait.");
      return; // Exit if the request is throttled
    }

    setLastRequestTime(now); // Update the last request time

    setIsLoading(true); // Set loading state to true
    const url = `${baseUrl}?q=${encodeURIComponent(query)}`; // Constructing the URL with the query

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data); // Log the fetched data to check its structure
      setResults(data); // Set results state with fetched data
    } catch (error) {
      console.error("Error fetching the results:", error);
    } finally {
      setIsLoading(false); // Set loading state to false after fetching
    }
  };

  return (
    <ResultsContext.Provider
      value={{
        getResults,
        results,
        searchTerm,
        setSearchTerm,
        isLoading,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export const useResultsContext = () => useContext(ResultsContext);
