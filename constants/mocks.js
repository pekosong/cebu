const ActivityList = [
  {
    id: 'activity1',
    category: 'Activity',
    name: '와일드호핑',
    engName: 'jumbo7',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/80887_large_1525778153.jpg?1525778153',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/80887_large_1525778153.jpg?1525778153',
    ],
    review: 3.5,
    reviewCnt: 1212,
    tags: ['호핑', '시푸드BBQ'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'activity2',
    category: 'Activity',
    name: '호핑투어',
    engName: 'Buffet',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190185_large_1525774849.jpg?1525774849',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/80887_large_1525778153.jpg?1525778153',
    ],
    review: 2.5,
    reviewCnt: 231,
    tags: ['호핑', '시푸드BBQ'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
];
const lists = {
  Restaurant: [
    {
      id: 'restaurant1',
      name: '점보 7',
      engName: 'jumbo7',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_food1.jpg'),
      review: 3.5,
      reviewCnt: 1212,
      tags: ['랍스타', '새우요리'],
      pickup: true,
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'restaurant2',
      name: '부레 레스토랑',
      engName: 'Buffet',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_food2.jpeg'),
      review: 2.5,
      reviewCnt: 231,
      tags: ['부페', '전통음식'],
      pickup: false,
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'restaurant3',
      name: '란타 코르도바',
      engName: 'Lantaw Cordova',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_food3.jpeg'),
      review: 4.0,
      reviewCnt: 342,
      tags: ['동동', '전통음식'],
      pickup: false,
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'restaurant4',
      name: '아인 레스토랑',
      engName: 'Ain',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_food4.jpg'),
      review: 4,
      reviewCnt: 545,
      tags: ['스테이크', '전통음식'],
      pickup: true,
      openTime: '11:00',
      closeTime: '24:00',
    },
  ],
  Message: [
    {
      id: 'message1',
      name: '메디핑거',
      engName: 'Medi Finger',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_massage1.jpg'),
      review: 4,
      reviewCnt: 200,
      tags: ['전통태국마사지'],
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'message2',
      name: '프라나 스파',
      engName: 'Prana Spa',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_massage2.jpeg'),
      review: 4.5,
      reviewCnt: 234,
      tags: ['전통태국마사지'],
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'message3',
      name: '오션 스파',
      engName: 'Ocean Spa',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_massage3.jpg'),
      review: 5,
      reviewCnt: 156,
      tags: ['전통태국마사지'],
      openTime: '11:00',
      closeTime: '24:00',
    },
    {
      id: 'message4',
      name: '에코 스파',
      engName: 'Eco Spa',
      address: '세부 막탄',
      engAddress: 'cebu maktan',
      phone: '010-9141-9090',
      source: require('../assets/images/cebu_massage4.jpg'),
      review: 3.5,
      reviewCnt: 270,
      tags: ['전통태국마사지'],
      openTime: '11:00',
      closeTime: '24:00',
    },
  ],
  Cafe: [],
  Bar: [],
  Nail: [],
  SeaSports: [],
  Activity: [],
  Shopping: [],
};

const categories = [
  {
    id: 'Restaurant',
    name: '식당',
    tags: ['all', 'eat'],
    count: 147,
    icon: 'ios-pizza',
    src: require('../assets/images/search/restaurant.jpg'),
  },
  {
    id: 'Massage',
    name: '마사지',
    tags: ['all', 'aesthetic'],
    count: 16,
    icon: 'ios-hand',
    src: require('../assets/images/search/massage.jpg'),
  },
  {
    id: 'Activity',
    name: '액티비티',
    tags: ['all', 'activity'],
    count: 47,
    icon: 'ios-bicycle',
    src: require('../assets/images/search/seasports.jpg'),
  },
  {
    id: 'Nail',
    name: '네일',
    tags: ['all', 'aesthetic'],
    count: 16,
    icon: 'ios-hand',
    src: require('../assets/images/search/nail.jpg'),
  },
];

const plans = [
  {
    date: '9월 10일 (목)',
    nDay: '1일차',
    plan: [
      {
        time: '11:30 ~ 13:00',
        people: 2,
        category: 'Restaurant',
        shopId: 'restaurant2',
        shopName: '부레 레스토랑',
        icon: 'ios-pizza',
        pickup: {
          location: 'xx호텔 입구',
          time: '11:30',
        },
      },
      {
        time: '13:00 ~ 15:00',
        people: 2,
        category: 'Message',
        shopId: 'message1',
        shopName: '메디핑거',
        icon: 'ios-hand',
        pickup: {
          location: '세부 XXX 식당',
          time: '13:00',
        },
      },
      {
        time: '15:00 ~ 18:00',
        people: 2,
        category: 'Message',
        shopId: 'message2',
        shopName: '프라나 스파',
        icon: 'ios-boat',
        pickup: '',
      },
    ],
  },
  {
    date: '9월 11일 (금)',
    nDay: '2일차',
    plan: [
      {
        time: '11:30 ~ 13:00',
        people: 2,
        category: 'Restaurant',
        shopId: 'restaurant3',
        shopName: '란타 코르도바',
        icon: 'ios-pizza',
        pickup: {
          location: 'xx호텔 입구',
          time: '11:30',
        },
      },
      {
        time: '13:00 ~ 15:00',
        people: 2,
        category: 'Message',
        shopId: 'message4',
        shopName: '에코 스파',
        icon: 'ios-hand',
        pickup: {
          location: '세부 XXX 식당',
          time: '13:00',
        },
      },
      {
        time: '15:00 ~ 18:00',
        people: 2,
        category: 'Restaurant',
        shopId: 'restaurant1',
        shopName: '점보 7',
        icon: 'ios-pizza',
        pickup: '',
      },
    ],
  },
];

const profiles = {
  username: '김징고',
  location: '세부 동동 호텔',
  email: 'peko22@naver.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

const recommendList = [
  {
    shop: '메디핑거',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage1.jpg?alt=media&token=01df0f3f-75f6-4c4d-ab1f-07353fd528aa',
    src: require('../assets/images/cebu_massage1.jpg'),
    tag: '편안함, 피로싹',
    desc: '전신 아로마 마사지',
    shopCode: 'massage1',
    afterPrice: '30,000',
    beforePrice: '20,000',
    category: 'Massage',
  },
  {
    shop: '프라나스파',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage2.jpeg?alt=media&token=1ad5531f-8db0-4d63-8ac9-8a903a926614',
    src: require('../assets/images/cebu_massage2.jpeg'),
    tag: '편안함, 피로싹',

    desc: '전신 아로마 마사지',
    shopCode: 'massage2',
    afterPrice: '30,000',
    beforePrice: '20,000',
    category: 'Massage',
  },
  {
    shop: '오션스파',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage3.jpg?alt=media&token=99f5159f-0efb-438d-841f-0d63967f3f34',

    src: require('../assets/images/cebu_massage3.jpg'),
    tag: '편안함, 피로싹',
    desc: '전신 아로마 마사지',
    shopCode: 'massage3',
    afterPrice: '30,000',
    beforePrice: '20,000',
    category: 'Massage',
  },
  {
    shop: '에코스파',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage4.jpg?alt=media&token=5d676307-3d60-426a-9af8-9cea7310462f',

    src: require('../assets/images/cebu_massage4.jpg'),
    tag: '편안함, 피로싹',
    desc: '전신 아로마 마사지',
    shopCode: 'massage4',
    afterPrice: '30,000',
    beforePrice: '20,000',
    category: 'Massage',
  },
];

const eventList = [
  {
    shop: '점보 7',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food1.jpg?alt=media&token=18bc43f0-1ae4-4a9c-938d-0502bb86dee3',

    src: require('../assets/images/cebu_food1.jpg'),
    tag: '전통',

    desc: '태국 전통 음식',
    event: '1+1 행사 중',
    shopCode: 'restaurant1',
    category: 'Restaurant',
  },
  {
    shop: '부페 레스토랑',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food2.jpeg?alt=media&token=123bd2cd-a92c-474e-a4c7-fc85d5d29e7a',

    src: require('../assets/images/cebu_food2.jpeg'),
    tag: '전통',
    desc: '태국 전통 음식',
    event: '1+1 행사 중',
    shopCode: 'restaurant2',
    category: 'Restaurant',
  },
  {
    shop: '란타 코르도바',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food3.jpeg?alt=media&token=100c4811-8977-465b-994c-b1227264b913',

    src: require('../assets/images/cebu_food3.jpeg'),
    tag: '전통',
    desc: '태국 전통 음식',
    event: '1+1 행사 중',
    shopCode: 'restaurant3',
    category: 'Restaurant',
  },
  {
    shop: '아인 레스토랑',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',

    src: require('../assets/images/cebu_food4.jpg'),
    tag: '전통',
    desc: '태국 전통 음식',
    event: '1+1 행사 중',
    shopCode: 'restaurant4',
    category: 'Restaurant',
  },
];

const loveList = [
  {
    shop: '아인 레스토랑',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',

    src: require('../assets/images/cebu_food4.jpg'),
    tag: '전통',
    desc: '태국 전통 음식',
    star: 5,
    shopCode: 'restaurant4',
    category: 'Restaurant',
  },
  {
    shop: '에코스파',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage4.jpg?alt=media&token=5d676307-3d60-426a-9af8-9cea7310462f',
    src: require('../assets/images/cebu_massage4.jpg'),
    tag: '편안함, 피로싹',
    star: 5,
    desc: '전신 아로마 마사지',
    shopCode: 'massage4',
    category: 'Massage',
  },
  {
    shop: '란타 코르도바',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food3.jpeg?alt=media&token=100c4811-8977-465b-994c-b1227264b913',

    src: require('../assets/images/cebu_food3.jpeg'),
    tag: '전통',
    desc: '태국 전통 음식',
    star: 4.5,
    shopCode: 'restaurant3',
    category: 'Restaurant',
  },
  {
    shop: '아인 레스토랑',
    url:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',

    src: require('../assets/images/cebu_food4.jpg'),
    tag: '전통',
    desc: '태국 전통 음식',
    star: 4.5,
    shopCode: 'restaurant4',
    category: 'Restaurant',
  },
];
export {
  categories,
  profiles,
  plans,
  lists,
  recommendList,
  eventList,
  loveList,
  ActivityList,
};
