const setShop = shopList => {
  return {
    type: 'SET_SHOPS',
    payload: shopList,
  };
};

export default {
  setShop,
};
