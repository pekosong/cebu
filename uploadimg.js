let firebase = require("firebase");
var storage = require("@google-cloud/storage");

let firebaseConfig = {
  apiKey: "AIzaSyCPpjFnNk1TKksDdjfloXAHKFkrReHydq8",
  authDomain: "cabu-c030d.firebaseapp.com",
  databaseURL: "https://cabu-c030d.firebaseio.com",
  projectId: "cabu-c030d",
  storageBucket: "",
  messagingSenderId: "31520463311",
  appId: "1:31520463311:web:5455973a89b2c0dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let storageRef = firebase.storage().ref();
var mountainsRef = storageRef.child("assets/images/cebu_food1.jpg");
var mountainImagesRef = storageRef.child("images/mountains.jpg");

mountainsRef.name === mountainImagesRef.name; // true
mountainsRef.fullPath === mountainImagesRef.fullPath;

// const images = [
//   "assets/images/cebu_food1.jpg",
//   "assets/images/cebu_food2.jpeg"
// ];

// images.forEach(e => {
//   db.collection("shops")
//     .doc(e.id)
//     .set(e)
//     .then(() => console.log("done"))
//     .catch(err => {
//       console.log(err);
//     });
// });
