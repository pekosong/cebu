import * as firebase from 'firebase';
import {store} from './store';

// //
// // Action Creators
// //

const SETUSER = 'SETUSER';
const SETSHOPS = 'SETSHOPS';
const DELIMAGES = 'DELIMAGES';

const setUserData = userData => {
  return {
    type: SETUSER,
    payload: userData,
  };
};

const setShopData = shopData => {
  return {
    type: SETSHOPS,
    payload: shopData,
  };
};

const setImagesData = delImage => {
  return {
    type: DELIMAGES,
    payload: delImage,
  };
};

const watchUserData = email => {
  return dispatch => {
    return firebase
      .firestore()
      .collection('users')
      .doc(email)
      .onSnapshot(
        doc => {
          dispatch(setUserData(doc.data()));
        },
        error => {
          console.log(error);
        },
      );
  };
};

const updateFavorite = myfavorites => {
  return () => {
    firebase
      .firestore()
      .collection('users')
      .doc(store.getState().user.email)
      .update({myfavorites: myfavorites})
      .then(() => {
        console.log('updated favorites');
      });
  };
};

const downloadShopData = () => {
  return dispatch => {
    return firebase
      .firestore()
      .collection('shops')
      .get()
      .then(querySnapshot => {
        const shops = [];
        querySnapshot.forEach(doc => {
          shops.push(doc.data());
        });
        dispatch(setShopData(shops));
      });
  };
};
const getShop = shopId => {
  return dispatch => {
    return firebase
      .firestore()
      .collection('shops')
      .doc(shopId)
      .get()
      .then(doc => doc.data());
  };
};

const updateShop = shop => {
  return dispatch => {
    return firebase
      .firestore()
      .collection('shops')
      .doc(shop.id)
      .update(shop)
      .then(() => {
        let newShops = store.getState().shops;
        let idx = newShops.findIndex(e => e.id == shop.id);
        newShops[idx] = shop;
        dispatch(setShopData(newShops));
        console.log('updated shop');
      });
  };
};

const makeResevation = (userReservations, shopReservations, email, shopId) => {
  return () => {
    firebase
      .firestore()
      .collection('users')
      .doc(email)
      .update({reservations: userReservations})
      .then(() => {
        console.log('made reservation');
      });
    firebase
      .firestore()
      .collection('shops')
      .doc(shopId)
      .update({reservations: shopReservations})
      .then(() => {
        console.log('made reservation');
      });
  };
};

export {
  setUserData,
  watchUserData,
  downloadShopData,
  updateFavorite,
  makeResevation,
  updateShop,
  setImagesData,
  getShop,
};
