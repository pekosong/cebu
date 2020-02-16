import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, TextInput} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {Notifications} from 'expo';

import AppBar from './components/AppBar';
import {Block, Text, Button} from 'app/src/components';
import {colors, style} from 'app/src/styles';

import {handleNotification} from 'app/src/api/notification';

import {useSelector, useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

const NoticeTestScreen = props => {
  const counter = useSelector(state => state.counter);
  const {user} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notification, setNotification] = useState({});
  const {navigation} = props;

  useEffect(() => {
    Notifications.addListener(_handleNotification);
  }, []);

  _handleNotification = notification => {
    // do whatever you want to do with the notification
    setNotification(notification);
  };

  return (
    <SafeAreaView forceInset={{top: 'always'}} style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={style.scrollTab}>
        <AppBar
          title={'알림 설정'}
          goBack={navigation.goBack}
          progress={'테스트'}
          func={() => handleNotification('a@naver.com', title, body)}
        />
        <Button
          onPress={() => dispatch(allActions.counterActions.increment(3))}>
          <Text>Increase Counter</Text>
        </Button>
        <Text>{counter}</Text>
        <Text h2 bold style={{marginBottom: 10}}>
          알림
        </Text>
        <Block style={styles.inputRow}>
          <Text style={styles.textStyle}>제목</Text>
          <TextInput
            defaultValue={title}
            placeholder="홍길동"
            onChangeText={e => setTitle(e)}
            style={{fontSize: 18}}
          />
        </Block>
        <Block style={styles.inputRow}>
          <Text style={styles.textStyle}>내용</Text>
          <TextInput
            defaultValue={body}
            placeholder="홍길동"
            onChangeText={e => setBody(e)}
            style={{fontSize: 18}}
          />
        </Block>
        <Block style={{margin: 10}}></Block>
        <Text h2 style={{marginBottom: 10}}>
          Origin: {notification.origin}
        </Text>
        <Text h2>Data: {JSON.stringify(notification.data)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

NoticeTestScreen.navigationOptions = {
  header: null,
};
NoticeTestScreen.defaultProps = {};
const styles = StyleSheet.create({
  inputRow: {
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default NoticeTestScreen;
