import React, { createContext, useContext, useState } from "react";

const ResultsContext = createContext();

const baseUrl = "http://localhost:5001/search"; // Update to point to your Express server

export const ResultsContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  const getResults = async (query) => {
    setIsLoading(true); // Assuming you're using this for the loading state
    const url = `${baseUrl}?q=${encodeURIComponent(query)}`; // Constructing the URL with the query

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if the response is ok (status code in the range 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Set the results state with the fetched data
      setResults(data); // Adjust this based on the structure of the data returned from your API
    } catch (error) {
      console.error("Error fetching the results:", error);
      // Optionally, you can set an error state here to display an error message in the UI
    } finally {
      setIsLoading(false); // Always set loading to false after fetching
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
