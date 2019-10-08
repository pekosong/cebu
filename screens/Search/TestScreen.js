import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import {Block, Text, Card, SearchBar, CachedImage} from '../../components';

const {height, width} = Dimensions.get('window');

const images = [
  'https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331__340.jpg',
  'https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331__340.jpg',
  'https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331__340.jpg',
];
const TestScrenn = props => {
  const [image, setImage] = useState(null);
  const [showAnim] = useState(new Animated.Value(0));

  useEffect(() => {}, [images]);

  handlePress = idx => {
    setImage(images[idx]);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {images.map((item, idx) => (
          <TouchableWithoutFeedback key={idx} onPress={() => handlePress(idx)}>
            <Animated.View
              style={{height: height - 150, width: width, padding: 15}}>
              <Image
                source={{uri: item}}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'cover',
                  borderRadius: 15,
                }}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      {image ? (
        <Block
          style={StyleSheet.absoluteFill}
          pointerEvents={image ? 'auto' : 'none'}>
          <View style={{flex: 2, zIndex: 1001}}>
            <Image
              source={{uri: image}}
              style={{
                top: 0,
                left: 0,
                height: '100%',
                width: width,
                resizeMode: 'cover',
              }}></Image>
          </View>
          <View
            style={{
              flex: 1,
              zIndex: 100,
              backgroundColor: 'white',
              padding: 15,
            }}>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              consequuntur vitae, veritatis aliquid facilis veniam sed error
              consequatur nihil maxime, rem quam quibusdam dolor atque fugit
              ipsa esse, corporis asperiores.
            </Text>
          </View>
        </Block>
      ) : null}
    </SafeAreaView>
  );
};

TestScrenn.navigationOptions = {
  header: null,
};
TestScrenn.defaultProps = {};

const styles = StyleSheet.create({});

export default TestScrenn;
