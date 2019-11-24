import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {Block, Text, CachedImage} from 'app/src/components';

import {sizes, style} from 'app/src/styles';
import {msg2Chat, makeYM} from 'app/src/utils';
import {shopApi, userApi, chatApi} from 'app/src/api';

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
  const [chatList, setChatlist] = useState([]);
  const [shopReservations, setShopReservations] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    let userUnsubscribe;
    let shopUnsubscribe;

    if (Object.entries(user).length > 0) {
      if (user.host) {
        userUnsubscribe = shopApi
          .streamShopMsg(user.shops[0])
          .onSnapshot(querySnapshot => {
            setChatlist(msg2Chat(querySnapshot, user.host));
          });

        shopUnsubscribe = shopApi.streamShop(user.shops[0]).onSnapshot(doc => {
          setShopReservations(doc.data().reservations);
          setIsLoaded(true);
        });
      } else {
        userUnsubscribe = userApi
          .streamUserMsg(user.email)
          .onSnapshot(querySnapshot => {
            setChatlist(msg2Chat(querySnapshot, user.host));
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
        <Block style={styles.wrapper}>
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
      <Block flex={false} style={style.mainHeader}>
        <Text h1 bold>
          메시지
        </Text>
      </Block>
      {isLoaded ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginHorizontal: sizes.padding,
            paddingTop: sizes.padding,
          }}>
          <FlatList
            data={chatList}
            keyExtractor={item => (user.host ? item.email : item.shopName)}
            renderItem={item => renderList(item)}
          />
        </ScrollView>
      ) : (
        <Block style={style.full}>
          <ActivityIndicator size="large"></ActivityIndicator>
        </Block>
      )}
    </Block>
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
    paddingBottom: 5,
  },
});

export default ChatListScreen;
