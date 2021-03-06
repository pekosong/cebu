import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
  Switch,
  AsyncStorage,
} from 'react-native';

import {Button, Block, Input, Text} from 'app/src/components';
import {colors, sizes} from 'app/src/styles';

import {login} from 'app/src/api/auth';
import {getUser} from 'app/src/api/user';

import {useDispatch} from 'react-redux';
import allActions from 'app/src/redux/actions';

const EMAIL = '';
const PASSWORD = '';

const LoginScreen = props => {
  const dispatch = useDispatch();

  const {navigation} = props;
  const [email, setEmail] = useState(EMAIL);
  const [password, setPassword] = useState(PASSWORD);
  const [error, setError] = useState(null);
  const [isRemember, setIsRemember] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEmail();
  }, []);

  getEmail = async () => {
    const remember_ = await AsyncStorage.getItem('isRemember');
    const email_ = await AsyncStorage.getItem('email');
    if (remember_ === 'true') {
      setIsRemember(true);
    } else {
      setIsRemember(false);
    }
    setEmail(email_);
  };

  handleLogin = () => {
    setLoading(true);
    if ((email == '') | (password == '')) {
      setError('모두 입력하세요');
      setIsError(true);
      setLoading(false);
      return;
    }

    login(email, password)
      .then(async () => {
        if (isRemember) {
          await AsyncStorage.setItem('email', email);
        } else {
          await AsyncStorage.removeItem('email');
        }
        await AsyncStorage.setItem('isRemember', isRemember ? 'true' : 'false');
        const doc = await getUser(email).get();
        dispatch(allActions.userActions.setUser(doc.data()));
        navigation.goBack();
      })
      .catch(err => {
        if (err.code == 'auth/invalid-email') {
          setError('정확한 이메일을 입력하세요.');
        } else if (err.code == 'auth/user-not-found') {
          setError('이메일을 확인할 수 없습니다.');
        } else if (err.code == 'auth/wrong-password') {
          setError('비밀번호가 유효하지 않습니다.');
        } else {
          setError(err.message);
        }
        setIsError(true);
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, sizes.padding]}>
        <Block middle>
          <Text bold style={{fontSize: 40, paddingBottom: 40}}>
            로그인
          </Text>
          <Input
            label="이메일"
            style={[styles.input, isError && styles.hasErrors]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            secure
            label="비밀번호"
            style={[styles.input, isError && styles.hasErrors]}
            defaultValue={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          <Block center right row style={{flex: 0, marginBottom: 10}}>
            <Text gray style={{marginRight: 5}}>
              이메일 저장
            </Text>
            <Switch
              value={isRemember}
              onValueChange={value => setIsRemember(value)}
            />
          </Block>
          {isError && <Text color={'red'}>{error}</Text>}
          <Button normal onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                로그인
              </Text>
            )}
          </Button>
          <Button border onPress={() => navigation.navigate('Signup')}>
            <Text bold accent center>
              회원가입
            </Text>
          </Button>
          <Button shadow style={styles.shadow}>
            <Text gray center semibold onPress={() => navigation.goBack()}>
              뒤로
            </Text>
          </Button>
          <Button>
            <Text
              gray
              center
              style={{textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate('Forgot')}>
              비밀번호를 잊어버리셨나요?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
});

export default LoginScreen;
