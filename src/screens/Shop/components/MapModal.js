import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

import {Block, CachedImage, Text} from 'app/src/components';

import CloseButton from './CloseButton';
import {ShopStoreContext} from 'app/src/store/shop';
import MapView from 'react-native-maps';
import {colors} from 'app/src/styles';

import {AntDesign} from '@expo/vector-icons';

export default MapModal = props => {
  const {setIsMapVisible, shop, navigation} = props;
  const shopStore = useContext(ShopStoreContext);
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
        {shopStore.shopList
          .filter(item => item.latitude)
          .map(item => (
            <MapView.Marker
              key={item.id}
              title={item.name}
              description={item.tags.join(', ')}
              coordinate={{
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude),
              }}>
              {shop.id === item.id ? (
                <CachedImage uri={shop.preview[0]} style={styles.image} />
              ) : (
                <MapView.Callout
                  onPress={() => {
                    setIsMapVisible(false);
                    navigation.push('Shop', {
                      shopId: item.id,
                    });
                  }}
                  tooltip>
                  <Block style={styles.markContainer}>
                    <Text h4 bold>
                      {item.name}
                    </Text>
                    <Block center row style={{marginVertical: 5}}>
                      <AntDesign
                        size={15}
                        color={colors.primary}
                        name="star"></AntDesign>
                      <Text>{item.review}</Text>
                    </Block>
                    <Text size={12} primary style={{marginTop: 2}}>
                      {item.tags.join(', ')}
                    </Text>
                  </Block>
                </MapView.Callout>
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
    borderRadius: 6,
    height: 60,
    width: 60,
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
