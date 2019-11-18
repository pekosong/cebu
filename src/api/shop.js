import firebase from 'app/src/constants/store';

const streamShopMsg = shop => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shop)
    .collection('messages');
};

const streamShop = shop => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shop);
};

export {streamShopMsg, streamShop};
