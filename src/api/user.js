import firebase from 'app/src/constants/store';

const streamUserMsg = email => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email)
    .collection('messages');
};

export {streamUserMsg};
