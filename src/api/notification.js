import firebase from 'app/src/constants/store';

const RESERVATION_TYPE = {
  MAKE: '[예약 요청] 예약 요청이 왔습니다.',
  CANCLE: '[예약 취소] 예약이 취소 되었습니다.',
  CONFIRM: '[예약 확정] 예약이 확정 되었습니다.',
  CHANGE: '[예약 변경] 예약이 변경 되었습니다.',
};

const handleNotification = async (email, title, body) => {
  firebase
    .firestore()
    .collection('users')
    .doc(email)
    .get()
    .then(doc => {
      const {notice, token} = doc.data();
      const name = '송창근';
      const datetime = '2020-2-20, 10시';
      const people = '3';
      const request = '애기가 있어서 애기 침대 부탁드려요';
      if (notice.notice.push) {
        fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: token,
            title: RESERVATION_TYPE['MAKE'],
            body:
              `- 예약자: ${name}\n- 예약일시: ${datetime}\n- 예약인원: ${people}명` +
              (request && `\n- 요청사항: ${request}`),
            channelId: 'notification',
            android: {
              sound: true,
              priority: 'max',
              sticky: false,
              vibrate: true,
            },
            data: {msg: 'helllooo?'},
          }),
        });
      }
    });
};

export {handleNotification};
