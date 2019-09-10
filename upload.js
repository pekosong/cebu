let firebase = require("firebase");
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

let db = firebase.firestore();

const plans = [
  {
    date: "9월 10일 (목)",
    nDay: "1일차",
    plan: [
      {
        time: "11:30",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant2",
        icon: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00",
        people: 2,
        category: "Message",
        shopId: "message1",
        icon: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00",
        people: 2,
        category: "Message",
        shopId: "message2",
        icon: "ios-boat",
        pickup: ""
      }
    ]
  },
  {
    date: "9월 11일 (금)",
    nDay: "2일차",
    plan: [
      {
        time: "11:30",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant3",
        icon: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00",
        people: 2,
        category: "Message",
        shopId: "message4",
        icon: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant1",
        icon: "ios-pizza",
        pickup: ""
      }
    ]
  }
];

db.collection("shops")
  .where("id", "==", "Message")
  .get()
  .then(querySnapshot =>
    querySnapshot.forEach(doc => {
      data = doc.data();
      data.lists.forEach(d => {
        if (d.id == "message2") {
          console.log(d);
        }
      });
    })
  )
  .catch(err => {
    console.log(err);
  });
