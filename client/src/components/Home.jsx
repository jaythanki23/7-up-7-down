import React, { useContext, useState } from "react";
import { Button, TextField } from '@mui/material';
import { gameContext } from '../context/gameContext';
import './Home.css';
import { useNavigate } from "react-router-dom";

function Home() {
  const { setName } = useContext(gameContext); 
  const [newName, setNewName] = useState('');
  const[isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setNewName(newName);
    setIsButtonDisabled(newName.trim() === '');
  }

  const handleOnClick = () => {
    setName(newName);
    navigate('/game');
  }

  return (
    <div className="home">
      <div className="input-container">
        <div className="textField-container">
          <TextField 
            placeholder="Enter your name" 
            variant="outlined" 
            value={newName}
            onChange={handleNameChange}
            className="name-input rounded-textfield"
            InputProps={{
              style: { color: 'black', borderRadius: '8px' },
              classes: { notchedOutline: 'custom-outline' }
            }}
            style={{ backgroundColor: 'white' }}
          />
        </div>
        <div className="button-container">
          <Button 
            variant="contained" 
            color="primary" 
            className="start-button"
            disabled={isButtonDisabled}
            onClick={handleOnClick}
          >
            Start game
          </Button>
        </div>
      </div>
    </div>
  );
};

export { Home };