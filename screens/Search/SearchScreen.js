import React, { useState, useEffect, useRef } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Keyboard
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import firebase from "../../constants/store";

const { width } = Dimensions.get("window");

const recommendList = [
  {
    shop: "오션스파",
    src: require("../../assets/images/cebu_massage1.jpg"),
    tag: "편안함, 피로싹",
    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "프라나스파",
    src: require("../../assets/images/cebu_massage2.jpeg"),
    tag: "편안함, 피로싹",

    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "메디핑거",
    src: require("../../assets/images/cebu_massage3.jpg"),
    tag: "편안함, 피로싹",

    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  },
  {
    shop: "에코스파",
    src: require("../../assets/images/cebu_massage4.jpg"),
    tag: "편안함, 피로싹",
    desc: "전신 아로마 마사지",
    afterPrice: "30,000",
    beforePrice: "20,000"
  }
];

const eventList = [
  {
    shop: "란타 코르도바",
    src: require("../../assets/images/cebu_food1.jpg"),
    tag: "전통",
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "아인 레스토랑",
    src: require("../../assets/images/cebu_food2.jpeg"),
    tag: "전통",
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "점보 7",
    src: require("../../assets/images/cebu_food3.jpeg"),
    tag: "전통",

    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  },
  {
    shop: "부페 레스토랑",
    src: require("../../assets/images/cebu_food4.jpg"),
    tag: "전통",
    desc: "태국 전통 음식",
    event: "1+1 행사 중"
  }
];

