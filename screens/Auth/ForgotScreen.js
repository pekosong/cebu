import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

import {Button, Block, Input, Text} from '../../components';
import {theme} from '../../constants';

import firebase from '../../constants/store';

const ForgotScreen = props => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  handleForgot = () => {
    setLoading(true);
    var auth = firebase.auth();
    var emailAddress = email;

    firebase.auth().languageCode = 'ko';
    auth
      .sendPasswordResetEmail(emailAddress)
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        setError(err.message);
        setIsError(true);
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, theme.sizes.padding]}>
        <Block middle>
          <Text bold style={{fontSize: 40, paddingBottom: 15}}>
            비밀번호
          </Text>
          <Text bold style={{fontSize: 40, paddingBottom: 40}}>
            재설정
          </Text>
          <Input
            label="Email"
            style={[styles.input]}
            defaultValue={email}
            onChangeText={text => {
              setEmail(text);
            }}
          />
          {isError ? <Text color={'red'}>{error}</Text> : null}

          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                메일 보내기
              </Text>
            )}
          </Button>
          <Button shadow style={styles.shadow}>
            <Text center semibold onPress={() => navigation.goBack()}>
              뒤로
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

ForgotScreen.navigationOptions = {
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
});

export default ForgotScreen;
