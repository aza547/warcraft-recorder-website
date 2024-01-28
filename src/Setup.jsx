import { Box } from '@mui/material';
import React from 'react';

function Setup() {
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
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
        }}
      >
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
              Enable recording and set the location of your
              {' '}
              <b>World of Warcraft</b>
              {' '}
              logs folder.
            </li>
            <li>Modify any other settings as desired.</li>
          </ul>
          <li>
            Click the
            {' '}
            <b>Scene</b>
            {' '}
            button and configure the OBS scene and recording settings.
          </li>
          <ul>
            <li>Click the Scene button and configure the OBS scene and recording settings.</li>
            <li>Add your speakers and/or microphone if you want to include audio.</li>
            <li>
              Recommend selecting a
              {' '}
              <b>hardware encoder</b>
              , if available.
            </li>
            <li>Modify any other settings as desired.</li>
          </ul>
          <li>
            Install the required combat logging addon, enabling advanced combat logging
            when prompted.
          </li>
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

export default Setup;
