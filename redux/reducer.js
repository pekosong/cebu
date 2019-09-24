const initialState = {
  user: {},
  shops: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETUSER":
      return { ...state, user: action.payload };
    case "GETSHOP":
      return { ...state, shops: action.payload };
    default:
      return state;
  }
};

export { reducer };
