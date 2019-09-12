const lists = [
  {
    category: "Restaurant",
    id: "restaurant1",
    name: "점보 7",
    engName: "jumbo7",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: require("../assets/images/cebu_food1.jpg"),
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
    source: require("../assets/images/cebu_food2.jpeg"),
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
    source: require("../assets/images/cebu_food3.jpeg"),
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
    source: require("../assets/images/cebu_food4.jpg"),
    review: 4,
    reviewCnt: 545,
    tags: ["스테이크", "전통음식"],
    pickup: true,
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Message",
    id: "message1",
    name: "메디핑거",
    engName: "Medi Finger",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: require("../assets/images/cebu_massage1.jpg"),
    review: 4,
    reviewCnt: 200,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Message",
    id: "message2",
    name: "프라나 스파",
    engName: "Prana Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: require("../assets/images/cebu_massage2.jpeg"),
    review: 4.5,
    reviewCnt: 234,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Message",
    id: "message3",
    name: "오션 스파",
    engName: "Ocean Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: require("../assets/images/cebu_massage3.jpg"),
    review: 5,
    reviewCnt: 156,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  },
  {
    category: "Message",
    id: "message4",
    name: "에코 스파",
    engName: "Eco Spa",
    address: "세부 막탄",
    engAddress: "cebu maktan",
    phone: "010-9141-9090",
    source: require("../assets/images/cebu_massage4.jpg"),
    review: 3.5,
    reviewCnt: 270,
    tags: ["전통태국마사지"],
    openTime: "11:00",
    closeTime: "24:00"
  }
];

const categories = [
  {
    id: "Restaurant",
    name: "식당",
    tags: ["all", "eat"],
    count: 147,
    icon: "ios-pizza",
    src: require("../assets/images/search/restaurant.jpg")
  },
  {
    id: "Bar",
    name: "술집",
    tags: ["all", "eat"],
    count: 17,
    icon: "ios-beer",
    src: require("../assets/images/search/bar.jpg")
  },
  {
    id: "Cafe",
    name: "카페",
    tags: ["all", "eat"],
    count: 47,
    icon: "md-cafe",
    src: require("../assets/images/search/cafe.jpg")
  },
  {
    id: "Message",
    name: "마사지",
    tags: ["all", "aesthetic"],
    count: 16,
    icon: "ios-hand",
    src: require("../assets/images/search/massage.jpg")
  },
  {
    id: "Nail",
    name: "네일",
    tags: ["all", "aesthetic"],
    count: 16,
    icon: "ios-hand",
    src: require("../assets/images/search/nail.jpg")
  },
  {
    id: "SeaSports",
    name: "수상스포츠",
    tags: ["all", "activity"],
    count: 68,
    icon: "ios-boat",
    src: require("../assets/images/search/seasports.jpg")
  },
  {
    id: "Activity",
    name: "액티비티",
    tags: ["all", "activity"],
    count: 47,
    icon: "ios-bicycle",
    src: require("../assets/images/search/activity.jpg")
  },
  {
    id: "Shopping",
    name: "쇼핑",
    tags: ["all", "activity"],
    count: 47,
    icon: "ios-basket",
    src: require("../assets/images/search/shopping.jpg")
  }
];

const plans = [
  {
    date: "9월 10일 (목)",
    nDay: "1일차",
    plan: [
      {
        time: "11:30 ~ 13:00",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant2",
        shopName: "부레 레스토랑",
        icon: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00 ~ 15:00",
        people: 2,
        category: "Message",
        shopId: "message1",
        shopName: "메디핑거",
        icon: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00 ~ 18:00",
        people: 2,
        category: "Message",
        shopId: "message2",
        shopName: "프라나 스파",
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
        time: "11:30 ~ 13:00",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant3",
        shopName: "란타 코르도바",
        icon: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00 ~ 15:00",
        people: 2,
        category: "Message",
        shopId: "message4",
        shopName: "에코 스파",
        icon: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00 ~ 18:00",
        people: 2,
        category: "Restaurant",
        shopId: "restaurant1",
        shopName: "점보 7",
        icon: "ios-pizza",
        pickup: ""
      }
    ]
  }
];

const profiles = {
  username: "김징고",
  location: "세부 동동 호텔",
  email: "peko22@naver.com",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

export { categories, profiles, plans, lists };
