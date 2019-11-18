import React, {useState, useEffect} from 'react';
import {StyleSheet, Keyboard, ActivityIndicator, Platform} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {Ionicons} from '@expo/vector-icons';
import {Button, Block, Text} from 'app/src/components';

import {colors, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {chatApi} from 'app/src/api/';
import {useSelector, shallowEqual} from 'react-redux';

import 'moment/locale/ko';

export default function ChatScreen(props) {
  const {navigation} = props;
  const [title, setTitle] = useState('');
  const [shopId, setShopId] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoaded, setisLoaded] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    const shop = navigation.getParam('shopId');
    const shopName = navigation.getParam('shopName');
    const email = navigation.getParam('email');

    setShopId(shop);
    setTitle(shopName);
    setEmail(email);

    let unsubscribe1 = firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection('messages')
      .doc(shop)
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
          setisLoaded(true);
        } catch (err) {
          chatApi.makeNewUserChat(email, shop, shopName);
        }
      });

    let unsubscribe2 = firebase
      .firestore()
      .collection('shops')
      .doc(shop)
      .collection('messages')
      .doc(email)
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
          setisLoaded(true);
        } catch (err) {
          chatApi.makeNewShopChat(email, shop, shopName);
        }
      });

    return () => {
      _deleteMessage();
      unsubscribe1();
      unsubscribe2();
    };
  }, []);

  _deleteMessage = () => {
    if (messages.length == 0) {
      firebase
        .firestore()
        .collection('users')
        .doc(email)
        .collection('messages')
        .doc(shopId)
        .delete()
        .then(() => console.log('Done'))
        .catch(err => console.log(err));

      firebase
        .firestore()
        .collection('shops')
        .doc(shopId)
        .collection('messages')
        .doc(email)
        .delete()
        .then(() => console.log('Done'))
        .catch(err => console.log(err));
    }
  };

  onSend = async msg => {
    msg[0].user.avatar = user.image;

    await firebase
      .firestore()
      .collection('users')
      .doc(email)
      .collection('messages')
      .doc(shopId)
      .update({message: GiftedChat.append(messages, msg)})
      .then(() => {
        setMessages(GiftedChat.append(messages, msg));
        console.log('Document successfully written!');
      })
      .catch(err => {
        console.log(err);
      });

    await firebase
      .firestore()
      .collection('shops')
      .doc(shopId)
      .collection('messages')
      .doc(email)
      .update({message: GiftedChat.append(messages, msg)})
      .then(() => {
        setMessages(GiftedChat.append(messages, msg));
        console.log('Document successfully written!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  renderChat = () => {
    Keyboard.dismiss();
    return (
      <Block style={{flex: 1}}>
        <GiftedChat
          messages={messages}
          onSend={msg => onSend(msg)}
          user={{
            _id: user.host ? shopId : email,
          }}
          locale="ko"
          placeholder="Message"
          dateFormat="ll"
          // bottomOffset={50}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer topSpacing={-15} /> : null}
      </Block>
    );
  };

  return (
    <Block>
      <Block flex={false} row center space="between" style={style.mainHeader}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
          </Block>
        </Button>
        {user.host ? (
          <Button>
            <Text h2 bold>
              {email}
            </Text>
          </Button>
        ) : (
          <Button onPress={() => navigation.navigate('Shop', {shopId: shopId})}>
            <Text h1 bold>
              {title}
            </Text>
          </Button>
        )}
      </Block>
      {isLoaded ? (
        renderChat()
      ) : (
        <Block style={style.full}>
          <ActivityIndicator
            size="large"
            color={colors.accent}></ActivityIndicator>
        </Block>
      )}
    </Block>
  );
}

ChatScreen.defaultProps = {};

ChatScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});
