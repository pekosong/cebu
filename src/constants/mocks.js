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
    name: '시티투어',
    engName: 'Buffet',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/44695/275792_large_1539439232.jpg?1539439232',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/44695/275792_large_1539439232.jpg?1539439232',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['시티투어', '샌딩'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'activity3',
    category: 'Activity',
    name: '가와산 캐녀닝',
    engName: 'Buffet',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194553_large_1525768662.jpg?1525768662',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194553_large_1525768662.jpg?1525768662',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['캐녀닝'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'activity4',
    category: 'Activity',
    name: '호핑투어',
    engName: 'Buffet',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190185_large_1525774849.jpg?1525774849',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190185_large_1525774849.jpg?1525774849',
    ],
    review: 2.5,
    reviewCnt: 231,
    tags: ['호핑', '시푸드BBQ'],
    likes: 10,
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
];

const FoodList = [
  {
    id: 'food1',
    category: 'Food',
    name: '김떡순',
    engName: 'kimbab',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjc3/MDAxNTMwMzMxNDQ3OTk0.uZugAvGm6M1LxG4rBnV57Xm9p_-1oxYr37upl2_Rf9Qg.tE_e5LoEqpqiKNOH4kdIP7f2rZuhjx0J8wq4WP0xkhMg.JPEG.say9811011/image_7610330001530331403840.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjc3/MDAxNTMwMzMxNDQ3OTk0.uZugAvGm6M1LxG4rBnV57Xm9p_-1oxYr37upl2_Rf9Qg.tE_e5LoEqpqiKNOH4kdIP7f2rZuhjx0J8wq4WP0xkhMg.JPEG.say9811011/image_7610330001530331403840.jpg?type=w800',
    ],
    review: 3.5,
    reviewCnt: 1212,
    tags: ['분식', '배달'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'food2',
    category: 'Food',
    name: '조선치킨',
    engName: 'chicken',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjYy/MDAxNTMwMzMxNzc2MDM2.0INxlVGxZJr8rfyKhU0OASnVF5yjpzEb5xPd5VZpPTEg.348yr9UOa9mSbRR1Z0Z2LaqUjM1ijF53uvWPYLL98CIg.JPEG.say9811011/image_656302551530331375130.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjYy/MDAxNTMwMzMxNzc2MDM2.0INxlVGxZJr8rfyKhU0OASnVF5yjpzEb5xPd5VZpPTEg.348yr9UOa9mSbRR1Z0Z2LaqUjM1ijF53uvWPYLL98CIg.JPEG.say9811011/image_656302551530331375130.jpg?type=w800',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['치킨', '배달'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'food3',
    category: 'Food',
    name: '더락 피씨토랑',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzExMjhfMTky/MDAxNTExODQyMjg2NDU1.MikmMTuKm48Aog_-MevBsjAcZRnM1zX5tSmVlJTmS_Ig.2nzct6G0-00wjMJUezeq3H35q0IeNULGWbXCsDAqvMEg.JPEG.lovelyr929/20171124_134812.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNzExMjhfMTky/MDAxNTExODQyMjg2NDU1.MikmMTuKm48Aog_-MevBsjAcZRnM1zX5tSmVlJTmS_Ig.2nzct6G0-00wjMJUezeq3H35q0IeNULGWbXCsDAqvMEg.JPEG.lovelyr929/20171124_134812.jpg?type=w800',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['한식', '배달'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'food4',
    category: 'Food',
    name: '장충동 족발보쌈',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfNTUg/MDAxNTI5NDg0MjIyODEy.4JDf9FWB0pimqpdfyHV9Rf_hXioDcm6kWEkLoXFyZIYg.dpmHG3iCXVEv7kRnWT7w_X97_efkxwjggOo0s3_mdmIg.JPEG.tictoccebu/image_2262974011529484203176.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfNTUg/MDAxNTI5NDg0MjIyODEy.4JDf9FWB0pimqpdfyHV9Rf_hXioDcm6kWEkLoXFyZIYg.dpmHG3iCXVEv7kRnWT7w_X97_efkxwjggOo0s3_mdmIg.JPEG.tictoccebu/image_2262974011529484203176.jpg?type=w800',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['족발', '배달'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'food5',
    category: 'Food',
    name: '뭉치고',
    engName: 'moong chi go',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfOCAg/MDAxNTI5NDg0MzQxMDE2.VxX5GWzyPqwpiAVB2fmR0Vk9TkANPbUZBMq5pyf7MwQg.u2UjQJr3WtKSBCV_K3KW02khQx7AgZMqvMMDd39x_YAg.JPEG.tictoccebu/B9B6%C4%A1B0EDB8%DE%B4BA1.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfOCAg/MDAxNTI5NDg0MzQxMDE2.VxX5GWzyPqwpiAVB2fmR0Vk9TkANPbUZBMq5pyf7MwQg.u2UjQJr3WtKSBCV_K3KW02khQx7AgZMqvMMDd39x_YAg.JPEG.tictoccebu/B9B6%C4%A1B0EDB8%DE%B4BA1.jpg?type=w800',
    ],
    review: 2.5,
    reviewCnt: 231,
    tags: ['씨푸드', '배달'],
    likes: 10,
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
];

