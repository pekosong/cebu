import React, {useState} from 'react';
import {Dimensions, StyleSheet, Animated, TouchableOpacity} from 'react-native';

import {Text, Block} from 'app/components';
import {sizes, colors} from 'app/styles';

const {width} = Dimensions.get('window');

const MAPCAT = {
  Massage: '프로그램',
  Activity: '프로그램',
  Restaurant: '메뉴',
};
const MAP = {
  프로그램: 'menu',
  메뉴: 'menu',
  후기: 'review',
  기본정보: 'info',
};

export default TabBarSection = props => {
  const {top, setShow, goTop, category} = props;
  const [active, setActive] = useState(MAPCAT[category]);
  const [xAnim] = useState(new Animated.Value(sizes.padding));

  handleShopTab = tab => {
    setShow(MAP[tab]);
    setActive(tab);
    goTop();
    if (tab == '메뉴' || tab == '프로그램') {
      Animated.timing(xAnim, {
        toValue: sizes.padding,
        duration: 400,
      }).start();
    } else if (tab == '후기') {
      Animated.timing(xAnim, {
        toValue: sizes.padding + (width - sizes.padding * 2) / 3,
        duration: 400,
      }).start();
    } else {
      Animated.timing(xAnim, {
        toValue: sizes.padding + ((width - sizes.padding * 2) / 3) * 2,
        duration: 400,
      }).start();
    }
  };

  renderShopTab = tab => {
    const isActive = active == tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => handleShopTab(tab)}
        style={styles.tab}>
        <Text
          h3
          center
          style={{
            color: isActive ? colors.black : colors.gray,
          }}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Animated.View
      style={{
        ...styles.tabs,
        top: top.interpolate({
          inputRange: [0, 210],
          outputRange: [360, 90],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
      }}>
      <Block flex={false} row>
        {[MAPCAT[category], '후기', '기본정보'].map(tab => renderShopTab(tab))}
      </Block>
      <Animated.View
        style={{
          ...styles.bottomBar,
          left: xAnim,
        }}></Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    zIndex: 1000,
    position: 'absolute',
    height: 50,
    backgroundColor: 'white',
    paddingHorizontal: sizes.padding,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: colors.gray2,
  },
  tab: {
    width: (width - sizes.padding * 2) / 3,
    paddingVertical: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    borderColor: colors.black,
    width: (width - sizes.padding * 2) / 3,
  },
});
