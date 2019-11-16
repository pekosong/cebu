import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {Block, Text, CachedImage} from '../../components';

import {mocks} from '../../constants';
import {theme} from '../../styles';
import moment from 'moment';

import firebase from '../../constants/store';
import {useSelector, shallowEqual} from 'react-redux';

const MAP = {
  wait: '예약요청',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

const ChatListScreen = props => {
  const {navigation} = props;
  const [chatList, setChatlist] = useState([]);
  const [shopReservations, setShopReservations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    let userUnsubscribe;
    let shopUnsubscribe;

    if (Object.entries(user).length > 0) {
      if (user.host) {
        userUnsubscribe = firebase
          .firestore()
          .collection('shops')
          .doc(user.shops[0])
          .collection('messages')
          .onSnapshot(querySnapshot => {
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

                users = data.message.map(e => e.user);
                chat.avatar = users.filter(e => e._id == data.email)[0].avatar;
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
            setChatlist(myList);
          });

        shopUnsubscribe = firebase
          .firestore()
          .collection('shops')
          .doc(user.shops[0])
          .onSnapshot(doc => {
            const shop = doc.data();
            setShopReservations(shop.reservations);
            setIsLoaded(true);
          });
      } else {
        userUnsubscribe = firebase
          .firestore()
          .collection('users')
          .doc(user.email)
          .collection('messages')
          .onSnapshot(querySnapshot => {
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

                avatar = data.message
                  .map(e => e.user)
                  .filter(e => e._id != data.email);
                chat.avatar =
                  avatar.length == 1
                    ? avatar[0].avatar
                    : 'https://randomuser.me/api/portraits/men/1.jpg';
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
            setChatlist(myList);
            setIsLoaded(true);
          });
      }
    }

    return () => {
      if (user.host) {
        userUnsubscribe();
        shopUnsubscribe();
      } else {
        userUnsubscribe();
      }
    };
  }, [user]);

  makeYM = item => {
    return `${new Date(item.date).getMonth() + 1}월 ${new Date(
      item.date,
    ).getDate() + 1}일`;
  };

  shottenMsg = item => {
    return item.message.length > 15
      ? `${item.message.slice(0, 15)}...`
      : item.message;
  };

  renderList = ({item}) => {
    if (user.host) {
      reservation = shopReservations.filter(e => e.email == item.email)[0];
    } else {
      reservation = user.reservations.filter(e => e.shop.id == item.shop)[0];
    }
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Chat', {
            email: item.email,
            shopId: item.shop,
            shopName: item.shopName,
          })
        }>
        <Block
          row
          center
          style={{
            marginVertical: 10,
            paddingBottom: 5,
          }}>
          <Block left flex={1.2}>
            <CachedImage uri={item.avatar} style={styles.avatarChat} />
          </Block>
          <Block flex={4}>
            <Block row center space="between">
              <Text h4 bold>
                {user.host ? item.email : item.shopName}
              </Text>
              <Block flex={false}>
                <Text caption right>
                  {makeYM(item)}
                </Text>
              </Block>
            </Block>
            <Block>
              <Text style={{marginVertical: 3}}>{shottenMsg(item)}</Text>
              {reservation ? (
                <Text accent>
                  {MAP[reservation.status]}
                  <Text> - {makeYM(reservation)}</Text>
                </Text>
              ) : null}
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block>
      {isLoaded ? (
        <Block>
          <Block flex={false} style={styles.header}>
            <Text h1 bold>
              메시지
            </Text>
          </Block>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginHorizontal: theme.sizes.padding,
              paddingTop: theme.sizes.padding,
            }}>
            <FlatList
              data={chatList}
              keyExtractor={item => (user.host ? item.email : item.shopName)}
              renderItem={item => renderList(item)}
            />
          </ScrollView>
        </Block>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
};

ChatListScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop:
      Platform.OS === 'ios' ? theme.sizes.base * 4.2 : theme.sizes.base * 4,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding,
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2,
  },
});

export default ChatListScreen;
