import { createStore, combineReducers } from 'redux'

const BetslipState = {
  selections: []
};


const betslipReducer = (state = BetslipState, action) => {
  switch (action.type) {
    case "SELECT_MARKET": {
      const existingIndex = state.selections.findIndex(
        sel =>
          sel.selectedEvent.hometeam === action.payload.selectedEvent.hometeam &&
          sel.selectedEvent.awayteam === action.payload.selectedEvent.awayteam &&
          sel.selectedMarket.label === action.payload.selectedMarket.label
      );

      if (existingIndex >= 0) {
        return {
          ...state,
          selections: state.selections.filter(
            (_, index) => index !== existingIndex
          )
        };
      } else {
        return {
          ...state,
          selections: [...state.selections, {
            selectedEvent: action.payload.selectedEvent,
            selectedMarket: action.payload.selectedMarket
          }]
        };
      }
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


let persistedBetslip = BetslipState;
let persistedAuth = { user_id: null, balance: null, authenticated: false };

try {
  const stored = localStorage.getItem('betslip');
  if (stored) {
    const parsed = JSON.parse(stored);
    if (parsed && Array.isArray(parsed.selections)) {
      persistedBetslip = parsed;
    }
  }
  const storedAuth = localStorage.getItem('auth');
  if (storedAuth) {
    persistedAuth = JSON.parse(storedAuth);
  }
} catch (e) {
  console.warn("Invalid betslip in localStorage", e);

}


const AuthState = { user_id: null, balance: 0, authenticated: false };

const authStateReducer = (state = AuthState, action) => {
  switch (action.type) {
    case "Login":
      return {
        user_id: action.payload.user_id,
        balance: action.payload.balance,
        authenticated: true,
        access_token: action.payload.access_token
      };
    case "Logout":
      return {
        user_id: null,
        balance:null,
        authenticated: false,
        access_token: null
      };
    case "SET_BALANCE":
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  betslip: betslipReducer,
  auth: authStateReducer
});

const store = createStore(rootReducer, {
  betslip: persistedBetslip,
  auth: persistedAuth
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('betslip', JSON.stringify(state.betslip));
  localStorage.setItem('auth', JSON.stringify(state.auth));
});

export default store;