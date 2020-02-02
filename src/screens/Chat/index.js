import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {Block, Text, Loader} from 'app/src/components';
import {colors, style} from 'app/src/styles';
import firebase from 'app/src/constants/store';
import {chatApi} from 'app/src/api/';

import {Ionicons} from '@expo/vector-icons';

import {observer} from 'mobx-react-lite';
import {UserStoreContext} from 'app/src/store/user';

import 'moment/locale/ko';

const ChatScreen = observer(props => {
  const {navigation} = props;

  const [title, setTitle] = useState('');
  const [shopId, setShopId] = useState('');
  const [email, setEmail] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [docId, setDocId] = useState('');

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    const shopId = navigation.getParam('shopId');
    const shopName = navigation.getParam('shopName');
    const email = navigation.getParam('email');
    let unsubscribe;

    setShopId(shopId);
    setTitle(shopName);
    setEmail(email);

    unsubscribe = chatApi
      .getChatList(email, shopId)
      .onSnapshot(querySnapshot => {
        if (querySnapshot.empty) {
          chatApi.makeNewChat(email, shopId, shopName).then(song => {
            setDocId(song);
            setIsLoaded(true);
          });
        } else {
          querySnapshot.forEach(doc => {
            let msgList = doc.data().message;
            let newMsgList = [];
            if (msgList) {
              newMsgList = msgList.map(e => {
                e.createdAt = new Date(parseInt(e.createdAt.seconds) * 1000);
                return e;
              });
            }
            setMessages(newMsgList);
            setIsLoaded(true);
            setDocId(doc.id);
          });
        }
      });
    return () => {
      _deleteMessage();
      unsubscribe();
    };
  }, []);

  _deleteMessage = () => {
    if (messages.length == 0) {
      firebase
        .firestore()
        .collection('messages')
        .doc(docId)
        .delete()
        .then(() => console.log('Done'))
        .catch(err => console.log(err));
    }
  };

  onSend = async msg => {
    msg[0].user.avatar = user.image;
    await firebase
      .firestore()
      .collection('messages')
      .doc(docId)
      .update({message: GiftedChat.append(messages, msg)})
      .then(() => {
        setMessages(GiftedChat.append(messages, msg));
        console.log('Document successfully written!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!isLoaded) return <Loader></Loader>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Block
        center
        row
        space="between"
        style={[
          style.appBar,
          {
            justifyContent: 'space-between',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons size={30} color={colors.black} name="ios-arrow-back" />
        </TouchableOpacity>
        {user.host ? (
          <Text h2 bold>
            {email}
          </Text>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.push('Shop', {shopId: shopId})}>
            <Text h1 bold>
              {title}
            </Text>
          </TouchableOpacity>
        )}
      </Block>
      <GiftedChat
        messages={messages}
        onSend={msg => onSend(msg)}
        user={{
          _id: user.host ? shopId : email,
        }}
        locale="ko"
        placeholder="Message"
        dateFormat="ll"
        bottomOffset={Platform.OS === 'android' ? 0 : 0}
      />
      <KeyboardSpacer topSpacing={Platform.OS === 'android' ? 35 : 0} />
    </SafeAreaView>
  );
});

ChatScreen.defaultProps = {};

ChatScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});

export default ChatScreen;
