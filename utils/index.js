import moment from 'moment';

const convertComma = string => {
  return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
  myList = myList.sort(function(a, b) {
    return b.timeStamp - a.timeStamp;
  });
  return myList;
};
export {convertComma, makeYM, msg2Chat};
