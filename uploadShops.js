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

const restaurantList = [
  {
    category: 'Restaurant',
    id: 'restaurant1',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: '점보 7',
    engName: 'Jumbo 7 Seafood and BBQ',
    address:
      'Quezon National Highway , Bagumbayan Uno Maribago , 6015 Lapu-Lapu City , Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.294684,
    longitude: 123.999592,
    phone: '+63 32 239 6546',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food1.jpg?alt=media&token=18bc43f0-1ae4-4a9c-938d-0502bb86dee3',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food1.jpg?alt=media&token=18bc43f0-1ae4-4a9c-938d-0502bb86dee3',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
        images: [],
      },
    ],
    tags: ['랍스타', 'BBQ'],
    openTime: '10:30',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Restaurant',
    id: 'restaurant2',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',

    name: 'Buffet 101',
    engName: 'Buffet 101',
    address: 'City Time Square, Mandaue, 6014 Lalawigan ng Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.3268902,
    longitude: 123.9327309,
    phone: '+63 32 349 2710',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://dhdnzx78tqry5.cloudfront.net/uploads/deal/thumb/97195.jpg',
    source: [
      'https://media-cdn.tripadvisor.com/media/photo-s/17/a3/9a/e0/img-20190523-185925-largejpg.jpg',
      'http://www.travellingthephilippines.info/wp-content/uploads/2016/09/japanese-food.gif',
      'https://media-cdn.tripadvisor.com/media/photo-s/17/a3/9a/e0/img-20190523-185925-largejpg.jpg',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['부페'],
    openTime: '11:30',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Restaurant',
    id: 'restaurant3',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: '란타우 코르도바',
    engName: 'Lantaw Cordova',
    address: 'Sa Baybayon, Cordova, Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.2555956,
    longitude: 123.9328507,
    phone: '+63 32 514 2959',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'https://www.cebudiary.com:446/upload/coupons/1512629653_1.jpg',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food3.jpeg?alt=media&token=100c4811-8977-465b-994c-b1227264b913',
      'https://post-phinf.pstatic.net/MjAxNzA4MDRfMjE4/MDAxNTAxODMyOTg5MTUz.O1yXJLxdo6i9yk_zqotsMUv4V-NGbYsjmVX0joca5EMg.mSzTiRoKDnGu06ZXXu1ygPdVxdnGpV95rlyXoPexofMg.JPEG/IMG_1654.jpg?type=w1200',
      'https://www.cebudiary.com:446/upload/coupons/1512629653_1.jpg',
      'http://cebu.wa-ve.me/thumb/1477384680256.jpg?width=640',
    ],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['퓨전', '해산물'],
    openTime: '11:00',
    closeTime: '23:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Restaurant',
    id: 'restaurant4',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '아인 레스토랑',
    engName: 'Ain',
    address:
      '2 M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjFfMjkg/MDAxNTI5NTc5NTY1MDgw.uTAZxe0DICz-WPPf87DuxsLb6g2ItzVMfTPcG0PMgDgg.Jy_cCWnULEgtFsZpXwDjEDZzeXgb3M_xGZoYmy-NpZMg.JPEG.cocoame/20180605_172009.jpg?type=w800',
      'http://mblogthumb2.phinf.naver.net/MjAxODA0MjhfMTY2/MDAxNTI0OTE4NjAxMTAy.Pihqu2y0W2HzpJSNB8hNGZ_3Nb7xTwfjvPHYCmWdvCUg.NepX0iV8mX6PueLeZWJt7ony9c8jHxPOhalCeb4pUZcg.JPEG.lbr0120/image_321155941524918589593.jpg?type=w800',
      'http://noljatour.com/files/attach/images/126/300/010/cd4b804d9fa742f9769d56e3b1aa093c_1.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['스테이크', '전통음식'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
];

