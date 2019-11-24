import firebase from 'app/src/constants/store';

const streamUserMsg = email => {
  return firebase
    .firestore()
    .collection('messages')
    .where('email', '==', email);
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

const updateMessages = (email, messages) => {
  firebase
    .firestore()
    .collection('users')
    .doc(email)
    .update({messages: messages})
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
  updateMessages,
  updateUserReservation,
};
