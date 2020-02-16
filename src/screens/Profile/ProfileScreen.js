import React, {useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {Block, Text, WideText} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';

import {AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useSelector, useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

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
  {title: '알림테스트', navigation: 'NoticeTest', icon: 'bells'},
];

const ProfileScreen = props => {
  const {navigation} = props;
  const {loggedIn, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        dispatch(allActions.userActions.logOut());
      })
      .catch(function(err) {
        console.log(err);
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
        {loggedIn && (
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
        <Block style={{marginTop: loggedIn ? 30 : 0, marginBottom: 10}}>
          <Text h2 bold>
            지원
          </Text>
        </Block>
        {user.email === 'a@naver.com' &&
          helpList.map((item, idx) => (
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
        {user.email !== 'a@naver.com' &&
          helpList.slice(0, 2).map((item, idx) => (
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
        {loggedIn && (
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
};

ProfileScreen.navigationOptions = {
  header: null,
};
ProfileScreen.defaultProps = {};

const styles = StyleSheet.create({});

export default ProfileScreen;