const foodList = [
  {
    category: 'Food',
    id: 'food1',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: '김떡순',
    engName: 'kimbab',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.294684,
    longitude: 123.999592,
    phone: '+63 32 239 6546',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjc3/MDAxNTMwMzMxNDQ3OTk0.uZugAvGm6M1LxG4rBnV57Xm9p_-1oxYr37upl2_Rf9Qg.tE_e5LoEqpqiKNOH4kdIP7f2rZuhjx0J8wq4WP0xkhMg.JPEG.say9811011/image_7610330001530331403840.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjc3/MDAxNTMwMzMxNDQ3OTk0.uZugAvGm6M1LxG4rBnV57Xm9p_-1oxYr37upl2_Rf9Qg.tE_e5LoEqpqiKNOH4kdIP7f2rZuhjx0J8wq4WP0xkhMg.JPEG.say9811011/image_7610330001530331403840.jpg?type=w800',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
        images: [],
      },
    ],
    tags: ['분식', '배달'],
    openTime: '10:30',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food2',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: '조선치킨',
    engName: 'chicken',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.3268902,
    longitude: 123.9327309,
    phone: '+63 32 349 2710',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjYy/MDAxNTMwMzMxNzc2MDM2.0INxlVGxZJr8rfyKhU0OASnVF5yjpzEb5xPd5VZpPTEg.348yr9UOa9mSbRR1Z0Z2LaqUjM1ijF53uvWPYLL98CIg.JPEG.say9811011/image_656302551530331375130.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjYy/MDAxNTMwMzMxNzc2MDM2.0INxlVGxZJr8rfyKhU0OASnVF5yjpzEb5xPd5VZpPTEg.348yr9UOa9mSbRR1Z0Z2LaqUjM1ijF53uvWPYLL98CIg.JPEG.say9811011/image_656302551530331375130.jpg?type=w800',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['치킨', '배달'],
    openTime: '11:30',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food3',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: '더락 피씨토랑',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2555956,
    longitude: 123.9328507,
    phone: '+63 32 514 2959',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxNzExMjhfMTky/MDAxNTExODQyMjg2NDU1.MikmMTuKm48Aog_-MevBsjAcZRnM1zX5tSmVlJTmS_Ig.2nzct6G0-00wjMJUezeq3H35q0IeNULGWbXCsDAqvMEg.JPEG.lovelyr929/20171124_134812.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxNzExMjhfMTky/MDAxNTExODQyMjg2NDU1.MikmMTuKm48Aog_-MevBsjAcZRnM1zX5tSmVlJTmS_Ig.2nzct6G0-00wjMJUezeq3H35q0IeNULGWbXCsDAqvMEg.JPEG.lovelyr929/20171124_134812.jpg?type=w800',
    ],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['한식', '배달'],
    openTime: '11:00',
    closeTime: '23:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food4',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '장충동 족발보쌈',
    engName: 'jokbal',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfNTUg/MDAxNTI5NDg0MjIyODEy.4JDf9FWB0pimqpdfyHV9Rf_hXioDcm6kWEkLoXFyZIYg.dpmHG3iCXVEv7kRnWT7w_X97_efkxwjggOo0s3_mdmIg.JPEG.tictoccebu/image_2262974011529484203176.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfNTUg/MDAxNTI5NDg0MjIyODEy.4JDf9FWB0pimqpdfyHV9Rf_hXioDcm6kWEkLoXFyZIYg.dpmHG3iCXVEv7kRnWT7w_X97_efkxwjggOo0s3_mdmIg.JPEG.tictoccebu/image_2262974011529484203176.jpg?type=w800',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['족발', '배달'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food5',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '뭉치고',
    engName: 'moong chi go',
    address: '세부 막탄',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfOCAg/MDAxNTI5NDg0MzQxMDE2.VxX5GWzyPqwpiAVB2fmR0Vk9TkANPbUZBMq5pyf7MwQg.u2UjQJr3WtKSBCV_K3KW02khQx7AgZMqvMMDd39x_YAg.JPEG.tictoccebu/B9B6%C4%A1B0EDB8%DE%B4BA1.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjBfOCAg/MDAxNTI5NDg0MzQxMDE2.VxX5GWzyPqwpiAVB2fmR0Vk9TkANPbUZBMq5pyf7MwQg.u2UjQJr3WtKSBCV_K3KW02khQx7AgZMqvMMDd39x_YAg.JPEG.tictoccebu/B9B6%C4%A1B0EDB8%DE%B4BA1.jpg?type=w800',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['씨푸드', '배달'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: '10,000원',
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: '10,000원',
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: '10,000원',
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: '10,000원',
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
];

