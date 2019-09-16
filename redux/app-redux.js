import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as firebase from "firebase";

//
// Initial State...
//
const initialState = {
  personData: 1
};

//
// Reducer...
//
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, personData: (state.personData += 1) };
    case "DECREMENT":
      return { ...state, personData: (state.personData -= 1) };
    default:
      return state;
  }
};

//
// Store...
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//
// Action Creators
//
const setPersonData = personData => {
  return {
    type: "setPersonData",
    value: personData
  };
};
export { setPersonData };
