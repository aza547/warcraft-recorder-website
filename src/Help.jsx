import { Box, Button } from '@mui/material';
import React from 'react';
import './App.css';

function Help() {
  return (
    <Box
      overflow="auto"
      sx={{
        bgcolor: '#1A233A',
        color: 'white',
        height: '100%',
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      >
        See #faq in Discord, if still stuck please ask in #help.
        <Button
          variant="contained"
          href="https://github.com/aza547/wow-recorder/releases/latest"
          sx={{
            backgroundColor: '#bb4420',
            borderColor: '#bb4420',
            mt: 2,
            color: 'white',
            ':hover': {
              bgcolor: '#99371a',
              color: 'white',
              borderColor: 'white',
            },
          }}
        >
          Discord
        </Button>
      </Box>
    </Box>
  );
}

export default Help;
