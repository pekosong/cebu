import React, { useState, useEffect } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { Button, Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const cateCat = {
  ALL: "전체",
  EAT: "먹거리",
  ACTIVITY: "놀거리",
  AESTHETIC: "힐링"
};

const recommendList = [
  {
    shop: "오션스파",
    src: require("../../assets/images/cebu_massage1.jpg"),
    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "프라나스파",
    src: require("../../assets/images/cebu_massage2.jpeg"),

    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "메디핑거",
    src: require("../../assets/images/cebu_massage3.jpg"),

    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "에코스파",
    src: require("../../assets/images/cebu_massage4.jpg"),
    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  }
];

const eventList = [
  {
    shop: "란타 코르도바",
    src: require("../../assets/images/cebu_food1.jpg"),
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "아인 레스토랑",
    src: require("../../assets/images/cebu_food2.jpeg"),
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "점보 7",
    src: require("../../assets/images/cebu_food3.jpeg"),

    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "부페 레스토랑",
    src: require("../../assets/images/cebu_food4.jpg"),
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  }
];

const SearchScreen = props => {
  const { navigation, profiles, categories } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [cates, setCates] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setCates(categories);
  }, []);

  renderList = item => {
    return (
      <TouchableOpacity
        key={item.name}
        onPress={() =>
          navigation.navigate("Category", {
            title: "찾기",
            category: item.id
          })
        }
      >
        <Block
          flex={false}
          style={{
            borderRadius: 3,
            width: 120,
            height: 120,
            marginRight: 20,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
          }}
        >
          <Image
            style={{
              borderRadius: 3,
              width: "100%",
              height: 70,
              resizeMode: "cover"
            }}
            source={item.src}
          ></Image>

          <Text black style={{ padding: 8 }}>
            {item.id}
          </Text>
        </Block>
      </TouchableOpacity>
    );
  };

  renderRecommendation = (item, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={() => {}}>
        <Block style={styles.elementContainer}>
          <Block flex={2}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover"
              }}
              source={item.src}
            ></Image>
            <Ionicons
              style={{ position: "absolute", top: 5, right: 10 }}
              size={25}
              color={theme.colors.primary}
              name="md-heart"
            />
          </Block>
          <Block row flex={1}>
            <Block middle>
              <Text caption>{item.desc}</Text>
              <Text h3 bold style={{ marginVertical: 5 }}>
                {item.shop}
              </Text>
              <Text caption>{item.desc}</Text>
            </Block>
            <Block center middle>
              <Text>{item.beforePrice}</Text>
              <Text h4 bold primary style={{ marginTop: 5 }}>
                특가 {item.afterPrice}
              </Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };
  renderEvent = (item, idx) => {
    return (
      <TouchableOpacity key={idx} onPress={() => {}}>
        <Block style={styles.elementContainer}>
          <Block flex={3}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover"
              }}
              source={item.src}
            ></Image>
            <Ionicons
              style={{ position: "absolute", top: 5, right: 10 }}
              size={25}
              color={theme.colors.primary}
              name="md-heart"
            />
          </Block>
          <Block row flex={1.5}>
            <Block middle>
              <Text caption>{item.desc}</Text>
              <Text h3 bold style={{ marginVertical: 5 }}>
                {item.shop}
              </Text>
              <Text caption>{item.desc}</Text>
            </Block>
            <Block center middle>
              <Text h4 bold primary style={{ marginTop: 5 }}>
                {item.event}
              </Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };
  renderTest = ({ item, idx }) => {
    return (
      <TouchableOpacity key={idx} onPress={() => {}}>
        <Block style={{ ...styles.elementContainer, flex: false }}>
          <Block flex={3}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover"
              }}
              source={item.src}
            ></Image>
            <Ionicons
              style={{ position: "absolute", top: 5, right: 10 }}
              size={25}
              color={theme.colors.primary}
              name="md-heart"
            />
          </Block>
          <Block row flex={1.5}>
            <Block middle>
              <Text caption>{item.desc}</Text>
              <Text h3 bold style={{ marginVertical: 5 }}>
                {item.shop}
              </Text>
              <Text caption>{item.desc}</Text>
            </Block>
            <Block center middle>
              <Text h4 bold primary style={{ marginTop: 5 }}>
                {item.event}
              </Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };
  pagination = () => {
    return (
      <Pagination
        dotsLength={eventList.length}
        activeDotIndex={slide}
        containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        dotStyle={{
          width: 5,
          height: 5,
          borderRadius: 2.5,
          marginHorizontal: 2,
          backgroundColor: "rgba(0, 0, 255, 0.92)"
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

  const renderSearch = () => {
    return (
      <Modal
        animationType="slide"
        visible={showSearch}
        onRequestClose={() => setShowSearch(false)}
      >
        <Block
          padding={[theme.sizes.padding * 3, theme.sizes.padding]}
          space="between"
        >
          <Text h1 bold>
            세부의 모든게 있어요
          </Text>
          <Block flex={false} row style={{ marginVertical: 20 }}>
            <TextInput
              autoFocus={true}
              style={{ fontSize: 20, width: "100%" }}
              placeholder="여기는 어떠세요?"
              onFocus={() => setShowSearch(true)}
            ></TextInput>
          </Block>
          <ScrollView
            style={{ marginVertical: theme.sizes.padding }}
          ></ScrollView>
          <Block bottom>
            <Button gradient onPress={() => setShowSearch(false)}>
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  };

  return (
    <Block style={{ paddingBottom: 10 }}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Block row style={styles.search}>
          <Ionicons
            size={20}
            color={theme.colors.accent}
            name="md-search"
            style={{ width: "10%" }}
          />
          <TextInput
            style={{ width: "90%" }}
            placeholder="여기는 어떠세요?"
            onFocus={() => setShowSearch(true)}
          ></TextInput>
        </Block>
      </Block>
      <ScrollView vertival={true}>
        <Block style={styles.title}>
          <Text h2 bold>
            평생 잊지 못할 세부를 원하세요?
          </Text>
        </Block>
        <Block style={{ ...styles.content, height: 130 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {cates.map(item => renderList(item))}
          </ScrollView>
        </Block>

        <Block style={styles.title}>
          <Text h2 bold>
            지금 할인 하고 있어요
          </Text>
        </Block>
        <Block style={styles.content}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            pagingEnabled
          >
            {recommendList.map((item, idx) => renderRecommendation(item, idx))}
          </ScrollView>
        </Block>
        <Block style={styles.title}>
          <Text h2 bold>
            지금 이벤트 중이에요
          </Text>
        </Block>

        <Block style={styles.content}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {eventList.map((item, idx) => renderEvent(item, idx))}
          </ScrollView>
        </Block>
        <Block style={styles.title}>
          <Text h2 bold>
            여기도 이벤트 중~!
          </Text>
        </Block>

        <Block style={styles.content}>
          <Carousel
            layout={"default"}
            data={eventList}
            renderItem={renderTest}
            sliderWidth={width - theme.sizes.base * 3}
            onSnapToItem={index => setSlide(index)}
            itemWidth={250}
            firstItem={1}
          />
        </Block>
      </ScrollView>
      {renderSearch()}
    </Block>
  );
};

SearchScreen.navigationOptions = {
  header: null
};
SearchScreen.defaultProps = {
  profiles: mocks.profiles,
  categories: mocks.categories
};

const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 4,
    marginBottom: 5,
    paddingHorizontal: theme.sizes.padding
  },
  search: {
    padding: 10,
    backgroundColor: theme.colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.2
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  title: {
    marginHorizontal: theme.sizes.padding,
    marginVertical: 20,
    marginLeft: theme.sizes.padding
  },
  content: {
    marginLeft: theme.sizes.padding,
    height: 220
  },

  elementContainer: {
    borderRadius: 3,
    width: 250,
    height: 250,
    marginRight: 20
  }
});

export default SearchScreen;
