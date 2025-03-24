// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';  // Now using the combined Dashboard component
import FAQ from './components/FAQ';
import { Box } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  console.log("App Component Rendered");

  return (
    <Router>
      <ErrorBoundary>
        <Box sx={{ display: 'flex' }}>
          {/* Sidebar */}
          <Sidebar />

          {/* Main content area */}
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              {/* Dashboard route */}
              <Route path="/" element={<Dashboard />} />  

              {/* FAQ route */}
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Box>
        </Box>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
