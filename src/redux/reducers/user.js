import {USER} from 'app/src/model/user';

import {updateUser} from 'app/src/api/user';

const initialState = {loggedIn: false, isAdmin: false, user: USER};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case 'UPDATE_USER':
      updateUser(action.payload.email, action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: USER,
        loggedIn: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};

export default user;
