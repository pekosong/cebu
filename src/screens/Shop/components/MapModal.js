import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Block, CachedImage, Text} from 'app/src/components';

import CloseButton from './CloseButton';
import {useSelector} from 'react-redux';

import MapView from 'react-native-maps';
import {colors} from 'app/src/styles';
import {sortByDistance} from 'app/src/utils';

import {AntDesign} from '@expo/vector-icons';

export default MapModal = props => {
  const {setIsMapVisible, shop, navigation} = props;
  const shopList = useSelector(state => state.shop);

  const sortedShop = sortByDistance(shopList, shop)
    .sort((a, b) => a.distance > b.distance)
    .slice(0, 20);

  return (
    <Block>
      <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: parseFloat(shop.latitude),
          longitude: parseFloat(shop.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {sortedShop.map(item => (
          <MapView.Marker
            key={item.shop.id}
            coordinate={{
              latitude: parseFloat(item.shop.latitude),
              longitude: parseFloat(item.shop.longitude),
            }}>
            {shop.id === item.shop.id ? (
              <CachedImage uri={shop.preview[0]} style={styles.image} />
            ) : (
              <>
                <Image
                  style={{height: 50, width: 50, borderRadius: 25}}
                  source={
                    item.shop.category === 'Massage'
                      ? require('app/src/assets/images/placeholder/massage.png')
                      : require('app/src/assets/images/placeholder/restaurant.png')
                  }
                />
                <MapView.Callout
                  style={{width: 150}}
                  onPress={() => {
                    setIsMapVisible(false);
                    navigation.push('Shop', {
                      shopId: item.shop.id,
                    });
                  }}
                  tooltip>
                  <Block style={styles.markContainer}>
                    <Text h4 bold>
                      {item.shop.name}
                    </Text>
                    <Block center row style={{marginVertical: 5}}>
                      <AntDesign
                        size={15}
                        color={colors.primary}
                        name="star"></AntDesign>
                      <Text>{item.shop.review}</Text>
                    </Block>
                    <Text size={12} primary style={{marginTop: 2}}>
                      {item.shop.tags.join(', ')}
                    </Text>
                  </Block>
                </MapView.Callout>
              </>
            )}
          </MapView.Marker>
        ))}
      </MapView>
      <CloseButton onPress={() => setIsMapVisible(false)} />
    </Block>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: colors.primary,
    resizeMode: 'cover',
  },
  markContainer: {
    flex: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderRadius: 6,
    height: 75,
  },
});
