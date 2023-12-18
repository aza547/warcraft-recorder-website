import { Box, Button } from '@mui/material';
import React from 'react';

function Help() {
  return (
    <Box
      overflow="auto"
      sx={{
        bgcolor: '#1A233A',
        color: 'white',
        height: '100%',
        width: '100%',
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
        See #faq in Discord. Please ask in #help if you have further questions.
        <Button
          variant="contained"
          href="https://discord.gg/BYWm8tCMPP"
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
