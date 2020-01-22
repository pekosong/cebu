const restaurantSrc = {
  전체: require('app/src/assets/images/search/restaurant.jpg'),
  현지식: require('app/src/assets/images/category/local.jpg'),
  한식: require('app/src/assets/images/category/korean.jpg'),
  분식: require('app/src/assets/images/category/bunsik.jpg'),
  부페: require('app/src/assets/images/category/buffet.jpeg'),
  양식: require('app/src/assets/images/category/western.jpg'),
  일식: require('app/src/assets/images/category/japan.jpg'),
  중식: require('app/src/assets/images/category/china.jpeg'),
  야시장: require('app/src/assets/images/category/market.jpg'),
  베이커리: require('app/src/assets/images/category/bakery.jpeg'),
  카페: require('app/src/assets/images/category/cafe.jpg'),
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
  마사지: require('app/src/assets/images/category/massage.jpg'),
  뷰티: require('app/src/assets/images/category/beauty.jpeg'),
};

const massageCategory = ['전체', '마사지', '뷰티'];

const foodSrc = {
  전체: require('app/src/assets/images/search/food.jpg'),
  현지식: require('app/src/assets/images/category/local.jpg'),
  한식: require('app/src/assets/images/category/korean.jpg'),
  분식: require('app/src/assets/images/category/bunsik.jpg'),
  부페: require('app/src/assets/images/category/buffet.jpeg'),
  양식: require('app/src/assets/images/category/western.jpg'),
  일식: require('app/src/assets/images/category/japan.jpg'),
  중식: require('app/src/assets/images/category/china.jpeg'),
  야시장: require('app/src/assets/images/category/market.jpg'),
  베이커리: require('app/src/assets/images/category/bakery.jpeg'),
  카페: require('app/src/assets/images/category/cafe.jpg'),
};

const foodCategory = ['전체', '현지식', '한식', '분식', '양식', '일식', '중식'];

const placeSrc = {
  전체: require('app/src/assets/images/search/sanding.jpg'),
  관광지: require('app/src/assets/images/category/sight.jpeg'),
  쇼핑: require('app/src/assets/images/category/shopping.jpg'),
};

const placeCategory = ['전체', '관광지', '쇼핑'];

const adultSrc = {
  전체: require('app/src/assets/images/category/adult.jpg'),
  라이브바: require('app/src/assets/images/category/livebar.jpg'),
  클럽: require('app/src/assets/images/category/club.jpg'),
  노래방: require('app/src/assets/images/category/karaoke.jpg'),
  쇼: require('app/src/assets/images/category/show.jpeg'),
  PC방: require('app/src/assets/images/category/pc.jpg'),
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
