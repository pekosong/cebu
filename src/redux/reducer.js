const initialState = {
  user: {},
  shops: {},
  shopImages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETUSER':
      return {...state, user: action.payload};
    case 'SETSHOPS':
      return {...state, shops: action.payload};
    case 'DELIMAGES':
      return {...state, shopImages: action.payload};
    default:
      return state;
  }
};

export {reducer};
