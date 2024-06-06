import { SET_BET, SET_NAME, UPDATE_SCORE, SET_NUMBER, SET_POPUP_STATE, SET_RESPONSE } from "../types";


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
        isBetSelected: action.payload.bool
      }
    case SET_NUMBER:
      return {
        ...state,
        number: action.payload.number,
        isNumberSelected: action.payload.bool
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload.score
      }
    case SET_POPUP_STATE:
      return {
        ...state,
        open: action.payload.bool
      }
    case SET_RESPONSE:
      return {
        ...state,
        score: action.payload.response.score,
        bet: action.payload.response.bet, 
        number: action.payload.response.number,
        die1: action.payload.response.die1,
        die2: action.payload.response.die2,
        result: action.payload.response.result,
        takeaway: action.payload.response.takeaway
      }
    
    default:
      return state;
  }
}

export { gameReducer };