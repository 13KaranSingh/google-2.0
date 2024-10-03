import React, { createContext, useContext, useState } from 'react';
// Importing necessary modules from React.
// createContext: To create a context object for sharing data.
// useContext: To consume the context in functional components.
// useState: To manage state within the component.

const ResultsContext = createContext();
// Creating a context named ResultsContext to share data across components.

const baseUrl = 'https://google-search74.p.rapidapi.com';
// Defining the base URL for the API to which requests will be made.

export const ResultsContextProvider = ({ children }) => {
    // Creating a provider component that will wrap the part of the app that needs access to the context.
    const [results, setResults] = useState([]); // State to hold search results, initialized as an empty array.
    const [isLoading, setIsLoading] = useState(false); // State to manage loading status, initialized as false.
    const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term, initialized as an empty string.

    // Function to fetch results from the API based on the search type.
    const getResults = async (type) => {
        setIsLoading(true); // Set loading state to true before starting the fetch.

        // Fetching data from the API using the constructed URL.
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET', // Specifying the HTTP method as GET.
            headers: {
                'x-rapidapi-host': 'google-search74.p.rapidapi.com', // API host header.
                'x-rapidapi-key': 'b957bbad49msh0cab0f3c5bc0921p1ddffcjsn6e3e4896fc7c' // API key header for authentication.
            }
        });

        const data = await response.json(); // Parsing the response data as JSON.

        setResults(data); // Updating the results state with the fetched data.
        setIsLoading(false); // Setting loading state to false after fetching is complete.
    };

    // Returning the ResultsContext.Provider, which allows the wrapped children to access the context.
    return (
        <ResultsContext.Provider value={{
            getResults, // Exposing the getResults function to context consumers.
            results, // Exposing the results state.
            searchTerm, // Exposing the searchTerm state.
            setSearchTerm, // Exposing the function to update searchTerm.
            isLoading // Exposing the loading state.
        }}>
            {children} // Rendering the wrapped children components.
        </ResultsContext.Provider>
    );
};

// Creating a custom hook to allow easy access to the ResultsContext.
export const useResultsContext = () => useContext(ResultsContext); 
// This hook can be used in other components to access the context values directly.