const SearchScreen = props => {
  const { navigation, categories } = props;
  const [showSearch, setShowSearch] = useState(false);
  const [cates, setCates] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const searchRef = useRef(null);
  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    setCates(categories);
    _storeData();
  }, []);

  _storeData = async () => {
    return await firebase
      .firestore()
      .collection("users")
      .doc("peko22@naver.com")
      .get()
      .then(doc => {
        dispatch({ type: "LOGIN", payload: doc.data() });
      })
      .catch(err => console.log(err));
  };

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
        <Block style={styles.categoryContainer}>
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
            <Image style={styles.imageStyle} source={item.src}></Image>
            <Ionicons
              style={{ position: "absolute", top: 5, right: 10 }}
              size={25}
              color={theme.colors.primary}
              name="md-heart"
            />
            <Block
              style={{
                position: "absolute",
                right: 5,
                bottom: 5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: 10
              }}
            >
              <Text white>오늘</Text>
            </Block>
          </Block>
          <Block row flex={1}>
            <Block flex={3} middle>
              <Text style={{ fontWeight: "bold", color: theme.colors.primary }}>
                {item.tag}
              </Text>
              <Text h3 bold style={{ marginVertical: 5 }}>
                {item.shop}
              </Text>
              <Text caption>{item.desc}</Text>
            </Block>
            <Block flex={2} middle>
              <Text
                gray
                caption
                style={{
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid"
                }}
              >
                {item.beforePrice}원
              </Text>
              <Text h4 bold style={{ marginTop: 5 }}>
                {item.afterPrice}원
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
          <Block flex={2}>
            <Image style={styles.imageStyle} source={item.src}></Image>
            <Ionicons
              style={{ position: "absolute", top: 5, right: 10 }}
              size={25}
              color={theme.colors.primary}
              name="md-heart"
            />
            <Block
              style={{
                position: "absolute",
                right: 5,
                bottom: 5,
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: "rgba(0,0,0,0.7)",
                borderRadius: 10
              }}
            >
              <Text white>오늘</Text>
            </Block>
          </Block>
          <Block row flex={1}>
            <Block flex={3} middle>
              <Text style={{ fontWeight: "bold", color: theme.colors.primary }}>
                {item.tag}
              </Text>
              <Text h3 bold style={{ marginVertical: 5 }}>
                {item.shop}
              </Text>
              <Text caption>{item.desc}</Text>
            </Block>
            <Block flex={2} middle>
              <Text h4 bold style={{ marginTop: 5 }}>
                {item.event}
              </Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  renderSearch = () => {
    return (
      <Modal
        animationType="slide"
        visible={showSearch}
        onRequestClose={() => setShowSearch(false)}
      >
        <Block
          padding={[theme.sizes.padding, theme.sizes.padding]}
          space="between"
        >
          <TouchableOpacity
            onPress={() => {
              setSearchResult([]);
              setShowSearch(false);
            }}
          >
            <Ionicons size={50} color={theme.colors.black} name="ios-close" />
          </TouchableOpacity>
          <Text h1 bold>
            세부의 모든게 있어요
          </Text>
          <Block flex={false} row style={{ marginVertical: 20 }}>
            <TextInput
              autoFocus={true}
              style={{ fontSize: 20, width: "100%" }}
              placeholder="여기는 어떠세요?"
              onFocus={() => {
                setShowSearch(true);
              }}
              onSubmitEditing={() => {
                handleSearch();
              }}
            ></TextInput>
          </Block>
          <FlatList
            data={searchResult}
            keyExtractor={item => item.name}
            renderItem={item => renderSearchResult(item)}
          ></FlatList>
        </Block>
      </Modal>
    );
  };
  renderSearchResult = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.name}
        onPress={() =>
          navigation.navigate("Shop", {
            title: cateMap[navigation.getParam("category")],
            shop: list
          })
        }
      >
        <Block row middle shadow style={{ paddingVertical: 10 }}>
          <Block flex={false}>
            <Image
              style={{ width: 20, height: 20, resizeMode: "cover" }}
              source={{ uri: item.icon }}
            />
          </Block>
          <Block middle style={{ paddingLeft: 10 }}>
            <Text h4 bold height={25}>
              {item.name}
            </Text>
            <Text caption h4>
              {item.types.join(", ")}
            </Text>
            <Text caption h4>
              {item.vicinity}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };
  handleSearch = () => {
    location = "10.31672,123.89071";
    key = "AIzaSyCo1nymGnZzH-3XzzmPV_UiNqfT4JbEWZQ";
    rankby = "distance";
    type = "food";
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&rankby=${rankby}&type=${type}&key=${key}`
      )
      .then(Response => {
        setSearchResult(Response.data.results);
      });
  };
  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Block row style={styles.search}>
          <Ionicons
            size={20}
            color={theme.colors.accent}
            name="md-search"
            style={{ width: "10%" }}
          />
          <TextInput
            ref={searchRef}
            refField={searchRef}
            style={{ width: "90%" }}
            placeholder="여기는 어떠세요?"
            onFocus={() => {
              Keyboard.dismiss();
              searchRef.current.blur();
              setShowSearch(true);
            }}
          ></TextInput>
        </Block>
      </Block>

      <ScrollView vertival={true}>
        <Block style={styles.title}>
          <Text h1 bold>
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
          <Text h1 bold>
            지금 할인 하고 있어요
          </Text>
          <Text h4 style={{ marginTop: 10 }}>
            Hello, Cebu 만을 위한 특별 할인 행사를 하고 있어요
          </Text>
        </Block>
        <Block style={styles.content}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {recommendList.map((item, idx) => renderRecommendation(item, idx))}
          </ScrollView>
        </Block>
        <Block style={styles.title}>
          <Text h1 bold>
            지금 이벤트 중이에요
          </Text>
          <Text h4 style={{ marginTop: 10 }}>
            Hello, Cebu 만을 위한 특별 이벤트를 하고 있어요
          </Text>
        </Block>

        <Block style={{ ...styles.content, marginBottom: 40 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          >
            {eventList.map((item, idx) => renderEvent(item, idx))}
          </ScrollView>
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
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    marginHorizontal: theme.sizes.padding,
    marginTop: 40,
    marginBottom: 20
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
  },
  categoryContainer: {
    flex: 0,
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
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default SearchScreen;
