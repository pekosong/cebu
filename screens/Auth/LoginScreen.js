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

const EMAIL = 'peko22@naver.com';
const PASSWORD = 'thdckdrms1';

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
          console.log(err.message);
          setError(err.message);
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
            image:
              'https://img.icons8.com/plasticine/16/000000/person-male.png',
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
            Login
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
                Login
              </Text>
            )}
          </Button>
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.navigate('Auth')}>
              Back
            </Text>
          </Button>
          <Button>
            <Text
              gray
              caption
              center
              style={{textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate('Forgot')}>
              Forget your password?
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
