import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Button, Block, Text} from '../../components';
import {theme} from '../../styles';
import {Ionicons} from '@expo/vector-icons';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import firebase from '../../constants/store';

const NoticeScreen = props => {
  const {navigation} = props;

  const [messageEmail, setMessageEmail] = useState(false);
  const [messagePush, setMessagePush] = useState(false);
  const [messageSms, setMessageSms] = useState(false);

  const [noticeEmail, setNoticeEmail] = useState(false);
  const [noticePush, setNoticePush] = useState(false);
  const [noticeSms, setNoticeSms] = useState(false);

  const [promotionEmail, setPromotionEmail] = useState(false);
  const [promotionPush, setPromotionPush] = useState(false);
  const [promotionSms, setPromotionSms] = useState(false);

  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    const {notice} = user;

    setMessageEmail(notice.message.email);
    setMessagePush(notice.message.push);
    setMessageSms(notice.message.sms);

    setNoticeEmail(notice.notice.email);
    setNoticePush(notice.notice.push);
    setNoticeSms(notice.notice.sms);

    setPromotionEmail(notice.promotion.email);
    setPromotionPush(notice.promotion.push);
    setPromotionSms(notice.promotion.sms);
  }, []);

  saveNotice = async () => {
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
        promotion: {
          email: promotionEmail,
          push: promotionPush,
          sms: promotionSms,
        },
      },
    };
    await firebase
      .firestore()
      .collection('users')
      .doc(user.email)
      .update(newUser)
      .then(() => {
        dispatch({type: 'UPDATE', payload: newUser});
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Block style={styles.header}>
          <Block row center space="between">
            <Button onPress={() => navigation.goBack()}>
              <Block center row>
                <Ionicons
                  size={30}
                  color={theme.colors.black}
                  name="ios-arrow-back"
                />
              </Block>
            </Button>
            <TouchableOpacity
              onPress={() => {
                saveNotice();
              }}>
              <Text bold h3>
                저장
              </Text>
            </TouchableOpacity>
          </Block>
          <Text h1 bold style={{marginTop: 10, marginBottom: 30}}>
            알림 설정
          </Text>
        </Block>

        <Block style={styles.inputs}>
          <Text h2 bold style={{marginBottom: 10}}>
            메시지
          </Text>
          <Text style={{marginBottom: 10}}>
            예약 요청을 포함한 호스트와 게스트 간 메시지 수신
          </Text>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>이메일</Text>
            <Switch
              value={messageEmail}
              onValueChange={value => setMessageEmail(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸쉬알림</Text>
            <Switch
              value={messagePush}
              onValueChange={value => setMessagePush(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
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
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>이메일</Text>
            <Switch
              value={noticeEmail}
              onValueChange={value => setNoticeEmail(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸시 알림</Text>
            <Switch
              value={noticePush}
              onValueChange={value => setNoticePush(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>문자 메시지</Text>
            <Switch
              value={noticeSms}
              onValueChange={value => setNoticeSms(value)}
            />
          </Block>
          <Text h2 bold style={{marginBottom: 10, marginTop: 30}}>
            프로모션과 도움말
          </Text>
          <Text style={{marginBottom: 10}}>
            새로운 이벤트, 할인 정보 등 기타 추천을 수신합니다
          </Text>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>이메일</Text>
            <Switch
              value={promotionEmail}
              onValueChange={value => setPromotionEmail(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸시 알림</Text>
            <Switch
              value={promotionPush}
              onValueChange={value => setPromotionPush(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>문자 메시지</Text>
            <Switch
              value={promotionSms}
              onValueChange={value => setPromotionSms(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

NoticeScreen.navigationOptions = {
  header: null,
};
NoticeScreen.defaultProps = {};
const styles = StyleSheet.create({
  header: {
    marginTop: Platform.OS === 'ios' ? null : theme.sizes.base * 3,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding,
  },
  inputRow: {
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: theme.colors.gray2,
  },
  inputs: {
    paddingHorizontal: theme.sizes.padding,
  },
});

export default NoticeScreen;
