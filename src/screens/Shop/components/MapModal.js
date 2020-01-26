import React, {useContext} from 'react';
import {Dimensions} from 'react-native';

import {Block, CachedImage} from 'app/src/components';

import CloseButton from './CloseButton';
import {ShopStoreContext} from 'app/src/store/shop';
import MapView from 'react-native-maps';
import {sizes} from 'app/src/styles';

const {width, height} = Dimensions.get('window');

export default MapModal = props => {
  const {setIsMapVisible, shop} = props;
  const shopStore = useContext(ShopStoreContext);
  return (
    <Block style={{backgroundColor: '#fff'}}>
      <MapView
        style={{
          borderRadius: 6,
          width: width,
          height: height,
          marginTop: sizes.padding / 2,
        }}
        initialRegion={{
          latitude: parseFloat(shop.latitude),
          longitude: parseFloat(shop.longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {shopStore.shopList
          .filter(item => item.latitude)
          .map(item =>
            shop.id === item.id ? (
              <MapView.Marker
                key={item.id}
                title={item.name}
                description={item.tags.join(', ')}
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}>
                <Block>
                  <CachedImage
                    uri={shop.preview[0]}
                    style={{
                      borderRadius: 6,
                      height: 60,
                      width: 60,
                      resizeMode: 'cover',
                    }}
                  />
                </Block>
              </MapView.Marker>
            ) : (
              <MapView.Marker
                title={item.name}
                description={item.tags.join(', ')}
                coordinate={{
                  latitude: parseFloat(item.latitude),
                  longitude: parseFloat(item.longitude),
                }}></MapView.Marker>
            ),
          )}
      </MapView>
      <CloseButton onPress={() => setIsMapVisible(false)} />
    </Block>
  );
};
