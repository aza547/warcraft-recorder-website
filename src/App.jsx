import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import logo from './logo.png';
import preview from './preview.png';
import './App.css';

function App() {
  return (
    <Box
      overflow="auto"
      sx={{
        bgcolor: '#1A233A',
        color: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={logo}
          sx={{ height: '400px' }}
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
          Download!
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
        <Box
          component="img"
          src={preview}
          sx={{
            height: '400px',
            border: '2px solid black',
            boxShadow: 15,
            mb: 4,
          }}
        />
        <Typography variant="h3">
          Setup Instructions
        </Typography>
        <ol>
          <li>
            Download and run the most recent
            {' '}
            <b>Warcraft Recorder</b>
            {' '}
            installer.
          </li>
          <li>
            Launch the application and click the
            {' '}
            <b>Settings</b>
            {' '}
            button.
          </li>
          <ul>
            <li>Create a folder on your PC to store the recordings.</li>
            <li>
              Set the
              {' '}
              <b>Storage Path</b>
              {' '}
              to the folder you just created.
            </li>
            <li>
              Configure the location of your
              {' '}
              <b>World of Warcraft</b>
              {' '}
              logs folder.
            </li>
          </ul>
          <li>
            Click the
            {' '}
            <b>Scene</b>
            {' '}
            button and configure the OBS scene and recording settings.
          </li>
          <ul>
            <li>Add your speakers and/or microphone if you want to include audio.</li>
            <li>
              Recommend selecting a
              {' '}
              <b>hardware encoder</b>
              , if available.
            </li>
          </ul>
          <li>Download and install the recommended combat logging addon.</li>
          <ul>
            <li>
              Retail:
              {' '}
              <a href="https://www.curseforge.com/wow/addons/simplecombatlogger">SimpleCombatLogger</a>
            </li>
            <li>
              Classic:
              {' '}
              <a href="https://www.curseforge.com/wow/addons/autocombatlogger">AutoCombatLogger</a>
            </li>
          </ul>
        </ol>

      </Box>
    </Box>
  );
}

export default App;
