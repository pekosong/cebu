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
    phone: ['+63 32 239 6546'],
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
    review: 3.7,
    reviewCnt: 37,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment: '비주얼만 좋고 맛은 별로입니다',
        star: 2,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '신선한 해산물요리, 차별화된 정갈한 맛과 그 스케일! 가족하고 도란도란 말도 없이 얌냠쩝쩝 소리만 남았던 맛나고 후회없는 곳이어요^^',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '신선하다써있는데 블랙페퍼새우는 썩은듯하였고, 게 자체도 고른게가 아닌가싶을정도로 쪼그라든 느낌에, 네이버에선 가장싼가격이라는데 다른곳보다 훨씬 비쌌어요',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '세부점보7 식당예약은 카톡아이디 CEBUCALL을 친구추가후 예약가능. 24시간 상담이라서 늦은시간에도 상담.예약이 가능.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment: '음식이 한국인 입맛에 맞고 친절하고 넓고 깨끗해서 좋습니다',
        star: 5,
        date: new Date(),
      },
    ],
    tags: ['랍스타', 'BBQ'],
    openTime: '10:30',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: 800,
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: 1000,
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: 1200,
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보1',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보2',
        price: 1000,
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
    phone: ['+63 32 349 2710'],
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
    review: 4.3,
    reviewCnt: 1474,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '음식 가지수가 많긴하지만 딱히 손가는 음식은 정해져 있어요. 그래도 메뉴 고민 없이 부담 없는 가격에 맥주까지 무한으로 마실 수 있어 가성비는 괜찮습니다. 외국손님보다 현지인들이 많이 옵니다. 생일인분은 3+1 무료 적용해줘서 더욱 맘에 들었습니다. (그래서 생일 파티 노래를 많이 부름)\n저녁시간 금요일 저녁부터 주말까지는 대기해야 할 수있으니 조금 일찍 가시는걸 권해드립니다.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '세월이 흐르면 점점 더 좋아져야 하는데 갈수록더 나빠지는 이유가 뭘까?\n초밥도 예전에 비하면 퀄리티가 떨어지고\n초밥의 밥 양도 너무 많고\n연어회 조금씩 나오고 떨어지면 리필 시간 한참 걸리고 생과일 쥬스는 왜 애기해야만 주는지?\n냉장고 안에 숨겨 보관해서 주는 이유는 뭐지?\n유일하게 스테이크만 맛나고 나머진 전부 별로임.\n몇바퀴을 돌아 다녀도 한 접시을 채우지 못하네.\n\n가장 큰 문제는 파리~~~~~~\n식당에 흐름한 로컬 식당도 아니고\n파리가 너무 많이 돌아다닌다.\n식당은 첫째도 청결,둘째도 청결이다.\n제발 청결에 신경쓰길 바란다.',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '현지의 초대형뷔페로 다양한 음식을 즐길 수 있을거라 예상했으나, 음식 로테이션이 너무 안되고 전체적으로 퀄리티가 떨어짐. 초밥,회류는 절대 패스(초밥,회가 맛이없는지 사람이 엄청 많은데도 1시간동안 거의 그대로). 육류가 그나마 먹을만하고..(구워서 나눠주느 스테이크) 현지인들도 먹을만한게 없는걸 아는지 만만한 새우(삶은것)를 집중적으로 공략함. 새우가 한번 나오면(30~40미) 2~5초만에 매진됨. 다시 나올때까지는 대략5~8분내외. 사실 이 뷔페가격이면 다른 식당 2곳을 공략하는게 나을 것임.',
        star: 2,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '그리고 해산물은 거의 없다고 보시면되구요\n살아있는 새우를 익혀주는건 좋았어요\n초밥은 정말 별로 입니다\n인당 이만원정도 하는데 우리나라에서 이만원여도 안갈만한 곳이에요\n스테이크 코너가있었는데 너무너무 즐겨서 먹을수가 없어서 세조각 남겼는데 다 안먹으면 사람당 12000원씩 내야한다해서 질겨서 목구멍에 넘어가지도 않는거 꾸역꾸역 먹고왔어요ㅠ',
        star: 2,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '넓고 쾌적하고 음식도 많고 좋아요!!! 근데 주말말고 평알에 가는것이 좋습미다... 존나 매너없는 새끼들 개많음... 음식 새로나온거 뒤에 사람들이 기다리고 있든 말든 접시째로 들고가서 처먹는 미친놈들 많음... ㅋㅋㅋㅋㅋ 음식도 다 먹지도 못하면서 산을 쌓아 가서 다 남김... 우리나라처럼 환경부담금을 안받으니까 그냥 안먹어도 반을 퍼감ㅋㅋㅋ 음식 잘 사수 하시길...',
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
        price: 800,
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: 1000,
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: 1200,
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보1',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보2',
        price: 1000,
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
    address: 'Cordova, Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.2555956,
    longitude: 123.9328507,
    phone: ['+63 32 514 2959'],
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
    reviewCnt: 205,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '세부 란타우 수상 레스토랑.\n세부를 갔다온 여행객들이 꼭 한번씩 들른다는 그곳.\n세부에 도착한 첫날 날씨가 너무좋아서 저녁식사하러 방문 오후 4시 반쯤 도착.\n미리 예약은 해놓지 않고 방문. 레스토랑 입구에서 예약자 인지 물어본 후 예약없이 방문이라고 하니 일행이 몇명이냐고 물어본 뒤 테이블로 안내해줌.\n바로 바다 옆은 아니지만 넓다라니 편한 쇼파가 있는 테이블 배정 인원이 6명인데도 편히 앉을 수 있는 좌석 이었음.\n해가 지려고 하는 때라 더위는 그다지 강하지 않았고 바람이 부니 선선하니 괜찮음.\n음식 값은 현지물가로는 쎈편이지만 한화로하면 부담없이 즐길만한 가격임.\n음식 주문하면 시간은 좀 걸림 느긋하게 석양을 배경으로 사진찍고 있으면 음식이 나옴 전체적으로 음식은 맛있는 편임. 양이 많은 편이 아니라서 인원수에 맞게 넉넉히 주문이 필요함. 갈릭 볶음밥은 예술 겁나 맛남 양도 많음.\n추가 주문은 다른테이블이 주문한 순서 뒤로 나오기 때문에 음료나 주류를 제외한 주문은 한번에 미리 하는게 좋음.\n세부 첫날 저녁으로 상당히 만족했음.\n참고로 해산물 종류는 선택하지 않았음\n바비큐, 간바스, 새우구이, 돼지 뱃살구이등 의 종류로 주문함',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '5시전에 가서 여유롭게 일몰보고 식사하는게 좋은 것 같아요. 택시도 미리 예약해서 식사 후 바로 탈 수 있게 준비하세요!',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '멋진 석양을 볼 수 있는 식당입니다.\n섬 끄트머리에 자리 잡고 있어, 대부분 숙소와의 거리가 있긴 하지만 여행중에 꼭 들러보세요~\n바로 옆에는 백만송이 장미 (LED) 도 있으니 가볍게 들러보세요.\n(입장료가 소액 있어요)',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '뷰가 좋아요. 네다섯시 경 방문하면 일몰과 선선한 가운데 식사할 수 있습니다.\n싸진 않아요.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '생각보다 음식의 맛이나 퀄리티는 떨어지는 곳, 일몰 명소라고해서 찾아갔네요. 뭐 맛에 대한 기대를 하시는 분들은 다시한번 고민해 보시기 바랍니다.\n그리고 낮에 방문하면 생각보다 풍경이 보기 안좋습니다. 해안가로 떠내려온 쓰레기들에 어떤 악취가 올라오기도 하고요. 현지인들 입맛에는 잘 맞는 가게 일지 몰라도 한국사람들 입맛에는...글쎄요..',
        star: 3,
        date: new Date(),
      },
    ],
    tags: ['퓨전', '해산물'],
    openTime: '11:00',
    closeTime: '23:00',
    menus: [
      {
        name: 'Garlic Buttered Prawns',
        price: 290,
        desc: '',
        src: '',
      },
      {
        name: 'Garlic Shrimps',
        price: 110,
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src: '',
      },
      {
        name: 'Bakasi',
        price: 130,
        desc: '',
        src: '',
      },
      {
        name: 'Tuna belly',
        price: 100,
        desc: '',
        src: '',
      },
      {
        name: 'Squid Adobo',
        price: 100,
        desc: '',
        src: '',
      },
      {
        name: 'Garlic Buttered Crab',
        price: 100,
        desc: 'Garlic Buttered Crab (Small)',
        src: '',
      },
      {
        name: 'Garlic Buttered Crab',
        price: 100,
        desc: 'Garlic Buttered Crab (Medium)',
        src: '',
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
    phone: ['+63 915 746 5595'],
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
    review: 3.8,
    reviewCnt: 31,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '사기조심하세요( 고쳐진 영수증)\n1. 예약하고 픽업 기다렸으나 15분 늦고 미안하단 말한마디없이 `기사가 안와서 내가왔어`반말 \n2. 안심 싫어해 등심 시켰더니 표정 장난아니고 추가메뉴 강조\n3. 스테이크 괜찮았으나 스파게티 별로. 모닝글로리 볶음은 달음\n4. 계산서 보니 이상해서 점원부르고 확인 요청하자 사장님 등장.\n실수할수 있으니 사과하러 온줄 알았으나 어디로 가냐고 묻길래 장소 얘기했더니 거기는 못간다고 하고 감\n\n☆☆☆결국 일부러 돈을 높게 받았다는 얘기. 직원들만 나와 사과함 .\n\n손님들 있는데 직원들에게 야야 하며 날카롭게 부르고 사과는 커녕 반말 \n\n구지 가신다면 영수증 꼭 확인하시고 픽업 드랍 다 확인 미리하세요\n\n사기조심하세요( 고쳐진 영수증)\n가신다면 영수증 꼭 확인하시고 픽업 드랍 다 확인 미리하세요 잘못에 대한 사과 없음 \n',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '리뷰 솔직하게 좀 올리세요\n등심은 질기고 질도 떠러지고 양도 적고 맛있다고 왔는데 감바스도 x같고 새우 7개가 다임 갈릭라이스는 맛있다는 리뷰는 광고여 진심시여 내입이 이상한건가 여기가지마시구요 카바나 레스토랑가세요 시그니처 스테이크 천이백정도하는데 양도 많고 맛있습니다 주위 배경도 좋고 이안레스토랑 정말 짜증난다',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '안심 스테이크 괜찮아요 등심은 질겨요 갈릭밥이 다른집보다는 맛나요 다른 메뉴들은 다녀본 근처 맛집과 비슷비슷해요 사장님이 너무 친절하세요 여행에 지칠때 가실만해요',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '가격이 비싸다.\n양이 적다.\n맛도 음...\n주인의 표정관리가 시급하다',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment: '맛있어요 스테이크 감바스 마늘밥  소주에 깔라만시도 최고~!!!',
        star: 5,
        date: new Date(),
      },
    ],
    tags: ['스테이크', '전통음식'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '크리스피파타',
        price: 800,
        desc:
          '족발튀김, 마늘, 생상, 후추 등으로 양녕한 족발을 통째로 기름에 튀긴 음식',
        src: 'https://t1.daumcdn.net/cfile/tistory/265A443952F13BAE09',
      },
      {
        name: '레촌',
        price: 1000,
        desc: '새끼돼지를 통째로 숯불에 구운 바비큐',
        src:
          'http://www.timely.co.kr/files/attach/images/539/552/9a6dc1f9489e456c4f27f4fe4811073c.jpg',
      },
      {
        name: '카레카레',
        price: 1200,
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://www.itsmorefuninthephilippines.co.kr/img/thephilippines/kare-kare-img.jpg',
      },
      {
        name: '아도보',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보1',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
      {
        name: '아도보2',
        price: 1000,
        desc: '조림한 요리를 뜻하며 육류, 해산물, 채소 등 다양한 재료로 만든다',
        src: 'http://cfile206.uf.daum.net/image/23397F4B53587E7E0439C9',
      },
    ],
  },
];

