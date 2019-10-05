import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
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
            } else {
              message = '대화가 없습니다.';
            }
            chat.email = data.email;
            chat.shop = data.shop;
            chat.shopName = data.shopName;
            chat.shopEngName = data.shopEngName;

            chat.avatar = `https://i.pravatar.cc/30${idx}`;
            chat.message = message;
            chat.timeStamp = mm.createdAt.seconds;
            chat.date = date;
            chat.time = time;
            myList.push(chat);
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
            title: item.shopName,
            engName: item.shopEngName,
            shopId: item.shop,
            email: item.email,
          })
        }>
        <Block
          row
          style={{
            marginVertical: 10,
            paddingBottom: 5,
          }}>
          <Block left flex={1}>
            <CachedImage uri={item.avatar} style={styles.avatarChat} />
          </Block>
          <Block flex={3.5} style={{marginTop: 15, height: 40}}>
            <Block middle row space="between">
              <Text h4 bold>
                {item.shopName}
              </Text>
              <Block flex={false}>
                <Text caption style={{textAlign: 'right'}}>
                  {item.date}
                </Text>
                <Text caption style={{textAlign: 'right'}}>
                  {item.time}
                </Text>
              </Block>
            </Block>
            <Block bottom>
              <Text>
                {item.message.length > 15
                  ? `${item.message.slice(0, 15)}...`
                  : item.message}
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
            style={{marginHorizontal: theme.sizes.padding}}>
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
ChatListScreen.defaultProps = {
  profiles: mocks.profiles,
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    marginTop: theme.sizes.base * 4.2,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding,
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2,
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2,
  },
});

export default ChatListScreen;
