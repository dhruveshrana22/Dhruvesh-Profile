// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './app/Screen/Home/Home';
import BottomNavigationbar from './app/Component/BottomNavigation.js/BottomNavigation';
import { Grid } from '@mui/material';


function App() {
  return (
    <>
      <BottomNavigationbar />
      <Grid container style={{ backgroundColor: 'black', height: '100vh', justifyContent: 'center', padding: 20 }}>
        <Router>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Grid>
    </>
  );
}

export default App;
