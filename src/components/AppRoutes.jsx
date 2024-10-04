import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';
import { Loading } from './Loading';

/**
 * The AppRoutes component is responsible for defining the routes for the application.
 * It uses the [Routes](cci:1://file:///Users/karansingh/Engine2.0/google-2.0/src/components/AppRoutes.jsx:5:0-16:2) component from `react-router-dom` to define the different routes.
 * Each [Route](cci:1://file:///Users/karansingh/Engine2.0/google-2.0/src/components/AppRoutes.jsx:5:0-16:2) component defines a specific path and the component to render when that path is matched.
 */
export const AppRoutes = () => (
  <div className="p-4">
    <Routes>
      {/* Redirect from the root path to /search */}
      <Route path="/" element={<Navigate to="/search" />} />
      {/* Render the Results component when the /search path is matched */}
      <Route path="/search" element={<Results />} />
      {/* Render the Results component when the /images path is matched */}
      <Route path="/images" element={<Results />} />
      {/* Render the Results component when the /news path is matched */}
      <Route path="/news" element={<Results />} />
      {/* Render the Results component when the /videos path is matched */}
      <Route path="/videos" element={<Results />} />
    </Routes>
  </div>
);