import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  AsyncStorage,
  Keyboard,
  ActivityIndicator,
  Platform
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import KeyboardSpacer from "react-native-keyboard-spacer";

import { Ionicons } from "@expo/vector-icons";

import { Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import firebase from "../constants/store";

import "moment/locale/ko";

export default function ChatScreen(props) {
  const { navigation } = props;
  const [title, setTitle] = useState("");
  const [engName, setEngName] = useState("");
  const [messages, setMessages] = useState([]);
  const [email, setEmail] = useState("");
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    const name = navigation.getParam("title");
    const engName = navigation.getParam("engName");
    let unsubscribe;

    setTitle(name);
    setEngName(engName);

    _retrieveData().then(email => {
      roomName = email + "_" + engName;
      unsubscribe = firebase
        .firestore()
        .collection("chats")
        .doc(roomName)
        .onSnapshot(doc => {
          try {
            let msgs = doc.data().message;
            let newMsgs = [];
            if (msgs) {
              newMsgs = msgs.map(e => {
                e.createdAt = new Date(parseInt(e.createdAt.seconds) * 1000);
                return e;
              });
            }
            setMessages(newMsgs);
            setTimeout(() => {
              setisLoaded(true);
            }, 100);
          } catch (err) {
            firebase
              .firestore()
              .collection("chats")
              .doc(roomName)
              .set({ email: email, shop: engName, message: [] });
          }
        });
    });

    return () => {
      unsubscribe();
    };
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

  onSend = async msg => {
    await firebase
      .firestore()
      .collection("chats")
      .doc(email + "_" + engName)
      .update({ message: GiftedChat.append(messages, msg) })
      .then(() => {
        setMessages(GiftedChat.append(messages, msg));
        console.log("Document successfully written!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderChat = () => {
    Keyboard.dismiss();
    return (
      <Block style={{ flex: 1 }}>
        <GiftedChat
          messages={messages}
          onSend={msg => onSend(msg)}
          user={{
            _id: email
          }}
          locale="ko"
          placeholder="Message"
          dateFormat="ll"
          // bottomOffset={50}
        />
        {Platform.OS === "android" ? <KeyboardSpacer topSpacing={-15} /> : null}
      </Block>
    );
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons
              name={title}
              size={35}
              color={theme.colors.primary}
              name="ios-arrow-back"
            />
          </Block>
        </Button>
        <Button>
          <Text h1 bold>
            {title}
          </Text>
        </Button>
      </Block>
      {isLoaded ? (
        renderChat()
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
}

ChatScreen.defaultProps = {
  profiles: mocks.profiles
};

ChatScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "center"
  },

  header: {
    paddingTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.base * 1.5
  },

  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  }
});
