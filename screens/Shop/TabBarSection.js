import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';

import {Text, Block} from '../../components';
import {theme} from '../../constants';

const {width} = Dimensions.get('window');

const MAP = {
  메뉴: 'menu',
  후기: 'review',
  기본정보: 'info',
};
export default TabBarSection = props => {
  const {top, setShow} = props;
  const [active, setActive] = useState('메뉴');
  const [xAnim] = useState(new Animated.Value(theme.sizes.padding));

  animatedTab = () => {
    return;
  };

  handleShopTab = tab => {
    setShow(MAP[tab]);
    setActive(tab);
    if (tab == '메뉴') {
      Animated.timing(xAnim, {
        toValue: theme.sizes.padding,
        duration: 50,
      }).start();
    } else if (tab == '후기') {
      Animated.timing(xAnim, {
        toValue: theme.sizes.padding + (width - theme.sizes.padding * 2) / 3,
        duration: 50,
      }).start();
    } else {
      Animated.timing(xAnim, {
        toValue:
          theme.sizes.padding + ((width - theme.sizes.padding * 2) / 3) * 2,
        duration: 50,
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
          center
          size={18}
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
        position: 'absolute',
        top: top.interpolate({
          inputRange: [0, 200],
          outputRange: [350, 90],
          extrapolate: 'clamp',
          useNativeDriver: true,
        }),
        height: 50,
        width: width,
        backgroundColor: 'white',
        zIndex: 100,
        paddingHorizontal: theme.sizes.padding,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
      }}>
      <Block flex={false} row style={styles.tabs}>
        {['메뉴', '후기', '기본정보'].map(tab => renderShopTab(tab))}
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
  tabs: {},
  tab: {
    textAlign: 'center',
    width: (width - theme.sizes.padding * 2) / 3,
    paddingVertical: 12,
  },
});
