import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, Switch} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import AppBar from './components/AppBar';
import {Block, Text} from 'app/src/components';
import {colors, sizes, style} from 'app/src/styles';

import {observer} from 'mobx-react-lite';
import {updateUser} from 'app/src/api/user';
import {UserStoreContext} from 'app/src/store/user';

const NoticeScreen = observer(props => {
  const {navigation} = props;

  const [messageEmail, setMessageEmail] = useState(false);
  const [messagePush, setMessagePush] = useState(false);
  const [messageSms, setMessageSms] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState(false);
  const [noticePush, setNoticePush] = useState(false);
  const [noticeSms, setNoticeSms] = useState(false);

  const {user} = useContext(UserStoreContext);

  useEffect(() => {
    const {notice} = user;

    setMessageEmail(notice.message.email);
    setMessagePush(notice.message.push);
    setMessageSms(notice.message.sms);

    setNoticeEmail(notice.notice.email);
    setNoticePush(notice.notice.push);
    setNoticeSms(notice.notice.sms);
  }, []);

  saveNotice = () => {
    let newUser = {
      ...user,
      notice: {
        message: {
          email: messageEmail,
          push: messagePush,
          sms: messageSms,
        },
        notice: {
          email: noticeEmail,
          push: noticePush,
          sms: noticeSms,
        },
      },
    };

    updateUser(user.email, newUser)
      .then(() => {
        console.log('done');
      })
      .catch(err => {
        console.log(err);
      });
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
          progress={'저장'}
          func={saveNotice}
        />
        <Text h2 bold style={{marginBottom: 10}}>
          메시지
        </Text>
        <Text style={{marginBottom: 10}}>
          예약 요청을 포함한 호스트와 게스트 간 메시지 수신
        </Text>
        <Block style={styles.inputRow}>
          <Text h3>이메일</Text>
          <Switch
            value={messageEmail}
            onValueChange={value => setMessageEmail(value)}
          />
        </Block>
        <Block style={styles.inputRow}>
          <Text h3>푸쉬알림</Text>
          <Switch
            value={messagePush}
            onValueChange={value => setMessagePush(value)}
          />
        </Block>
        <Block style={styles.inputRow}>
          <Text h3>문자메시지</Text>
          <Switch
            value={messageSms}
            onValueChange={value => setMessageSms(value)}
          />
        </Block>
        <Text h2 bold style={{marginBottom: 10, marginTop: 30}}>
          알림
        </Text>
        <Text style={{marginBottom: 10}}>
          예약 알림, 후기 작성 요청, 요금 설정 관련 기타 알림
        </Text>
        <Block style={styles.inputRow}>
          <Text h3>이메일</Text>
          <Switch
            value={noticeEmail}
            onValueChange={value => setNoticeEmail(value)}
          />
        </Block>
        <Block style={styles.inputRow}>
          <Text h3>푸시 알림</Text>
          <Switch
            value={noticePush}
            onValueChange={value => setNoticePush(value)}
          />
        </Block>
        <Block style={styles.inputRow}>
          <Text h3>문자 메시지</Text>
          <Switch
            value={noticeSms}
            onValueChange={value => setNoticeSms(value)}
          />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
});

NoticeScreen.navigationOptions = {
  header: null,
};
NoticeScreen.defaultProps = {};
const styles = StyleSheet.create({
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: colors.gray2,
  },
  inputs: {
    paddingHorizontal: sizes.padding,
  },
});

export default NoticeScreen;
