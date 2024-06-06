import axios from "axios";
import { useContext, useReducer } from "react";
import { gameContext } from "./gameContext";
import { gameReducer } from "./gameReducer";

import { SET_BET, SET_NAME, SET_NUMBER, SET_SCORE, UPDATE_SCORE, IS_BET_SELECTED, IS_NUMBER_SELECTED, SET_POPUP_STATE, SET_RESPONSE } from "../types";

const GameState = props => {
  
  const initialState = {
    name: '',
    score: 5000,
    bet: 0,
    number: '',
    isBetSelected: false,
    isNumberSelected: false,
    isDiceRolled: false,
    open: false,
    die1: 0,
    die2: 0,
    result: 0,
    takeaway: 0
  }

  const [state, dispatch] = useReducer(gameReducer, initialState);

  // Set Name
  const setName = (name) => {
    dispatch({ type: SET_NAME, payload: { name } });
  }

  // Set Bet
  const setBet = (bet, bool) => {
    dispatch({ type: SET_BET, payload: { bet, bool } });
  }

  // Set Number
  const setNumber = (number, bool) => {
    dispatch({ type: SET_NUMBER, payload: { number, bool } });
  }

  // Update Score
  const updateScore = (score) => {
    dispatch({ type: UPDATE_SCORE, payload: { score } });
  }

  // set popup state
  const setPopupState = (bool) => {
    dispatch({ type: SET_POPUP_STATE, payload: { bool } });
  }

  // set response
  const setResponse = (response) => {
    dispatch({ type: SET_RESPONSE, payload: { response } });
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
      number: state.number 
    };

    try {
      // const res = await axios.post('http://localhost:10000/api/game', data, config);https://seven-up-7-down-server.onrender.com
      const res = await axios.post('https://seven-up-7-down-server.onrender.com/api/game', data, config);
      setResponse(res.data);
      setPopupState(true);
    } catch (error) {
      console.log(error);
    }
  }


  return <gameContext.Provider
    value={{
      name: state.name,
      score: state.score,
      bet: state.bet,
      number: state.number,
      isBetSelected: state.isBetSelected,
      isNumberSelected: state.isNumberSelected,
      open: state.open,
      die1: state.die1,
      die2: state.die2,
      result: state.result,
      takeaway: state.takeaway,
      setName,
      setBet,
      setNumber,
      rollTheDice,
      updateScore,
      setPopupState,
      setResponse
    }}
  >
    {props.children}
  </gameContext.Provider>
}


export { GameState };