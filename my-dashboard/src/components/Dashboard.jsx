import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import RevenueChart from './RevenueChart';  // Existing Revenue Chart
import TransactionList from './TransactionList';  // Existing Transaction List
import BarChart from './BarChart';  // New Bar Chart component
import PieChart from './PieChart';  // New Pie Chart component

export default function Dashboard() {
  return (
    <Box sx={{ marginLeft: 10, padding: 3 }}>
      {/* Additional Header Section */}
      <Box sx={{ padding: 2, backgroundColor: '#4caf50', color: 'white', marginBottom: 2 }}>
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          Welcome to your dashboard
        </Typography>
      </Box>

      {/* Main Header Section */}
      <Box sx={{ padding: 2, backgroundColor: '#3f51b5', color: 'white' }}>
        <Typography variant="h5">Sales & Revenue Dashboard</Typography>
        <Typography variant="subtitle1">Monitor your restaurant's performance</Typography>
      </Box>

      <br />
      {/* Main Content Section */}
      <Grid container spacing={3} sx={{ marginTop: 2, justifyContent: 'space-between' }}>
        {/* Top Row: Revenue and Sales */}
        <Grid item xs={12} sm={4} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
              Revenue Generated
            </Typography>
            <RevenueChart /> {/* Existing Revenue Chart */}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
              Sales Overview
            </Typography>
            <BarChart /> {/* New Bar Chart */}
          </Paper>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <Paper sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Typography variant="h6" sx={{ marginBottom: 2, textAlign: 'center' }}>
              Sales by Region
            </Typography>
            <PieChart /> {/* New Pie Chart */}
          </Paper>
        </Grid>

        {/* Bottom Row: Recent Transactions */}
        <Grid item xs={12}>
          <Paper 
            sx={{ 
              padding: 2, 
              marginTop: 3,  // Added to raise the box higher
              width: '80%',  // Reduced the width
              marginBottom: 4,  // Creates space below the box
              marginLeft: 'auto',  // Centers the box
              marginRight: 'auto',  // Centers the box
            }}>
            <TransactionList /> {/* Rendering the Transaction List */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