const activityList = [
  {
    category: 'Activity',
    id: 'activity1',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: '와일드호핑',
    engName: 'wild hoping',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.294684,
    longitude: 123.999592,
    phone: '+63 00 000 0000',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/80887_large_1525778153.jpg?1525778153',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/80887_large_1525778153.jpg?1525778153',
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/233081_large_1529978401.jpg?1529978401',
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/13026/233082_large_1529978401.jpg?1529978401',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
        images: [],
      },
    ],
    tags: ['호핑', '시푸드BBQ'],
    openTime: '08:00',
    closeTime: '16:00',
    program: {
      plan: [
        {
          type: 'adult',
          price: 78000,
        },
      ],
      type: ['호핑', '시푸드BBQ'],
      name: '와일드호핑',
      subName: '피코패스 날루수안&힐루뚱안과 씨푸드 BBQ',
      plans: [
        {
          time: '08:00',
          title: '호텔 픽업',
          desc:
            '미팅 후 도크로 이동. 배를 타고 날루수안 섬으로 항해를 시작합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/44756_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:00',
          title: '날루수안섬 근해 도착',
          desc: '바다 상황에 따라 30~50분 정도 소요됩니다',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88338_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:30',
          title: 'Spot. 1 힐루뚱안 바다',
          desc:
            '수심이 깊고 넓은 바다에서 색다른 스노쿨링에 도전해보세요~ 힐루뚱안 바다는 스노쿨링과 다이빙 명소로 다양한 어종의 물고기들을 만날 수 있답니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88339_medium_1529981149.jpg?1529981149',
        },
        {
          time: '12:30',
          title: '힐루뚱안 섬 입도 점심 식사',
          desc:
            '푸짐한 필리핀식 씨푸드 바비큐를 드시고 날루수안의 푸른 바다에서 자유시간을 즐깁니다. 물놀이를 위해 점심을 든든하게 드세요.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88450_medium_1529981152.jpg?1529981152',
        },
        {
          time: '14:00',
          title: '날루수안 바다로 출발',
          desc: '고고! 날루수안',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88451_medium_1529981153.jpg?1529981153',
        },
        {
          time: '14:30',
          title: 'Spot. 2 날루수안 바다',
          desc: '날루수안에서 스노쿨링을 진행합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88452_medium_1529981154.jpg?1529981154',
        },
        {
          time: '16:00',
          title: '세부, 막탄섬으로 복귀',
          desc: '',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88454_medium_1529981333.jpg?1529981333',
        },
      ],
    },
  },
  {
    category: 'Activity',
    id: 'activity2',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: '시티투어',
    engName: 'city tour',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.3268902,
    longitude: 123.9327309,
    phone: '+63 32 349 2710',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/44695/275792_large_1539439232.jpg?1539439232',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/44695/275792_large_1539439232.jpg?1539439232',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['시티투어', '샌딩'],
    openTime: '11:30',
    closeTime: '24:00',
    program: {
      plan: [
        {
          type: 'adult',
          price: 78000,
        },
      ],
      type: ['호핑', '시푸드BBQ'],
      name: '피코패스 날루수안&힐루뚱안 와일드호핑+씨푸드BBQ',
      plans: [
        {
          time: '08:00',
          title: '호텔 픽업',
          desc:
            '미팅 후 도크로 이동. 배를 타고 날루수안 섬으로 항해를 시작합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/44756_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:00',
          title: '날루수안섬 근해 도착',
          desc: '바다 상황에 따라 30~50분 정도 소요됩니다',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88338_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:30',
          title: 'Spot. 1 힐루뚱안 바다',
          desc:
            '수심이 깊고 넓은 바다에서 색다른 스노쿨링에 도전해보세요~ 힐루뚱안 바다는 스노쿨링과 다이빙 명소로 다양한 어종의 물고기들을 만날 수 있답니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88339_medium_1529981149.jpg?1529981149',
        },
        {
          time: '12:30',
          title: '힐루뚱안 섬 입도 점심 식사',
          desc:
            '푸짐한 필리핀식 씨푸드 바비큐를 드시고 날루수안의 푸른 바다에서 자유시간을 즐깁니다. 물놀이를 위해 점심을 든든하게 드세요.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88450_medium_1529981152.jpg?1529981152',
        },
        {
          time: '14:00',
          title: '날루수안 바다로 출발',
          desc: '고고! 날루수안',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88451_medium_1529981153.jpg?1529981153',
        },
        {
          time: '14:30',
          title: 'Spot. 2 날루수안 바다',
          desc: '날루수안에서 스노쿨링을 진행합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88452_medium_1529981154.jpg?1529981154',
        },
        {
          time: '16:00',
          title: '세부, 막탄섬으로 복귀',
          desc: '',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88454_medium_1529981333.jpg?1529981333',
        },
      ],
    },
  },
  {
    category: 'Activity',
    id: 'activity3',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: '가와산 캐녀닝 투어',
    engName: 'kawasan',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2555956,
    longitude: 123.9328507,
    phone: '+63 32 514 2959',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194553_large_1525768662.jpg?1525768662',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194553_large_1525768662.jpg?1525768662',
    ],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['캐녀닝'],
    openTime: '11:00',
    closeTime: '23:00',
    program: {
      plan: [
        {
          type: 'adult',
          price: 89900,
        },
      ],
      type: ['캐녀닝', 'BBQ'],
      name: '가와산 캐녀닝 투어',
      subName: '리조트픽드랍/한국인가이드 동행',
      plans: [
        {
          time: '04:00-04:30',
          title: '미팅 픽업',
          desc:
            '리조트 로비에서 가이드 미팅 후 가이드 안내에 따라 차량에 탑승합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30883/77545_medium_1525841239.jpg?1525841239',
        },
        {
          time: '06:00-06:30',
          title: '조식_졸리비',
          desc:
            '카카시티 졸리비로 이동하여 아침식사를 진행합니다. 아침식사 비용은 개인적으로 지불하시면 됩니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30883/77546_medium_1525841237.jpg?1525841237',
        },
        {
          time: '06:30-08:30',
          title: '가와산 이동',
          desc: '가와산에 도착해서 캐녀닝 주의사항에 대해 안내를 받습니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88339_medium_1529981149.jpg?1529981149',
        },
        {
          time: '09:00-13:00',
          title: '캐녀닝 투어',
          desc: '캐녀닝 담당 가이드를 따라 캐녀닝 투어를 진행합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30883/77548_medium_1525841235.jpg?1525841235',
        },
        {
          time: '13:30-14:30',
          title: '중식',
          desc:
            '레스토랑으로 이동하여 점심식사를 합니다. 비치리조트 or BBQ리조트에서 진행되며, 상황에 따라 변동될 수 있습니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30883/77549_medium_1525841234.jpg?1525841234',
        },
        {
          time: '14:30-19:00',
          title: '리조트 도착 및 종료',
          desc:
            '- 차량을 타고 리조트로 이동\n- 리조트 드랍 후 행사종료\n( 당일 현장 상황 및 교통흐름에 따라 유동적이며, 호텔 도착시간이 달라 질수 있습니다)',
        },
      ],
    },
  },
  {
    category: 'Activity',
    id: 'activity4',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '호핑투어',
    engName: 'hoping tour',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190185_large_1525774849.jpg?1525774849',
    source: [
      'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190185_large_1525774849.jpg?1525774849',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['호핑', '시푸드BBQ'],
    openTime: '00:00',
    closeTime: '24:00',
    program: {
      plan: [
        {
          type: 'adult',
          price: 78000,
        },
      ],
      type: ['호핑', '시푸드BBQ'],
      name: '피코패스 날루수안&힐루뚱안 와일드호핑+씨푸드BBQ',
      plans: [
        {
          time: '08:00',
          title: '호텔 픽업',
          desc:
            '미팅 후 도크로 이동. 배를 타고 날루수안 섬으로 항해를 시작합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/44756_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:00',
          title: '날루수안섬 근해 도착',
          desc: '바다 상황에 따라 30~50분 정도 소요됩니다',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88338_medium_1529981149.jpg?1529981149',
        },
        {
          time: '10:30',
          title: 'Spot. 1 힐루뚱안 바다',
          desc:
            '수심이 깊고 넓은 바다에서 색다른 스노쿨링에 도전해보세요~ 힐루뚱안 바다는 스노쿨링과 다이빙 명소로 다양한 어종의 물고기들을 만날 수 있답니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88339_medium_1529981149.jpg?1529981149',
        },
        {
          time: '12:30',
          title: '힐루뚱안 섬 입도 점심 식사',
          desc:
            '푸짐한 필리핀식 씨푸드 바비큐를 드시고 날루수안의 푸른 바다에서 자유시간을 즐깁니다. 물놀이를 위해 점심을 든든하게 드세요.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88450_medium_1529981152.jpg?1529981152',
        },
        {
          time: '14:00',
          title: '날루수안 바다로 출발',
          desc: '고고! 날루수안',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88451_medium_1529981153.jpg?1529981153',
        },
        {
          time: '14:30',
          title: 'Spot. 2 날루수안 바다',
          desc: '날루수안에서 스노쿨링을 진행합니다.',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88452_medium_1529981154.jpg?1529981154',
        },
        {
          time: '16:00',
          title: '세부, 막탄섬으로 복귀',
          desc: '',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/13026/88454_medium_1529981333.jpg?1529981333',
        },
      ],
    },
  },
];

