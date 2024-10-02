import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root DOM element where the React app will be mounted
const container = document.getElementById('root');

// Create a root for the React app
const root = createRoot(container);

// Render the App component to the DOM
root.render(<App />);