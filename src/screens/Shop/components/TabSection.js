import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import MenuSection from './MenuSection';
import ProgramSection from './ProgramSection';

import ReviewSection from './ReviewSection';
import ShopInfoSection from './ShopInfoSection';

const {width} = Dimensions.get('window');

const FirstRoute = props => {
  const {shop} = props;
  return shop.category != 'Activity' ? (
    <MenuSection shop={shop}></MenuSection>
  ) : (
    <ProgramSection></ProgramSection>
  );
};

const SecondRoute = props => {
  const {shop} = props;
  return <ReviewSection shop={shop}></ReviewSection>;
};

const ThirdRoute = props => {
  const {shop} = props;
  return <ShopInfoSection shop={shop}></ShopInfoSection>;
};

export default function TabSection(props) {
  const {shop} = props;
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
        return <SecondRoute shop={shop} />;
      case 'third':
        return <ThirdRoute shop={shop} />;

      default:
        return null;
    }
  };

  const _renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={({route, focused}) => (
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
        backgroundColor: 'white',
        marginBottom: 20,
        zIndex: 10000,
      }}
    />
  );
  return (
    <TabView
      navigationState={tab}
      renderTabBar={_renderTabBar}
      renderScene={_renderScene}
      onIndexChange={index => setTab({...tab, index})}
      initialLayout={{width: width}}
      style={{
        paddingTop: 30,
      }}></TabView>
  );
}
