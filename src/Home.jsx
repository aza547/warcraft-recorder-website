import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import logo from './logo.png';
import './App.css';

function Home() {
  return (
    <Box
      overflow="auto"
      sx={{
        bgcolor: '#1A233A',
        color: 'white',
        height: '100vh',
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{ height: '50%' }}
      />
      <Typography
        variant="h3"
        sx={{ mb: 2 }}
      >
        Warcraft Recorder
      </Typography>
      <Button
        variant="contained"
        href="https://github.com/aza547/wow-recorder/releases/latest"
        sx={{
          backgroundColor: '#bb4420',
          borderColor: '#bb4420',
          color: 'white',
          ':hover': {
            bgcolor: '#99371a',
            color: 'white',
            borderColor: 'white',
          },
        }}
      >
        Download
      </Button>
    </Box>
  );
}

export default Home;
