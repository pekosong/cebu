import firebase from 'app/src/constants/store';

const getChat = docId => {
  return firebase
    .firestore()
    .collection('messages')
    .doc(docId);
};

const makeNewChat = async (email, shop, shopName) => {
  let docRef = await firebase
    .firestore()
    .collection('messages')
    .add({
      email: email,
      shop: shop,
      shopName: shopName,
      message: [],
    });
  return docRef.id;
};

const getChatList = (email, shop) => {
  return firebase
    .firestore()
    .collection('messages')
    .where('email', '==', email)
    .where('shop', '==', shop);
};

export {getChat, makeNewChat, getChatList};
