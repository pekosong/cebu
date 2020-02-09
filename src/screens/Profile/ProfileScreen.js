import React, {useEffect, useContext} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

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
    navigation: 'Help',
    icon: 'infocirlceo',
  },
  {
    title: '의견 남기기',
    navigation: 'Proposal',
    icon: 'copy1',
  },
  ,
];
const ProfileScreen = observer(props => {
  const {navigation} = props;
  const {isLogin, user, logout} = useContext(UserStoreContext);

  registerForPushNotificationsAsync = async () => {
    console.log('푸쉬 등록');
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
    firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .update({token: token});
  };
  useEffect(() => {
    // registerForPushNotificationsAsync();
  }, []);

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        logout();
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  handleNotification = async () => {
    console.log('pushed');
    let response = await fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[phLju0B98qxpxzxjvHgtdf]',
        vibrate: true,
        badge: 10,
        title: 'you have msg',
        body: 'new msg',
        data: {msg: 'hello'},
      }),
    });
  };

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={style.scrollTab}>
        <Text h1 bold style={{marginBottom: 20, backgroundColor: '#fff'}}>
          내정보
        </Text>
        {isLogin && (
          <>
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
          </>
        )}
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
        <Block style={{marginTop: isLogin ? 30 : 0, marginBottom: 10}}>
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
        {user.host && (
          <WideText onPress={() => handleNotification()}>
            <Text h3>알림 테스트</Text>
            <AntDesign
              size={26}
              name="dingding"
              style={{color: colors.black}}></AntDesign>
          </WideText>
        )}
        {isLogin && (
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
        )}
      </ScrollView>
    </SafeAreaView>
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
