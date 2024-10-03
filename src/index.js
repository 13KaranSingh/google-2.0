import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import App from './App'; // Ensure this path is correct
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
);







