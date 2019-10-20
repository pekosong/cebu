import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

import {Button, Block, Input, Text} from '../../components';
import {theme} from '../../constants';

import firebase from '../../constants/store';
import {useDispatch} from 'react-redux';
import {watchUserData, downloadShopData} from '../../redux/action';

const EMAIL = '';
const PASSWORD = '';

const LoginScreen = props => {
  const {navigation} = props;
  const [email, setEmail] = useState(EMAIL);
  const [password, setPassword] = useState(PASSWORD);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  hasErrors = () => (isError ? styles.hasErrors : null);

  handleLogin = () => {
    setLoading(true);

    if ((email == '') | (password == '')) {
      setError('모두 입력하세요');
      setIsError(true);
      setLoading(false);
      return;
    }

    checkUser().then(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          unsubscribe = dispatch(watchUserData(email));
          dispatch(downloadShopData()).then(() => {
            setIsError(false);
            setLoading(false);
            navigation.navigate('Search');
          });
        })
        .catch(err => {
          console.log(err.code);
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
    });
  };

  checkUser = () => {
    return firebase
      .firestore()
      .collection('users')
      .doc(email)
      .get()
      .then(e => {
        if (e.data() == undefined) {
          const newCus = {
            email: email,
            createAt: new Date(),
            myfavorites: [],
            plans: {},
            sex: '',
            phone: '',
            name: '',
            host: false,
            shops: [],
            birth: '',
            notice: {
              message: {
                email: true,
                push: true,
                sms: true,
              },
              notice: {
                email: true,
                push: true,
                sms: true,
              },
              promotion: {
                email: true,
                push: true,
                sms: true,
              },
            },
            image: 'https://randomuser.me/api/portraits/men/41.jpg',
          };
          return firebase
            .firestore()
            .collection('users')
            .doc(email)
            .set(newCus);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.padding]}>
        <Block middle>
          <Text bold style={{fontSize: 40, paddingBottom: 40}}>
            로그인
          </Text>
          <Input
            label="Email"
            style={[styles.input, hasErrors()]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          <Input
            secure
            label="Password"
            style={[styles.input, hasErrors()]}
            defaultValue={password}
            onChangeText={text => {
              setPassword(text);
            }}
          />
          {isError ? <Text color={'red'}>{error}</Text> : null}

          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                로그인
              </Text>
            )}
          </Button>
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.navigate('Auth')}>
              뒤로
            </Text>
          </Button>
          <Button>
            <Text
              gray
              caption
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
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: 'red',
  },
});

export default LoginScreen;
