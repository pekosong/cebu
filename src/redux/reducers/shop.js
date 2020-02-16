const shopList = (state = [], action) => {
  switch (action.type) {
    case 'SET_SHOPS':
      return action.payload;
    default:
      return state;
  }
};

export default shopList;
