import React, {useState, useEffect} from 'react';
import {Dimensions, StyleSheet, ScrollView} from 'react-native';

import CachedImage from './CachedImage';
import Block from './Block';
import Text from './Text';

const {width} = Dimensions.get('window');

export default FullImageSlider = props => {
  const {source, height} = props;
  const [imageNum, setImageNum] = useState(1);

  const [maxImageNum, setMaxImageNum] = useState(1);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (source) {
      setIsLoaded(true);
      setMaxImageNum(source.length);
    }
  }, [source]);

  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % 360 == 0) {
      setImageNum(parseInt(e.nativeEvent.contentOffset.x / 360) + 1);
    }
  };
  return (
    <Block>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={360}
        pagingEnabled
        onScroll={handleScrollByX}>
        {isLoaded ? (
          source.map(e => (
            <CachedImage
              key={e}
              uri={e}
              style={{height: height, width: width, resizeMode: 'cover'}}
            />
          ))
        ) : (
          <Block style={{height: 250}}></Block>
        )}
      </ScrollView>

      <Block style={styles.imageNum}>
        <Text white bold size={11}>
          {imageNum + ' / ' + maxImageNum}
        </Text>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  imageNum: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
