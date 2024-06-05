import React, { useContext } from 'react';
import { Button, Box } from '@mui/material';
import { gameContext } from '../context/gameContext';

const Number = ({ isDisabled }) => {
  const { number, setNumber } = useContext(gameContext);

  const handleOnClick = (value) => {
    setNumber(value);
  }

  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <Button disabled={!isDisabled} color={number === 1-6 ? 'success' : 'primary'} variant="contained" style={{ margin: '0 10px' }} onClick={() => handleOnClick(1-6)}>1-6</Button>
      <Button disabled={!isDisabled} color={number === 7 ? 'success' : 'primary'} variant="contained" style={{ margin: '0 10px' }} onClick={() => handleOnClick(7)}>7</Button>
      <Button disabled={!isDisabled} color={number === 8-14 ? 'success' : 'primary'} variant="contained" style={{ margin: '0 10px' }} onClick={() => handleOnClick(8-14)}>8-14</Button>
    </Box>
  );
}

export { Number };