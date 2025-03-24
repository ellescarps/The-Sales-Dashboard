import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemButton, IconButton, Box, Typography, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';  // Hamburger menu icon
import DashboardIcon from '@mui/icons-material/Dashboard';  // Dashboard icon
import HelpIcon from '@mui/icons-material/Help';  // FAQ icon
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = useState(false);  // State to control the sidebar visibility

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <IconButton onClick={toggleSidebar} sx={{ position: 'absolute', top: 16, left: 16 }}>
        <MenuIcon />
      </IconButton>

      {/* Sidebar Drawer */}
      <Drawer
        open={open}
        onClose={toggleSidebar}
        sx={{
          width: 250, // Sidebar width
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250, // Sidebar width again for proper paper styling
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column', // Stack content vertically
            alignItems: 'center', // Center-align the items horizontally
            justifyContent: 'center', // Center-align the items vertically
            backgroundColor: 'rgb(245, 245, 245)', // Light lavender background
          },
        }}
      >
        {/* Title Section */}
        <Box sx={{ padding: 2, textAlign: 'center', flex: '0 1 auto' }}>
          <Typography 
            variant="h6" 
            sx={{
              fontWeight: 'bold', 
              marginBottom: 1,
              color: 'rgb(137, 114, 222)',  // Aquamarine color for the title
              textShadow: '2px 3px 5px pink',  // Black stroke effect
            }}
          >
            The Queens Restaurant
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              color: 'green',
            }}
          >
            Dashboard Owner
          </Typography>
        </Box>

        {/* Navigation Links */}
        <List sx={{ flex: '1 1 auto', width: '100%' }}>
          {/* Dashboard Link */}
          <ListItem button component={Link} to="/" onClick={toggleSidebar}>
            <ListItemIcon>
              <DashboardIcon /> {/* Add the Dashboard icon */}
            </ListItemIcon>
            <ListItemText 
              primary="Dashboard" 
              sx={{ color: 'rgb(204, 0, 139)' }} // Set color for Dashboard title
            />
          </ListItem>
          {/* FAQ Link */}
          <ListItem button component={Link} to="/faq" onClick={toggleSidebar}>
            <ListItemIcon>
              <HelpIcon /> {/* Add the FAQ icon */}
            </ListItemIcon>
            <ListItemText 
              primary="FAQ" 
              sx={{ color: 'rgba(174, 46, 179, 0.92)' }} // Set color for FAQ title
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