const foodList = [
  {
    category: 'Food', // 고정
    id: 'food1', // food1 ~ 2,3,4,5,6,7
    image: 'https://randomuser.me/api/portraits/women/5.jpg', // 5.jpg 번호만 수정 6.7,8,9,9,
    kakao: 'kimttoksun', // 카카오톡 아이디
    name: '김떡순', // 가게 이름
    engName: 'Kimttoksun', // 가게 영어 이름
    address: 'Pajac-Maribago Rd, Maribago, Lapu-Lapu City, Cebu, 필리핀', // 가게 주소
    engAddress: 'Pajac-Maribago Rd, Maribago, Lapu-Lapu City, Cebu, 필리핀', // 가게 영어주소
    latitude: 10.2842398, // 위도
    longitude: 123.9928995, // 경도
    phone: ['+63 32 316 3415'],
    baby: true,
    korean: true,
    pickup: false,
    reservations: [],
    preview:
      'http://cebubook.com/mallimg/2016/11/06/1478440020-8481_N_210x170_100_2.jpg', // 구글 검색 이미지
    source: [
      'https://postfiles.pstatic.net/MjAxODEyMDVfMjky/MDAxNTQ0MDAwODgwMjIx.wQPDr6aZSUyHVotQHpqk64FQUgKhIcKEXGpszRRN1Tkg.JjcIEEU-GSPDXWd-EngY9-wvsjvu32KG0lXx3eDCGM0g.JPEG.jjajajang/IMG_6505.jpg?type=w966',
      'https://blogfiles.pstatic.net/MjAxODEyMDVfMjQ1/MDAxNTQ0MDAwODgwMTAy.tuxUL0RMoy35fSXgWPWuet_RlM5vW4UNRNljvgGJSWkg.mVi03kpW2_ko8ouquti_rAsMRKFC95cXY9WXSBPJW8Ag.JPEG.jjajajang/IMG_6507.jpg',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MzBfMjc3/MDAxNTMwMzMxNDQ3OTk0.uZugAvGm6M1LxG4rBnV57Xm9p_-1oxYr37upl2_Rf9Qg.tE_e5LoEqpqiKNOH4kdIP7f2rZuhjx0J8wq4WP0xkhMg.JPEG.say9811011/image_7610330001530331403840.jpg?type=w800',
      'https://thumb-wishbeen.akamaized.net/2jhkLW7U6-Wzl41IfiPx38Bup4o=/898x420/smart/filters:no_upscale()/img-wishbeen.akamaized.net/spot/1411611420186_%E3%84%B1%E3%84%B7%E3%85%85.jpg',
    ], // 구글 검색 이미지, 메뉴판 이미지
    likes: 20, // 노터치
    review: 3.5, // 노터치
    reviewCnt: 1212, // 노터치
    reviews: [
      // 노터치
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
    googles: [], // 노터치
    tags: ['떡볶이', '한식'], // 적당히 족발 보쌈
    openTime: '10:00', // 구글 검색
    closeTime: '22:00', // 구글 검색
    menus: [
      {
        name: '김밥',
        price: 140,
        desc: '',
        src:
          'http://blogfiles.naver.net/20160223_38/imrachell_1456206509293a13Us_JPEG/KakaoTalk_20160223_134117085.jpg',
      },
      {
        name: '참치김밥',
        price: 170,
        desc: '',
        src: '',
      },
      {
        name: '떡볶이',
        price: 230,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxNzA3MzFfMjE1/MDAxNTAxNTA1OTI1Mzc4.JBTfoZbXNFOODySo5JS8eFe8ahC-0ctkhDDJv9mkObQg.P6SswTImuQtDU0Ve2newVn_0aYRby43JCvQaPWqWu3Ag.JPEG.realbarbie77/DSCN7429-1.jpg',
      },
      {
        name: '크림소스 떡볶이',
        price: 250,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxNzA3MzFfMjE1/MDAxNTAxNTA1OTI1Mzc4.JBTfoZbXNFOODySo5JS8eFe8ahC-0ctkhDDJv9mkObQg.P6SswTImuQtDU0Ve2newVn_0aYRby43JCvQaPWqWu3Ag.JPEG.realbarbie77/DSCN7429-1.jpg',
      },
      {
        name: '라볶이',
        price: 280,
        desc: '',
        src: '',
      },
      {
        name: '오징어튀김 떡볶이',
        price: 500,
        desc: '',
        src: '',
      },
      {
        name: '순대',
        price: 250,
        desc: '',
        src: '',
      },
      {
        name: '수제모듬튀김',
        price: 300,
        desc: '',
        src: '',
      },
      {
        name: '수제돈가스',
        price: 330,
        desc: '',
        src: '',
      },
      {
        name: '수제군만두',
        price: 250,
        desc: '',
        src: '',
      },
      {
        name: '라면',
        price: 130,
        desc: '',
        src:
          'http://mblogthumb3.phinf.naver.net/MjAxNzA2MzBfOTEg/MDAxNDk4Nzg3ODk1MjE3.UplMXAByI-xNdnhLsJ4ytm2Q7NSUrmymu_NcLmK39qgg.3-ZpXbLCmhDrMMOochfBR8nUTvD9GGHEe-jgpgHYW24g.JPEG.bearhong/20170630_071225.jpg?type=w800',
      },
      {
        name: '짜파게티',
        price: 150,
        desc: '',
        src: '',
      },
      {
        name: '냉모밀 정식',
        price: 330,
        desc: '',
        src: '',
      },
      {
        name: '쫄면',
        price: 250,
        desc: '',
        src: '',
      },
      {
        name: '불고기덮밥',
        price: 300,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwcrCUI_OGS6kGQnxV_9w1b2Yi_HkoGXcG3mqR0a72nycS9IN&s',
      },
      {
        name: '제육덮밥',
        price: 280,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwcrCUI_OGS6kGQnxV_9w1b2Yi_HkoGXcG3mqR0a72nycS9IN&s',
      },
      {
        name: '김치볶음밥',
        price: 250,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwcrCUI_OGS6kGQnxV_9w1b2Yi_HkoGXcG3mqR0a72nycS9IN&s',
      },
      {
        name: '오므라이스',
        price: 280,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwcrCUI_OGS6kGQnxV_9w1b2Yi_HkoGXcG3mqR0a72nycS9IN&s',
      },
      {
        name: '비빔밥',
        price: 300,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwcrCUI_OGS6kGQnxV_9w1b2Yi_HkoGXcG3mqR0a72nycS9IN&s',
      },
      {
        name: '김치찌개',
        price: 300,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxODA2MzBfMjA4/MDAxNTMwMzMxNzEwODUw.zamEXEgM61I3Re9E2v0sqm-I9VFqvD5oHFLstwFd0A8g.Xa3M_K4CAsMyTvcK4bNPWN1B9spODNrpWERn90xCVqMg.JPEG.say9811011/IMG_9766.JPG',
      },
      {
        name: '된장찌개',
        price: 300,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxODA2MzBfMjA4/MDAxNTMwMzMxNzEwODUw.zamEXEgM61I3Re9E2v0sqm-I9VFqvD5oHFLstwFd0A8g.Xa3M_K4CAsMyTvcK4bNPWN1B9spODNrpWERn90xCVqMg.JPEG.say9811011/IMG_9766.JPG',
      },
      {
        name: '순두부찌개',
        price: 300,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxODA2MzBfMjA4/MDAxNTMwMzMxNzEwODUw.zamEXEgM61I3Re9E2v0sqm-I9VFqvD5oHFLstwFd0A8g.Xa3M_K4CAsMyTvcK4bNPWN1B9spODNrpWERn90xCVqMg.JPEG.say9811011/IMG_9766.JPG',
      },
      {
        name: '오뎅탕',
        price: 250,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxODA2MzBfMjA4/MDAxNTMwMzMxNzEwODUw.zamEXEgM61I3Re9E2v0sqm-I9VFqvD5oHFLstwFd0A8g.Xa3M_K4CAsMyTvcK4bNPWN1B9spODNrpWERn90xCVqMg.JPEG.say9811011/IMG_9766.JPG',
      },
      {
        name: '쇠고기야채죽',
        price: 280,
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxNzAyMjNfMTc5/MDAxNDg3NzgwMDg0MDg3.Jup-3bUy1YebCzL0n-CK6hsMDPLEPL3dSt7DtT_RU7Ug.QZRBcvwJ3abdnjhBMRRcMAFR9QRHeASkQDsQ-UVTnkYg.JPEG.zzu0e/20.jpg',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food2',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
    kakao: 'mactanchosun',
    name: '조선치킨 막탄점',
    engName: 'Chosun Chicken',
    address:
      'M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀',
    engAddress:
      'M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀',
    latitude: 10.2878249,
    longitude: 123.9945678,
    phone: ['+63 32 268 7756'],
    baby: true,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://cebubook.com/mallimg/2016/08/09/1470712430-5181_N_850x500_100_2.jpg',
    source: [
      'http://blogfiles.naver.net/MjAxOTA3MDVfMzgg/MDAxNTYyMzI3NTUxMDg3.RWAp6VkZDasmF0xLZ5st-eQp3raIaqXyXNzARA9rWEAg.ACuP_hmFe1jCdN6kWZhO8uC156D5-mFu2uHZZarR9Gcg.JPEG.kissing_me/1562324763299.jpg',
      'http://www.chosunchicken.co.kr/app/dubu_slideshow/docs/slideshow_1491894756594/imgs/14918947975894_IMG_7799.JPG',
      'http://cebubook.com/mallimg/2016/08/09/1470712430-2800_N_850x500_100_2.jpg',
      'http://cebu-daytrips.com/xe/files/attach/images/198/009/005/9382aeca16f58a5792d002b16ef68457.jpg',
      'https://t1.daumcdn.net/cfile/tistory/99F91B4A5C2F2FC41A',
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
    googles: [], // 노터치
    tags: ['치킨', '한식'],
    openTime: '10:00',
    closeTime: '4:00',
    menus: [
      {
        name: '조선(간장)치킨',
        price: '600',
        desc: '',
        src:
          'https://cebuin.com/assets/file/67b456d3fdb4038aa95eae45a7ada2f5.jpg',
      },
      {
        name: '후라이드치킨',
        price: 600,
        desc: '',
        src: 'https://t1.daumcdn.net/cfile/tistory/99F91B4A5C2F2FC41A',
      },
      {
        name: '양념치킨',
        price: 600,
        desc: '',
        src: 'https://t1.daumcdn.net/cfile/tistory/99F91B4A5C2F2FC41A',
      },
      {
        name: '고추치킨',
        price: 600,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzT_RfQc9JhjRcFskg9y93ipSbcSjLguLRxGx6Bhv1mDHBCfCwaw&s',
      },
      {
        name: '스페셜치킨',
        price: 650,
        desc: '',
        src: 'https://t1.daumcdn.net/cfile/tistory/99F91B4A5C2F2FC41A',
      },
      {
        name: '찜닭',
        price: 700,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mrC-JqJYrNhw25MYalM-4QBQ65SAN_nd2ITfwmHYF-tiAbLkDg&s',
      },
      {
        name: '닭볶음탕',
        price: 800,
        desc: '',
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mrC-JqJYrNhw25MYalM-4QBQ65SAN_nd2ITfwmHYF-tiAbLkDg&s',
      },
      {
        name: '족발',
        price: 800,
        desc:
          '소 꼬리를 삶아서 땅콩 또는 땅콩 버터, 양파, 마늘로 맛을 낸 스튜 요리',
        src:
          'https://scontent-frt3-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/79359227_172024710577231_3620922834134606681_n.jpg?_nc_ht=scontent-frt3-2.cdninstagram.com&_nc_cat=107&_nc_ohc=Sm0n1MDW2xsAX-LskCV&oh=4d9ca28f795767326035ccb5a6a94839&oe=5E723DE5&ig_cache_key=MjE5NjkyNzM3NDkzMDc0NDM4NQ%3D%3D.2',
      },
      {
        name: '보쌈',
        price: 700,
        desc: '',
        src: 'http://img.mediapen.com/news/201401/14209_1052_4321.jpg',
      },
      {
        name: '불고기덮밥',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '오삼불고기',
        price: 450,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '제육덮밥',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '오징어덮밥',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '김치볶음밥',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '돈까스',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '김치찌개',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '골뱅이무침',
        price: 500,
        desc: '',
        src: 'https://i.ytimg.com/vi/jkhDddK2JVw/maxresdefault.jpg',
      },
      {
        name: '닭똥집튀김',
        price: 350,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '헝가리안 소세지',
        price: 400,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '소세지 야채볶음',
        price: 400,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '오뎅탕',
        price: 400,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '계란말이',
        price: 250,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '떡볶이',
        price: '300',
        desc: '',
        src: 'http://image.auction.co.kr/itemimage/14/7c/9f/147c9f0e83.jpg',
      },
      {
        name: '김밥',
        price: 150,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
      {
        name: '라면',
        price: 120,
        desc: '',
        src: 'https://file.philgo.com/data/upload/8/1825168',
      },
    ],
  },
  {
    category: 'Food',
    id: 'food3',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
    kakao: 'therockpc',
    name: '더락 PC토랑',
    engName: 'The Rock Restaurant',
    address:
      '6015 M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀',
    engAddress:
      '6015 M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀',
    latitude: 10.29033,
    longitude: 123.998048,
    phone: ['+63 977 121 7329'],
    baby: false,
    korean: true,
    pickup: false,
    reservations: [],
    preview:
      'http://mblogthumb2.phinf.naver.net/MjAxNjExMThfMjU3/MDAxNDc5NDY1NDQ0ODcy.CZwypJx2gyXpOVkuOz-Gb4X2cmdH7Xzzrn4nQUON2HEg.CGUAB9hLtImryq7och3bfZ5M_ysEy_U_BOaxdMlG92Qg.JPEG.dr_nockyoung/20161118_163354.jpg?type=w2',
    source: [
      'https://postfiles.pstatic.net/MjAxOTA3MTZfMjcx/MDAxNTYzMjg4NjA5NTUw.FRtyJEMN9R7xeQlJxg7iVkS05rOu4OHZUfj0QSxjoy8g.L0D659NtQg1UA0QMRyZOJnzLKalBPws7rRMlv23QH0Yg.JPEG.ddalkijy/SE-4059b609-7109-4dff-bfee-44375d8d2f5a.jpg?type=w966',
      'http://blogfiles.naver.net/MjAxOTExMTRfODMg/MDAxNTczNzQwNTEzOTkz.-CsrhmRYIE_JHRxpLHjd1pQ1H9IKVM3Q976RhiaJG0Ag.Sdy0IL3a3EeZJ_EM9M1Z0Ei36wi3lzqlOb8zsMffHiYg.JPEG.jknodaji/1573740512679.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNut8yZMJD4CaKWKoiW9PqpiRstQR8V36fX-4Yo73cCIv7BLg&s',
      'http://blogfiles.naver.net/MjAxODEyMDlfMzAw/MDAxNTQ0MzM3MzU3NzU0.sFSNVWIGzdG0_oVFlpkqELDALCdcjaD6xiik7mIWGSYg.fXHmqW32aAD8FpQhJvqoNNRflnDDAYt60Z-brwgLMyQg.JPEG.urusaking/20180825_190554.jpg',
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
    googles: [], // 노터치
    tags: ['도시락', '한식'],
    openTime: '10:00',
    closeTime: '20:00',
    menus: [
      {
        name: '불고기도시락',
        price: '350',
        desc: '',
        src: '',
      },
      {
        name: '제육도시락',
        price: '300',
        desc: '',
        src:
          'https://postfiles.pstatic.net/MjAxOTA3MTZfMTk3/MDAxNTYzMjg4OTU2MjEx.svO07bqthmAyAlQ9gSHratx1BCn2aVNZ8R8NgUiN0Qkg.0mvjmjv_8FHpAlumI3o8_snGZBAN51lHfbSNVyLwIIIg.JPEG.ddalkijy/SE-16ae220b-2966-4f2e-bcfd-63a35e3c3b13.jpg?type=w966',
      },
      {
        name: '돈까스도시락',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '된장찌개',
        price: '250',
        desc: '',
        src: '',
      },
      {
        name: '돼지김치찌개',
        price: '250',
        desc: '',
        src: '',
      },
      {
        name: '순두부찌개',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '뚝배기불고기',
        price: '350',
        desc: '',
        src: '',
      },
      {
        name: '북어국',
        price: '350',
        desc: '',
        src:
          'http://blogfiles.naver.net/MjAxNjExMjlfMjAy/MDAxNDgwMzk4MjA5MDAx.tsWL8mxDAxsGgNA1Gu11BI2LJRYHAFidT5utsNun7N4g._yKIor6hMx6-PT5Shp8R3Jh3IR2qQ7ZjMhskgfqA3Xcg.JPEG.cebutourgayou/%BA%CF%BE%EE%C8%AE%B4%EB.jpg',
      },
      {
        name: '짬뽕수제비',
        price: '350',
        desc: '',
        src: '',
      },
      {
        name: '더락볶음밥',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '비빔밥',
        price: '250',
        desc: '',
        src: '',
      },
      {
        name: '오므라이스',
        price: '250',
        desc: '',
        src: '',
      },
      {
        name: '일본돈까스',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '쭈삼불고기덮밥',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '김밥',
        price: '120',
        desc: '',
        src: '',
      },
      {
        name: '모듬떡볶이',
        price: '300',
        desc: '',
        src: '',
      },
      {
        name: '햄버거 세트',
        price: '200',
        desc: '',
        src: '',
      },
      {
        name: '토스트 세트',
        price: '150',
        desc: '',
        src: '',
      },
      {
        name: '아동용 무국',
        price: '50',
        desc: '',
        src: '',
      },
      {
        name: '주먹밥',
        price: '150',
        desc: '',
        src: '',
      },
      {
        name: '족발 세트',
        price: '1000',
        desc: '',
        src: '',
      },
      {
        name: '보쌈 세트',
        price: '1000',
        desc: '',
        src: '',
      },
      {
        name: '제육볶음 세트',
        price: '1000',
        desc: '',
        src: '',
      },
      {
        name: '돈까스 세트',
        price: '1000',
        desc: '',
        src: '',
      },
      {
        name: '두부김치 세트',
        price: '800',
        desc: '',
        src: '',
      },
      {
        name: '닭발 세트',
        price: '1000',
        desc: '',
        src: '',
      },
      {
        name: '망고쉐이크',
        price: '120',
        desc: '',
        src: '',
      },
      {
        name: '수박쉐이크',
        price: '120',
        desc: '',
        src: '',
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
    phone: ['+63 915 746 5595'],
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
    reviews: [],
    googles: [],
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
    phone: ['+63 915 746 5595'],
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
    reviews: [],
    googles: [],
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
    phone: ['+63 00 000 0000'],
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
    reviews: [],
    googles: [],
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
      detail: {
        title:
          '국내에서 체험할 수 없는 특별한 세부여행의 묘미, 세부에서 다양한 체험을 통해 많은 추억 쌓아가세요!',
        subTitle:
          '세부 인기 투어인 캐녀닝 투어를 한 번에 즐겨보세요! 만족도 최고로 모십니다 ^^',
        images: [
          {
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194554_large_1525768661.jpg?1525768661',
          },
          {
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194555_large_1525768660.jpg?1525768660',
          },
          {
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194556_large_1525768659.jpg?1525768659',
          },
        ],
      },
      include: [
        {
          name: '픽업',
          content: '호텔 픽업',
        },
        {
          name: '식사',
          content: '중식, 간식',
        },
        {
          name: '장비',
          content: '캐녀닝 투어 장비 일체',
        },
        {
          name: '기타',
          content: '사진 촬영, 수건',
        },
      ],
      notInclude: [
        {
          name: '식사',
          content: '조식(졸리비)',
        },
        {
          name: '경비',
          content: '개인경비',
        },
        {
          name: '복장',
          content: '수영복/래쉬가드',
        },
        {
          name: '기타',
          content: '갈아입을 옷',
        },
      ],
      refund: [
        {
          period: '20일 이전',
          content: 0,
        },
        {
          period: '10일 ~ 19일 이전',
          content: 5,
        },
        {
          period: '8일 ~ 9일 이전',
          content: 10,
        },
        {
          period: '1일 ~ 7일 이전',
          content: 20,
        },
        {
          period: '당일',
          content: 50,
        },
      ],
      cautions: [
        '한국인 가이드가 동행합니다.',
        '11세 미만 어린이는 투어에 참여할 수 없습니다',
        '캐리어는 차량에 보관 가능합니다.\n단, 중요물품은 분실시 책임지지 않으므로 잘 간수하여 주시길 바랍니다.',
        '캐녀닝 투어는 바디안 코스로 진행됩니다.',
        '호텔조식이 포함되어 있으신 분들은 호텔에 미리 조식 테이크아웃을 신청하시면 픽업시간에 간단한 도시락을 받을 수 있으니 확인하시기 바랍니다.',
        '탈의실은 별도 없으므로 화장실에서 환복하셔야합니다.',
        '행사 종료 후 간단한 샤워 가능합니다.',
        '차량 정체 등의 사유로 도착시간이 유동적이므로 개인적으로 저녁일정을 잡지 않으시길 권해드립니다.',
        '개인 부주의로 인한 부상 시 여행자 보험을 통해 처리되며 현지 치료에 따른 영수증을 챙겨오시길 바랍니다.',
        '여행자 보험은 개별적으로 반드시 가입하여 주시길 바랍니다.',
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
    phone: ['+63 32 349 2710'],
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
    reviews: [],
    googles: [],
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
      detail: [],
      include: [
        {
          name: '픽업',
          content: '호텔 픽업',
        },
        {
          name: '식사',
          content: '중식, 간식',
        },
        {
          name: '장비',
          content: '캐녀닝 투어 장비 일체',
        },
        {
          name: '기타',
          content: '사진 촬영, 수건',
        },
      ],
      notInclude: [
        {
          name: '식사',
          content: '조식(졸리비)',
        },
        {
          name: '경비',
          content: '개인경비',
        },
        {
          name: '복장',
          content: '수영복/래쉬가드',
        },
        {
          name: '기타',
          content: '갈아입을 옷',
        },
      ],
      refund: [
        {
          period: '20일 이전',
          content: 0,
        },
        {
          period: '10일 ~ 19일 이전',
          content: 5,
        },
        {
          period: '8일 ~ 9일 이전',
          content: 10,
        },
        {
          period: '1일 ~ 7일 이전',
          content: 20,
        },
        {
          period: '당일',
          content: 50,
        },
      ],
      cautions: [
        '한국인 가이드가 동행합니다.',
        '11세 미만 어린이는 투어에 참여할 수 없습니다',
        '캐리어는 차량에 보관 가능합니다.\n단, 중요물품은 분실시 책임지지 않으므로 잘 간수하여 주시길 바랍니다.',
        '캐녀닝 투어는 바디안 코스로 진행됩니다.',
        '호텔조식이 포함되어 있으신 분들은 호텔에 미리 조식 테이크아웃을 신청하시면 픽업시간에 간단한 도시락을 받을 수 있으니 확인하시기 바랍니다.',
        '탈의실은 별도 없으므로 화장실에서 환복하셔야합니다.',
        '행사 종료 후 간단한 샤워 가능합니다.',
        '차량 정체 등의 사유로 도착시간이 유동적이므로 개인적으로 저녁일정을 잡지 않으시길 권해드립니다.',
        '개인 부주의로 인한 부상 시 여행자 보험을 통해 처리되며 현지 치료에 따른 영수증을 챙겨오시길 바랍니다.',
        '여행자 보험은 개별적으로 반드시 가입하여 주시길 바랍니다.',
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
    phone: ['+63 32 514 2959'],
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
    reviews: [],
    googles: [],
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
      detail: {
        title:
          '국내에서 체험할 수 없는 특별한 세부여행의 묘미, 세부에서 다양한 체험을 통해 많은 추억 쌓아가세요!',
        subTitle:
          '[한국인 가이드 동행] 세부 인기 투어인 캐녀닝 투어를 한 번에 즐겨보세요! 만족도 최고로 모십니다 ^^',
        images: [
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194554_large_1525768661.jpg?1525768661',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194555_large_1525768660.jpg?1525768660',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30883/194556_large_1525768659.jpg?1525768659',
          },
        ],
      },
      include: [
        {
          name: '픽업',
          content: '호텔 픽업',
        },
        {
          name: '식사',
          content: '중식, 간식',
        },
        {
          name: '장비',
          content: '캐녀닝 투어 장비 일체',
        },
        {
          name: '기타',
          content: '사진 촬영, 수건',
        },
      ],
      notInclude: [
        {
          name: '식사',
          content: '조식(졸리비)',
        },
        {
          name: '경비',
          content: '개인경비',
        },
        {
          name: '복장',
          content: '수영복/래쉬가드',
        },
        {
          name: '기타',
          content: '갈아입을 옷',
        },
      ],
      refund: [
        {
          period: '20일 이전',
          content: 0,
        },
        {
          period: '10일 ~ 19일 이전',
          content: 5,
        },
        {
          period: '8일 ~ 9일 이전',
          content: 10,
        },
        {
          period: '1일 ~ 7일 이전',
          content: 20,
        },
        {
          period: '당일',
          content: 50,
        },
      ],
      cautions: [
        '한국인 가이드가 동행합니다.',
        '11세 미만 어린이는 투어에 참여할 수 없습니다',
        '캐리어는 차량에 보관 가능합니다.\n단, 중요물품은 분실시 책임지지 않으므로 잘 간수하여 주시길 바랍니다.',
        '캐녀닝 투어는 바디안 코스로 진행됩니다.',
        '호텔조식이 포함되어 있으신 분들은 호텔에 미리 조식 테이크아웃을 신청하시면 픽업시간에 간단한 도시락을 받을 수 있으니 확인하시기 바랍니다.',
        '탈의실은 별도 없으므로 화장실에서 환복하셔야합니다.',
        '행사 종료 후 간단한 샤워 가능합니다.',
        '차량 정체 등의 사유로 도착시간이 유동적이므로 개인적으로 저녁일정을 잡지 않으시길 권해드립니다.',
        '개인 부주의로 인한 부상 시 여행자 보험을 통해 처리되며 현지 치료에 따른 영수증을 챙겨오시길 바랍니다.',
        '여행자 보험은 개별적으로 반드시 가입하여 주시길 바랍니다.',
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
    phone: ['+63 915 746 5595'],
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
    reviews: [],
    googles: [],
    tags: ['호핑', '시푸드BBQ'],
    openTime: '00:00',
    closeTime: '24:00',
    program: {
      plan: [
        {
          type: 'adult',
          price: 80000,
        },
        {
          type: 'child',
          price: 70000,
        },
      ],
      type: ['호핑', '시푸드BBQ'],
      name: '호핑투어 모음',
      subName: '힐루뚱안/날루수안/산빈센트/이비자',
      plans: [
        {
          time: '07:40-08:30',
          title: '호텔 픽업',
          desc:
            '리조트 로비에서 미팅\n가이드 안내에 따라 차량 탑승\n선착장 이동',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76046_medium_1525839079.jpg?1525839079',
        },
        {
          time: '08:30-09:00',
          title: '선착장 승선',
          desc: '선착장 이동\n배 승선(방카 / 요트)',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76053_medium_1525839076.jpg?1525839076',
        },
        {
          time: '10:00-11:00',
          title: '1차 스노클링',
          desc:
            '스노클링 장비사용법 안내\n각 호핑 스노클링 포인트에서 스노클링\n힐루뚱안 포인트에서 1차 스노클링',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76054_medium_1525839074.jpg?1525839074',
        },
        {
          time: '11:00-12:00',
          title: '중식',
          desc: '씨푸드 및 바베큐 식사',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76056_medium_1525839071.jpg?1525839071',
        },
        {
          time: '12:00-14:00',
          title: '2차 스노클링',
          desc:
            '난루수안 포인트로 이동\n준비 운동 후 스노클링 장비 착용 하고 2차 스노클링',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/108133_medium_1547300446.jpg?1547300446',
        },
        {
          time: '14:00-14:30',
          title: '낚시',
          desc: '낚시 포함인 호핑의 경우 낚시 진행',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76055_medium_1525839073.jpg?1525839073',
        },
        {
          time: '14:30-15:00',
          title: '선상해물라면',
          desc: '선상에서 해물라면 취식\n식사 후 선착장으로 이동',
          src: '',
        },
        {
          time: '15:00-15:30',
          title: '선착장으로 복귀',
          desc: '선착장으로 이동 후 차량 탑승',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76057_medium_1525839069.jpg?1525839069',
        },
        {
          time: '15:30-16:00',
          title: '행사종료',
          desc: '리조트 복귀 후 종료',
          src:
            'https://d2ur7st6jjikze.cloudfront.net/offer_courses/30227/76058_medium_1525839068.jpg?1525839068',
        },
      ],
      detail: {
        title: '세부 호핑투어는 모두 한자리에 모아놓고 편하게 골라 갑시다 ^^',
        subTitle: '',
        images: [
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190210_large_1525775013.jpg?1525775013',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190211_large_1525775014.jpg?1525775014',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190212_large_1525775012.jpg?1525775012',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190214_large_1525775017.jpg?1525775017',
          },
          {
            desc: '',
            src:
              'https://d2ur7st6jjikze.cloudfront.net/offer_photos/30227/190215_large_1525775019.jpg?1525775019',
          },
        ],
      },
      include: [
        {
          name: '픽업',
          content: '세부시티, 막탄지역',
        },
        {
          name: '식사',
          content: '중식, 음료',
        },
        {
          name: '장비',
          content: '스노클링 장비',
        },
        {
          name: '기타',
          content: '수건',
        },
      ],
      notInclude: [
        {
          name: '드랍',
          content: '막탄 무료 / 세부시비 1인 1불',
        },
        {
          name: '개인용품',
          content: '모자, 선크림, 수영복 등',
        },
        {
          name: '매너팁',
          content: '$2~$3',
        },
      ],
      refund: [
        {
          period: '30일 이전',
          content: 0,
        },
        {
          period: '20일 ~ 29일 이전',
          content: 10,
        },
        {
          period: '10일 ~ 19일 이전',
          content: 15,
        },
        {
          period: '8일 ~ 9일 이전',
          content: 20,
        },
        {
          period: '2일 ~ 7일 이전',
          content: 30,
        },
        {
          period: '1일 ~ 당일',
          content: 100,
        },
      ],
      cautions: [
        '보모서비스가필 하신분은 사전에 요청하시면 가능하고 500 페소 현지 불입니다.',
        '외부시터 이용시 시터당 1,000페소 현장 지불하셔야 합니다.',
        '선착장 오피스에 짐보관가능합니다.',
        '천재지변(태풍, 지진등 )으로 인해 행사가 불가 할수있으며 이럴경우 100% 환불처리 되십니다.',
        '해당일 기상 상황에따라 스노클링 포인트는 힐루뚱안, 난루수안외 안전지역으로 변경진행 될수 있습니다.',
        '여행자보험은 개별적으로 반드시 가입하여 주시길 바랍니다.',
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
    phone: ['+63 32 345 1066'],
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
    review: 3.8,
    reviewCnt: 17,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment: '가성비좋고,마사지쏨씨도 좋아요',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment: '가끔 피곤할 때 , 마사지 땡길 때 가면 굿 !',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment: '가성비 좋습니다',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment: '세부시티 한국마사지',
        star: 5,
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
    engName: 'Prana Medispa',
    address:
      '16th Floor, Tower 2, Crown Regency Hotel & Towers, Osmeña Blvd, Cebu City, 6000 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.308328,
    longitude: 123.8945778,
    phone: ['+63 915 790 9414'],
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
    review: 3.5,
    reviewCnt: 13,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '나와 아내는 3 in 1 프로모션 (Body Scrub, Massage and Facial)을 준비했습니다. 그것이 우리의 첫 번째 (롤) 이후 나와 함께 내 아내가 몸에 스크럽과 재미 있었어. 마사지는 얼굴뿐만 아니라 OK이었다.\n그러나 제가 말할 수있는 것은, 필자는 지금까지도 다이아몬드 필과 일관성이 있습니다. 지금까지 그들은 결코 나를 후회하게 만들지 않았습니다.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '내 딸은 그녀의 얼굴에 범프 같은 감염 뾰루지 / 여드름 결과 자신의 다이아몬드 껍질 서비스의 쓸모. 그녀는 결과를 알리 할 다음 일을 반환하지만 최악의 고객 서비스 경험을했다. 그녀는 그녀의 사건에 대해 어떤 변명, 환불이나 그럴듯한 설명과 함께 올 수 없었다 complain.The 직원에 대한 관리자를 통해 가져올 수 없습니다. 나는 우리가이 설립을 향한 어떤 법적 조치를 취할 필요가 없습니다 바랍니다. 그들이 할 수있는 최소한 그녀의 상태를 확인하고 필요한 경우 의사에게 그녀를 참조한다. 나는 그들의 서비스를 얻기에주의를 취할 모든 사람에게 물어 것입니다. 아주 전문가가 아닌',
        star: 1,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '줄 수있는 별의 수가 1 개 미만인 경우이를 평가할 수 있습니다. 제 조카가 14 세션 다이아몬드 껍질 패키지를 샀습니다. 그녀의 첫 번째 세션이 끝난 다음 날 그녀는 고름이 보였던 얼굴에 통증을 일으켰습니다. 그녀는 Prana로 돌아가서 그들을 보여주고 문제를 해결하기 위해 무엇을 할 수 있는지 보았습니다. 또는 분명히 그녀가 분명히 거기로 돌아가고 싶지 않았기 때문에 그녀에게 환불을 제공 할 수있었습니다. 그들은 그녀에게 환불을하지 않을 것이고, 심지어 그녀가 매니저를 보게하지 않을 것입니다! 최악의 고객 서비스! 나는 평범한 고객 이었지만 내 비즈니스 나 친구들과 가족의 사업을받을 자격이 없습니다. 나는이 사건을 소셜 미디어와 내가 아는 모든 사람들에게 알려주고 있습니다. 왜냐하면 이것은 일어나서는 안되며 다시는 발생해서는 안되기 때문입니다. 그들은 이미 당신의 돈이있는 한 당신에게 일어나는 일에 대해 책임을지지 않습니다. 내 조카에게 일어난 일을 당신이 그들의 서비스를 이용할 생각이라면 경고해라.',
        star: 1,
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
    phone: ['+63 32 494 0011'],
    baby: false,
    korean: true,
    pickup: true,
    reservations: [],
    preview:
      'https://lh3.googleusercontent.com/DL5ouiS3FiiBbBDxAhDzUJNchLNR83LdboFRV13G581MgXUWxCivdPdjVES1nvcCJ05jK23G=w1080-h608-p-no-v0',
    source: [
      'https://lh3.googleusercontent.com/DL5ouiS3FiiBbBDxAhDzUJNchLNR83LdboFRV13G581MgXUWxCivdPdjVES1nvcCJ05jK23G=w1080-h608-p-no-v0',
      'http://mblogthumb2.phinf.naver.net/20160326_61/hm1697_1458999038819nSLMn_JPEG/attachImage_855025216.jpeg?type=w800',
    ],
    likes: 20,
    review: 3.9,
    reviewCnt: 152,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '자유로운 픽드랍에 위치도 좋고 친절하고\n저렴하고 계좌이체도 돼요ㅋㅋ\n넘 좋아서 사실 젤 중요한 마사지는 기대도 안했고 오일+발 맛사지 90분했는데\n120분할걸 후회했어요\n섬세하고꼼꼼하게 부드러우면서 시원해요\n팁이절로나옴..\n세부 있는동안 매일 올듯합니다.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '자주이용합니다. 한국출발노선 도착시간이 그래놔서 더이상의 대안은 없을것 같네요. 이번에 한국분들하고 같이 이동하면서 주변에 한식집도 알게됐는데 괜찮은것 같습니다.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '세부 여행중 두번 방문했습니다\n첫번째 건마 90분\n마사지사 복불복이지만 좋진 않았습니다\n두번재 핫스톤 100분\n젋어보이는 마사지사였는데 정말 쵝오였어요\n100분동안 힘있는 압에 순발력빠르게 핫스톤을 왔다 갔다 온몸이 녹아서 숙소에 왔네요 정말 좋았습니다\n시설은 좋아보이진 않지만 가격대비 가성비가 정말 좋은듯해요',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '정말 좋은곳이에요. 가성비 완전좋은곳 마사지사들이 거의 달인 수준인듯. 아무나 해줘도  완전좋아요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '한국인 사장님들은 다 친절하십니다\n마지막날 귀국패키지 이용해서 스케줄짜기 좋습니다\n하지만 마사지사 복불복은 존재함',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '맛사지는 만족하지만..사람이많아 그런지 정신없고..서비스면에선..그냥그냥입였다고느꼈습니다..또 그근처로간다면 다른곳으로 방문할것같습니다',
        star: 3,
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
    phone: ['+63 956 156 1448'],
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
    reviews: [],
    googles: [],
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
  {
    category: 'Massage',
    id: 'massage5',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: '욜로스파 마사지',
    engName: 'Massage spa',
    address: 'Archbishop Reyes Ave, Cebu City, Cebu, 필리핀',
    engAddress: 'Archbishop Reyes Ave, Cebu City, Cebu, 필리핀',
    latitude: 10.3184238,
    longitude: 123.9027238,
    phone: ['+63 906 510 0011'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://ceburyugaku.jp/wp-content/uploads/2018/08/yolo-spa-cebu-12.jpg',
    source: [
      'https://ceburyugaku.jp/wp-content/uploads/2018/08/yolo-spa-cebu-12.jpg',
      'https://mblogthumb-phinf.pstatic.net/MjAxODAzMThfMyAg/MDAxNTIxMzc0NTM5ODE0.Dh7DOQCoB9Z6Kj7cfmQhCq8UEl90SwbUuK_4wY53mkwg.ZY0ODTzbTELZ6SkTNn3NpBD6LvG44QvmynoTcZVigU0g.JPEG.hye_j0425/%EC%84%B8%EB%B6%80%EC%8B%9C%ED%8B%B0_%EB%A7%88%EC%82%AC%EC%A7%80%EB%A1%9C_%EC%A0%9C%EC%9D%BC_%EC%A0%80%EB%A0%B4%ED%95%9C_%EC%9A%9C%EB%A1%9C%EC%8A%A4%ED%8C%8C_%284%29.JPG?type=w800',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8s1yZnoaYLkuIKcHFYgEckFFwBQWUQnRH2bghIJnMT_q8NfpG&s',
    ],
    likes: 20,
    review: 3.8,
    reviewCnt: 252,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '숙소인 퀘스트 호텔과 가까워 도보로 갔던 곳 로컬 샾으로 타샾 대비 저렴한 편이며 위생속옷은 제공하지 않습니다.(미비취) 가봤던 마사지 샾중에선 마사지 스킬이 제일 좋았습니다. 마사지 후 차한잔 즐기시면 그날 피로가 쫙 풀립니다.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '가성비 좋습니다. 첨에 세게 해달랬더니 1시간 반동안 전신 마사지 미안할정도로 잘 받았습니다. 분위기 신경쓰지않고 마사지 제대로 받으려면 욜로 추천합니다',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '새벽 1시 좀 넘은 시간 레드플레닛 체크인하고 발마사지 받으러 갔던 곳입니다. 24시간 영업이 장점이긴 한데 제 마사지 해주시는 분이 피곤하신지 마사지 하시면서 조시더라구요. 여행다니면서 맛사지를 좀 받아보았지만 신기한 경험이 었습니다. 친구는 시원하게 잘 받았다고 하지만 늦은 시간 방문하시는 건 추천드리지 않네요!',
        star: 2,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '마사지사마다 차이는 있겠지만 아프면서 시원하고 좋았습니다.\n대기시간이 간혹 있을 수 있습니다.\n위치도 아얄라앞에 있는데 횡단보도가 양끝으로있어 조금 걸어야됩니다.\n비싼 한국상대맛사지보다는 추천\n가격대비 많이 좋음',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '어깨/등 마사지',
        desc: '어깨/등 마사지',
        plans: [
          {
            time: 30,
            price: 180,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 30,
            price: 180,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '지압 / 타이 마사지',
        desc: '지압 / 타이 마사지',
        plans: [
          {
            time: 60,
            price: 350,
          },
          {
            time: 90,
            price: 520,
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
        name: '오일 전신 마사지',
        desc: '오일 전신 마사지',
        plans: [
          {
            time: 60,
            price: 300,
          },
          {
            time: 90,
            price: 450,
          },
          {
            time: 120,
            price: 600,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '아로마 오일 전신마시지',
        desc: '아로마 오일 전신마시지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 750,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '로션 마사지',
        desc: '로션 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 750,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '아로마 핫오일 전신 마사지',
        desc: '아로마 핫오일 전신 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '오가닉 골드오일 전신 마사지',
        desc: '오가닉 골드오일 전신 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '화산석 핫 스톤 전신 마사지',
        desc: '화산석 핫 스톤 전신 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 990,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage6',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: '밍타이 스파',
    engName: 'Massage spa',
    address: '47 F. Cabahug St, Cebu City, Cebu, 필리핀',
    engAddress: '47 F. Cabahug St, Cebu City, Cebu, 필리핀',
    latitude: 10.3245279,
    longitude: 123.9157317,
    phone: ['+63 32 520 5852'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://cebubook.com/mallimg/2017/02/07/1486401125-418_N_570x323_100_2.jpg',
    source: [
      'http://cebubook.com/mallimg/2017/02/07/1486401125-418_N_570x323_100_2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSwFx2vyxVWA8H1TlnChRLwy6N1VLN9J5e0cU7AeyrOkAB_REwOw&s',
    ],
    likes: 20,
    review: 3.6,
    reviewCnt: 42,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '24시간 운영되는 마사지샵. 1시간에 드라이 맛사지 팁포함 만원정도. 한국사람 천지. 걍 한국에 있는 느낌. 현지인들은 1시간 3천원 하는 맛사지샵 이용한다 들었음.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '너무 좋았어요 평소에 아로마 마서지 많이 받는편인데 태어나서 받은 마사지중이 젤 좋았음... 진짜 잠이 솔솔오고 항상 웃어주시고 부탁도 잘 들어주시고 마사지후 머리감을때도 왕 친절하심 짱 좋...❤\n이름이 잘 기억안나지만 키는 좀 작으시고 예쁘고 이름이 로셀린(?)이었어요!!',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '가격대비 괜찮습니다.현지 한국인사장님이 운영하시는곳보는 저렴하고요..',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '밤새 놀고 새벽에 피로를 풀고자 방문 하였는데 대기시간이 좀 있었습니다. 마사지는 나쁘지는 않지만 그렇다고 너무 시원하지도 않았습니다 가격대비는 그냥그런?',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '여행 올때마다 꼭 들리는 곳\n서비스 마인드 좋음\n24시간 들릴수 있는것도 좋음\n예약은 필수\n방문할때마다  안마프로그램이  조금씩 달라지는것도  좋음',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '트윈 마사지',
        desc: '한 명의 고객에게 두 명의 테라피스트가 마사지',
        plans: [
          {
            time: 60,
            price: 700,
          },
          {
            time: 120,
            price: 1400,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '드라이 마사지',
        desc: '태국식 전신 마사지',
        plans: [
          {
            time: 60,
            price: 330,
          },
          {
            time: 120,
            price: 660,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '오일 마사지',
        desc: '오일을 사용하는 스웨덴식의 전통 마사지',
        plans: [
          {
            time: 60,
            price: 330,
          },
          {
            time: 120,
            price: 660,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '로션 마사지',
        desc: '오일 대신 로션을 사용하는 마사지',
        plans: [
          {
            time: 60,
            price: 330,
          },
          {
            time: 120,
            price: 660,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 60,
            price: 330,
          },
          {
            time: 120,
            price: 660,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '머리 마사지',
        desc: '머리 마사지',
        plans: [
          {
            time: 30,
            price: 165,
          },
          {
            time: 60,
            price: 330,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '복부 마사지',
        desc: '복부 마사지',
        plans: [
          {
            time: 30,
            price: 165,
          },
          {
            time: 60,
            price: 330,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '가슴 마사지',
        desc: '가슴 마사지',
        plans: [
          {
            time: 30,
            price: 165,
          },
          {
            time: 60,
            price: 330,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '얼굴 마사지',
        desc: '얼굴 마사지',
        plans: [
          {
            time: 60,
            price: 495,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '허발 팩 마사지',
        desc: '허발 팩 마사지',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1130,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '화산석 마사지',
        desc: '화산석 마사지',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1130,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '아로마 테라피',
        desc: '아로마 테라피',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1130,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '뱀부 마사지',
        desc: '뱀부 마사지',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1130,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '부황 마사지',
        desc: '부황 마사지',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1130,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '바디 스크럽',
        desc: '바디 스크럽',
        plans: [
          {
            time: 60,
            price: 850,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '발 스크럽',
        desc: '발 스크럽',
        plans: [
          {
            time: 60,
            price: 380,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
    ],
  },
  {
    category: 'Massage',
    id: 'massage7',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: '로미 스파',
    engName: 'Massage spa',
    address:
      'Behik Building, 2483 M.L. Quezon National Highway, Lapu-Lapu City, 6015 Cebu, 필리핀',
    engAddress:
      'Behik Building, 2483 M.L. Quezon National Highway, Lapu-Lapu City, 6015 Cebu, 필리핀',
    latitude: 10.3189929,
    longitude: 123.965179,
    kakao: 'lomispa',
    phone: ['+63 915 999 0620'],
    baby: true,
    korean: true,
    pickup: true,
    reservations: [],
    preview:
      'https://img-wishbeen.akamaized.net/spot/1391595553817_lomi%20spa.png',
    source: [
      'https://img-wishbeen.akamaized.net/spot/1391595553817_lomi%20spa.png',
      'https://ph.monkeytravel.com/attach/product/PH/201702/o_1b8h37vcv1knhslc5eh1gt4tbtf.jpg?w=500&h=0',
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile2.uf.tistory.com%2Fimage%2F2747A646578B991B17EC57',
    ],
    likes: 20,
    review: 4.2,
    reviewCnt: 94,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '시설 깔끔. 사장님 친절하시고 완전 꼼꼼.\n픽드랍 세부시티에서 막탄으로 해주는 곳이 여기가 유일한 곳. 마사지 모두 만족(10점중 10점)\n비용이 아깝지 않은 곳입니다. 첫 방문에 추천.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '친절한 한국인 사장님..\n공항드랍은 해주셨는데 시티픽업은 안되길래 그랩타고 갔었네요..\n참고로 여기서 살면서 제일 큰 바퀴벌래와 조우했습니다. \n물론 가게 밖에서요.. 새가 날아오는 줄 알았는데 유리창에 퍽  하고 부딪히고 움직이길래  봤더니만 정말 손바닥반만한 바퀴벌래..\n필리핀 어디가나 바퀴벌래 때문에 힘드네요..\n마사지는 나름 시원했고 시설도 깔끔했습니다.\n공항드랍도 좋았구요..\n가격은 트리쉐이드보다는 정말 쬐끔 저렴했네요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '시설 깔끔하고...사장님 친절하심..테라피스트들 잡담도 없고 마사지실력도 나쁘지 않으나 마지막에 나올때 테라피스트들때문에 기분이 좀 좋지않게나와 별하나 뺍니다',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '사장님들도 너무 좋으시고 시원한 마사지실력에 현지기사님들도 친절하신데다가 원하는대로 픽드랍을 다 맞춰주셔서 3일연속으로 이용했어요.\n 첫날엔 시티에서 막탄으로 넘어올 때 아얄라 픽 모벤픽 드랍으로 이용했고 서비스 뿐 아니라 마사지 실력도 훌륭하셔서 다음날도 다다음날도 다른 샵을 검색할 필요 없이 계속 이용했던 곳이에요.\n다만 둘째날에 마사지를 해주셨던 테라피스트분은 섬세하지못했고 임산부라 옆으로 누워서 마사지를 받는데 자세를 잘못 잡아주시는 바람에 허리가 너무 아팠어요.\n그래서 셋째날에는 첫째날 해주셨던 테라피스트분으로 다시 요청했는데 첫날 받았던 것처럼 역시나 실력도 센스도 넘치셔서 행복한 기억으로 세부를 마무리했습니다!\n임산부에 햇빛화상까지 있어서 까다로운 고객일 수도 있었는데 불편한 기색 없이 코코넛마사지에 화상부분만 알로에로 변경까지 해주셔서 너무너무 감사했고 행복했어용♥\n아기 놀이방도 마련되어있어서 내년에 아기랑 시부모님과 다시 세부에 방문한다면 꼭 들르고싶은 곳이에요!',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '사장님이 너무 친절하십니다!! 놀이방도 있고 애기 케어해주는 직원도 있어서..애기 맡겨 놓고 너무 시원하게 마사지 받았네요!! 픽드랍 서비스도 최고구요~ 4일 일정에 이틀 갔네요 ㅎㅎ 일정 마지막날 공항 드랍 했었는데 스파에 두고 온 짐이 있어서 연락드리니.. 바로 공항으로 보내주셨습니다.. 정말 감사했네요~',
        star: 5,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '10:00',
    closeTime: '02:00',
    menus: [
      {
        name: '로미 트리트먼트',
        desc: '로미 트리트먼트',
        plans: [
          {
            time: 140,
            price: 2200,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '로미로미 마사지',
        desc: '로미로미 마사지',
        plans: [
          {
            time: 90,
            price: 1360,
          },
          {
            time: 120,
            price: 1720,
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
            time: 90,
            price: 960,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '허벌 마사지',
        desc: '허벌 마사지',
        plans: [
          {
            time: 90,
            price: 960,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '전통 힐롯 마사지',
        desc: '전통 힐롯 마사지',
        plans: [
          {
            time: 90,
            price: 960,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '알로에 베라 마사지',
        desc: '알로에 베라 마사지',
        plans: [
          {
            time: 60,
            price: 640,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 960,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '아로마 테라피',
        desc: '아로마 테라피',
        plans: [
          {
            time: 60,
            price: 640,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 960,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '시아츠 마사지',
        desc: '시아츠 마사지',
        plans: [
          {
            time: 60,
            price: 640,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 960,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 30,
            price: 200,
          },
          {
            time: 60,
            price: 400,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
      {
        name: '얼굴 마사지',
        desc: '얼굴 마사지',
        plans: [
          {
            time: 30,
            price: 240,
          },
        ],
        src:
          'https://img.grouponcdn.com/iam/3HbjooRgXepX5C5N6Z4BRjioJo3r/3H-2048x1229/v1/c700x420.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage8', // 뒤에 숫자 1 올릴 것
    name: '해피트리 스파', // 한국 이름
    engName: 'happytree massage', // 영어 이름
    address:
      'shangs island town center M.L. Quezon National Highway, Maribago, Lapu-Lapu mactan, 6015 Cebu, 필리핀', // 주소
    engAddress:
      'shangs island town center M.L. Quezon National Highway, Maribago, Lapu-Lapu mactan, 6015 Cebu, 필리핀', // 주소
    latitude: 10.2836863, // 위도, 경도
    longitude: 123.9914023,
    kakao: ['happytree8'],
    phone: ['+63 927 677 1435'], // 전화번호
    baby: false, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9995D8395BBDFCB633',
    source: [
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9995D8395BBDFCB633',
      'http://mblogthumb3.phinf.naver.net/MjAxODA0MDNfMjM2/MDAxNTIyNzU2MDAwMDIy.epbjxXZBBvgg4j9UnAWRKQXNu2zUZqK09kSbI6PR2IUg.nYR3OKmvckrqEwXV2kDpOBK6XcvfyGmv6F3l26lwiNsg.JPEG.hyessica/20180328_171253.jpg?type=w800',
      'https://modo-phinf.pstatic.net/20180131_5/1517379580681wYqLk_JPEG/mosaKYBY8l.jpeg?type=w1100',
      'https://t1.daumcdn.net/cfile/tistory/999A81405BBDFCB417',
    ],
    likes: 20,
    review: 4.2,
    reviewCnt: 88,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '카톡 응대부터 마사지, 픽드랍까지 정말 좋았습니다.\n가격대비 정말 훌륭한 마사지를 받았습니다.\n첫날 시작이 좋네요^^\n가족 모두 만족했습니다. 감사합니다.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '가성비 최고의 마사지샵.\n한인샵에 비해 시설이 떨어지긴하지만 깨끗하고, 마사지는 최고에요! \n세부 갈 때마다 매번 들러요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '숙소가 제이팍이었고 바로 앞 유명한 마사지샵이라 예약걸고 매일 갔어요\n외관은 허름해도 마사지사들 스킬은 최고이고\n가성비가 너무 좋아 아주 만족했습니다\n한국에 오니 더 생각나네요ㅠ',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '가격대비 아주 좋고 중간시간대 20% 할인은\n아주 좋았고 마누님과 아들대리고 좋은 대접을 받았고 나도 잠들정도로\n시원했고 거리도 리조트에서 걸어가서 해서 교통편도 좋았음',
        star: 5,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '10:00',
    closeTime: '24:00',
    menus: [
      {
        name: '스톤 마사지',
        desc: '스톤 마사지',
        plans: [
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://post-phinf.pstatic.net/MjAxNzEyMDRfMTgg/MDAxNTEyMzQ5NjE2NjQ4.OJ-BQ4sgTOjssRB-jXW5K_8Fs8Rmx4dZ5F5Hp8EQ0Uog.BNYspj0TVVTo1lymF6Shhg5OucSaITCn_6psV9ax5PIg.JPEG/2.jpg?type=w1200',
      },
      {
        name: '콜드 알로에',
        desc: '콜드 알로에',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1050,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '핫코코 마사지',
        desc: '핫코코 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1050,
          },
        ],
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vGLNaYMZdohcwkN3MbgAD-kFc-MgQk1qjpyFQdDg04id74Z8XA&s',
      },
      {
        name: '드라이/컴비네이션',
        desc: '드라이/컴비네이션',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          'http://mblogthumb1.phinf.naver.net/MjAxODA0MDNfMzcg/MDAxNTIyNzU2MDAyMjcw.odwcw_73uH8BItdbYkgFg1juU7JCivspx9f-wmQJ4-Ig.YSxq3xTVD59VKdO0uMWsn_0pGyBs7M8HuZzK4BubPiMg.JPEG.hyessica/20180328_171802.jpg?type=w800',
      },
      {
        name: '아로마 마사지',
        desc: '아로마 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
          {
            time: 90,
            price: 650,
          },
          {
            time: 120,
            price: 850,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_166/1470810486080P95rT_JPEG/mosalUnpCC.jpeg?type=w1100',
      },
      {
        name: '성장마사지',
        desc: '성장마사지(12세까지)',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '임산부 마사지',
        desc: '임산부 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 750,
          },
          {
            time: 120,
            price: 950,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '마사지+풋스크럽or페이셜',
        desc: '마사지종류-드라이 마사지or아로마 마사지 선택가능',
        plans: [
          {
            time: 90,
            price: 6500,
          },
          {
            time: 120,
            price: 850,
          },
          {
            time: 140,
            price: 1100,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '머리,목,어깨등 마사지',
        desc: '멘솔',
        plans: [
          {
            time: 30,
            price: 250,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '발마사지',
        desc: '발마사지',
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
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '발마사지+풋스크럽or페이셜',
        desc: '발마사지60분+풋스크럽30분or페이셜',
        plans: [
          {
            time: 90,
            price: 600,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage9', // 뒤에 숫자 1 올릴 것
    name: '오스파', // 한국 이름
    engName: 'ospa massage', // 영어 이름
    address: 'Maribago, Lapu-Lapu City, Cebu, 필리핀', // 주소
    engAddress: 'Maribago, Lapu-Lapu City, Cebu, 필리핀', // 주소
    latitude: 10.2846933, // 위도, 경도
    longitude: 123.995061,
    kakao: ['cebuospa'],
    phone: ['+63 905 446 9717'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTRfMjUx/MDAxNTMxNTMxMDQyNDM0.pQmx4ryyLJfBq4O3yJ-bgtcxJs-4pDzZNXIfT9L3jPwg.Tn6nf4mgvKB9EQNP4Kq06DTwPBYkAL6-axWVbdCtw1og.JPEG.oki458/20180710_131758.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTRfMjUx/MDAxNTMxNTMxMDQyNDM0.pQmx4ryyLJfBq4O3yJ-bgtcxJs-4pDzZNXIfT9L3jPwg.Tn6nf4mgvKB9EQNP4Kq06DTwPBYkAL6-axWVbdCtw1og.JPEG.oki458/20180710_131758.jpg?type=w800',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA3MTRfNjgg/MDAxNTMxNTc3NjMxMzM2.MQaiMthKLB0qblHv1k4fjKZQH48mtAhYHmogS1fXXIAg.ogBkIrdN_1tshGgtIcWP2NxLsDhesyOE6QxUfqCVXBMg.JPEG.oki458/menu20180305-1.jpg?type=w800',
      'http://mblogthumb1.phinf.naver.net/MjAxNzEyMTJfMTY2/MDAxNTEzMDgwMjE3NjQz.opkTQZm8gJu1v_uTcP6jMU7garfLtQ-DdPAo6k0Pm2Mg.aaGja-PexaECYQFVjfcG8Wu7S08peZp3aj204SEtywAg.JPEG.beatpower/세부막탄마사지오스파1.jpg?type=w800',
      'http://mblogthumb3.phinf.naver.net/MjAxODEyMjRfMTMz/MDAxNTQ1NjIzNjM3Nzcw.pdkQTnmvxsqzTAuOiCpS4ndmbC5vnjR-GXnCvVbzDaMg.WVe5V80uEacC5I7w_YsXt0wa1nhxn6AKitTGhmVrBksg.JPEG.pink-ribbon/오스파마사지_카톡_2018122400000005.jpg?type=w800',
    ],
    likes: 20,
    review: 4.2,
    reviewCnt: 101,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '막탄 에서 다녀본 스파중 가장 좋습니다.\n할인되는 가격 실력이 좋은 스텝들 너무 좋았습니다.\n가족 모두가 만족한 스파 5일 동안 다 받았네요.~^^',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '깐깐한 주인장의 업소 관리덕에 어느 테라피스를 만나더라도 기본은 하는 집이다.\n가격대도 나름 저렴하고 좋다.\n단,시설이 조금 많이 떨어진다.\n시설떨어지지만 마사지도 충분히 커버가 된다.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '가성비 최고. 시설은 뛰어나지 않지만 마시지 실력은 가격이 3배 4배 넘는곳보다 뛰어남.\negi 호텔 속안에 있음. 픽드랍 가능.\n쿠폰 있거나 얼굴 알거나 재방문일경우 할인 적용됨. 대게 알아서 할인 해줌',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '한국분이 운영하는 곳으로 핫스톤마사지를 추천받았음.\n90분 1인당 1600페소인데 인터넷에서 사전 쿠폰을 받아놓으면 50%할인되며 학생도 학생임을 증명하면 50%할인된다.\n스팀으로 차돌을 뜨겁게해서 그 차돌을 이용해서 마사지를 해주는데 나이드신 분들은 좋을 듯. 혹시 압이 강하면 살살 약하면 세게라고 필리핀 현지인 마사지사들이 말해 달란다.\n워낙 많은 한국사람들이 오는 곳이다보니 웬만한 한국어는 쉽게 통한다.',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    menus: [
      {
        name: '오일 마사지',
        desc: '오일 마사지',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 90,
            price: 1100,
          },
          {
            time: 120,
            price: 1400,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션 마사지',
        desc: '로션 마사지',
        plans: [
          {
            time: 60,
            price: 900,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 45,
            price: 600,
          },
          {
            time: 60,
            price: 700,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/23156E495201D41315',
      },
      {
        name: '핫스톤 마사지',
        desc: '핫스톤 마사지',
        plans: [
          {
            time: 90,
            price: 1600,
          },
          {
            time: 120,
            price: 2100,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '약돌복부 마사지',
        desc: '약돌복부 마사지',
        plans: [
          {
            time: 90,
            price: 1300,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Rt8rcjAHfphR1S8Q2qcaLEHKiryS84nFlTZkOT0-oQHT1HFa&s',
      },
      {
        name: '트윈 마사지',
        desc: '두명의 테라피스트가 동시에 마사지를 잔행',
        plans: [
          {
            time: 90,
            price: 2000,
          },
          {
            time: 120,
            price: 2700,
          },
        ],
        src:
          'https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '콤비네이션 마사지',
        desc: 'A-로션+발마사지, B-오일+발마사지',
        plans: [
          {
            time: 90,
            price: 1100,
          },
          {
            time: 120,
            price: 1400,
          },
        ],
        src: 'http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '어린이 성장 마사지',
        desc: '어린이 성장 마사지',
        plans: [
          {
            time: 60,
            price: 700,
          },
          {
            time: 90,
            price: 1000,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '발 각질관리',
        desc: '발 각질관리',
        plans: [
          {
            time: 30,
            price: 400,
          },
        ],
        src: 'http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage10', // 뒤에 숫자 1 올릴 것
    name: '타이보란 마사지', // 한국 이름
    engName: 'thai boran massage', // 영어 이름
    address: 'Bagumbayan 1, Maribago, Lapu-Lapu City, 6015 Cebu, 필리핀', // 주소
    engAddress: 'Bagumbayan 1, Maribago, Lapu-Lapu City, 6015 Cebu, 필리핀', // 주소
    latitude: 10.2909521, // 위도, 경도
    longitude: 123.9963066,
    kakao: ['b23138067b'],
    phone: ['+63 956 147 9405'], // 전화번호
    baby: false, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://mblogthumb1.phinf.naver.net/MjAxNzExMTNfMTE1/MDAxNTEwNTg0NjQ0NTcy.C3rMP0OatISAfWF6I7Uxt3SRWEFDp5mBsOy85lCuoTMg.B8qtyIm2Qm6GeHBzc7oGu8CVetjeccjQOMi8aMg90Ewg.JPEG.durldi99/20171109_185706.jpg?type=w800',
    source: [
      'http://mblogthumb1.phinf.naver.net/MjAxNzExMTNfMTE1/MDAxNTEwNTg0NjQ0NTcy.C3rMP0OatISAfWF6I7Uxt3SRWEFDp5mBsOy85lCuoTMg.B8qtyIm2Qm6GeHBzc7oGu8CVetjeccjQOMi8aMg90Ewg.JPEG.durldi99/20171109_185706.jpg?type=w800',
      'http://mblogthumb2.phinf.naver.net/20160607_73/simpact1_1465300049536yFdPW_JPEG/%BC%BC%BA%CE%B8%B6%BB%E7%C1%F6%C5%B8%C0%CC%BA%B8%B6%F5.JPG?type=w420',
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile27.uf.tistory.com%2Fimage%2F99AF763359ECE8FD1BF32A',
      'https://lh3.googleusercontent.com/vnximQF4qst_Ja4UbblEBnA-YbGRYThwIw-91zX455aYzqXcPZtEl0g29I41P8ejzAzxjHoM=w1080-h608-p-no-v0',
    ],
    likes: 20,
    review: 4.3,
    reviewCnt: 36,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '24시간하는 곳이며 한국인사장님이 무료픽업 가능합니다.\n침대식이 아니고 매트리스 하나깔려있어서 2시간 받다보면 목에서 비명을 지릅니다\n얼굴대는 구멍이없어요....그냥 배게에 고개 돌리고 누워야함 다.만. 마사지사가 아주 아주 아주 잘합니다.\n네명이 받고 네명다 만족했으며 유일하게 팁을 150페소 주었어요.\n마사지는 아주아주아주 만족 시설은 구우우우우우우림',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '한국인 사장님이 공항픽업을 해주십니다. 물론 무료로.\n마사지는 정말 훌륭했습니다.\n그런데 스톤마사지는 가격이 너무 비싸 가성비가 별로입니다.\n하지만 가장 제대로 된 스톤마사지였었네요..\n마사지사가 전부 젊고 열심히 마사지 해줘서 가장 흡족했던 샵중에 한곳입니다.',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '세부에서 갔던 마사지샵중 젤 괜찮았습니다. 마사지도 잘했고 걱정했던것보다 깔끔했음.\n사장님도 좋으시고 갠적으로 세부를 또 오면 다시 갈것 같네요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '사장님께서 무료 픽드랍해 주셔서 편하게 다녀 왔습니다\n시설은 좀 낙후 되었으나 가격과 관리사들의 능력으로 커버가 됩니다\n저희 아들과 저는 맛사지 받다가 잠들었네요\n한국에서도 자주 맛사지를 받는데 여기 관리사도 상당히 스킬이 좋습니다\n단점은 모든 필리핀의 건물이 그렇지만 방음이 안되어서 자동차 트라이시클 소리가 심합니다\n그 외에는 다 괜찮네요',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '08:00',
    closeTime: '05:00',
    menus: [
      {
        name: '타이 마사지',
        desc: '베이직 마사지',
        plans: [
          {
            time: 60,
            price: 300,
          },
          {
            time: 90,
            price: 450,
          },
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '오일 마사지',
        desc: '베이직 마사지',
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
            price: 650,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션 마사지',
        desc: '베이직 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 750,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '성장 마사지',
        desc: '베이직 마사지',
        plans: [
          {
            time: 60,
            price: 300,
          },
          {
            time: 90,
            price: 450,
          },
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'https://modo-phinf.pstatic.net/20160810_49/1470807262161kSC9f_JPEG/mosaoBo1t4.jpeg?type=round256_256',
      },
      {
        name: '등 마사지',
        desc: '베이직 마사지',
        plans: [
          {
            time: 60,
            price: 300,
          },
          {
            time: 90,
            price: 450,
          },
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'https://media.istockphoto.com/photos/detail-of-hands-massaging-shoulder-blade-picture-id648774244?k=6&m=648774244&s=170667a&w=0&h=cLtQ6QAtLS5XUDy4BuKOL5Yln57LDYn36G_OVlG1i5c=',
      },
      {
        name: '발 마사지',
        desc: '베이직 마사지',
        plans: [
          {
            time: 60,
            price: 300,
          },
          {
            time: 90,
            price: 450,
          },
          {
            time: 120,
            price: 550,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/23156E495201D41315',
      },
      {
        name: '알로에 마사지',
        desc: '스페셜 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 750,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '핫스톤 마사지',
        desc: '스페셜 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 750,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '트윈 마사지',
        desc: '스페셜 마사지',
        plans: [
          {
            time: 60,
            price: 700,
          },
          {
            time: 90,
            price: 1000,
          },
          {
            time: 120,
            price: 1300,
          },
        ],
        src:
          'https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '타이마사지+발마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '등마사지+발마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'https://media.istockphoto.com/photos/detail-of-hands-massaging-shoulder-blade-picture-id648774244?k=6&m=648774244&s=170667a&w=0&h=cLtQ6QAtLS5XUDy4BuKOL5Yln57LDYn36G_OVlG1i5c=',
      },
      {
        name: '타이마사지+등마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '오일마사지+발마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 600,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '오일마사지+등마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 550,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션마사지+발마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 650,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '로션마사지+등마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 650,
          },
        ],
        src:
          'https://media.istockphoto.com/photos/detail-of-hands-massaging-shoulder-blade-picture-id648774244?k=6&m=648774244&s=170667a&w=0&h=cLtQ6QAtLS5XUDy4BuKOL5Yln57LDYn36G_OVlG1i5c=',
      },
      {
        name: '알로에마사지+발마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 650,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '알로에마사지+등마사지',
        desc: '콤보 패키지',
        plans: [
          {
            time: 120,
            price: 650,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '발 스크럽',
        desc: '발 스크럽',
        plans: [
          {
            time: 60,
            price: 400,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/23156E495201D41315',
      },
      {
        name: '발 스크럽+발 마사지',
        desc: '발 스크럽+발 마사지',
        plans: [
          {
            time: 90,
            price: 550,
          },
          {
            time: 120,
            price: 650,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/23156E495201D41315',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage11', // 뒤에 숫자 1 올릴 것
    name: '이바나 스파', // 한국 이름
    engName: 'evana massge & spa', // 영어 이름
    address:
      'M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀', // 주소
    engAddress:
      'M.L. Quezon National Highway, Maribago, Lapu-Lapu City, Cebu, 필리핀', // 주소
    latitude: 10.2954238, // 위도, 경도
    longitude: 123.9991735,
    kakao: ['evanacebu'],
    phone: ['+63 915 472 2415'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://mblogthumb3.phinf.naver.net/MjAxNzA4MDRfMTY0/MDAxNTAxNzk3MTMzNjkx.6EIx_EUoQWi-Xlqak6hsx4diRaOJvjB4xafxFoyWXNkg.ylbEVnn-m_P5chErxk9Po3zz_iJ0HpoFgLPGNnaQKTIg.JPEG.jjjlovesss/IMG_0410.JPG?type=w800',
    source: [
      'http://mblogthumb3.phinf.naver.net/MjAxNzA4MDRfMTY0/MDAxNTAxNzk3MTMzNjkx.6EIx_EUoQWi-Xlqak6hsx4diRaOJvjB4xafxFoyWXNkg.ylbEVnn-m_P5chErxk9Po3zz_iJ0HpoFgLPGNnaQKTIg.JPEG.jjjlovesss/IMG_0410.JPG?type=w800',
      'https://scontent.cdninstagram.com/vp/d999d0d0627e62abffd3d25738ec40db/5E45D568/t51.2885-15/e35/s480x480/67459662_1157513247784285_392602347170251597_n.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com&_nc_cat=101',
      'https://scontent-bos3-1.cdninstagram.com/v/t51.2885-15/e35/23596523_302068756947597_8410051191160963072_n.jpg?_nc_ht=scontent-bos3-1.cdninstagram.com&_nc_cat=109&oh=5a2ea8b78a6f6adcfc2359f32921b30a&oe=5E89B0C4',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjhfMjA0/MDAxNTMwMTg1NjM0ODIy._tQFcFFkeKwNbQEM3Oxw1GMTDoBhqOvj0hGx5SXDVBog.DluguJ7YnVTqunQfHW6QQs_Ujs2gOWFl9jWYb0DfJQQg.JPEG.seonjuice/IMG_3833.jpg?type=w800',
    ],
    likes: 20,
    review: 4.5,
    reviewCnt: 195,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '시설이 깨끗했어요.마사지사는 어차피 복불복인데 한국인샵이라 기본예의는 있었어요.\n오전에는 할인행사를 해서 할인받았네요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '다른 마사지샵에 비해 시설이 깔끔하고 합리적인 가격(30%할인 받으면)\n마사지 시원하고 중간중간 시원하냐 아프냐 물어보는 피드백이 있어 좋음',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '네손이라 좋았지만 등 날개뼈사이를 한 30분동안 한곳만 집중해서 받았다\n다음날 멍이들었고 넘아팠다.\n왜한곳만 집중해서 하죠 사람 인내심태스트한건가 다른곳은 해주긴했지만 딴데하다가 다시 날개뼈하고 딴데하다가 다시 날개뼈하고\n너무너무 기대한큼 만족도는 그닥 ㅎㅎ그래도 2손도만 4손이낫긴낫네요;\n한곳집중공략한것 말고는 괜찮았습니다\n저만 그렇게받은게아니라 같이받은 친구도 날개뼈만 공략했다네여 후',
        star: 3,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '마지막날 고래상어보고 와서 간단히 샤워도 할 수 있었고\n마사지하기전 체크사항을 확인하여 맞춤하여 중점적으로 마사지해 주는게 좋았습니다',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment: '깔끔하고좋아요 로컬 보다 조금 비싸지만 만족합니다',
        star: 5,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '10:00',
    closeTime: '24:00',
    menus: [
      {
        name: '네손-스톤 마사지',
        desc:
          '이바나의 대표 마사지로 두 명의 테라피스트가 동시에 핫스톤을 이용해서 마사지가 진행됩니다.',
        plans: [
          {
            time: 90,
            price: 2000,
          },
          {
            time: 120,
            price: 2600,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '네손 마사지',
        desc: '테라피스트 두 명이 동시에 마사지를 진행합니다.',
        plans: [
          {
            time: 60,
            price: 1200,
          },
          {
            time: 90,
            price: 1600,
          },
          {
            time: 120,
            price: 2100,
          },
        ],
        src:
          'https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '핫스톤 마사지',
        desc: '따뜻하게 준비된 스톤으로 온몸의 경직된 근육을 이완시켜 줍니다.',
        plans: [
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Rt8rcjAHfphR1S8Q2qcaLEHKiryS84nFlTZkOT0-oQHT1HFa&s',
      },
      {
        name: '노니 마사지',
        desc:
          '노니액으로 만든 오일로 자외선으로 피로한 피부, 건조한 피부에 추천',
        plans: [
          {
            time: 60,
            price: 1000,
          },
          {
            time: 90,
            price: 1300,
          },
          {
            time: 120,
            price: 1650,
          },
        ],
        src:
          'https://postfiles.pstatic.net/MjAxOTA2MTFfMTM3/MDAxNTYwMjQ4OTYwMDEw.QnXeej7e4i97eQQ6AQ4_vkIHEjPMwlUa9CEXvZTxN1wg.GoOIP8H8ZQujHl9KmYVxje2pAHT234UlODnZD-V3P74g.JPEG.mwithj1225/output_1983119536.jpg?type=w773',
      },
      {
        name: '아로마 마사지',
        desc:
          '전신 스웨디쉬 마사지로 피로회복에 좋고, 혈액순환 및 피부탄력등에 효과가 있습니다.',
        plans: [
          {
            time: 60,
            price: 700,
          },
          {
            time: 90,
            price: 950,
          },
          {
            time: 120,
            price: 1250,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '드라이 마사지',
        desc:
          '건식 마사지로 기가 다니는 길을 눌러주고, 당겨주고, 밀어주는 테크니컬 마사지입니다.',
        plans: [
          {
            time: 60,
            price: 700,
          },
          {
            time: 90,
            price: 950,
          },
          {
            time: 120,
            price: 1250,
          },
        ],
        src:
          'http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '알로에 마사지',
        desc:
          '뜨겁게 익어 화끈거리는 피부 위에 알로에젤을 도포하여 수분을 보퉁하고 열을 식혀주는 마사지입니다.',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 90,
            price: 1100,
          },
          {
            time: 120,
            price: 140,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '임산부 마사지',
        desc:
          '임신 중 나타나는 각종 순환장애 및 부졸과 통을을 완화시켜주는 효과가 있습니다.',
        plans: [
          {
            time: 60,
            price: 750,
          },
          {
            time: 90,
            price: 1050,
          },
          {
            time: 120,
            price: 1350,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '임산부 스톤 마사지',
        desc: '임산부 스톤 마사지',
        plans: [
          {
            time: 90,
            price: 1300,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '성장 마사지',
        desc:
          '어린이 전신마사지로, 성장판이 있는 관절을 약하게 자극 하여 부드럽게 풀어주는 마사지입니다(초등학생까지 가능)',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src: 'http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '베이비시터',
        desc: '30개월 까지 가능',
        plans: [
          {
            time: 0,
            price: 300,
          },
        ],
        src:
          'https://media.istockphoto.com/photos/detail-of-hands-massaging-shoulder-blade-picture-id648774244?k=6&m=648774244&s=170667a&w=0&h=cLtQ6QAtLS5XUDy4BuKOL5Yln57LDYn36G_OVlG1i5c=',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage12', // 뒤에 숫자 1 올릴 것
    name: '아모아 스파', // 한국 이름
    engName: 'amoa spa & massage', // 영어 이름
    address: '필리핀 Lalawigan ng Cebu, Lapu-Lapu, 6015 Sitio Malingin', // 주소
    engAddress: '필리핀 Lalawigan ng Cebu, Lapu-Lapu, 6015 Sitio Malingin', // 주소
    latitude: 10.3162655, // 위도, 경도
    longitude: 124.0255953,
    kakao: ['amoaspa'],
    phone: ['+63 32 411 0294'], // 전화번호
    baby: false, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://cebubook.com/mallimg/2019/03/07/1551946245-9914_N_570x323_100_2.jpg',
    source: [
      'http://cebubook.com/mallimg/2019/03/07/1551946245-9914_N_570x323_100_2.jpg',
      'http://cebubook.com/mallimg/2019/03/07/1551946245-6160_N_570x323_100_2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5mByyb7h3EDHlbVwjKjP0bF4W8Bd1WqajvjEFcc2uNRuuhKP&s',
      'http://mblogthumb2.phinf.naver.net/MjAxOTA1MjRfMjg5/MDAxNTU4NjgwMTgwMTU4.0B9QmVup54aJTkzZ7ZbPOHFDTNBRHx-yWKlnb9mvhWAg.sl_QRF69UYbbTkpKSHeX5lQeCZ8uDu6dtBS_0ylGNB4g.JPEG.idealjinious/output_978821622.jpg?type=w800',
    ],
    likes: 20,
    review: 4.5,
    reviewCnt: 42,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '두짓타니에서 무료 픽드랍이 되는 곳이라 방문했습니다.\n한국인 사장님이라 카톡으로 예약하는 것도 편했고 의사소통에 있어서 매우 편리했습니다.\n다만 두명이서 마사지를 받았는데 작은 소리였지마누마사지사 두분이서 계속 소근소근 대화를 나누셔서 잠자기가 조금 어려웠고 매우 신경 쓰였어요.\n그 이외에는 중간중간 괜찮냐고 물어봐주시고 마사지도 평균정도 했던 것 같아요.\n제일 큰 장점이 섬 끝에 있는 두짓타니 리조트에서 무료 픽드랍이 된다는 부분이었습니다!',
        star: 4,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '샹그릴라 픽드랍 가능 사장님은 친절해요~\n마사지는 아파요 아프다해도 압자체가 강해 아팠습니다.\n주먹으로 때리는기술도 안마보단 아픔에가까웠어요. 잘받고 갑니다',
        star: 2,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '진짜 깔끔 가성비 최고 마사지!\n필핀 수도없이 다녔지만 인생마사지임 젤리쿠션 대박편함',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '커플룸은 룸타입이 아니고 칸막이에 커튼정도 있어서 불편해요...\n옆에 떠드는 소리 다 들리고...마사지사는 잡담없이 잘 합니다',
        star: 3,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '11:00',
    closeTime: '23:00',
    menus: [
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 60,
            price: 390,
          },
          {
            time: 90,
            price: 550,
          },
          {
            time: 120,
            price: 700,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/23156E495201D41315',
      },
      {
        name: '드라이 마사지',
        desc: '드라이 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          'http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '오일 마사지',
        desc: '오일 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '아로마핫오일 마사지',
        desc: '아로마핫오일 마사지',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          ' https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '스톤 마사지',
        desc: '스톤 마사지',
        plans: [
          {
            time: 90,
            price: 1000,
          },
          {
            time: 120,
            price: 1300,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '키즈 마사지',
        desc: '키즈 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src: 'http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage13', // 뒤에 숫자 1 올릴 것
    name: '와 스파', // 한국 이름
    engName: 'wah spa', // 영어 이름
    address:
      'M.L, M.L. Quezon National Highway, Sitio Masiwa, Lapu-Lapu City, 6015 Cebu, 필리핀', // 주소
    engAddress:
      'M.L, M.L. Quezon National Highway, Sitio Masiwa, Lapu-Lapu City, 6015 Cebu, 필리핀', // 주소
    latitude: 10.2762788, // 위도, 경도
    longitude: 123.9762205,
    kakao: ['wahspa'],
    phone: ['+63 927 744 3954'], // 전화번호
    baby: false, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'https://cebutrip.net/files/thumb-68ab773430b5f4b4e5326c8fd84965be.jpg',
    source: [
      'https://cebutrip.net/files/thumb-68ab773430b5f4b4e5326c8fd84965be.jpg',
      'https://lh5.googleusercontent.com/p/AF1QipMsJ9GRooNKDKrstTysuUYszVkap4D4b3WWOMgN=w1200-h1976-p-k-no',
      'http://cafefiles.naver.net/MjAxOTA0MjJfMjQ5/MDAxNTU1OTExNjYyODQ1.ZTurYONaB5eBm8ii1W3dMsFDxpYCbOCtTehroKEjo9wg.SCk-F2RKliDtd_Zvi2Ohqku_jo5KnGGNOav-VSu1W_gg.PNG.yjyee1113/%BF%CD%BD%BA%C6%C4_%C7%C8%B5%E5%B6%F8_ver.ED14.png',
      'https://lh5.googleusercontent.com/p/AF1QipNhDHelaMm7yMKobvUZ6002WZP1uRQvu-GQ7yey=w1200-h642-p-k-no',
    ],
    likes: 20,
    review: 4.4,
    reviewCnt: 30,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '진짜 친절하셔요! 새벽 2시 비행기라 애매했는데 먼저 비행시간 맞춰서 깨워줄테니 한숨 자고가라고 하셔서 ㅠㅠ\n마사지받고 깨끗한 자리에서 한시간정도 편하게 자고왔네요! 넘나 좋음요! 추천!',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '가성비 짱짱 이에요 ! 저는 핫스톤 추천합니다 \n물놀이 하고 와서 따뜻한 핫스톤 맛사지받으니 정말 개운하고 몸이 풀리는듯했어요 👍\n조금더 집중적으로 받고 싶은 부분 얘기하면 여 사장님이 \n직접 테라피스트 에게 전달해주시고 확인해주시더라구요 ~',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '오전에 애들이랑 수영하다가 픽업요청해서 방문드렸는데 후기처럼 여사장님 왕 친절하시네요\n저희 애들 성장마사지 어떨까했는데 걱정했는데\n막내 아들이 너무좋다고하네요 제 옆에서 받았는데 나중에는 곤히 자더라고요 부모님과 저는 스톤받았는데 확실히 시원하네요\n오후5시전에 방문시 10%할인까지 가성비 정말 좋은곳인거 같습니다.저는 내일도 방문 할려고요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '마사지 배드가 아니여서 마사지 받는동안 목에 무리가 많이 간것 빼고는 괜찮았습니다.\n픽업 서비스도 해주셔서 좋은 추억 얻고 갑니다.',
        star: 4,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '12:00',
    closeTime: '24:00',
    menus: [
      {
        name: '드라이 마사지',
        desc: '드라이 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          ' http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '오일 마사지',
        desc: '오일 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
          {
            time: 90,
            price: 650,
          },
          {
            time: 120,
            price: 850,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '아로마 오일 마사지',
        desc: '아로마 오일 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 750,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '로션 마사지',
        desc: '로션 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 750,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '핫스톤 마사지',
        desc: '핫스톤 마사지',
        plans: [
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '알로에베라 마사지',
        desc: '알로에베라 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '성장 마사지',
        desc: '성장 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
        ],
        src:
          'http://blogfiles.navㅊer.net/MjAxODA0MDNfMTU1/MDAxNTIyNzI0NzQzOTEw.pQ6MdZSzG7LVOmkq3v6EgA3zLXnniZs0-qvJN3ajA7Ag.s6K5WjP2GOzQjLQBMLIIwdbA0qLeofNOXEbLu0_Bk9Ug.JPEG.sunz123/holidayinn3-1024x575.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage14', // 뒤에 숫자 1 올릴 것
    name: '앤디 스파', // 한국 이름
    engName: 'andy spa', // 영어 이름
    address: 'PH, P Sy, 57G Gorordo Ave, Cebu City, Cebu, 필리핀', // 주소
    engAddress: 'PH, P Sy, 57G Gorordo Ave, Cebu City, Cebu, 필리핀', // 주소
    latitude: 10.319338, // 위도, 경도
    longitude: 123.8974986,
    kakao: ['andychoi616'],
    phone: ['+63 32 401 3078'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTFfMTQ5/MDAxNTYwMjMwNTA4Njk0.OF1kpNFLfPZmtrBDHNwGP_KGLRun6gD_bcLmp5bIkzQg.N47Iu6zax58ghA7B2eMxJoF1x53EbJgzrOAU1meZ0jIg.JPEG.parksinhye33/IMG_0755.jpg?type=w800',
    source: [
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTFfMTQ5/MDAxNTYwMjMwNTA4Njk0.OF1kpNFLfPZmtrBDHNwGP_KGLRun6gD_bcLmp5bIkzQg.N47Iu6zax58ghA7B2eMxJoF1x53EbJgzrOAU1meZ0jIg.JPEG.parksinhye33/IMG_0755.jpg?type=w800',
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA2MTFfNDEg/MDAxNTYwMjMyNzA1Mjgz.1NmqkKPNdZBsZMeU1gWWCcs91MnlQ4UAlaS54LvjOeYg.qGg5KkxZrKyj6TzYhH0b45yoKCbuLG2KEEbvvFNmvFUg.JPEG.parksinhye33/g1.JPG?type=w800',
      'http://blogfiles.naver.net/MjAxOTEwMjdfMjA5/MDAxNTcyMTYxNTM0NzQz.hb_OH_F9B2exAhwfYNyBCSNZENUXaSyFgwwQy1jdJ5og.FY-nCaT6E_9U_x-9bWQ8yfpAYVU_IkH9x7xvbGwHuFEg.JPEG.9319love/KakaoTalk_20191020_184332367.jpg',
      'http://cafefiles.naver.net/MjAxOTA3MDlfMTQ3/MDAxNTYyNjQ5Mjk1MTgz.dEnl_er9-gSrio4UuA4mcPfGYLnSd3Fh6RHbViXVCxsg.b4gFbtKwIDlpTnQRMP17Mvk7xmjZrwQmR47MYgjpcQYg.JPEG/DSC00814.jpg',
    ],
    likes: 20,
    review: 4.2,
    reviewCnt: 94,
    reviews: [],
    googles: [
      {
        src: 'https://randomuser.me/api/portraits/women/68.jpg',
        writer: 'google',
        comment:
          '친절하고 이동시에 픽.드랍 잘해주세요~시설이 막 고급은 아니지만 만족합니다.\n입•출국,중간 방문해서 3번 받았고 마사지 스킬이야 케바케지만..괜찮았어요~\n새벽 도착시에도 사장님이 안주무시고 맞이해주셨어요~\n가격도 저렴한 편이고 담에 재방문 의사있어요.',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/43.jpg',
        writer: 'google',
        comment:
          '만족도 : 아내, 장모님 (10점 중 9점) \n본인 , 장인어른 (10점 중 7점)\n아시죠? 마사지사 별로 개인차 무지 큽니다.\n한국인 운영하는 곳이구요. 시설은 그냥 그래요.\n아내가 마사지 하루에 2번씩 받는데 여기 괜찮았다고 하네요. 저는 발마사지 였는데, 오일 말고 드라이 좋아하시는분은 괜찮아요. 근데 저 했던 남자분은 강약 없이 무조건 힘으로 ... ㅋ \n강한거 좋아하시면 남자 부르세요 ㅎ 전반적으로 만족해요',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '가격이 너무착한데 픽,드랍도 가능하고 무엇보다 마사지가 좋았어요.\n사장님의 응대가 참 친절해서 기분이 좋았습니다.\n다음에 또 오고싶은 샵이에요!',
        star: 5,
        date: new Date(),
      },
      {
        src: 'https://randomuser.me/api/portraits/men/78.jpg',
        writer: 'google',
        comment:
          '2명이서 맛사지 해서 어디가 시원한지도 모르겠으며 2시간 맛사지 받는데\n시간때운다고 했던데 계속해서 시원한게 아니고 아프기만 했다',
        star: 2,
        date: new Date(),
      },
    ],
    tags: ['마사지'],
    openTime: '00:00',
    closeTime: '00:00',
    menus: [
      {
        name: '지압 마사지',
        desc: '지압 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg ',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 550,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src: ' http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '아로마 오일 마사지',
        desc: '아로마 오일 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션 마사지',
        desc: '로션 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '성장 마사지',
        desc: '성장 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 550,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          'http://blogfiles.navㅊer.net/MjAxODA0MDNfMTU1/MDAxNTIyNzI0NzQzOTEw.pQ6MdZSzG7LVOmkq3v6EgA3zLXnniZs0-qvJN3ajA7Ag.s6K5WjP2GOzQjLQBMLIIwdbA0qLeofNOXEbLu0_Bk9Ug.JPEG.sunz123/holidayinn3-1024x575.jpg',
      },
      {
        name: '핫스톤 마사지',
        desc: '100%천연사용/민감피부 추천/프리미엄 마사지',
        plans: [
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '알로에베라 마사지',
        desc: '100%천연사용/민감피부 추천/프리미엄 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '코코넛 오일 마사지',
        desc: '100%천연사용/민감피부 추천/프리미엄 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/214E8A47584D747928',
      },
      {
        name: '부황 마사지',
        desc: '100%천연사용/민감피부 추천/프리미엄 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'http://mblogthumb1.phinf.naver.net/20140804_236/ddhani14_14071204575012gCzi_JPEG/yay20ec3d4.jpg?type=w2',
      },
      {
        name: '시아추 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 90,
            price: 1100,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src:
          'http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '로션 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 60,
            price: 900,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          'https://cdn.pixabay.com/photo/2018/09/25/08/38/woman-3701713_960_720.jpg',
      },
      {
        name: '아로마 오일 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 850,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'http://www.relaxkutak.rs/wp-content/uploads/2017/03/four-hand-massage.jpg',
      },
      {
        name: '코코넛 오일 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 60,
            price: 900,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          'https://bloggerkaranwrites.files.wordpress.com/2016/04/download.jpg?w=550',
      },
      {
        name: '알로에베라 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 60,
            price: 1100,
          },
          {
            time: 90,
            price: 1350,
          },
          {
            time: 120,
            price: 1700,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '핫스톤 네손 마사지',
        desc: '두명의 테라피스로 시간절약/ 효과두배',
        plans: [
          {
            time: 90,
            price: 1350,
          },
          {
            time: 120,
            price: 1700,
          },
        ],
        src:
          ' https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage15', // 뒤에 숫자 1 올릴 것
    name: '플라워트리 스파', // 한국 이름
    engName: 'flower tree spa', // 영어 이름
    address: '필리핀 Lalawigan ng Cebu, Lapu-Lapu, 마리바고,필리핀', // 주소
    engAddress: '필리핀 Lalawigan ng Cebu, Lapu-Lapu, 마리바고,필리핀', // 주소
    latitude: 10.2862668, // 위도, 경도
    longitude: 123.9955926,
    kakao: ['flowerspa'],
    phone: ['+63 966 680 9344'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://mblogthumb3.phinf.naver.net/MjAxODAyMTNfMjEw/MDAxNTE4NDgxNTI2NjI2.qwfJpnMBomZK7nML3xrzQu888eYVc6F2auLtuWztl7Mg.f9dbiy5rHuVQL5o1CRnANtpt1aTQR6IZrsqNbvsnt1kg.JPEG.j1092j/IMG_5390.JPG?type=w800',
    source: [
      'http://mblogthumb3.phinf.naver.net/MjAxODAyMTNfMjEw/MDAxNTE4NDgxNTI2NjI2.qwfJpnMBomZK7nML3xrzQu888eYVc6F2auLtuWztl7Mg.f9dbiy5rHuVQL5o1CRnANtpt1aTQR6IZrsqNbvsnt1kg.JPEG.j1092j/IMG_5390.JPG?type=w800',
      'http://mblogthumb4.phinf.naver.net/MjAxODAyMTNfMTMw/MDAxNTE4NDgxNTkwMjA3.lbob_Uu8Fub-kCYMIbZivGjN8EJuC_29LuR8mjYgRCMg.OSN7FBIZOAG8mxP_vBNrNtdxEdsMIu1aBJcSKaXc__cg.JPEG.j1092j/IMG_5437.JPG?type=w800',
      'http://blogfiles.naver.net/MjAxODA3MDlfMjIw/MDAxNTMxMTIzMzE3NTQz.lvVeQTjFwcwsQYi9nYbmwlorZpomuh6Qg_E6CF5X_6Ug.qxSe4pNPNyBg5liDkuIjjdYDZ9Bz02r_8fFYIA3I-uwg.JPEG.lesu0/%BC%BC%BA%CE_%C7%C3%B6%F3%BF%F6%C6%AE%B8%AE%BD%BA%C6%C4_%287%29.jpg',
      'https://file.philgo.com/data/upload/6/1919196',
    ],
    likes: 20,
    review: 4.4,
    reviewCnt: 72,
    reviews: [],
    googles: [
      {
        writer: 'google',
        comment:
          '세부에서 받은 마사지 중 가장 마음에 들었습니다. 시원해요!!\n비싸다고 마사지가 시원하진 않더라구요.ㅎ 가격도 괜찮고 직원분들 다 친절해요.\n세이브모어에서 장보고 숙소로 갈 수 있어 좋았어요. 추천추천',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '오늘 핫스톤 마시지 받고 공항으로 편안히 왔습니다(2명, 90분이상시 공항 드랍 무료)\n청결한 시트에 군더더기 없이 깔끔한 안내가 마음에 들었습니다.\n가장 중요한 테라피스트분의 실력! 압이 적당하며 제대로 된곳을 짚어서 풀어주는 파워와 스킬이 대단했습니다.\n재방문 의사 100%입니다^^',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '가격 저렴하고 시설 조아요. 인기많으니 예약은 필수고, 무료 픽업드랍도 좋았어요.\n첨 들어가면 스탭이 뺀띠빼고다보소 라고 하시는데 당황하지 말고 다 벗으면 됩니다ㅋ\n팁은 다 끝나면 옷가지 옆에 팁봉투 있어요!',
        star: 4,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '가장 만족도 있었던 마사지. 마사지에 만족한 가족 중 한명이 마사지하시는 분들을\n한국으로 데려가서 마사지샵을 차리고싶다고 할 정도.\n가격이 착한게 흠 아닌 흠. 돈 더내고 받아도 됨',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '1. 픽드랍 무료\n2. 깨끗함\n3. 마사지는 평균\n4. 가성비는 소소\n\n현지인이 운영하는 스파보다 비싸지만\n가격자체로 보면 나쁘지 않음\n다만 마사지사분들의 실력은 좀 아쉬웠음',
        star: 4,
        date: '2019.11',
      },
    ],
    tags: ['마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '드라이 전신 마사지',
        desc: '맨손으로 하는 지압 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          ' http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '발(하체) 마사지',
        desc: '발(하체) 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src: ' http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '아로마 오일 마사지',
        desc: '로즈, 페퍼민트, 레몬, 카모마일 중 선택',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션 마사지',
        desc: '민트, 클라리티 중 선택',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '100분 콤보 마사지',
        desc: '드라이마사지 40분+ 아로마오일 또는 로션마사지 60분',
        plans: [
          {
            time: 100,
            price: 800,
          },
        ],
        src:
          'https://i.pinimg.com/474x/6d/d4/40/6dd4404e0adac79b9b7905060aac8094.jpg',
      },
      {
        name: '이파카센트 오일마사지',
        desc: '시원함을 선사하는 필리핀의 명물 이피카센트 오일 마사지',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '알로에 젤 마사지',
        desc: '한국에서 공수한 알로에 젤 이용한 마사지',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '코코넛 오일 마사지',
        desc: '마셔도 가능한 최상급의 버진 코코넛오일',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/214E8A47584D747928',
      },
      {
        name: '스톤 마사지',
        desc:
          '뜨거운 스톤을 사용하여 혈액순환에 도움을 주는 피로회복에 좋은 고급전신 마사지(코코넛 또는 아로마오일 중 선택)',
        plans: [
          {
            time: 90,
            price: 950,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src:
          'https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '네손 마사지',
        desc:
          '두명의 마사지사가 네손으로 하는 전신마사지(코코넛오일, 아로마오일, 로션 중 선택)',
        plans: [
          {
            time: 90,
            price: 1500,
          },
          {
            time: 120,
            price: 1850,
          },
        ],
        src:
          'http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '핫 스톤 네손 마사지',
        desc: '코코넛 오일, 아로마 오일 중 선택',
        plans: [
          {
            time: 60,
            price: 900,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Rt8rcjAHfphR1S8Q2qcaLEHKiryS84nFlTZkOT0-oQHT1HFa&s',
      },
      {
        name: '성장 마사지1',
        desc:
          '아로마 오일 또는 로션으로 아이들의 성장 상황에 맞추어 부드럽게 하는 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://blogfiles.naver.net/20120719_283/forever0125_1342660524943Y2GKb_JPEG/546%A4%CB%A4%B5%A4%BE%A4%A9.jpg',
      },
      {
        name: '성장 마사지2',
        desc:
          '코코넛 오일(저자극)로 아이들의 성장 상황에 맞추어 부드럽게 하는 마사지',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src:
          ' http://blogfiles.naver.net/MjAxNzAzMDJfMjE1/MDAxNDg4NDMwNTI2OTY3.4Xlu60V_BhFuchIv8qWWbMTa8YeBFnY2BTgRqI4gBNQg.NGMzHzdDTcvM1Iq1hEhIYdcyK5tuQ5bsx98G5IHvAgog.JPEG.styx-aromaderm/01_%C5%B0%B5%E55.jpg',
      },
      {
        name: '임산부 마사지1',
        desc:
          '아로마 오일 또는 로션으로 임산부의 혈액순환을 돕는 테크니컬 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://blogfiles.naver.net/20130730_188/willspa2_13751823254638i4Mt_JPEG/1375182324227_EFBFBDD3BBEFBFBDCEB8EFBFBDEFBFBDEFBFBDEFBFBD.jpg',
      },
      {
        name: '임산부 마사지2',
        desc: '코코넛 오일(저자극)로 임산부의 혈액순환을 돕는 테크니컬 마사지',
        plans: [
          {
            time: 60,
            price: 650,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1100,
          },
        ],
        src:
          'http://blogfiles.naver.net/20150314_217/momsthetic_14263289732998zb7i_PNG/%C0%D3%BB%EA%BA%CE%B8%B6%BB%E7%C1%F62.PNG',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage16', // 뒤에 숫자 1 올릴 것
    name: '더 포레스트 스파', // 한국 이름
    engName: 'the forest spa', // 영어 이름
    address: '필리핀 Lalawigan ng Cebu, Mandaue, MJ1106 building', // 주소
    engAddress: '필리핀 Lalawigan ng Cebu, Mandaue, MJ1106 building', // 주소
    latitude: 10.338338, // 위도, 경도
    longitude: 123.9283746,
    kakao: ['flowerspa'],
    phone: ['+63 966 680 9344'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://blogfiles.naver.net/MjAxOTA4MjVfMjU4/MDAxNTY2NzQzMzc5NTI4.xA3VsWMfc4R_2aexikcqQEW8migVoz2RHEArPna7DQ4g.ow3RQIz_gAfnPCb2oeu80LBv21AyDkG6vF2P1FEEt48g.JPEG.hanhe87/20190822_000530.jpg',
    source: [
      'http://blogfiles.naver.net/MjAxOTA4MjVfMjU4/MDAxNTY2NzQzMzc5NTI4.xA3VsWMfc4R_2aexikcqQEW8migVoz2RHEArPna7DQ4g.ow3RQIz_gAfnPCb2oeu80LBv21AyDkG6vF2P1FEEt48g.JPEG.hanhe87/20190822_000530.jpg',
      'http://blogfiles.naver.net/MjAxOTAxMjdfMTAz/MDAxNTQ4NTQ4OTMxOTY4.5jY0wTcuU9dpc9_Mnd5Q_D2vEuwNQt7KojCIoVWis_Eg.b26MYPFOZd1Et5dTLTa2S7eHIVNFynHPPqNcbl8ZVXog.JPEG.wngml_0719/2019-01-26-19-26-31.jpg',
      'http://blogfiles.naver.net/MjAxOTAzMTlfMjUw/MDAxNTUyOTg4MzYyNzM0.mE6BWF8AEym09FumUw0DImXf2Ye-Zgzc5hIsQ80qCQAg.6Bxc8QyLqc5k60ZCBxsexQsF1ZaqI6HXbaHiAf651Ikg.JPEG.hyosin1739/KakaoTalk_20190319_183819891.jpg',
      'http://blogfiles.naver.net/MjAxOTA3MTdfMTI1/MDAxNTYzMzY4NDkyNzU0.TUii5GawlTzCEQFp7ZH_zkr9XhxKZAjLbacfurAy6aYg.mAT0qw2CIslk8qpY-pqGVdq39V5vCTgujBkqF7Vz0ycg.PNG.csn324/Screenshot_20190717-210304%281%29.png',
    ],
    likes: 20,
    review: 4.5,
    reviewCnt: 175,
    reviews:[],
    googles: [
      {
        writer: 'google',
        comment:
          '한국인 샾으로 시설이 깔끔합니다.\n위생속옷 구비. 잘 모르는 곳가서 바가지에 위생이 걱정된다면 고민없이 가셔도 좋을 샾입니다.\n전체적 수준이 중상위',
        star: 4,
        date: '2020.01',
      },
      {
        writer: 'google',
        comment:
          '돈이 전혀 아깝지않습니다. 시설도 깨끗하고 굉장히 만족스럽네요.\n마사지사들 에티튜드도 좋았습니다. 프론트에 한국인 남자분이 사장님인가요??\n굉장히 친절하시고 픽드랍서비스도 좋았어요~ 공항가기전에 마사지받고 샤워도하고~ 기분좋게 한국갑니다~~ 번창하세요~',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '이곳은 아이들 놀수있는 유아방도있고~ 마사지도 정석으로 받는 깔끔한느낌~ 어제받고 오늘다시또왔어요~^^',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '깨끗하고 좋았다 환전도 해주시고 마사지도 괜찮았음.직원들도 친절하셨다!',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '테라피스트 실력도 좋고, 무엇보다 너무 깨끗해요.\n입국수면팩 적극 권장. 특히 보홀피어1에서 들어가는시는분\n참고하세요~~ 한국사장님친절은기본!',
        star: 5,
        date: '2019.11',
      },
    ],
    tags: ['마사지'],
    openTime: '11:00',
    closeTime: '24:00',
    menus: [
      {
        name: '건식 마사지',
        desc: '시아추 마사지',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          ' http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '발 마사지',
        desc: '발 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src: ' http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '아로마 오일 마사지',
        desc: '유칼립투스, 라벤더, 레몬 그라스, 페퍼민트 중 선택',
        plans: [
          {
            time: 60,
            price: 500,
          },
          {
            time: 90,
            price: 700,
          },
          {
            time: 120,
            price: 900,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '코코넛 오일 마사지',
        desc: '코코넛 오일 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 900,
          },
          {
            time: 120,
            price: 1200,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/214E8A47584D747928',
      },
      {
        name: '핫 스톤 마사지',
        desc: '핫 스톤 마사지',
        plans: [
          {
            time: 90,
            price: 1000,
          },
          {
            time: 120,
            price: 1300,
          },
        ],
        src:
          ' https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '성장 마사지',
        desc: '성장 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
        ],
        src:
          'http://blogfiles.naver.net/20120719_283/forever0125_1342660524943Y2GKb_JPEG/546%A4%CB%A4%B5%A4%BE%A4%A9.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage17', // 뒤에 숫자 1 올릴 것
    name: '탑 스파', // 한국 이름
    engName: 'top spa', // 영어 이름
    address: 'Lapu-Lapu City, Cebu, 필리핀', // 주소
    engAddress: 'Lapu-Lapu City, Cebu, 필리핀', // 주소
    latitude: 10.3304733, // 위도, 경도
    longitude: 123.9060737,
    kakao: ['topspacebu'],
    phone: ['+63 956 130 2020'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://blogfiles.naver.net/MjAxOTEwMTJfODIg/MDAxNTcwODA3NzkzNjE5.Rh6_OCOHzZB_obk2NK75SHnVb87BBRi-TP1_RQw_ifkg.xOg0on_0C4Bhf_LAJze4jiivXTVfe1-RAFIDCRS-EKAg.JPEG.oooooony0420/IMG_1001.jpg',
    source: [
      'http://blogfiles.naver.net/MjAxOTEwMTJfODIg/MDAxNTcwODA3NzkzNjE5.Rh6_OCOHzZB_obk2NK75SHnVb87BBRi-TP1_RQw_ifkg.xOg0on_0C4Bhf_LAJze4jiivXTVfe1-RAFIDCRS-EKAg.JPEG.oooooony0420/IMG_1001.jpg',
      'https://d2mgzmtdeipcjp.cloudfront.net/files/good/2019/06/19/15609130516272.jpg',
      'https://ph.monkeytravel.com/attach/ckeditor/PH/201806/o_1cgvgi63f14eq1c9i4391b76l6ra.jpg?w=740&h=0',
      'http://blogfiles.naver.net/MjAxODEwMDlfMjIg/MDAxNTM5MDk1MDg0Nzc3.mJnybvPjvAFq-uSGGXM5VkTkqUVI8Afd8n1c1lUH2ksg.0-pT3iTU0CZbnfavNzEYhlWLecngCz_Hal8gN7K6A40g.JPEG.bonbonchouchou/1539095071788.jpg',
    ],
    likes: 20,
    review: 4.2,
    reviewCnt: 98,
    reviews:[],
    googles: [
      {
        writer: 'google',
        comment:
          '세부갈때마다 자주 이용하는 마사지샵\n카운터에 한국인 직원분은 표정이 밝진 않아 매번갈때마다 기분이 좋진 않지만 필리핀 직원분들은 항상웃고있고 친절하다,\n마사지 받기전 간단한 설문조사를 통해 내가 원하는 마사지타입을 선택할수있다,\n대체적으로 마사지사분들의 마사지도 괜찮았고 샤워실이 1인샤워실로 되어있어 좋긴한데\n화장실겸 샤워실이라 3군데다 샤워하고 있으면 화장실 이용이 불편하긴 하다',
        star: 5,
        date: '2020.01',
      },
      {
        writer: 'google',
        comment:
          '미리한줄 평\n공항갈때 말고는 굳이;;;다른분들은 세부, 막탄에서 다른 마사지 스파 안가봤나요??\n솔직히 여기 장점은 공항가까운거 밖에 없는거 같음.\n샤워실이 좋다는 사람 진짜 광고아니에요?? 물살이 너무 약해서 받아논 물을 바가지로 퍼서 씻었는데;\n평소 하천에서 씻으시나요? 샤워실 최악임\n당일 해프닝\n1.마사지사들이 밖에 줄을 서있는데도 대기하고 있었음. 보니깐 현지 셀럽?같은 사람이 있어서 그거 발씻는거 구경하고 서로 사진 찍겠다고 대기 하고 있던거였음ㅋㅋㅋ 단체사진 찍고 그 담에 해줌\n2.마사지실 들어갔는데 옷 다벗으라고 함. 바구니에 일회용 팬티도 없음ㅋ 몇번을 물어봐도 벗으라고 함 팬티없냐니깐 그때 가져다 줌\n3.잡담 오질남. 잡담할때는 손에 힘이 풀림ㅋㅋ\n4.이건 진짜 해프닝 이지만ㅋㅋㅋ마사지사 방구낌ㅋ',
        star: 1,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment: '공항에서 가깝고 픽드랍이됨',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '픽드랍 서비스 시티까지 최고! 4인 2시간받아서 그런가 ㅎ\n실력도좋고 친절하고 깨끗하당 샤워시설까지:)\n공항도 나름 가까움!',
        star: 5,
        date: '2019.11',
      },
      {
        writer: 'google',
        comment: '세부공항 귀국전 굿',
        star: 4,
        date: '2019.11',
      },
    ],
    tags: ['마사지'],
    openTime: '10:00',
    closeTime: '24:00',
    menus: [
      {
        name: '드라이 마사지',
        desc: '드라이 마사지',
        plans: [
          {
            time: 60,
            price: 750,
          },
          {
            time: 90,
            price: 1100,
          },
        ],
        src:
          ' http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '아로마 오일 마사지',
        desc: '아로마 오일 마사지',
        plans: [
          {
            time: 60,
            price: 750,
          },
          {
            time: 90,
            price: 1100,
          },
          {
            time: 120,
            price: 1400,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '로션 마사지',
        desc: '로션 마사지',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '코코넛 오일 마사지',
        desc: '코코넛 오일 마사지',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 90,
            price: 1200,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src: 'https://t1.daumcdn.net/cfile/tistory/214E8A47584D747928',
      },
      {
        name: '핫 스톤 마사지',
        desc: '핫 스톤 마사지',
        plans: [
          {
            time: 60,
            price: 850,
          },
          {
            time: 120,
            price: 1300,
          },
          {
            time: 120,
            price: 1600,
          },
        ],
        src:
          ' https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '알로에 마사지',
        desc: '알로에 마사지',
        plans: [
          {
            time: 60,
            price: 850,
          },
          {
            time: 120,
            price: 1300,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src: ' http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '임산부 마사지',
        desc: '임산부 마사지',
        plans: [
          {
            time: 60,
            price: 800,
          },
          {
            time: 120,
            price: 1200,
          },
          {
            time: 120,
            price: 1500,
          },
        ],
        src:
          'http://blogfiles.naver.net/20130730_188/willspa2_13751823254638i4Mt_JPEG/1375182324227_EFBFBDD3BBEFBFBDCEB8EFBFBDEFBFBDEFBFBDEFBFBD.jpg',
      },
      {
        name: '성장 마사지',
        desc: '성장 마사지',
        plans: [
          {
            time: 60,
            price: 550,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://blogfiles.naver.net/20120719_283/forever0125_1342660524943Y2GKb_JPEG/546%A4%CB%A4%B5%A4%BE%A4%A9.jpg',
      },
    ],
  },
  {
    category: 'Massage', // 수정하지 말 것
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // 수정하지 말 것
    id: 'massage18', // 뒤에 숫자 1 올릴 것
    name: '리디아 스파', // 한국 이름
    engName: 'lydia spa', // 영어 이름
    address: 'Lapu-Lapu City, Cebu, 필리핀', // 주소
    engAddress: 'Lapu-Lapu City, Cebu, 필리핀', // 주소
    latitude: 10.2962758, // 위도, 경도
    longitude: 123.9621881,
    kakao: ['lydiaspa'],
    phone: ['+63 995 393 4200'], // 전화번호
    baby: true, // 베이비시터
    korean: true, // 한국어
    pickup: true, // 픽업
    reservations: [], // 수정하지 말 것
    preview:
      'http://cafefiles.naver.net/MjAxOTAyMDFfMTUx/MDAxNTQ4OTQ3MDY1MDE3.Ae1go-CTGUNY3mD7Dkn1pw-4ucuwaY1qSBMdIiqqN0Ag.kdRN37kSAXAZiy6l6FKHah87e5cHaIpVARSR9iIe10kg.JPEG.kimbora910/20181118_072329.jpg',
    source: [
      'http://cafefiles.naver.net/MjAxOTAyMDFfMTUx/MDAxNTQ4OTQ3MDY1MDE3.Ae1go-CTGUNY3mD7Dkn1pw-4ucuwaY1qSBMdIiqqN0Ag.kdRN37kSAXAZiy6l6FKHah87e5cHaIpVARSR9iIe10kg.JPEG.kimbora910/20181118_072329.jpg',
      'http://blogfiles.naver.net/MjAxOTA3MThfMjk3/MDAxNTYzNDM4MjY1NDg2.BhjRF3OU18qQQmb3aS0sAL0EY2qE8szX94Kmqo8fh5gg.LdLy6QTJFaHuqYHkhMB7hwzeuwQNyV2V_k-LUkdrtnEg.JPEG.lovesza/IMG_2897.jpg',
      'https://img-wishbeen.akamaized.net/post/1554041119210_719d6fca-566e-47b8-88ec-5c095960560d.jpg',
      'http://blogfiles.naver.net/MjAxOTA3MDdfOSAg/MDAxNTYyNTA3Mzk0MDAx.z1uUhe5lDxmAwMd6jRN493puWFwuurlYpjHnQ2YJV70g.K45LgZtmXZvK9CmsPcfSnK9aUy_EFuq2gW750sB-at0g.JPEG.84young/IMG_4546.JPG',
    ],
    likes: 20,
    review: 4.6,
    reviewCnt: 44,
    reviews:[],
    googles: [
      {
        writer: 'google',
        comment:
          '따미야 근처라 마사지 후 가까워서 여러 곳 방문하기도 좋네요\n특히 마사지가 일품',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '여행일정 마지막날 우연찮게 방문해서 건식마사지 받았는데 최고엿습니다\n사장님도 매우친절하시고 다이빙투어였었는데\n다음엔 사장님 가게 다시방문해보고싶네요',
        star: 5,
        date: '2019.12',
      },
      {
        writer: 'google',
        comment:
          '시설은 다른 비싼 스파대비 떨어지지만 사장님 친절하시고\n가격 저렴합니다 특히 마사지사들이 대체로 실력이 좋아 대부분이 만족했습니다\n6명 갔는데 5명 만족, 1명 불만족이었습니다',
        star: 5,
        date: '2019.10',
      },
      {
        writer: 'google',
        comment: '일단 안마를 그닥...\n그리고 소음이 심해 비추',
        star: 2,
        date: '2019.10',
      },
      {
        writer: 'google',
        comment:
          '픽드랍을 넓은 범위에서 서비스해주기 때문에 이용했습니다.\n애플턴에서 샹그릴라로 이동했습니다. 건물 외관과 내부의 분위기는 다소 올드한\n느낌이지만 마사지사의 실력이 인상적입니다. 마사지의 만족도는\n업체의 문제가 아니라 사람을 잘 만나야 하지만 같이 간 일행 또한 만족한 것을 보니 이곳에서는 만족할\n확률이 높을 듯 합니다. 드라이 마사지 이용했습니다.\n입고 있던 옷 위에 큰 타월만 올리고 마사지를 하니 입고 갈 옷 종류를\n신중하게 선택하십시오.',
        star: 4,
        date: '2019.09',
      },
    ],
    tags: ['마사지'],
    openTime: '00:00',
    closeTime: '24:00',
    menus: [
      {
        name: '꾸욱 꾸욱이 마사지',
        desc:
          '피곤에 지친 몸 전체 또는 원하시는 부위를 건식으로 손가락과 손바닥등으로 꾹꾹 눌러서 하는 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          ' http://www.pallas70.hu/_szerkesztes/kepek-hirek/edumed/thai_massage2.jpg',
      },
      {
        name: '맨들 맨들이 마사지',
        desc:
          '소중한 내피부를 위해 로션을 이용해서 수분과 촉촉함을 동시에 온몸 구석 구석 해주는 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'https://us.123rf.com/450wm/kzenon/kzenon1401/kzenon140100451/25303165-인도네시아어-아시아-여성에게-아름다움-웰빙-스파-에센셜-오일과-아로마-테라피-마사지를주는-안마사.jpg?ver=6',
      },
      {
        name: '스멜 스메리 마사지',
        desc:
          '각기 다른 효능을 지닌 여러 종류의 아로마중 원하시는 향을 선택 하여 온몸 또는 원하시는 부위가 지정가능한 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src:
          'http://www.newsworks.co.kr/news/photo/201808/210504_98396_343.jpg',
      },
      {
        name: '베라 베에라 마사지',
        desc:
          '뜨거운 세부에서 즐거운 물놀이 후 햇볕에 손상되고 지친 피부를 베라알로에를 이용해 부드럽게 마사지하여 피부에 수분과 진정효과를 주는 마사지',
        plans: [
          {
            time: 60,
            price: 600,
          },
          {
            time: 90,
            price: 800,
          },
          {
            time: 120,
            price: 1000,
          },
        ],
        src: 'http://cfile213.uf.daum.net/image/225F6D4054243862035F9D',
      },
      {
        name: '후끈 달끈이 마사지',
        desc:
          '뜨끈 뜨끈한 자연 화산석을 이용해 온몸 구석구석 마사지하여 근육이완 및 피부회복과 스트레스를 풀어주는 마사지',
        plans: [
          {
            time: 60,
            price: 750,
          },
          {
            time: 120,
            price: 1050,
          },
          {
            time: 120,
            price: 1300,
          },
        ],
        src:
          ' https://static.wixstatic.com/media/3a11b0_39a7c7f7464e48c0bcbf47d13201a39e~mv2.jpg',
      },
      {
        name: '고생 고생이 마사지',
        desc: '스페셜 발 마사지',
        plans: [
          {
            time: 60,
            price: 450,
          },
        ],
        src: 'http://www.iloveboracay.co.kr/img/img_cost2.jpg',
      },
      {
        name: '성장 마사지',
        desc: '성장 마사지',
        plans: [
          {
            time: 60,
            price: 400,
          },
          {
            time: 90,
            price: 600,
          },
          {
            time: 120,
            price: 800,
          },
        ],
        src:
          'http://blogfiles.naver.net/20120719_283/forever0125_1342660524943Y2GKb_JPEG/546%A4%CB%A4%B5%A4%BE%A4%A9.jpg',
      },
    ],
  },
];

const placeList = [
  {
    category: 'Place',
    id: 'place1',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    name: '아얄라 몰',
    engName: 'Ayala Center Cebu',
    title: '필리핀 세부 시티의 세부 비즈니스 파크에있는 대형 쇼핑몰입니다',
    subTitle:
      '아얄라 센터 세부는 필리핀 세부 시티의 세부 비즈니스 파크에있는 대형 쇼핑몰입니다. 메트로 마닐라 외곽에 위치한 최초의 아얄라 쇼핑 센터입니다. 1994 년에 문을 열었으며 Ayala Malls가 소유하고 있습니다.',
    address: 'Cardinal Rosales Ave, Cebu City, 4000 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.3181327,
    longitude: 123.9051272,
    phone: ['+63 32 888 3777'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D',
    source: [
      'https://t1.daumcdn.net/cfile/tistory/99849E475C525A5A0D',
      'https://t1.daumcdn.net/cfile/tistory/992332415C524F953D',
      'https://t1.daumcdn.net/cfile/tistory/233A6450569A46F51D',
      'http://cfile228.uf.daum.net/image/276C7F4354C604F42E08FF',
    ],
    likes: 20,
    review: 3.5,
    reviewCnt: 1212,
    reviews: [],
    googles: [],
    tags: ['쇼핑'],
    openTime: '10:00',
    closeTime: '21:00',
  },
  {
    category: 'Place',
    id: 'place2',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {type: 'child', price: 0},
    ],
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
    title:
      '1500년대에 처음 세워지고 1700년대에 재건된 성당으로 아기 예수상이 유명합니다.',
    subTitle:
      '‘아기 예수‘를 의미하는 산토니뇨(Sto. Niño)상이 수호신으로 보관되어 있는 성당으로 1500년대 스페인 총독인 레가스피에 의해 건축되었습니다. 1941년 세계문화유산으로 등재되어 현지인뿐 아니라 많은 관광객이 방문하는 성당입니다. 성당 내부에는 종교적 유물을 전시해 놓은 박물관이 있으며, 외부에는 초를 피우고 기도를 할 수 있는 공간이 마련되어 있습니다. 매년 1월에 개최되는 세부 최대의 축제인 시눌룩 축제의 장소이기도 합니다.',
    name: '산토니뇨 성당',
    engName: 'santoninyo',
    address: 'Pilgrim’s Center, Osmeña Blvd, Cebu City, 6000 Cebu, 필리핀',
    engAddress: 'Pilgrim’s Center, Osmeña Blvd, Cebu City, 6000 Cebu, 필리핀',
    latitude: 10.2943088,
    longitude: 123.9021033,
    phone: ['+63 32 255 6697'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/basilica-minore-del-santo-nino2019522_114453.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/basilica-minore-del-santo-nino2019522_114453.jpg',
      'http://www.itsmorefuninthephilippines.co.kr/uploads/Activity_Images/basilica-minore-del-santo-nino2019522_114453.jpg',
      'https://sa.kapamilya.com/absnews/abscbnnews/media/2018/life/03/28/a-2-sto-nino-cebu-cs.jpg',
      'https://t1.daumcdn.net/cfile/tistory/99C59E365B3D7A9613',
    ],
    likes: 20,
    review: 2.5,
    reviewCnt: 231,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '11:30',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place3',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {type: 'child', price: 0},
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title: '필리핀 세부 시티에 위치한 대형 쇼핑몰입니다.',
    subTitle:
      'SM 세부로도 알려진 SM 시티 세부는 필리핀 세부 시티에 위치한 대형 쇼핑몰입니다. 국내 최대 쇼핑몰 소유주이자 개발자 인 SM Prime Holdings가 소유하고 개발 한 4 번째 쇼핑몰입니다. 메트로 마닐라 이외의 회사 최초의 쇼핑몰이자 필리핀에서 7 번째로 큰 쇼핑몰입니다.',
    name: 'SM 시티몰',
    engName: 'SM City Cebu',
    address:
      'Juan Luna Avenue, North Reclamation Area, Cebu City, Cebu, 필리핀',
    engAddress:
      'Juan Luna Avenue, North Reclamation Area, Cebu City, Cebu, 필리핀',
    latitude: 10.3112522,
    longitude: 123.917669,
    phone: ['+63 32 231 0557'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview: 'http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg',
    source: [
      'http://cebubook.com/mallimg/2016/08/15/1471192670-6771.jpg',
      'http://ttcfd.hanatour.com/@cms_800x530/2017080226/gjfh68/%EC%84%B8%EB%B6%80_SM%EB%AA%B0_TTB(4).JPG',
      'https://t1.daumcdn.net/cfile/tistory/992332415C524F953D',
      'http://cfile228.uf.daum.net/image/276C7F4354C604F42E08FF',
    ],
    likes: 20,
    review: 4.0,
    reviewCnt: 342,
    reviews: [],
    googles: [],
    tags: ['쇼핑'],
    openTime: '11:00',
    closeTime: '23:00',
  },
  {
    category: 'Place',
    id: 'place4',
    price: [
      {
        type: 'adult',
        price: 30,
      },
      {type: 'child', price: 20},
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '1738년에 지어진 삼각형 모양의 스페인 석조 요새로 오늘날에는 정원과 박물관이 있습니다.',
    subTitle:
      '세부 막탄 섬 항구 옆에 위치한 산 페드로 요새는 이슬람 등 외부 해적 세력의 친입을 막기위해 1738년 경 건축되었습니다. 이후 미국 식민지 시절에는 미군의 군 막사로 이용되었으며, 일본 식민지 시절에는 필리핀 포로군 수용소로도 이용되었습니다. 산 페드로 요새 내부에는 세부의 역사를 한 눈에 볼 수 있는 작은 박물관도 마련되어 있습니다.',
    name: '산페드로요새',
    engName: 'san pedro',
    address: 'A. Pigafetta Street, Cebu City, 6000 Cebu, 필리핀',
    engAddress: 'cebu maktan',
    latitude: 10.2924695,
    longitude: 123.9056398,
    phone: ['+63 32 256 2284'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/fort-san-pedro2019522_11460.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/fort-san-pedro2019522_11460.jpg',
      'http://ttcfd.hanatour.com/@cms_800x530/2014062304/gjdp02/%EC%82%B0%ED%8E%98%EB%93%9C%EB%A1%9C%EC%9A%94%EC%83%88.jpg',
      'http://cfile213.uf.daum.net/image/12084D345124891502E644',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '08:00',
    closeTime: '19:00',
  },
  {
    category: 'Place',
    id: 'place5',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '1521년 스페인 탐험가들이 필리핀에서 기독교의 시작을 알리며 만든 십자가입니다.',
    subTitle:
      '스페인의 탐험가 마젤란이 1521년에 만든 십자가가 보관되어 있는 곳으로, 마젤란의 십자가는 1521년 필리핀 최초로 그리스드교 세례를 받은 세부의 추장 라자 후마본과 그 일족의 세례식을 기념하기 위해 제작되었습니다. 마젤란의 십자가가 보관되어 있는 팔각정 천장에는 당시 세례를 받는 장면이 벽화로 그려져 있습니다.',
    name: '마젤란의 십자가',
    engName: 'Krus ni Magellan',
    address: 'P. Burgos St, Cebu City, Cebu, 필리핀',
    engAddress: 'P. Burgos St, Cebu City, Cebu, 필리핀',
    latitude: 10.2935675,
    longitude: 123.9019485,
    phone: ['+63 78 945 6321'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/magellan_s-cross2019522_114918.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/magellan_s-cross2019522_114918.jpg',
      'http://philsalgi.com/xe/files/attach/images/145/455/045/80f773d471536e9b975bc6db1838ee0e.jpg',
      'http://mblogthumb1.phinf.naver.net/MjAxOTA4MjdfMjgz/MDAxNTY2OTAxNDI4MDg2.Ld2lp_xWrgvZL-pa3FiBabl9nhbxhi8_tn671YEigNIg.YB9idpNdCQ7UnOMYv5TsfR-eJwaVqRMI9U5W7JxyR8sg.JPEG.wlstlf1056/SE-1eb97bd7-b727-4b71-b167-c7a8689e24a1.jpg?type=w800',
      'http://ttcfd.hanatour.com/@cms_800x530/2014062378/gjdp9w/%EB%A7%88%EC%A0%A4%EB%9E%80%EC%9D%98%EC%8B%AD%EC%9E%90%EA%B0%80.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '08:00',
    closeTime: '18:00',
  },
  {
    category: 'Place',
    id: 'place6',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '세부에 위치한 도교사원은 대부분의 사람들이 천주교인 필리핀에서 매우 드물게 볼 수 있는 사원으로, 조경이 잘 되어있는 곳입니다.',
    subTitle:
      '세부에 위치한 도교사원은 대부분의 사람들이 천주교인 필리핀에서 매우 드물게 볼 수 있는 사원으로, 조경이 잘 되어있는 곳입니다.',
    name: '세부 도교사원',
    engName: 'Cebu Taoist Temple',
    address: 'Lungsod ng Cebu, Lalawigan ng Cebu',
    engAddress: 'Lungsod ng Cebu, Lalawigan ng Cebu',
    latitude: 10.3342428,
    longitude: 123.8879992,
    phone: ['+63 32 254 6503'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/taoist-temple2019522_115530.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/taoist-temple2019522_115530.jpg',
      'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F230DC7445291C8062A',
      'https://media-cdn.tripadvisor.com/media/photo-s/09/58/c3/c7/taoist-temple.jpg',
      'https://previews.123rf.com/images/mariusz_prusaczyk/mariusz_prusaczyk1511/mariusz_prusaczyk151100166/47955016-%EC%84%B8%EB%B6%80%EC%97%90%EC%9E%88%EB%8A%94-%EB%8F%84%EA%B5%90-%EC%82%AC%EC%9B%90-%ED%95%84%EB%A6%AC%ED%95%80%EC%9D%98-%ED%83%91%EA%B3%BC-%EC%9A%A9-%EC%A1%B0%EA%B0%81-.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '06:30',
    closeTime: '17:30',
  },
  {
    category: 'Place',
    id: 'place7',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '세부 주지사의 집무실이 있는 세부 주 청사는 조경이 잘 되어있고 내부가 아름답게 잘 꾸며져 있습니다. 내부에 있는 작은 박물관에는 역대 세부 주요 정치가들과 기념품들이 전시되어 있습니다.',
    subTitle:
      '세부 지방 국회 의사당은 필리핀 세부의 지방 정부의 자리입니다. 세부 시티의 오스 메냐대로 북쪽 끝에 위치한이 호텔은 마닐라 메트로폴리탄 극장, 입법 빌딩 및 마닐라 중앙 우체국으로 가장 잘 알려진 필리핀 건축가 Juan M. Arellano가 설계했습니다.',
    name: '세부 프로빈셜 캐피톨',
    engName: 'Kapitolyo ng Lalawigan ng Cebu',
    address: 'Cebu City, 6000 Cebu',
    engAddress: 'Cebu City, 6000 Cebu',
    latitude: 10.3167476,
    longitude: 123.8907271,
    phone: ['+63 32 888 2328'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/cebu-provincial-capitol2019522_114528.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/cebu-provincial-capitol2019522_114528.jpg',
      'http://www.zamboanga.com/z/images/f/fe/Cebu_provincial_capitol_building.jpg',
      'https://digitalportfolio238.files.wordpress.com/2017/06/captiol2.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '08:00',
    closeTime: '17:00',
  },
  {
    category: 'Place',
    id: 'place8',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '막탄 전투가 있었던 마젤란 만 바로 앞에 위치한 막탄 쉬린은 역사적인 명소로 200m 높이의 라푸라푸 왕의 대형 동상과 마젤란 기념비가 있는 곳 입니다.',
    subTitle:
      '라푸라푸 신사는 1521 년 전투에서 포르투갈 탐험가 페르디난드 마젤란이 이끄는 스페인 군인들을 물리 친 원주민 지도자 라푸라푸를 기리기 위해 필리핀 세부 라푸라푸시에있는 푼타 엔가 뇨에있는 20m 동상입니다. ',
    name: '라푸라푸 추장 기념비',
    engName: 'Lapu-lapu city, Mactan Shrine',
    address: 'Punta Engaño Rd, Lapu-Lapu City, 6015 Cebu, 필리핀',
    engAddress: 'Punta Engaño Rd, Lapu-Lapu City, 6015 Cebu, 필리핀',
    latitude: 10.3113903,
    longitude: 124.0152848,
    phone: ['+63 32 888 2328'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/mactan-shrine2019522_114857.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/mactan-shrine2019522_114857.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/05/2c/09/93/the-statue.jpg',
      'https://img.theculturetrip.com/768x432/wp-content/uploads/2017/03/datu-lapu-lapu-e1536837977839.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '00:00',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place9',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '1997년에 축조된 세부 역사 기념비는 세부의 역사적인 사건을 기념비로 만들어 놓은 것으로, 동, 철, 콘크리트를 사용하여 만들어졌습니다.',
    subTitle:
      '1997년에 축조된 세부 역사 기념비는 세부의 역사적인 사건을 기념비로 만들어 놓은 것으로, 동, 철, 콘크리트를 사용하여 만들어졌습니다. 스페인의 탐험가 페르난드 마젤란과 막탄 전투에서 마젤란을 죽인 필리핀 영웅 라푸라푸 그리고 전투 장면을 묘사한 조각상을 볼 수 있습니다. 이 외에도 필리핀의 대표 독립운동가인 호세 리잘의 이야기를 담은 조각상, 세부에서 가장 유명한 성당인 산토니뇨 성당 조각상과 산토니뇨를 기념하기 위해 시작된 세부의 대표 축제인 시눌룩 축제의 모습을 묘사한 조각상 등을 볼 수 있습니다.',
    name: '세부 역사 기념비',
    engName: 'Cebu',
    address: 'Colon Street, Parian Plaza, Cebu City 6000, Philippines',
    engAddress: 'Colon Street, Parian Plaza, Cebu City 6000, Philippines',
    latitude: 10.2967423,
    longitude: 123.8968402,
    phone: ['+63 000 0000'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/cebu-heritage-park2019522_114512.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/cebu-heritage-park2019522_114512.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/02/68/6f/b5/monument.jpg',
      'https://mblogthumb-phinf.pstatic.net/MjAxOTA3MTFfMjk0/MDAxNTYyODQxMzY4MDkw.-mlaBOWQoD18Dm9k7gVPWmZo8UIGo45HRC_cRBiq38Mg.MyJeRECnZh1RjU4dRlnCQz8rbNN4rfNU2sd4XL5th-Mg.JPEG.esjungs/20190701_103205.jpg?type=w800',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '00:00',
    closeTime: '24:00',
  },
  {
    category: 'Place',
    id: 'place10',
    price: [
      {
        type: 'adult',
        price: 50,
      },
      {
        type: 'child',
        price: 50,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '레아 신전은 테오도리코 라는 사람이 아내인 레아를 위해 지은 건축물로 고대 그리스를 배경으로 만든 건축물이 특징인 곳입니다.',
    subTitle:
      '레아 신전은 테오도리코 라는 사람이 아내인 레아를 위해 지은 건축물로 고대 그리스를 배경으로 만든 건축물이 특징인 곳입니다. 레아 신전 광장에는 세부 시내를 한 눈에 내려다 볼 수 있는 공간이 마련되어 있어 뷰를 보기위해 방문하는 사람들도 많습니다.',
    name: '레아 신전',
    engName: 'emple of Leah, Cebu',
    address: 'Cebu Transcentral Hwy, Cebu City, Cebu, 필리핀',
    engAddress: 'Cebu Transcentral Hwy, Cebu City, Cebu, 필리핀',
    latitude: 10.3689832,
    longitude: 123.8732101,
    phone: ['+63 906 324 5687'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/temple-of-lea2019522_115611.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/temple-of-lea2019522_115611.jpg',
      'https://t1.daumcdn.net/cfile/tistory/99B34A4F5B3D80EA15',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkksHvi677D-XjHmoRLwVcen3QXCaaTsxnCGF3Ew5c6vlhLOYl&s',
      'https://t1.daumcdn.net/cfile/tistory/9916E74F5B3D80EB10',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '06:00',
    closeTime: '23:00',
  },
  {
    category: 'Place',
    id: 'place11',
    price: [
      {
        type: 'adult',
        price: 50,
      },
      {
        type: 'child',
        price: 50,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    title:
      '손으로 조각한 가구, 예술품, 정원이 특징인 17세기에 지어진 유서 깊은 저택입니다.',
    subTitle:
      '얍 샌디에고 선조의 집은 1732년 건축된 세부에서 가장 오래된 건축물로 중국계 상인 돈 후안 얍이 건축하였고 후손에게 증여되어 현재까지 건축 당시의 모습을 잘 보존하고 있습니다. 내부에는 당시 사용하던 침대, 화장대 등의 가구와 식기류 그리고 집 주인의 수집품들이 전시되어 있습니다.',
    name: '얍 샌디에고 선조의 집',
    engName: 'Yap-Sandiego Ancestral House',
    address: 'Mabini St, Cebu City, Cebu, 필리핀',
    engAddress: 'Mabini St, Cebu City, Cebu, 필리핀',
    latitude: 10.2992655,
    longitude: 123.9039532,
    phone: ['+63 32 266 2833'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/yap-sandiego-ancestral-house2019522_115747.jpg',
    source: [
      'http://admin.itsmorefuninthephilippines.co.kr//uploads/Activity_Images/yap-sandiego-ancestral-house2019522_115747.jpg',
      'https://www.globetrove.com/wp-content/uploads/2019/01/Yap-Ancestral-House-in-Cebu-City.jpg',
      'https://asset.choosephilippines.com/chooseweb/raw/yap_sandiego_ancestral_house_2.jpg',
      'http://ttnotes.com/images/yapsandiego-ancestral-house-cebu-city-6.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '09:00',
    closeTime: '19:00',
  },
  {
    category: 'Place',
    id: 'place12',
    price: [
      {
        type: 'adult',
        price: 100,
      },
      {
        type: 'child',
        price: 100,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    title:
      '탑스 전망대(Tops Lookout)는 세부 시가지와 그 주변의 그림 같은 풍경을 포함하는 놀라운 산 전망대입니다.',
    subTitle:
      '탑스 전망대(Tops Lookout)는 세부 시가지와 그 주변의 그림 같은 풍경을 포함하는 놀라운 산 전망대입니다.',
    name: '탑스 언덕 전망대',
    engName: 'Tops Lookout',
    address: 'Cebu Tops Rd, Cebu City, Cebu, 필리핀',
    engAddress: 'Cebu Tops Rd, Cebu City, Cebu, 필리핀',
    latitude: 10.3706141,
    longitude: 123.8708714,
    phone: ['+63 909 890 5357'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://lh6.googleusercontent.com/proxy/zoHjR0y4fIrIqTTGLT8_jrAkgCzmQyY_McuF1Z8bo6EyJTYGMA9KQXGofCTI7_VuO-AAE77Rp7jwXtMi0HczGBYhLgxOeijIG_tN6Ta04Iy50zCpXL5nnNdfOh83YcjbWbKTvJshBQs3eVkIZ7Oec2i1-_-eusD2fUZgMWgdlv9s=w928-h520-n-k-no',
    source: [
      'https://lh6.googleusercontent.com/proxy/zoHjR0y4fIrIqTTGLT8_jrAkgCzmQyY_McuF1Z8bo6EyJTYGMA9KQXGofCTI7_VuO-AAE77Rp7jwXtMi0HczGBYhLgxOeijIG_tN6Ta04Iy50zCpXL5nnNdfOh83YcjbWbKTvJshBQs3eVkIZ7Oec2i1-_-eusD2fUZgMWgdlv9s=w928-h520-n-k-no',
      'https://media-cdn.tripadvisor.com/media/photo-s/0c/ab/fb/4c/photo0jpg.jpg',
      'https://m.justgola.com/media/a/00/00/1377_og_1.jpeg',
      'https://3.bp.blogspot.com/-L01aN4yHcXA/V0QpjFFkYnI/AAAAAAAAE8M/G0Ss4V_5dXMz4Ipxe4n6RdWPYKHm_DluACLcB/s1600/2016-05-15%2B09.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '11:00',
    closeTime: '23:00',
  },
  {
    category: 'Place',
    id: 'place13',
    price: [
      {
        type: 'adult',
        price: 120,
      },
      {
        type: 'child',
        price: 80,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    title:
      '1850년대에 건축된 후안 고로도의 옛 거주지로 카페와 기념품 가게가 있으며 가이드 투어를 즐길 수 있습니다.',
    subTitle:
      '1850년대에 건축된 후안 고로도의 옛 거주지로 카페와 기념품 가게가 있으며 가이드 투어를 즐길 수 있습니다.',
    name: '카사 고르르도 뮤지엄',
    engName: 'Casa Gorordo Museum',
    address: '35 Eduardo Aboitiz St, Cebu City, 6000 Cebu, 필리핀',
    engAddress: '35 Eduardo Aboitiz St, Cebu City, 6000 Cebu, 필리핀',
    latitude: 10.2998391,
    longitude: 123.9049644,
    phone: ['+63 32 411 1767'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://post-phinf.pstatic.net/MjAxNzEwMjRfMjU3/MDAxNTA4ODQ2MjEzMTQy.cAD-zYK821EBLq9L_CafHU_1FhSRzE9FOHVZdDX1sx8g.2mKqbN4kv-bf2FzKGlHgJBtSdAb__ElXCt7T2p5yjPwg.JPEG/IMG_9755.JPG?type=w1200',
    source: [
      'https://post-phinf.pstatic.net/MjAxNzEwMjRfMjU3/MDAxNTA4ODQ2MjEzMTQy.cAD-zYK821EBLq9L_CafHU_1FhSRzE9FOHVZdDX1sx8g.2mKqbN4kv-bf2FzKGlHgJBtSdAb__ElXCt7T2p5yjPwg.JPEG/IMG_9755.JPG?type=w1200',
      'http://tourism.aseankorea.org/Files/photo/201308/20130828193232.jpg',
      'https://thumb-wishbeen.akamaized.net/PYz4XMgegwsYL-GHthV79wOxTuo=/898x420/smart/filters:no_upscale()/img-wishbeen.akamaized.net/spot/1380038456217_4347777331_29fae1ec11_o.jpg',
      'https://www.sunstar.com.ph/uploads/imported_images/files/field/image/article/sunnex_casa2_2016-29-16.jpg',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['관광지'],
    openTime: '09:00',
    closeTime: '17:00',
  },
  {
    category: 'Place',
    id: 'place14',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    title: '필리핀 전통 시장',
    subTitle: '필리핀 전통 시장',
    name: '타보언 퍼블릭 마켓',
    engName: 'Taboan Public Market',
    address: '필리핀 Cebu, Cebu City',
    engAddress: '필리핀 Cebu, Cebu City',
    latitude: 10.2954412,
    longitude: 123.8911796,
    phone: ['+63 00 000 0000'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://lh3.googleusercontent.com/p/AF1QipPZc4yOC3Eu6psnfkjWP6S0_Pbbl-ism30R-TVw=w660-h440-c',
    source: [
      'https://lh3.googleusercontent.com/p/AF1QipPZc4yOC3Eu6psnfkjWP6S0_Pbbl-ism30R-TVw=w660-h440-c',
      'https://lh3.googleusercontent.com/p/AF1QipOAZOskZrwImxzRFkKox1Cf_nKL7Evfo00IF71h=w660-h440-c',
      'https://lh3.googleusercontent.com/p/AF1QipO1Bj2WfD6JRcnEHk0tMNgh-q7opAG9Z17e-FE-=w660-h440-c',
      'http://mblogthumb3.phinf.naver.net/20161002_6/wlgur1173_1475377691784Y6y4R_JPEG/P20160929_085543361_95BBE9AD-946D-4998-AF3B-1BB833143BA7.JPG?type=w800',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['쇼핑'],
    openTime: '04:00',
    closeTime: '20:00',
  },
  {
    category: 'Place',
    id: 'place15',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    title: '필리핀 전통 시장',
    subTitle: '필리핀 전통 시장',
    name: '까르본 마켓',
    engName: 'Carbon Market',
    address: '59 M. C. Briones St, Cebu City, 6000 Cebu, 필리핀',
    engAddress: '59 M. C. Briones St, Cebu City, 6000 Cebu, 필리핀',
    latitude: 10.2914389,
    longitude: 123.899131,
    phone: ['+63 916 420 8559'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://img-wishbeen.akamaized.net/spot/1375189497809_Carbon%20Market%20-%20Cebu%20City%20_26_.JPG',
    source: [
      'https://img-wishbeen.akamaized.net/spot/1375189497809_Carbon%20Market%20-%20Cebu%20City%20_26_.JPG',
      'https://thumb-wishbeen.akamaized.net/QS46YH0jexjiTCr1bXCMSedRtkA=/898x420/smart/filters:no_upscale()/img-wishbeen.akamaized.net/spot/1405908422810_1.jpg',
      'https://img-wishbeen.akamaized.net/spot/1375189497809_Carbon%20Market%20-%20Cebu%20City%20_26_.JPG',
      'https://post-phinf.pstatic.net/MjAxNjExMDRfOTgg/MDAxNDc4MjMzNDU0NTUz.jmgxh-RoUM8DwU5JpaA_Jq3NT3gWTBkFscyxARjQuwQg.675WCBsxUZsa0xTKSP2-ZT5Z52cKTWjCUm9CDACJLSgg.JPEG/image_1514500231478233421901.jpg?type=w1200',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['쇼핑'],
    openTime: '00:00',
    closeTime: '20:00',
  },
  {
    category: 'Place',
    id: 'place16',
    price: [
      {
        type: 'adult',
        price: 0,
      },
      {
        type: 'child',
        price: 0,
      },
    ],
    image: 'https://randomuser.me/api/portraits/women/13.jpg',
    title: '세부 쇼핑몰',
    subTitle: '세부 쇼핑몰',
    name: '가이사노 그랜드 몰',
    engName: 'Grandmall',
    address:
      'Basak-Marigondon Road, Grandmall, Lapu-Lapu City, 6015 Cebu, 필리핀',
    engAddress:
      'Basak-Marigondon Road, Grandmall, Lapu-Lapu City, 6015 Cebu, 필리핀',
    latitude: 10.2859405,
    longitude: 123.9693113,
    phone: ['+63 926 663 0946'],
    baby: false,
    korean: false,
    pickup: false,
    reservations: [],
    preview:
      'https://www.hanatour.com/asp/travelinfo/view_image.asp?depth=W-PHOTO-1&objimg=image2&img_seq=P000400208',
    source: [
      'https://www.hanatour.com/asp/travelinfo/view_image.asp?depth=W-PHOTO-1&objimg=image2&img_seq=P000400208',
      'http://mblogthumb1.phinf.naver.net/MjAxNzA0MDFfNzAg/MDAxNDkxMDQyNDgyMTU0.bx-N8Xfv3wEr3FfIOPJY9tKO_qjz9uZyGR6uMR1iNrMg._dexU424LiKAIr0mBu7SoV6R3JAVKRWDbB1xic_5wUYg.JPEG.dkdiskal07/%EC%84%B8%EB%B6%80_%EB%A7%89%ED%83%84_%EC%87%BC%ED%95%91%EB%AA%B0_%EA%B0%80%EC%9D%B4%EC%82%AC%EB%85%B8%EA%B7%B8%EB%9E%9C%EB%93%9C%EB%AA%B0_%2860%29.jpg?type=w800',
      'https://mblogthumb-phinf.pstatic.net/MjAxODA2MjJfMTE5/MDAxNTI5NjM2NDE5NjA0.1l8Z8AT4xkNaLchLyySCsspEOEGxH27-fP-88T20MWAg.e5OxnHgsk7jliW2xfKrCneJDav4BcIu4dPl5kKNYXDkg.JPEG.taesuck123/image_3559223911529636144363.jpg?type=w800',
      'http://www.cebuhoppingtour.com/kr/files/attach/images/2460596/143/345/002/877250433b5de76b776f61ed2ae628b7.JPG',
    ],
    likes: 20,
    review: 4,
    reviewCnt: 545,
    reviews: [],
    googles: [],
    tags: ['쇼핑'],
    openTime: '09:00',
    closeTime: '21:00',
  },
];

module.exports = {
  restaurantList,
  foodList,
  activityList,
  massageList,
  placeList,
};