const massageList = [
  {
    category: 'Massage',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    id: 'massage1',
    name: '메디핑거',
    engName: 'Medi Finger',
    address: 'A. S. Fortuna St, Mandaue City, 6014 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.338662,
    longitude: 123.929318,
    phone: '+63 32 345 1066',
    baby: false,
    korean: true,
    pickup: false,
    reservations: [],
    preview:
      'https://post-phinf.pstatic.net/MjAxNzEyMjNfNjUg/MDAxNTE0MDIxNTI3MjU4.4marDj6UPMSTaFMNA7p_S3TBRnAJeU6QS9TY8R7W0v8g.HRCijSlJLt1KjI2SOkee7iFEC9VJc8OyygjBaBwwm2Ig.JPEG/image_6643620431514021390314.jpg?type=w1200',
    source: [
      'https://post-phinf.pstatic.net/MjAxNzEyMjNfNjUg/MDAxNTE0MDIxNTI3MjU4.4marDj6UPMSTaFMNA7p_S3TBRnAJeU6QS9TY8R7W0v8g.HRCijSlJLt1KjI2SOkee7iFEC9VJc8OyygjBaBwwm2Ig.JPEG/image_6643620431514021390314.jpg?type=w1200',
      'https://post-phinf.pstatic.net/MjAxNzEyMjNfMTE2/MDAxNTE0MDIxNTMwMjMz.Vceo7XeObGWdrBR5GfGm2itBpINowiKcp4Cwq_smTLog.ihxRGxJfo-FCSFEmeL9PRTjsBW9mC1mqoON0IwhtQdcg.JPEG/image_463064871514021390314.jpg?type=w1200',
      'http://cfile239.uf.daum.net/image/99C7BA3F5A3E1D6D2EA8DB',
      'https://cebuin.com/assets/file/630f76fd32b4c7a1861a006e068ebfe9.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 200,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['전통태국마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '오일 마사지',
        desc: '오일 마사지',
        plans: [
          {
            time: 60,
            price: 350,
          },
          {
            time: 90,
            price: 500,
          },
          {
            time: 120,
            price: 700,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '드라이 마사지',
        desc: '드라이 마사지 + 풋 마사지',
        plans: [
          {
            time: 60,
            price: 350,
          },
          {
            time: 90,
            price: 500,
          },
          {
            time: 120,
            price: 700,
          },
        ],
        src:
          'http://sarakraf.com.my/wp-content/uploads/2014/01/Dry-Massage.jpg',
      },
      {
        name: '경혈지압',
        desc: '경혈지압',
        plans: [
          {
            time: 60,
            price: 350,
          },
          {
            time: 90,
            price: 500,
          },
        ],
        src:
          'http://sarakraf.com.my/wp-content/uploads/2014/01/Dry-Massage.jpg',
      },
      {
        name: '부황',
        desc: '부황',
        plans: [
          {
            time: 60,
            price: 350,
          },
          {
            time: 90,
            price: 500,
          },
        ],
        src:
          'http://mblogthumb3.phinf.naver.net/20140804_18/ddhani14_1407120456074LkT98_JPEG/yay20ebe9e.jpg?type=w2',
      },
    ],
  },
  {
    category: 'Massage',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    id: 'massage2',
    name: '프라나 스파',
    engName: 'Prana Spa',
    address:
      '16th Floor, Tower 2, Crown Regency Hotel & Towers, Osmeña Blvd, Cebu City, 6000 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.308328,
    longitude: 123.8945778,
    phone: '+63 915 790 9414',
    baby: false,
    korean: false,
    pickup: true,
    reservations: [],
    preview:
      'http://2wings.co.kr/xe/files/attach/images/379/3704/482-1a69f94ecfbfd4da96b22f12c387b935.jpg',
    source: [
      'http://2wings.co.kr/xe/files/attach/images/379/3704/482-1a69f94ecfbfd4da96b22f12c387b935.jpg',
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage2.jpeg?alt=media&token=1ad5531f-8db0-4d63-8ac9-8a903a926614',
      'http://2wings.co.kr/xe/files/attach/images/379/3704/faef8ea87db33b04a67f9d9a34a11783.JPG',
      'https://post-phinf.pstatic.net/MjAxNzEyMDJfMTA3/MDAxNTEyMTgxOTAzMTI0.OJiqXAyFe8_S5nG2Gkb_yqyAzoHW5VR61Bw9jro3grQg.a01dVWkQzpeNUnHSL52Z8Q0JBuH6WcFJOGIm0o5RWjQg.JPEG/%EC%84%B8%EB%B6%80%EB%A7%88%EC%82%AC%EC%A7%80_%28202%29.jpg?type=w1200',
    ],
    likes: 20,
    review: 4.5,
    reviewCnt: 234,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['고급마사지'],
    openTime: '09:00',
    closeTime: '24:00',
    menus: [
      {
        name: '아로마 할롯 마사지',
        desc: '아로마 할롯 마사지',
        plans: [
          {
            time: 135,
            price: 2450,
          },
        ],
        src:
          'https://productimages.withfloats.com/tile/5cb4c575b3e57c0001aeebb5.jpg',
      },
      {
        name: '스톤 마사지 + 페이셜',
        desc: '스톤 마사지 + 얼굴 마사지',
        plans: [
          {
            time: 135,
            price: 2900,
          },
        ],
        src: 'http://free-thai.co.kr/images/massage/105/1480041556_1.jpg',
      },
      {
        name: '럭셔리황제스파',
        desc: '럭셔리황제스파',
        plans: [
          {
            time: 150,
            price: 5600,
          },
        ],
        src:
          'http://sarakraf.com.my/wp-content/uploads/2014/01/Dry-Massage.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage3',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    name: '오션 스파',
    engName: 'Ocean Spa',
    address: 'Basak - Agus Road, Lapu-Lapu City, Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.288803377211973,
    longitude: 123.96548129335054,
    phone: '+63 32 494 0011',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://lh3.googleusercontent.com/DL5ouiS3FiiBbBDxAhDzUJNchLNR83LdboFRV13G581MgXUWxCivdPdjVES1nvcCJ05jK23G=w1080-h608-p-no-v0',
    source: [
      'https://lh3.googleusercontent.com/DL5ouiS3FiiBbBDxAhDzUJNchLNR83LdboFRV13G581MgXUWxCivdPdjVES1nvcCJ05jK23G=w1080-h608-p-no-v0',
      'http://mblogthumb2.phinf.naver.net/20160326_61/hm1697_1458999038819nSLMn_JPEG/attachImage_855025216.jpeg?type=w800',
    ],
    likes: 20,
    review: 5,
    reviewCnt: 156,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['전통태국마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '건식 마사지 + 오일 마사지',
        desc: '건식 마사지 + 오일 마사지',
        plans: [
          {
            time: 90,
            price: 400,
          },
          {
            time: 120,
            price: 500,
          },
        ],
        src:
          'http://sarakraf.com.my/wp-content/uploads/2014/01/Dry-Massage.jpg',
      },
      {
        name: '드라이 마사지 + 발 마사지',
        desc: '드라이 마사지 + 발 마사지',
        plans: [
          {
            time: 90,
            price: 400,
          },
          {
            time: 120,
            price: 500,
          },
        ],
        src:
          'http://sarakraf.com.my/wp-content/uploads/2014/01/Dry-Massage.jpg',
      },
      {
        name: '오일 마사지 + 발 마사지',
        desc: '오일 마사지 + 발 마사지',
        plans: [
          {
            time: 90,
            price: 400,
          },
          {
            time: 120,
            price: 500,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '아로마 전신 마사지 + 발 마사지',
        desc: '아로마 전신 마사지 + 발 마사지',
        plans: [
          {
            time: 90,
            price: 400,
          },
          {
            time: 120,
            price: 500,
          },
        ],
        src:
          'https://productimages.withfloats.com/tile/5cb4c575b3e57c0001aeebb5.jpg',
      },
      {
        name: '스톤 마사지 + 발 마사지 + 아로마 마사지',
        desc: '스톤 마사지 + 발 마사지 + 아로마 마사지',
        plans: [
          {
            time: 130,
            price: 1100,
          },
        ],
        src: 'http://free-thai.co.kr/images/massage/105/1480041556_1.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage4',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: '에코 스파',
    engName: 'Eco Spa',
    address: 'Mactan Airport Rd, Lapu-Lapu City, 6015 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.3100954,
    longitude: 123.9995266,
    phone: '+63 956 156 1448',
    baby: true,
    korean: true,
    pickup: true,
    reservations: [],
    preview:
      'https://post-phinf.pstatic.net/MjAxNzA2MTRfMjI2/MDAxNDk3NDQ2Nzc4Mzcz.x0m1Z3FeCanOoMmAjVLPujujLGa5cTxLqtmXy-BS0vAg.WaT_JCdYgCQykMKDYDrQsmlrifL1Djx7rKHeFveZg_0g.JPEG/IMG_3953.jpg?type=w1200',
    source: [
      'https://post-phinf.pstatic.net/MjAxNzA2MTRfMjI2/MDAxNDk3NDQ2Nzc4Mzcz.x0m1Z3FeCanOoMmAjVLPujujLGa5cTxLqtmXy-BS0vAg.WaT_JCdYgCQykMKDYDrQsmlrifL1Djx7rKHeFveZg_0g.JPEG/IMG_3953.jpg?type=w1200',
      'https://cebu365.com/wp-content/uploads/2017/07/eco_spa_1.jpg',
      'https://post-phinf.pstatic.net/MjAxNzA2MTRfMjk5/MDAxNDk3NDQ3Mzg4MTEy.0jKYtSNjdoY05paPnJ_hZbGfFoAYVK8PPhHoaPdEaIUg.g4guLl0SNUTrPFD59NEQT87jqkcpLiiz6PI_uFzgOmcg.JPEG/IMG_4007.jpg?type=w1200',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 270,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['고급마사지'],
    openTime: '09:00',
    closeTime: '23:00',
    menus: [
      {
        name: '오일 마사지',
        desc: '오일 마사지',
        plans: [
          {
            time: 120,
            price: 1700,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '스톤 마사지',
        desc: '스톤 마사지',
        plans: [
          {
            time: 120,
            price: 1700,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '태반 마사지',
        desc: '태반 마사지',
        plans: [
          {
            time: 120,
            price: 1700,
          },
        ],
        src: 'http://free-thai.co.kr/images/massage/105/1480041556_1.jpg',
      },
      {
        name: '허벌 마사지',
        desc: '허벌 마사지',
        plans: [
          {
            time: 120,
            price: 1900,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '포시즌 마사지',
        desc: '포시즌 마사지',
        plans: [
          {
            time: 240,
            price: 2450,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '황제 마사지',
        desc: '황제 마사지',
        plans: [
          {
            time: 250,
            price: 3750,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '아동 마사지',
        desc: '아동 마사지',
        plans: [
          {
            time: 140,
            price: 800,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
    ],
  },
];

const placeList = [
  {
    category: 'Place',
    id: 'place1',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: '아얄라몰',
    engName: 'ayala mall',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.294684,
    longitude: 123.999592,
    phone: '+63 32 239 6546',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D',
    source: ['https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D'],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
        images: [],
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
        images: [],
      },
    ],
    tags: ['쇼핑'],
    openTime: '10:30',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place2',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    name: '산토니뇨 성당',
    engName: 'santoninyo',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.3268902,
    longitude: 123.9327309,
    phone: '+63 32 349 2710',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://media-cdn.tripadvisor.com/media/photo-s/13/83/22/fd/facade-of-the-basilica.jpg',
    source: [
      'https://media-cdn.tripadvisor.com/media/photo-s/13/83/22/fd/facade-of-the-basilica.jpg',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['관광지'],
    openTime: '11:30',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place3',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    name: 'SM몰',
    engName: 'SM mall',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2555956,
    longitude: 123.9328507,
    phone: '+63 32 514 2959',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg',
    source: ['http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg'],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['쇼핑'],
    openTime: '11:00',
    closeTime: '23:00',
  },
  {
    category: 'Place',
    id: 'place4',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '산페드로요새',
    engName: 'san pedro',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'http://cfile232.uf.daum.net/image/2359E44A50FDE55D098D5F',
    source: ['http://cfile232.uf.daum.net/image/2359E44A50FDE55D098D5F'],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['관광지'],
    openTime: '00:00',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place5',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    name: '마젤란의 십자가',
    engName: 'magelan',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    latitude: 10.2902995,
    longitude: 123.9976004,
    phone: '+63 915 746 5595',
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://philsalgi.com/xe/files/attach/images/145/455/045/80f773d471536e9b975bc6db1838ee0e.jpg',
    source: [
      'http://philsalgi.com/xe/files/attach/images/145/455/045/80f773d471536e9b975bc6db1838ee0e.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['관광지'],
    openTime: '00:00',
    closeTime: '24:00',
  },
];

activityList.forEach(e => {
  db.collection('shops')
    .doc(e.id)
    .set(e)
    .then(() => console.log('done'))
    .catch(err => {
      console.log(err);
    });
});
