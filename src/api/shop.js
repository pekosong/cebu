import firebase from 'app/src/constants/store';

const streamShopMsg = shop => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shop)
    .collection('messages');
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

const updateShopReservation = (shopId, shopReservations) => {
  firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .update({reservations: shopReservations})
    .then(() => {
      console.log('made reservation');
    });
};

export {
  streamShopMsg,
  streamShop,
  updateShop,
  downloadShopList,
  updateShopReservation,
};
