const restaurantSrc = {
  전체: require('app/src/assets/images/search/restaurant.jpg'),
  현지식:
    'http://mblogthumb3.phinf.naver.net/MjAxODA1MDhfMTA1/MDAxNTI1Nzg5ODQxODk0.YhyZbzoyGtd1lVVtKnElDUkOhktJGYMG6_hysNFZzgsg.5fgJcUW6UAISH-C_9rxMvygjAk6WckacITscJEENdCQg.JPEG.somzzang820/IMG_3787.jpg?type=w800',
  한식: 'http://www.foodnews.co.kr/news/photo/201909/71182_27048_4433.jpg',
  분식: 'http://www.travelnbike.com/news/photo/201805/58993_89095_2413.jpg',
  부페:
    'https://cdn.pixabay.com/photo/2019/01/26/02/09/buffet-3955616_960_720.jpg',
  양식:
    'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003075/img/basic/a0003075_main.jpg',
  일식:
    'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000881/img/basic/a0000881_main.jpg',
  야시장: 'https://cebubook.com/mallimg/2018/08/25/1535180884-3545.jpg',
  중식:
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F9928F7345DD5007724218A',
  베이커리:
    'http://nimage.globaleconomic.co.kr/phpwas/restmb_allidxmake.php?idx=5&simg=2017110810012605936e8b8a793f712114162187.jpg',
  카페:
    'https://post-phinf.pstatic.net/MjAxODA1MDhfMTM3/MDAxNTI1NzQ1OTQ1NTgx.ikvoRMuoHQ-P-KiilzaaR4bzbwwfn6gdZNA0ebXLZ2Ag.jEqhGuJmGC0FUAJcXJRAGFhfjTQYfgP6SSnC72mIAoMg.JPEG/GettyImages-803997470.jpg?type=w1200',
};

const restaurantCategory = [
  '전체',
  '현지식',
  '한식',
  '분식',
  '부페',
  '양식',
  '일식',
  '야시장',
  '중식',
  '베이커리',
  '카페',
];

const activitySrc = {
  전체: require('app/src/assets/images/search/activity.jpg'),
  호핑: require('app/src/assets/images/search/hoping.jpg'),
  고래투어: require('app/src/assets/images/search/gorae.jpg'),
  시티투어: require('app/src/assets/images/search/city.jpg'),
  다이빙: require('app/src/assets/images/search/diving.jpg'),
  경비행기: require('app/src/assets/images/search/plane.jpg'),
  샌딩: require('app/src/assets/images/search/sanding.jpg'),
};

const activityCategory = [
  '전체',
  '호핑',
  '고래투어',
  '시티투어',
  '다이빙',
  '경비행기',
  '샌딩',
];

const massageSrc = {
  전체: require('app/src/assets/images/search/massage.jpg'),
  마사지: 'http://www.autodaily.co.kr/news/photo/201906/409361_39638_5815.jpg',
  뷰티: 'http://gdimg.gmarket.co.kr/937724200/still/600?ver=1569157995',
};

const massageCategory = ['전체', '마사지', '뷰티'];

const foodSrc = {
  전체: require('app/src/assets/images/search/food.jpg'),
  현지식:
    'http://mblogthumb3.phinf.naver.net/MjAxODA1MDhfMTA1/MDAxNTI1Nzg5ODQxODk0.YhyZbzoyGtd1lVVtKnElDUkOhktJGYMG6_hysNFZzgsg.5fgJcUW6UAISH-C_9rxMvygjAk6WckacITscJEENdCQg.JPEG.somzzang820/IMG_3787.jpg?type=w800',
  한식: 'http://www.foodnews.co.kr/news/photo/201909/71182_27048_4433.jpg',
  분식: 'http://www.travelnbike.com/news/photo/201805/58993_89095_2413.jpg',
  부페:
    'https://cdn.pixabay.com/photo/2019/01/26/02/09/buffet-3955616_960_720.jpg',
  양식:
    'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/03/a0003075/img/basic/a0003075_main.jpg',
  일식:
    'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000881/img/basic/a0000881_main.jpg',
  야시장: 'https://cebubook.com/mallimg/2018/08/25/1535180884-3545.jpg',
  중식:
    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile21.uf.tistory.com%2Fimage%2F9928F7345DD5007724218A',
  베이커리:
    'http://nimage.globaleconomic.co.kr/phpwas/restmb_allidxmake.php?idx=5&simg=2017110810012605936e8b8a793f712114162187.jpg',
  카페:
    'https://post-phinf.pstatic.net/MjAxODA1MDhfMTM3/MDAxNTI1NzQ1OTQ1NTgx.ikvoRMuoHQ-P-KiilzaaR4bzbwwfn6gdZNA0ebXLZ2Ag.jEqhGuJmGC0FUAJcXJRAGFhfjTQYfgP6SSnC72mIAoMg.JPEG/GettyImages-803997470.jpg?type=w1200',
};

const foodCategory = ['전체', '현지식', '한식', '분식', '양식', '일식', '중식'];

const placeSrc = {
  전체: require('app/src/assets/images/search/sanding.jpg'),
  관광지: 'http://cfile211.uf.daum.net/R400x0/230F6F4551C2B9E409DCFA',
  쇼핑:
    'http://philsalgi.com/xe/files/attach/images/145/020/023/973ee98da8f5cbcb379936674eedd93e.jpg',
};

const placeCategory = ['전체', '관광지', '쇼핑'];

const adultSrc = {
  전체:
    'https://d1blyo8czty997.cloudfront.net/tour-photos/n/7965/1200x600/1237027237.jpg',
  라이브바:
    'https://4.bp.blogspot.com/-OHstXozibU4/WQnUqPIytWI/AAAAAAAADCQ/6AfKpNtAC2UCMK8cM6psS3q729tH7urQgCLcB/s1600/%25EC%2584%25B8%25EB%25B6%2580%2B%25EB%25B0%25A4%25EB%25AC%25B8%25ED%2599%2594%2B%25EC%25A4%2584%25EB%25A6%25AC%25EC%2595%2584%25EB%2582%2598%2B%25EB%25A1%259C%25ED%2588%25AC%25EC%258A%25A4.jpg',
  클럽:
    'http://www.cebubook.com/mallimg/2019/01/07/1546837093-2556_N_570x323_100_2.jpg',
  노래방: 'https://img.hankyung.com/photo/201812/01.18406290.1.jpg',
  쇼: 'https://t1.daumcdn.net/cfile/tistory/99F525365CAAFEFE04',
  PC방: 'https://i.ytimg.com/vi/0XveIwXibPY/maxresdefault.jpg',
};

const adultCategory = ['전체', '라이브바', '클럽', '노래방', '쇼', 'PC방'];

const mapCategory = {
  Restaurant: {name: restaurantCategory, src: restaurantSrc},
  Activity: {name: activityCategory, src: activitySrc},
  Massage: {name: massageCategory, src: massageSrc},
  Food: {name: foodCategory, src: foodSrc},
  Place: {name: placeCategory, src: placeSrc},
  Adult: {name: adultCategory, src: adultSrc},
};

export {
  mapCategory,
  restaurantSrc,
  restaurantCategory,
  activitySrc,
  activityCategory,
};
