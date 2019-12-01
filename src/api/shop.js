import firebase from 'app/src/constants/store';

const streamShopMsg = shop => {
  return firebase
    .firestore()
    .collection('messages')
    .where('shop', '==', shop);
};

const streamShop = shopId => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shopId);
};

const updateShop = shop => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shop.id)
    .update(shop);
};

const downloadShopList = () => {
  return firebase.firestore().collection('shops');
};

const updateMessages = (shop, messages) => {
  firebase
    .firestore()
    .collection('shops')
    .doc(shop)
    .update({messages: messages})
    .then(() => {
      console.log('updated favorites');
    });
};

const updateShopReservation = (shopId, shopReservations) => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .update({reservations: shopReservations});
};

export {
  streamShopMsg,
  streamShop,
  updateShop,
  downloadShopList,
  updateMessages,
  updateShopReservation,
};
