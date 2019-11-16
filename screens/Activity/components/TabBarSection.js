import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';

import {Text, Block} from '../../../components';
import {theme} from '../../../styles';

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
  const [xAnim] = useState(new Animated.Value(theme.sizes.padding));

  animatedTab = () => {
    return;
  };

  handleShopTab = tab => {
    setShow(MAP[tab]);
    setActive(tab);
    goTop();
    if (tab == '메뉴' || tab == '프로그램') {
      Animated.timing(xAnim, {
        toValue: theme.sizes.padding,
        duration: 400,
      }).start();
    } else if (tab == '후기') {
      Animated.timing(xAnim, {
        toValue: theme.sizes.padding + (width - theme.sizes.padding * 2) / 3,
        duration: 400,
      }).start();
    } else {
      Animated.timing(xAnim, {
        toValue:
          theme.sizes.padding + ((width - theme.sizes.padding * 2) / 3) * 2,
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
            color: isActive ? theme.colors.black : theme.colors.gray,
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
          position: 'absolute',
          left: xAnim,
          bottom: 0,
          borderWidth: 1,
          borderColor: theme.colors.black,
          width: (width - theme.sizes.padding * 2) / 3,
        }}></Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabs: {
    position: 'absolute',
    height: 50,
    width: width,
    backgroundColor: 'white',
    zIndex: 1000,
    paddingHorizontal: theme.sizes.padding,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    borderBottomColor: theme.colors.gray2,
  },
  tab: {
    textAlign: 'center',
    width: (width - theme.sizes.padding * 2) / 3,
    paddingVertical: 12,
  },
});
