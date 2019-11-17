import firebase from 'app/constants/store';

const makeNewUserChat = (email, shop, shopName) => {
  firebase
    .firestore()
    .collection('users')
    .doc(email)
    .collection('messages')
    .doc(shop)
    .set({
      email: email,
      shop: shop,
      shopName: shopName,
      message: [],
    });
};

const makeNewShopChat = (email, shop, shopName) => {
  firebase
    .firestore()
    .collection('shops')
    .doc(email)
    .collection('messages')
    .doc(shop)
    .set({
      email: email,
      shop: shop,
      shopName: shopName,
      message: [],
    });
};

export {makeNewUserChat, makeNewShopChat};
