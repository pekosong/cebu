let data = require('./shopList');

let firebase = require('firebase');
let firebaseConfig = {
  apiKey: 'AIzaSyCPpjFnNk1TKksDdjfloXAHKFkrReHydq8',
  authDomain: 'cabu-c030d.firebaseapp.com',
  databaseURL: 'https://cabu-c030d.firebaseio.com',
  projectId: 'cabu-c030d',
  storageBucket: '',
  messagingSenderId: '31520463311',
  appId: '1:31520463311:web:5455973a89b2c0dc',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

data.massageList.forEach(e => {
  db.collection('shops')
    .doc(e.id)
    .set(e)
    .then(() => console.log('done'))
    .catch(err => {
      console.log(err);
    });
});
