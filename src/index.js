import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'; // Ensure this path is correct
import './global.css';
import { ResultsContextProvider } from './contexts/ResultContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ResultsContextProvider>
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </ResultsContextProvider>
);







