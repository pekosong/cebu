import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import * as firebase from "firebase";

//
// Initial State...
//
const initialState = {
  test: 1,
  user: {}
};

//
// Reducer...
//
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, test: (state.test += 1) };
    case "DECREMENT":
      return { ...state, test: (state.test -= 1) };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "UPDATE":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

//
// Store...
//
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

// //
// // Action Creators
// //

const LOGIN = "LOGIN";
const setUserData = userData => {
  return {
    type: LOGIN,
    payload: userData
  };
};

const watchUserData = () => {
  return function(dispatch) {
    firebase
      .firestore()
      .collection("users")
      .doc("peko22@naver.com")
      .onSnapshot(
        doc => {
          var personData = doc.data();
          var ActionSetUserData = setUserData(personData);
          dispatch(ActionSetUserData);
        },
        function(error) {
          console.log(error);
        }
      );
  };
};

export { setUserData, watchUserData };
