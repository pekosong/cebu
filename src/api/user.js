import firebase from 'app/src/constants/store';

const newCus = {
  createAt: new Date(),
  myfavorites: [],
  plans: {},
  sex: '',
  phone: '',
  name: '',
  host: false,
  shops: [],
  birth: '',
  notice: {
    message: {
      email: true,
      push: true,
      sms: true,
    },
    notice: {
      email: true,
      push: true,
      sms: true,
    },
    promotion: {
      email: true,
      push: true,
      sms: true,
    },
  },
  image: 'https://randomuser.me/api/portraits/men/41.jpg',
};

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

const createUser = email => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email)
    .set({...newCus, email});
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
  createUser,
  updateUser,
  updateFavorite,
  updateMessages,
  updateUserReservation,
};
