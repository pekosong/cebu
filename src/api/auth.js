import firebase from 'app/src/constants/store';

const login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

const sign = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

const reset = email => {
  firebase.auth().languageCode = 'ko';
  return firebase.auth().sendPasswordResetEmail(email);
};

export {login, sign, reset};
