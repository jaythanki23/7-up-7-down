import { SET_BET, SET_NAME, SET_SCORE, UPDATE_SCORE, SET_NUMBER, IS_BET_SELECTED } from "../types";


const gameReducer = (state, action) => {
  switch(action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload.name
      }
    case SET_BET:
      return {
        ...state,
        bet: action.payload.bet,
        isBetSelected: true
      }
    case SET_NUMBER:
      return {
        ...state,
        number: action.payload.number,
        isNumberSelected: true
      }
    default:
      return state;
  }
}

export { gameReducer };