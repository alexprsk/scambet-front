import {createStore } from 'redux'

const BetslipState = {
  selectedEvent: null,
  selectedMarket: null,
};

const betslipReducer = (state = BetslipState, action) => {
  if (action.type === "SELECT_MARKET"){
    return {
      selectedEvent: action.payload.selectedEvent,
      selectedMarket: action.payload.selectedMarket
    }
  }

  
    return state;
};

const store = createStore(betslipReducer)

export default store;