const PlaceList = [
  {
    id: 'place1',
    category: 'Place',
    name: '아얄라몰',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: 'https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D',
    source: ['https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D'],
    review: 4.5,
    reviewCnt: 11,
    tags: ['쇼핑'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'place2',
    category: 'Place',
    name: '산토니뇨 성당',
    engName: 'kimbab',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'https://media-cdn.tripadvisor.com/media/photo-s/13/83/22/fd/facade-of-the-basilica.jpg',
    source: [
      'https://media-cdn.tripadvisor.com/media/photo-s/13/83/22/fd/facade-of-the-basilica.jpg',
    ],
    review: 3.5,
    reviewCnt: 1212,
    tags: ['관광지'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'place3',
    category: 'Place',
    name: 'SM몰',
    engName: 'kimbab',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: 'http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg',
    source: ['http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg'],
    review: 3.5,
    reviewCnt: 1212,
    tags: ['쇼핑'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'place4',
    category: 'Place',
    name: '산페드로요새',
    engName: 'chicken',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: 'http://cfile232.uf.daum.net/image/2359E44A50FDE55D098D5F',
    source: ['http://cfile232.uf.daum.net/image/2359E44A50FDE55D098D5F'],
    review: 4.5,
    reviewCnt: 11,
    tags: ['관광지'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
  {
    id: 'place5',
    category: 'Place',
    name: '마젤란의 십자가',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview:
      'http://philsalgi.com/xe/files/attach/images/145/455/045/80f773d471536e9b975bc6db1838ee0e.jpg',
    source: [
      'http://philsalgi.com/xe/files/attach/images/145/455/045/80f773d471536e9b975bc6db1838ee0e.jpg',
    ],
    review: 4.5,
    reviewCnt: 11,
    tags: ['관광지'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    likes: 10,
    reviews: [],
  },
];

const restaurantList = [
  {
    id: 'restaurant1',
    name: '점보 7',
    engName: 'jumbo7',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: require('../assets/images/cebu_food1.jpg'),
    source: require('../assets/images/cebu_food1.jpg'),
    review: 3.5,
    reviewCnt: 1212,
    tags: ['랍스타', '새우요리'],
    likes: 10,
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
    preview: require('../assets/images/cebu_food2.jpeg'),
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
    preview: require('../assets/images/cebu_food3.jpeg'),
    source: require('../assets/images/cebu_food3.jpeg'),
    review: 4.0,
    reviewCnt: 342,
    tags: ['동동', '전통음식'],
    likes: 10,
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
    preview: require('../assets/images/cebu_food4.jpg'),
    source: require('../assets/images/cebu_food4.jpg'),
    review: 4,
    reviewCnt: 545,
    tags: ['스테이크', '전통음식'],
    likes: 10,
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
  },
];

const messageList = [
  {
    id: 'massage1',
    name: '메디핑거',
    engName: 'Medi Finger',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: require('../assets/images/cebu_massage1.jpg'),
    source: require('../assets/images/cebu_massage1.jpg'),
    review: 4,
    reviewCnt: 200,
    tags: ['전통태국마사지'],
    likes: 10,
    openTime: '11:00',
    closeTime: '24:00',
  },
  {
    id: 'massage2',
    name: '프라나 스파',
    engName: 'Prana Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: require('../assets/images/cebu_massage2.jpeg'),
    source: require('../assets/images/cebu_massage2.jpeg'),
    review: 4.5,
    reviewCnt: 234,
    tags: ['전통태국마사지'],
    likes: 10,
    openTime: '11:00',
    closeTime: '24:00',
  },
  {
    id: 'massage3',
    name: '오션 스파',
    engName: 'Ocean Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: require('../assets/images/cebu_massage3.jpg'),
    source: require('../assets/images/cebu_massage3.jpg'),
    review: 5,
    reviewCnt: 156,
    tags: ['전통태국마사지'],
    likes: 10,
    openTime: '11:00',
    closeTime: '24:00',
  },
  {
    id: 'massage4',
    name: '에코 스파',
    engName: 'Eco Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    preview: require('../assets/images/cebu_massage4.jpg'),
    source: require('../assets/images/cebu_massage4.jpg'),
    review: 3.5,
    reviewCnt: 270,
    tags: ['전통태국마사지'],
    likes: 10,
    openTime: '11:00',
    closeTime: '24:00',
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
      id: 'massage1',
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
      id: 'massage2',
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
      id: 'massage3',
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
      id: 'massage4',
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
    src: require('../assets/images/search/restaurant.jpg'),
  },
  {
    id: 'Massage',
    name: '스파',
    src: require('../assets/images/search/massage.jpg'),
  },
  {
    id: 'Food',
    name: '배달음식',
    src: require('../assets/images/search/food.jpg'),
  },
  {
    id: 'Place',
    name: '명소',
    src: require('../assets/images/search/activity.jpg'),
  },
  {
    id: 'Activity',
    name: '액티비티',
    src: require('../assets/images/search/seasports.jpg'),
  },
  {
    id: 'Adult',
    name: '어른전용',
    src: require('../assets/images/category/adult.jpg'),
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
    src: require('../assets/images/cebu_massage1.jpg'),
    tag: ['전통', '피로싹'],
    desc: '전신 아로마 마사지',
    shopCode: 'massage1',
    category: 'Massage',
  },
  {
    shop: '점보 7',
    src: require('../assets/images/cebu_food1.jpg'),
    tag: ['씨푸드'],
    desc: '전신 아로마 마사지',
    shopCode: 'restaurant1',
    category: 'Restaurant',
  },
  {
    shop: '프라나스파',
    src: require('../assets/images/cebu_massage2.jpeg'),
    tag: ['고급', '피로싹'],
    desc: '전신 아로마 마사지',
    shopCode: 'massage2',
    category: 'Massage',
  },
  {
    shop: '오션스파',
    src: require('../assets/images/cebu_massage3.jpg'),
    tag: ['편안함', '피로싹'],
    desc: '전신 아로마 마사지',
    shopCode: 'massage3',
    category: 'Massage',
  },
  {
    shop: 'Buffet 101',
    src: require('../assets/images/cebu_food2.jpeg'),
    tag: ['부페'],
    desc: '전신 아로마 마사지',
    shopCode: 'restaurant2',
    category: 'Restaurant',
  },
  {
    shop: '에코스파',
    src: require('../assets/images/cebu_massage4.jpg'),
    tag: ['편안함', '피로싹'],
    desc: '전신 아로마 마사지',
    shopCode: 'massage4',
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
  restaurantList,
  messageList,
  categories,
  profiles,
  plans,
  lists,
  recommendList,
  eventList,
  loveList,
  ActivityList,
  FoodList,
  PlaceList,
};
