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
import {theme, mocks} from '../../constants';

import moment from 'moment';

import firebase from '../../constants/store';
import {useSelector, shallowEqual} from 'react-redux';

const ChatListScreen = props => {
  const {navigation} = props;
  const [chatList, setChatlist] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    if (Object.entries(user).length !== 0) {
      let unsubscribe = firebase
        .firestore()
        .collection(user.host ? 'shops' : 'users')
        .doc(user.host ? user.shops[0] : user.email)
        .collection('messages')
        .onSnapshot(querySnapshot => {
          let myList = [];
          querySnapshot.forEach((doc, idx) => {
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
              if (user.host) {
                chat.avatar = users.filter(e => e._id == data.email)[0].avatar;
              } else {
                if (users.filter(e => e._id != data.email).length > 0) {
                  chat.avatar = users.filter(
                    e => e._id != data.email,
                  )[0].avatar;
                } else {
                  chat.avatar =
                    'https://randomuser.me/api/portraits/men/32.jpg';
                }
              }
              chat.message = message;
              chat.timeStamp = mm.createdAt.seconds;
              chat.date = date;
              chat.time = time;
              myList.push(chat);
            } else {
              message = '대화가 없습니다.';
            }
          });
          myList = myList.sort(function(a, b) {
            return b.timeStamp - a.timeStamp;
          });

          setIsLoaded(true);
          setChatlist(myList);
        });
      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  renderList = ({item}) => {
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
          style={{
            marginVertical: 10,
            paddingBottom: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: theme.colors.gray2,
          }}>
          <Block left flex={1}>
            <CachedImage uri={item.avatar} style={styles.avatarChat} />
          </Block>
          <Block flex={4.5}>
            <Block row space="between">
              <Text h4 bold>
                {user.host ? item.email : item.shopName}
              </Text>
              <Block flex={false}>
                <Text h4 right style={{marginBottom: 5}}>
                  {`${new Date(item.date).getMonth() + 1}월 ${new Date(
                    item.date,
                  ).getDate() + 1}일`}
                </Text>
              </Block>
            </Block>
            <Block>
              <Text h4 style={{marginVertical: 6, marginTop: 0}}>
                {item.message.length > 15
                  ? `${item.message.slice(0, 15)}...`
                  : item.message}
              </Text>
              <Text accent>
                예약완료<Text> - 10월 15일</Text>
              </Text>
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
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}></ActivityIndicator>
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
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    borderRadius: theme.sizes.base * 1.5,
  },
});

export default ChatListScreen;
