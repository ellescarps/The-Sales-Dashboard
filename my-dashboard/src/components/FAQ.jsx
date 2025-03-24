// src/components/FAQ.jsx
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

export default function FAQ() {
  return (
    <Box 
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',  // Full viewport height to center vertically
        padding: 2,
        backgroundColor: '#e0f7fa',  // Light blue background color for the entire FAQ page
      }}
    >
      <Paper sx={{ 
        padding: 3, 
        maxWidth: 600, 
        textAlign: 'center', 
        backgroundColor: '#ffffff', // White background color for the FAQ box itself
        boxShadow: 3, // Optional: adds a shadow effect for the box
        borderRadius: 2, // Optional: rounded corners for a softer look
      }}>
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Here are some frequently asked questions about the system.
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          1. What are your store hours?
        </Typography>
      </Paper>
    </Box>
  );
}
