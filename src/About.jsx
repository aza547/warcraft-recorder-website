import { Box } from '@mui/material';
import React from 'react';
import preview from './preview.png';

function About() {
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
      <Box
        component="img"
        src={preview}
        sx={{
          height: '75%',
          width: '75%',
          aspectRatio: 16 / 9,
          border: '1px solid black',
          boxShadow: 20,
          mb: 4,
        }}
      />
      <Box sx={{
        mx: 4,
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >

        A desktop screen recorder application that records and saves videos of
        in-game World of Warcraft encounters, and provides a graphical user
        interface to view the replays. It is completely free, open source and
        contains no adverts.

      </Box>

    </Box>
  );
}

export default About;
