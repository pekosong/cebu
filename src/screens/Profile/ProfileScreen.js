import React, {useEffect, useContext} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Block, Text, WideText} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const profileList = [
  {title: '내 정보', navigation: 'Personal', icon: 'user'},
  {
    title: '내 여행 정보',
    navigation: 'TripInfos',
    icon: 'earth',
  },
  {title: '알림', navigation: 'Notice', icon: 'bells'},
];

const hostList = [
  {title: '매장 정보', navigation: 'MyShop', icon: 'home'},
  {
    title: '예약 관리',
    navigation: 'Reservation',
    icon: 'inbox',
  },
  {title: '고객 정보', navigation: '', icon: 'addusergroup'},
  {title: '이벤트 등록', navigation: '', icon: 'Safety'},
];

const helpList = [
  {
    title: '도움말',
    navigation: '',
    icon: 'infocirlceo',
  },
  {
    title: '의견 남기기',
    navigation: '',
    icon: 'copy1',
  },
  ,
];
const ProfileScreen = observer(props => {
  const {navigation} = props;
  const {user} = useContext(UserStoreContext);

  registerForPushNotificationsAsync = async () => {
    const {status: existingStatus} = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    console.log(token);
    firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .update({token: token});
  };

  useEffect(() => {
    // registerForPushNotificationsAsync();
    // let unsubscribe;
    // unsubscribe = dispatch(watchUserData('b@naver.com'));
    // dispatch(downloadShopData()).then(() => {});
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        navigation.navigate('Auth');
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleNotification = async () => {
    let response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[m7dV_iM_z4sbRd4LO7Fm5u]',
        sound: 'default',
        title: 'Hey',
        body: '테스트',
      }),
    });
    console.log(response);
  };

  return (
    <>
      <Block style={style.appBar}>
        <Text h1 bold>
          내정보
        </Text>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block margin={[10, 0]}>
            <Text h2 bold>
              계정 관리
            </Text>
          </Block>
          {profileList.map((item, idx) => (
            <WideText
              item={item}
              key={idx}
              onPress={() => navigation.navigate(item.navigation)}>
              <Text h3>{item.title}</Text>
              <AntDesign
                size={26}
                name={item.icon}
                style={{color: colors.black}}></AntDesign>
            </WideText>
          ))}
          {user.host && (
            <>
              <Block style={{marginTop: 30, marginBottom: 10}}>
                <Text h2 bold>
                  호스팅
                </Text>
              </Block>
              {hostList.map((item, idx) => (
                <WideText
                  item={item}
                  key={idx}
                  onPress={() => navigation.navigate(item.navigation)}>
                  <Text h3>{item.title}</Text>
                  <AntDesign
                    size={26}
                    name={item.icon}
                    style={{
                      color: colors.black,
                    }}></AntDesign>
                </WideText>
              ))}
            </>
          )}

          <Block style={{marginTop: 30, marginBottom: 10}}>
            <Text h2 bold>
              지원
            </Text>
          </Block>
          {helpList.map((item, idx) => (
            <WideText
              item={item}
              key={idx}
              onPress={() => navigation.navigate(item.navigation)}>
              <Text h3>{item.title}</Text>
              <AntDesign
                size={26}
                name={item.icon}
                style={{color: colors.black}}></AntDesign>
            </WideText>
          ))}
          <WideText onPress={() => handleNotification}>
            <Text h3>알림 테스트</Text>
            <AntDesign
              size={26}
              name="dingding"
              style={{color: colors.black}}></AntDesign>
          </WideText>
          <TouchableOpacity onPress={() => handleLogout()}>
            <Block
              row
              space="between"
              style={{
                marginVertical: 30,
              }}>
              <Text h3 primary>
                로그아웃
              </Text>
              <AntDesign
                size={26}
                name="logout"
                style={{color: colors.primary}}></AntDesign>
            </Block>
          </TouchableOpacity>
        </Block>
      </ScrollView>
    </>
  );
});

ProfileScreen.navigationOptions = {
  header: null,
};
ProfileScreen.defaultProps = {};

const styles = StyleSheet.create({
  avatar: {
    width: sizes.base * 2.2,
    height: sizes.base * 2.2,
  },
  inputs: {
    marginTop: sizes.base * 2,
    paddingHorizontal: sizes.padding,
  },
});

export default ProfileScreen;
