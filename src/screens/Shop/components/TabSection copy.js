import React, {useState} from 'react';
import {
  StyleSheet,
  Animated,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import ReservationSection from './ReservationSection';
import MenuSection from './MenuSection';
import ProgramSection from './ProgramSection';

import ReviewSection from './ReviewSection';
import ShopInfoSection from './ShopInfoSection';
import {sizes, colors, style} from 'app/src/styles';

const {width} = Dimensions.get('window');

const FirstRoute = props => <MenuSection shop={props.shop}></MenuSection>;
const SecondRoute = props => (
  <ReviewSection
    user={props.user}
    shop={props.shop}
    navigation={props.navigation}></ReviewSection>
);
const ThirdRoute = props => (
  <ShopInfoSection shop={props.shop}></ShopInfoSection>
);
export default function TabSection(props) {
  const {shop, user} = props;
  const [tab, setTab] = useState({
    index: 0,
    routes: [
      {key: 'first', title: '메뉴'},
      {key: 'second', title: '후기'},
      {key: 'third', title: '정보'},
    ],
  });

  const _renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute shop={shop} />;
      case 'second':
        return <SecondRoute shop={shop} user={user} />;
      case 'third':
        return <ThirdRoute shop={shop} />;

      default:
        return null;
    }
  };

  const _renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            color: focused ? 'black' : 'gray',
            fontSize: 18,
            margin: 8,
          }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={{backgroundColor: 'black'}}
      style={{
        top: 10,
        width: width,
        position: 'absolute',
        backgroundColor: 'white',
        marginBottom: 20,
        zIndex: 10000,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,
      }}
    />
  );
  return (
    <TabView
      lazy={true}
      navigationState={tab}
      renderTabBar={_renderTabBar}
      renderScene={_renderScene}
      onIndexChange={index => setTab({...tab, index})}
      initialLayout={{width: width, height: 300}}
      style={{
        paddingTop: 30,
      }}></TabView>
  );
}
