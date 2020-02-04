import React, {useState} from 'react';
import {StyleSheet, ScrollView, Dimensions, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Block, Text, CachedImage, Divider} from 'app/src/components';

import {sizes} from 'app/src/styles';

const {width} = Dimensions.get('window');

export default MenuImage = ({shop}) => {
  const {menuImage} = shop;
  const [imageNum, setImageNum] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  handleScrollByX = e => {
    if (e.nativeEvent.contentOffset.x % (width - sizes.padding * 2) == 0) {
      setImageNum(
        parseInt(e.nativeEvent.contentOffset.x / (width - sizes.padding * 2)) +
          1,
      );
    }
  };

  return (
    <Block>
      {menuImage.length !== 0 && (
        <Block style={{position: 'relative'}}>
          <Divider></Divider>
          <Block row space="between" style={{marginTop: 10, marginBottom: 30}}>
            <Text h1 bold>
              메뉴판
            </Text>
            <TouchableOpacity onPress={() => setIsVisible(true)}>
              <Text accent h3 bold>
                크게보기
              </Text>
            </TouchableOpacity>
          </Block>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={360}
            pagingEnabled
            onScroll={handleScrollByX}>
            {menuImage.map((e, idx) => (
              <CachedImage
                key={idx}
                uri={e}
                style={{
                  borderRadius: 6,
                  height: 260,
                  width: width - sizes.padding * 2,
                  resizeMode: 'cover',
                }}
              />
            ))}
          </ScrollView>
          <Block style={styles.imageNum}>
            <Text white bold size={13}>
              {imageNum + ' / ' + menuImage.length}
            </Text>
          </Block>
          <Modal
            visible={isVisible}
            transparent={true}
            onRequestClose={() => setIsVisible(false)}>
            <ImageViewer
              onClick={() => setIsVisible(false)}
              imageUrls={menuImage.map(e => {
                return {url: e};
              })}
            />
          </Modal>
        </Block>
      )}
    </Block>
  );
};

MenuImage.defaultProps = {};

MenuImage.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  imageNum: {
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
});
