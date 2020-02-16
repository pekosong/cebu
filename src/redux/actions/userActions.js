const setUser = userObj => {
  return {
    type: 'SET_USER',
    payload: userObj,
  };
};

const updateUser = userObj => {
  return {
    type: 'UPDATE_USER',
    payload: userObj,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};

export default {
  setUser,
  updateUser,
  logOut,
};
