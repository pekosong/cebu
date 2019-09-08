let song = require("./constants/store.js");

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

console.log(plans);
// firebase
//   .firestore()
//   .doc("peko22@naver.com")
//   .set({ plans: plans })
//   .then(() => console.log("done"));
