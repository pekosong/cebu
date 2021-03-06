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

const getShop = shopId => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .get();
};

const updateShop = shop => {
  return firebase
    .firestore()
    .collection('shops')
    .doc(shop.id)
    .update(shop);
};

const downloadShopList = () => {
  console.log('실행됨');
  return firebase
    .firestore()
    .collection('shops')
    .get()
    .then(querySnapshot => {
      const shops = [];
      querySnapshot.forEach(doc => {
        const shop = doc.data();
        if (shop['preview'] !== '') shops.push(doc.data());
      });
      return shops;
    });
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
  getShop,
  updateShop,
  downloadShopList,
  updateMessages,
  updateShopReservation,
};
