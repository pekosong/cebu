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

const lists = [
  {
    category: 'Restaurant',
    id: 'restaurant1',
    name: '점보 7',
    engName: 'jumbo7',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food1.jpg?alt=media&token=18bc43f0-1ae4-4a9c-938d-0502bb86dee3',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    tags: ['랍스타', '새우요리'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
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
    name: '부레 레스토랑',
    engName: 'Buffet',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food2.jpeg?alt=media&token=066e24f1-86e4-49fd-8389-736902f71309',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    tags: ['부페', '전통음식'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
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
    name: '란타 코르도바',
    engName: 'Lantaw Cordova',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food3.jpeg?alt=media&token=100c4811-8977-465b-994c-b1227264b913',
    ],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    tags: ['동동', '전통음식'],
    pickup: false,
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
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
    name: '아인 레스토랑',
    engName: 'Ain',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_food4.jpg?alt=media&token=1df930aa-61e9-4a80-90c6-eb5cf443aa0d',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    tags: ['스테이크', '전통음식'],
    pickup: true,
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
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
    category: 'Massage',
    id: 'massage1',
    name: '메디핑거',
    engName: 'Medi Finger',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage1.jpg?alt=media&token=01df0f3f-75f6-4c4d-ab1f-07353fd528aa',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 200,
    tags: ['전통태국마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    menus: [
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '필리핀 전통 마사지',
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '스톤마사지',
        price: '10,000원',
        desc: '스톤을 이용한 마사지',
        src:
          'https://mblogthumb-phinf.pstatic.net/20160308_186/homearoma_1457449152660lfToa_JPEG/39CI6011.JPG?type=w2',
      },
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
      },
      {
        name: '발마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src:
          'http://health.chosun.com/site/data/img_dir/2019/04/18/2019041801309_0.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage2',
    name: '프라나 스파',
    engName: 'Prana Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage2.jpeg?alt=media&token=1ad5531f-8db0-4d63-8ac9-8a903a926614',
    ],
    likes: 20,
    review: 4.5,
    reviewCnt: 234,
    tags: ['전통태국마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    menus: [
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '필리핀 전통 마사지',
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '스톤마사지',
        price: '10,000원',
        desc: '스톤을 이용한 마사지',
        src:
          'https://mblogthumb-phinf.pstatic.net/20160308_186/homearoma_1457449152660lfToa_JPEG/39CI6011.JPG?type=w2',
      },
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
      },
      {
        name: '발마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src:
          'http://health.chosun.com/site/data/img_dir/2019/04/18/2019041801309_0.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage3',
    name: '오션 스파',
    engName: 'Ocean Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage3.jpg?alt=media&token=c0a2c43a-8cb0-457a-9b31-737d1599940e',
    ],
    likes: 20,
    review: 5,
    reviewCnt: 156,
    tags: ['전통태국마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    menus: [
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '필리핀 전통 마사지',
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '스톤마사지',
        price: '10,000원',
        desc: '스톤을 이용한 마사지',
        src:
          'https://mblogthumb-phinf.pstatic.net/20160308_186/homearoma_1457449152660lfToa_JPEG/39CI6011.JPG?type=w2',
      },
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
      },
      {
        name: '발마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src:
          'http://health.chosun.com/site/data/img_dir/2019/04/18/2019041801309_0.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage4',
    name: '에코 스파',
    engName: 'Eco Spa',
    address: '세부 막탄',
    engAddress: 'cebu maktan',
    phone: '010-9141-9090',
    source: [
      'https://firebasestorage.googleapis.com/v0/b/cabu-c030d.appspot.com/o/cebu_massage4.jpg?alt=media&token=5d676307-3d60-426a-9af8-9cea7310462f',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 270,
    tags: ['전통태국마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    reviews: [
      {
        writer: 'peko22@naver.com',
        comment: '너무 좋아요',
        star: 5,
        date: new Date(),
      },
      {
        writer: 'peko2@naver.com',
        comment: '좋긴 한데 서비스가 조금 별로 였어요',
        star: 3,
        date: new Date(),
      },
      {
        writer: 'peko1@naver.com',
        comment: '다음에 꼭 다시 오고 싶어요',
        star: 4,
        date: new Date(),
      },
    ],
    menus: [
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '필리핀 전통 마사지',
        src:
          'https://post-phinf.pstatic.net/MjAxNzA2MzBfMTQ2/MDAxNDk4Nzk4Nzg3MDM4.q5sogz4xcF3U0-FF5gdopfoSuLeyYwFRBeBPA0b_5I4g.D3-_sYBfFrptUQX9ywnUcNzs20GF_NLTYN3_Lmd6IEsg.JPEG/%EC%95%84%EB%A1%9C%EB%A7%88_%EB%A7%88%EC%82%AC%EC%A7%80_%ED%9A%A8%EA%B3%BC1.jpg?type=w1200',
      },
      {
        name: '스톤마사지',
        price: '10,000원',
        desc: '스톤을 이용한 마사지',
        src:
          'https://mblogthumb-phinf.pstatic.net/20160308_186/homearoma_1457449152660lfToa_JPEG/39CI6011.JPG?type=w2',
      },
      {
        name: '전신마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src: 'http://cfile227.uf.daum.net/image/2777364652F46F7D2BE666',
      },
      {
        name: '발마사지',
        price: '10,000원',
        desc: '전신을 마사지',
        src:
          'http://health.chosun.com/site/data/img_dir/2019/04/18/2019041801309_0.jpg',
      },
    ],
  },
];

lists.forEach(e => {
  db.collection('shops')
    .doc(e.id)
    .set(e)
    .then(() => console.log('done'))
    .catch(err => {
      console.log(err);
    });
});
