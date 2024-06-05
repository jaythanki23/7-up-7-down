import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { gameContext } from '../context/gameContext';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { name, score } = useContext(gameContext);

  const location = useLocation();

  const isGamePage = location.pathname === '/game';

  if (!isGamePage) {
    return null; // Don't render anything if not on the game page
  }

  return (
    <AppBar position="static" style={{ backgroundColor: '#1A237E' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Hi, {name}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          Score: {score}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };