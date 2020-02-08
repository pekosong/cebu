import moment from 'moment';

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
};

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const sortByDistance = (arr, shop) =>
  arr.map(e => ({
    shop: e,
    distance: getDistanceFromLatLonInKm(
      shop.latitude,
      shop.longitude,
      e.latitude,
      e.longitude,
    ),
    tags: shop.tags,
  }));

const convertComma = string => {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const pastDay = date => {
  const oneDay = 24 * 60 * 60 * 1000;
  const today = new Date();
  const diffDays = Math.round(Math.abs((date.seconds * 1000 - today) / oneDay));

  if (diffDays == 0) {
    return '오늘';
  } else if (diffDays < 7) {
    return '이번 주';
  } else if (diffDays < 31) {
    return '이번 달';
  }
};

const makeYM = item => {
  return `${new Date(item.date).getMonth() + 1}월 ${new Date(
    item.date,
  ).getDate() + 1}일`;
};

const msg2Chat = (querySnapshot, isShop) => {
  let myList = [];
  querySnapshot.forEach(doc => {
    let chat = {};
    data = doc.data();

    if (data.message.length > 0) {
      mm = data.message.reduce(function(p, v) {
        if (p.createdAt) {
          return p.createdAt.seconds > v.createdAt.seconds ? p : v;
        } else {
          return v;
        }
      });
      date = moment.unix(mm.createdAt.seconds).format('YYYY-MM-DD');
      time = moment.unix(mm.createdAt.seconds).format('HH:mm:ss');
      message = mm.text;
      chat.email = data.email;
      chat.shop = data.shop;
      chat.shopName = data.shopName;

      if (isShop) {
        users = data.message.map(e => e.user);
        chat.avatar = users.filter(e => e._id == data.email)[0].avatar;
      } else {
        avatar = data.message.map(e => e.user).filter(e => e._id != data.email);
        chat.avatar =
          avatar.length == 1
            ? avatar[0].avatar
            : 'https://randomuser.me/api/portraits/men/1.jpg';
      }

      chat.message = message;
      chat.timeStamp = mm.createdAt.seconds;
      chat.date = date;
      chat.time = time;
      myList.push(chat);
    }
  });
  myList = myList.sort((a, b) => b.timeStamp - a.timeStamp);
  return myList;
};
export {sortByDistance, convertComma, pastDay, makeYM, msg2Chat};
