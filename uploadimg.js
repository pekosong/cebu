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

let db = firebase.storage().ref();

const lists = [
  {
    category: "Restaurant",
    id: "restaurant1",
    name: "점보 7",
    engName: "jumbo7",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_food1.jpg",
    review: 3.5,
    reviewCnt: 1212,
    tags: ["랍스타", "새우요리"],
    pickup: true,
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Restaurant",
    id: "restaurant2",
    name: "부레 레스토랑",
    engName: "Buffet",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_food2.jpeg",
    review: 2.5,
    reviewCnt: 231,
    tags: ["부페", "전통음식"],
    pickup: false,
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Restaurant",
    id: "restaurant3",
    name: "란타 코르도바",
    engName: "Lantaw Cordova",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_food3.jpeg",
    review: 4.0,
    reviewCnt: 342,
    tags: ["동동", "전통음식"],
    pickup: false,
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Restaurant",
    id: "restaurant4",
    name: "아인 레스토랑",
    engName: "Ain",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_food4.jpg",
    review: 4,
    reviewCnt: 545,
    tags: ["스테이크", "전통음식"],
    pickup: true,
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Massage",
    id: "massage1",
    name: "메디핑거",
    engName: "Medi Finger",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_massage1.jpg",
    review: 4,
    reviewCnt: 200,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Massage",
    id: "massage2",
    name: "프라나 스파",
    engName: "Prana Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_massage2.jpg",
    review: 4.5,
    reviewCnt: 234,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Massage",
    id: "massage3",
    name: "오션 스파",
    engName: "Ocean Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_massage3.jpg",
    review: 5,
    reviewCnt: 156,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Massage",
    id: "massage4",
    name: "에코 스파",
    engName: "Eco Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: "../assets/images/cebu_massage4.jpg",
    review: 3.5,
    reviewCnt: 270,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  }
];

lists.forEach(e => {
  db.collection("shops")
    .doc(e.id)
    .set(e)
    .then(() => console.log("done"))
    .catch(err => {
      console.log(err);
    });
});
