import React, { createContext, useContext, useState} from 'react';

const ResultsContext = createContext();

const baseUrl = 'http://localhost:5001/search'; // Update to point to your Express server

export const ResultsContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (query) => {
        setIsLoading(true);
        const url = `${baseUrl}?q=${encodeURIComponent(query)}`; // No need for api_key here

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResults(data); // Adjust based on the structure of the data returned from your Express server
        } catch (error) {
            console.error('Error fetching the results:', error);
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <ResultsContext.Provider value={{
            getResults,
            results,
            searchTerm,
            setSearchTerm,
            isLoading
        }}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResultsContext = () => useContext(ResultsContext);
