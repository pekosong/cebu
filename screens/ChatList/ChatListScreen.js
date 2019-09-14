import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import { Button, Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
import firebase from "../../constants/store";
import moment from "moment";

const ChatListScreen = props => {
  const { navigation, profiles } = props;
  const [chatList, setChatlist] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    _retrieveData().then(email => {
      let unsubscribe = firebase
        .firestore()
        .collection("users")
        .doc(email)
        .collection("messages")
        .onSnapshot(querySnapshot => {
          let myList = [];
          querySnapshot.forEach(doc => {
            let chat = {};
            data = doc.data();

            if (data.message.length > 0) {
              song = data.message.reduce(function(p, v) {
                if (p.createdAt) {
                  return p.createdAt.seconds > v.createdAt.seconds ? p : v;
                } else {
                  return v;
                }
              });
              date = moment.unix(song.createdAt.seconds).format("YYYY-MM-DD");
              time = moment.unix(song.createdAt.seconds).format("HH:mm:ss");
              message = song.text;
            } else {
              message = "대화가 없습니다.";
            }

            chat.name = data.shop;
            chat.avatar = `https://i.pravatar.cc/300`;
            chat.message = message;
            chat.timeStamp = song.createdAt.seconds;
            chat.date = date;
            chat.time = time;
            myList.push(chat);
          });
          myList = myList.sort(function(a, b) {
            return b.timeStamp - a.timeStamp;
          });
          setIsLoaded(true);
          setChatlist(myList);
        });
      return () => {
        unsubscribe();
      };
    });
  }, []);

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("profile");
      if (value !== null) {
        const profile = JSON.parse(value);
        setEmail(profile.email);
        return profile.email;
      }
    } catch (err) {
      console.log(err);
    }
  };

  renderList = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Chat", {
            title: item.name,
            engName: item.name
          })
        }
      >
        <Block
          row
          style={{
            marginVertical: 10,
            paddingBottom: 5,
            borderBottomWidth: 0.3,
            borderBottomColor: theme.colors.gray
          }}
        >
          <Block left flex={1}>
            <Image source={{ uri: item.avatar }} style={styles.avatarChat} />
          </Block>
          <Block flex={3.5} style={{ marginTop: 15, height: 40 }}>
            <Block middle row space="between">
              <Text h4 bold>
                {item.name}
              </Text>
              <Block flex={false}>
                <Text caption style={{ textAlign: "right" }}>
                  {item.date}
                </Text>
                <Text caption style={{ textAlign: "right" }}>
                  {item.time}
                </Text>
              </Block>
            </Block>
            <Block bottom>
              <Text>{item.message}</Text>
            </Block>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block>
      {isLoaded ? (
        <Block>
          <Block flex={false} style={styles.header}>
            <Text h1 bold>
              메시지
            </Text>
          </Block>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: theme.sizes.padding }}
          >
            <FlatList
              data={chatList}
              keyExtractor={item => item.name}
              renderItem={item => renderList(item)}
            />
          </ScrollView>
        </Block>
      ) : (
        <Block style={styles.full}>
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
          ></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
};

ChatListScreen.navigationOptions = {
  header: null
};
ChatListScreen.defaultProps = {
  profiles: mocks.profiles
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    marginTop: theme.sizes.base * 4.2,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2
  }
});

export default ChatListScreen;
