import firebase from 'app/constants/store';

const streamUserMsg = email => {
  return firebase
    .firestore()
    .collection('users')
    .doc(email)
    .collection('messages');
};

export {streamUserMsg};
