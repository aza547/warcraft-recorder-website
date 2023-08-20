import { Box, Tab, Tabs } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Setup from './Setup';
import Help from './Help';

function App() {
  const [tab, setTab] = React.useState(0);

  function renderTab(text, value) {
    return (
      <Tab
        value={value}
        sx={{ color: 'white' }}
        label={text}
      />
    );
  }

  const handleChange = (_event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        width: '100vw',
      }}
    >
      <Box
        sx={{
          justifyContent: 'flex-start',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#182035',
          borderRight: '1px solid black',
        }}
      >
        <Tabs
          value={tab}
          orientation="vertical"
          onChange={handleChange}
          sx={{
            height: '100%',
            width: '100%',
            backgroundColor: '#182035',
            boxSizing: 'border-box',
            color: 'white',
            '& .MuiTab-root.Mui-selected': {
              color: '#bb4220',
            },
          }}
          TabIndicatorProps={{ style: { background: '#bb4220' } }}
        >
          {renderTab('Home', 0)}
          {renderTab('About', 1)}
          {renderTab('Setup', 2)}
          {renderTab('Help', 3)}
        </Tabs>
      </Box>

      {tab === 0 && <Home />}
      {tab === 1 && <About />}
      {tab === 2 && <Setup />}
      {tab === 3 && <Help />}
    </Box>
  );
}

export default App;
