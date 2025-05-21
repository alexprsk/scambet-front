import {createStore } from 'redux'

const initialState = {
  selectedEvent: null,
  selectedMarket: null,
};

const betslipReducer = (state = {initial: null}, action) => {

  
    return state;
};

const store = createStore(betslipReducer)

export default store;