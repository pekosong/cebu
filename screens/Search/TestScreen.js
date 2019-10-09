import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createRef,
} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '../../components';

const {height, width} = Dimensions.get('window');

const images = [
  'https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331__340.jpg',
  'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://www.w3schools.com/howto/img_snow.jpg',
];
const TestScrenn = props => {
  const [image, setImage] = useState(null);
  const [oldPosition, setOldPosition] = useState({});
  const [myImages, setMyImages] = useState([]);

  const [showAnim] = useState(new Animated.Value(0));
  const gridImages = useRef([createRef()]);

  useEffect(() => {
    setMyImages(images);
    updateLength(images.length);
  }, []);

  updateLength = value => {
    for (let i = 0; i < value; i++) {
      gridImages.current[i] = gridImages.current[i] || createRef();
    }
  };

  handlePress = idx => {
    gridImages.current[idx].current.measure(
      (x, y, width, height, pageX, pageY) => {
        setOldPosition({
          x: pageX,
          y: pageY,
          width: width,
          height: height,
        });

        setImage(myImages[idx]);
        Animated.timing(showAnim, {
          toValue: 1,
          duration: 500,
        }).start();
      },
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {myImages.map((item, idx) => (
          <TouchableWithoutFeedback key={idx} onPress={() => handlePress(idx)}>
            <Animated.View
              style={{
                height: height - 300,
                width: width,
                padding: 10,
              }}>
              <Image
                ref={gridImages.current[idx]}
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
        <View
          style={{...StyleSheet.absoluteFill}}
          pointerEvents={image ? 'auto' : 'none'}>
          <ScrollView style={{flex: 1, zIndex: 1001, backgroundColor: 'white'}}>
            <View style={{flex: 2, zIndex: 1001, backgroundColor: 'white'}}>
              <Animated.Image
                source={{uri: image ? image : null}}
                style={[
                  {
                    top: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [oldPosition.y, 0],
                    }),
                    left: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [oldPosition.x, 0],
                    }),
                    height: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [oldPosition.height, height / 2],
                    }),
                    width: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [oldPosition.width, width],
                    }),
                    borderRadius: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [15, 0],
                    }),
                    resizeMode: 'cover',
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(showAnim, {
                    toValue: 0,
                    duration: 500,
                  }).start(() => {
                    setImage(null);
                  });
                }}
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 40,
                }}>
                <Text white h1>
                  X
                </Text>
              </TouchableOpacity>
            </View>
            <Animated.View
              style={{
                flex: 1,
                zIndex: 1000,
                backgroundColor: 'white',
                padding: 10,
                transform: [
                  {
                    translateY: showAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [-200, 0],
                    }),
                  },
                ],
                opacity: showAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              }}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                consequuntur vitae, veritatis aliquid facilis veniam sed error
                consequatur nihil maxime, rem quam quibusdam dolor atque fugit
                ipsa esse, corporis asperiores.
              </Text>
            </Animated.View>
          </ScrollView>
        </View>
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
