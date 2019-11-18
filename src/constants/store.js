import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCPpjFnNk1TKksDdjfloXAHKFkrReHydq8",
  authDomain: "cabu-c030d.firebaseapp.com",
  databaseURL: "https://cabu-c030d.firebaseio.com",
  projectId: "cabu-c030d",
  storageBucket: "gs://cabu-c030d.appspot.com",
  messagingSenderId: "31520463311",
  appId: "1:31520463311:web:5455973a89b2c0dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
