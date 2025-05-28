import { createStore } from 'redux'

const BetslipState = {
  selections:[]
};



const betslipReducer = (state = BetslipState, action) => {
  switch (action.type) {
    case "SELECT_MARKET":
      // Check if this exact selection already exists (match + market combination)
      const existingIndex = state.selections.findIndex(
        sel => 
          sel.selectedEvent.hometeam === action.payload.selectedEvent.hometeam &&
          sel.selectedEvent.awayteam === action.payload.selectedEvent.awayteam &&
          sel.selectedMarket.label === action.payload.selectedMarket.label
      );
      
      if (existingIndex >= 0) {
        // If exists for same match and market label, remove it (toggle behavior)
        return {
          ...state,
          selections: state.selections.filter(
            (_, index) => index !== existingIndex
          )
        };
      } else {
        // If new, add it
        return {
          ...state,
          selections: [...state.selections, {
            selectedEvent: action.payload.selectedEvent,
            selectedMarket: action.payload.selectedMarket
          }]
        };
      }
      
    case "DESELECT_MARKET":
      return {
        ...state,
        selections: state.selections.filter(
          sel => !(
            sel.selectedEvent.hometeam === action.payload.hometeam &&
            sel.selectedEvent.awayteam === action.payload.awayteam &&
            sel.selectedMarket.label === action.payload.label
          )
        )
      };
      
    default:
      return state;
  }
};


let persistedState = BetslipState;

try {
  const stored = localStorage.getItem('betslip');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed && Array.isArray(parsed.selections)) {
      persistedState = parsed;
    }
  }
} catch (e) {
  console.warn("Invalid betslip in localStorage", e);

}

const store = createStore(betslipReducer, persistedState)


store.subscribe(()=>{
  localStorage.setItem('betslip', JSON.stringify(store.getState()))
})

export default store;