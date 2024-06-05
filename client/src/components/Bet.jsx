import React, { useContext } from 'react';
import { Button, Box } from '@mui/material';
import { gameContext } from '../context/gameContext';

const Bet = () => {
  const { bet, setBet } = useContext(gameContext);

  const handleOnClick = (amount) => {
    console.log(amount);
    setBet(amount);
  }

  console.log(bet);

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Button variant="contained" color={bet === 100 ? 'success' : 'primary'} style={{ margin: '0 10px' }} onClick={() => handleOnClick(100)}>100</Button>
      <Button variant="contained" color={bet === 200 ? 'success' : 'primary'} style={{ margin: '0 10px' }} onClick={() => handleOnClick(200)}>200</Button>
      <Button variant="contained" color={bet === 500 ? 'success' : 'primary'} style={{ margin: '0 10px' }} onClick={() => handleOnClick(500)}>500</Button>
    </Box>
  );
}

export { Bet };