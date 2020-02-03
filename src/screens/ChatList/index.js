import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {Block, Button, Text, CachedImage, Loader} from 'app/src/components';

import {sizes, style, colors} from 'app/src/styles';
import {msg2Chat, makeYM} from 'app/src/utils';
import {shopApi, userApi} from 'app/src/api';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

const MAP = {
  wait: '예약요청',
  confirm: '예약확정',
  end: '종료',
  not: '예약불가',
};

const ChatListScreen = observer(props => {
  const {navigation} = props;
  const [chatList, setChatList] = useState([]);
  const [shopReservations, setShopReservations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {isAdmin, isLogin, user} = useContext(UserStoreContext);

  useEffect(() => {
    let userUnsubscribe;
    let shopUnsubscribe;

    if (Object.entries(user).length > 0) {
      if (user.host) {
        userUnsubscribe = shopApi
          .streamShopMsg(user.shops[0])
          .onSnapshot(querySnapshot => {
            setChatList(msg2Chat(querySnapshot, user.host));
          });

        shopUnsubscribe = shopApi.streamShop(user.shops[0]).onSnapshot(doc => {
          setShopReservations(doc.data().reservations);
          setIsLoaded(true);
        });
      } else {
        userUnsubscribe = userApi
          .streamUserMsg(user.email)
          .onSnapshot(querySnapshot => {
            setChatList(msg2Chat(querySnapshot, user.host));
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

  shottenMsg = item => {
    return item.message.length > 20
      ? `${item.message.slice(0, 20)}...`
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
        <Block style={styles.wrapper}>
          <CachedImage uri={item.avatar} style={styles.avatarChat} />
          <Block middle style={{flex: 1, marginLeft: 10, paddingVertical: 0}}>
            <Block row center space="between">
              <Text h4 bold>
                {user.host ? item.email : item.shopName}
              </Text>
              <Text gray caption right>
                {makeYM(item)}
              </Text>
            </Block>
            <Block>
              <Text darkgray numberOfLines={1} style={{marginRight: 20}}>
                {item.message}
              </Text>
              {reservation && (
                <Text size={11} accent style={{marginTop: 2}}>
                  {MAP[reservation.status]}
                  <Text size={11}> - {makeYM(reservation)}</Text>
                </Text>
              )}
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  if (!isAdmin)
    return (
      <Block center middle style={{padding: 80}}>
        <Text size={40} bold center>
          메시지
        </Text>
        <Text darkgray h4 center style={{marginTop: 30}}>
          메시지 기능은
        </Text>
        <Text darkgray h4 center style={{marginTop: 5, marginBottom: 30}}>
          현재 준비중에 있습니다.
        </Text>
      </Block>
    );

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView>
      <FlatList
        style={style.appBar}
        showsVerticalScrollIndicator={false}
        data={chatList}
        ListHeaderComponent={
          <Text h1 bold style={{marginBottom: 20}}>
            메시지
          </Text>
        }
        keyExtractor={item => (user.host ? item.email : item.shopName)}
        renderItem={item => renderList(item)}
      />
    </SafeAreaView>
  );
});

ChatListScreen.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  avatarChat: {
    width: sizes.base * 4,
    height: sizes.base * 4,
    borderRadius: sizes.base * 2,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default ChatListScreen;
