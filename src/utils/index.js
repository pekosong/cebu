import moment from 'moment';

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
export {convertComma, pastDay, makeYM, msg2Chat};
