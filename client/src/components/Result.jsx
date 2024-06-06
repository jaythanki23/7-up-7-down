import React, { useContext } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, List, ListItem, ListItemText } from '@mui/material';
import { gameContext } from '../context/gameContext';

const Result = () => {
  const { score, bet, number, die1, die2, result, takeaway, open, setPopupState, setResponse } = useContext(gameContext);
  console.log(open);

  const handleClose = (bool) => {
    let response = {
      score: score,
      bet: 0,
      number: '',
      die1: 0,
      die2: 0,
      result: 0,
      takeaway: 0
    }

    setResponse(response);
    setPopupState(bool);
  }

  return (
    <Dialog open={open} onClose={() => handleClose(false)}>
      <DialogTitle>Result</DialogTitle>
      <DialogContent>
        <List>
          <ListItem>
            <ListItemText primary={`Your Bet was: ${bet}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`You Chose: ${number}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Die 1: ${die1}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Die 2: ${die2}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Result: ${result}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Takeaway: ${takeaway}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Your new Score: ${score}`} />
          </ListItem>
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { Result };
