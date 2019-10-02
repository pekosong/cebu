import * as firebase from "firebase";
import { store } from "./store";

// //
// // Action Creators
// //

const SETUSER = "SETUSER";
const GETSHOP = "GETSHOP";

const setUserData = userData => {
  return {
    type: SETUSER,
    payload: userData
  };
};

const setShopData = shopData => {
  return {
    type: GETSHOP,
    payload: shopData
  };
};

const watchUserData = email => {
  return dispatch => {
    return firebase
      .firestore()
      .collection("users")
      .doc(email)
      .onSnapshot(
        doc => {
          dispatch(setUserData(doc.data()));
        },
        error => {
          console.log(error);
        }
      );
  };
};

const downloadShopData = () => {
  return dispatch => {
    firebase
      .firestore()
      .collection("shops")
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

const updateFavorite = myfavorites => {
  return () => {
    firebase
      .firestore()
      .collection("users")
      .doc(store.getState().user.email)
      .update({ myfavorites: myfavorites })
      .then(() => {
        console.log("updated favorites");
      });
  };
};

const updateShop = shop => {
  return dispatch => {
    firebase
      .firestore()
      .collection("shops")
      .doc(shop.id)
      .update(shop)
      .then(() => {
        let newShops = store.getState().shops;
        let idx = newShops.findIndex(e => e.id == shop.id);
        newShops[idx] = shop;
        dispatch(setShopData(newShops));
        console.log("updated shop");
      });
  };
};

const makeResevation = allPlans => {
  return () => {
    firebase
      .firestore()
      .collection("users")
      .doc(store.getState().user.email)
      .update({ plans: allPlans })
      .then(() => {
        console.log("made reservation");
      });
  };
};

export {
  setUserData,
  watchUserData,
  downloadShopData,
  updateFavorite,
  makeResevation,
  updateShop
};
