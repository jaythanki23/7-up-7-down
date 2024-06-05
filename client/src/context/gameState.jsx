import axios from "axios";
import { useContext, useReducer } from "react";
import { gameContext } from "./gameContext";
import { gameReducer } from "./gameReducer";

import { SET_BET, SET_NAME, SET_NUMBER, SET_SCORE, UPDATE_SCORE, IS_BET_SELECTED, IS_NUMBER_SELECTED } from "../types";

const GameState = props => {
  
  const initialState = {
    name: '',
    score: 5000,
    bet: 0,
    number: '',
    isBetSelected: false,
    isNumberSelected: false
  }

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Set Name
  const setName = (name) => {
    dispatch({ type: SET_NAME, payload: { name } });
  }

  // Set Bet
  const setBet = (bet) => {
    dispatch({ type: SET_BET, payload: { bet } });
  }

  const setNumber = (number) => {
    dispatch({ type: SET_NUMBER, payload: { number } });
  }


  // Roll the dice
  const rollTheDice = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    const data = {
      score: state.score,
      bet: state.bet,
      number: '' 
    };

    console.log(state.bet);

    const res = await axios.post('/api/roll', data, config);
  }




  return <gameContext.Provider
    value={{
      name: state.name,
      score: state.score,
      bet: state.bet,
      number: state.number,
      isBetSelected: state.isBetSelected,
      isNumberSelected: state.isNumberSelected,
      setName,
      setBet,
      setNumber,
      rollTheDice
    }}
  >
    {props.children}
  </gameContext.Provider>
}


export { GameState };