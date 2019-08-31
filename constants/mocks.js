const lists = {
  restaurant: [
    {
      id: "restaurant1",
      name: "점보 7",
      engname: "jumbo7",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_food1.jpg"),
      review: 3.5,
      reviewcnt: 100,
      tags: ["랍스타", "새우요리"],
      pickup: true,
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "restaurant2",
      name: "부레 레스토랑",
      engname: "Buffet ",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_food2.jpeg"),
      review: 4.5,
      reviewcnt: 100,
      tags: ["부페", "전통음식"],
      pickup: false,
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "restaurant2",
      name: "란타 코르도바",
      engname: "Lantaw Cordova",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_food3.jpeg"),
      review: 4.0,
      reviewcnt: 100,
      tags: ["동동", "전통음식"],
      pickup: false,
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "restaurant4",
      name: "아인 레스토랑",
      engname: "Ain ",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_food4.jpg"),
      review: 4,
      reviewcnt: 100,
      tags: ["스테이크", "전통음식"],
      pickup: true,
      opentime: "11:00",
      closeTime: "24:00"
    }
  ],
  massage: [
    {
      id: "massage1",
      name: "메디핑거",
      engname: "Medi Finger",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_massage1.jpg"),
      review: 4.5,
      reviewcnt: 100,
      tags: ["전통태국마사지"],
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "massage2",
      name: "프라나 스파",
      engname: "Prana Spa",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_massage2.jpeg"),
      review: 4.5,
      reviewcnt: 100,
      tags: ["전통태국마사지"],
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "massage3",
      name: "오션 스파",
      engname: "Ocean Spa",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_massage3.jpg"),
      review: 4.5,
      reviewcnt: 100,
      tags: ["전통태국마사지"],
      openTime: "11:00",
      closeTime: "24:00"
    },
    {
      id: "restaurant4",
      name: "에코 스파",
      engname: "Eco Spa",
      address: "세부 막탄",
      endaddress: "cebu maktan",
      phone: "010-9141-9090",
      source: require("../assets/images/cebu_massage4.jpg"),
      review: 4.5,
      reviewcnt: 100,
      tags: ["전통태국마사지"],
      openTime: "11:00",
      closeTime: "24:00"
    }
  ]
};

const categories = [
  {
    id: "resto",
    name: "식당",
    tags: ["all", "eat"],
    count: 147,
    icon: "ios-pizza"
  },
  {
    id: "beer",
    name: "술집",
    tags: ["all", "eat"],
    count: 17,
    icon: "ios-beer"
  },
  {
    id: "cafe",
    name: "카페",
    tags: ["all", "eat"],
    count: 47,
    icon: "md-cafe"
  },
  {
    id: "masage",
    name: "마사지",
    tags: ["all", "aesthetic"],
    count: 16,
    icon: "ios-hand"
  },
  {
    id: "nail",
    name: "네일",
    tags: ["all", "aesthetic"],
    count: 16,
    icon: "ios-hand"
  },
  {
    id: "sea",
    name: "수상스포츠",
    tags: ["all", "activity"],
    count: 68,
    icon: "ios-boat"
  },
  {
    id: "moutaion",
    name: "스포츠",
    tags: ["all", "activity"],
    count: 47,
    icon: "ios-bicycle"
  },
  {
    id: "shopping",
    name: "쇼핑",
    tags: ["all", "activity"],
    count: 47,
    icon: "ios-basket"
  }
];

const plans = {
  first: {
    date: "9월 10일 (목)",
    plan: [
      {
        time: "11:30 ~ 13:00",
        location: "세부 XXX 식당",
        category: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00 ~ 15:00",
        location: "세부 xxx 마사지",
        category: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00 ~ 18:00",
        location: "워터 스포츠",
        category: "ios-boat",
        pickup: ""
      }
    ]
  },
  second: {
    date: "9월 11일 (금)",
    plan: [
      {
        time: "11:30 ~ 13:00",
        location: "세부 XXX 식당",
        category: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00 ~ 15:00",
        location: "세부 xxx 마사지",
        category: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00 ~ 18:00",
        location: "워터 스포츠",
        category: "ios-boat",
        pickup: ""
      }
    ]
  },
  third: {
    date: "9월 12일 (토)",
    plan: [
      {
        time: "11:30 ~ 13:00",
        location: "세부 XXX 식당",
        category: "ios-pizza",
        pickup: {
          location: "xx호텔 입구",
          time: "11:30"
        }
      },
      {
        time: "13:00 ~ 15:00",
        location: "세부 xxx 마사지",
        category: "ios-hand",
        pickup: {
          location: "세부 XXX 식당",
          time: "13:00"
        }
      },
      {
        time: "15:00 ~ 18:00",
        location: "워터 스포츠",
        category: "ios-boat",
        pickup: ""
      }
    ]
  }
};

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
