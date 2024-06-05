import React, { useContext } from "react";
import { Box, Typography, Button  } from "@mui/material";
import { Bet } from "./Bet";
import { Number } from "./Number";
import { gameContext } from "../context/gameContext";

const Game = () => {
  const { isBetSelected, isNumberSelected, rollTheDice } = useContext(gameContext);

  const handleOnClick = () => {
    rollTheDice();
  }

  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      style={{ backgroundColor: 'black', height: '100vh', color: 'white', paddingTop: '20px' }}
    >
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        p={3}
        style={{ backgroundColor: 'white', color: 'black', borderRadius: '8px', width: 'fit-content', marginBottom: '20px' }}
      >
        <Typography variant="h6" gutterBottom>
          Choose your Bet
        </Typography>
        <Bet />
      </Box>

      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        p={3}
        style={{ backgroundColor: 'white', color: 'black', borderRadius: '8px', width: 'fit-content', marginBottom: '20px' }}
      >
        <Typography variant="h6" gutterBottom>
          Select Number
        </Typography>
        <Number isDisabled={isBetSelected} />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={3}
        style={{ backgroundColor: 'white', color: 'black', borderRadius: '8px', width: 'fit-content' }}
      >
        <Button disabled={!isNumberSelected} color="primary" variant="contained" style={{ margin: '0 10px' }} onClick={() => handleOnClick()}>
          Roll the Dice
        </Button>
      </Box>
    </Box>
  );
};

export { Game };