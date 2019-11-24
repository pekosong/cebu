import firebase from 'app/src/constants/store';

const streamUserMsg = email => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email)
    .collection('messages');
};

const streamUser = email => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email);
};

const updateUser = (email, newProfile) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email)
    .update(newProfile);
};

const updateFavorite = (email, myfavorites) => {
  firebase
    .firestore()
    .collection('users')
    .doc(email)
    .update({myfavorites: myfavorites})
    .then(() => {
      console.log('updated favorites');
    });
};

const updateUserReservation = (email, userReservations) => {
  firebase
    .firestore()
    .collection('users')
    .doc(email)
    .update({reservations: userReservations})
    .then(() => {
      console.log('made reservation');
    });
};

export {
  streamUserMsg,
  streamUser,
  updateUser,
  updateFavorite,
  updateUserReservation,
};
