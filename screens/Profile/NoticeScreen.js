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
import {theme} from '../../constants';
import {Ionicons} from '@expo/vector-icons';

const NoticeScreen = props => {
  const {navigation} = props;
  const [notifications, setNotifications] = useState(true);
  const [newsletters, setNewsletters] = useState(false);

  useEffect(() => {}, []);

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
            <TouchableOpacity onPress={() => {}}>
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
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸쉬알림</Text>
            <Switch
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>문자메시지</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
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
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸시 알림</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>문자 메시지</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
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
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>푸시 알림</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
            />
          </Block>
          <Block center middle row space="between" style={styles.inputRow}>
            <Text h3>문자 메시지</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
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
    marginVertical: 10,
    borderBottomWidth: 0.2,
    paddingBottom: 10,
    borderBottomColor: theme.colors.gray,
  },
  inputs: {
    paddingHorizontal: theme.sizes.padding,
  },
});

export default NoticeScreen;
