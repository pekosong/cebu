import React, {useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  ActivityIndicator,
  Platform,
} from 'react-native';

import {createUser} from 'app/src/api/user';
import {Button, Block, Input, Text} from 'app/src/components';
import {sizes, colors} from 'app/src/styles';
import {sign} from 'app/src/api/auth';

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const SignupScreen = props => {
  const {navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  signUp = () => {
    setLoading(true);
    Keyboard.dismiss();

    if (password != confirmPassword) {
      setError('패스워드가 일치하지 않습니다.');
      setIsError(true);
      setLoading(false);
      return;
    }

    sign(email, password)
      .then(async user => {
        const uid = user.user.uid;
        const token = await registerForPushNotificationsAsync();
        await createUser(email, uid, token);
        setError('');
        setIsError(false);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
        setError(err.message);
        setIsError(true);
        setLoading(false);
      });
  };

  registerForPushNotificationsAsync = async () => {
    const {status: existingStatus} = await Permissions.getAsync(
      Permissions.NOTIFICATIONS,
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('notification', {
        name: 'Notification Msg',
        sound: true,
      });
    }
    // Get the token that uniquely identifies this device

    const token = await Notifications.getExpoPushTokenAsync();
    return token;
  };

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <Block padding={[0, sizes.padding]}>
        <Block middle>
          <Text bold style={{fontSize: 40, paddingBottom: 40}}>
            회원 가입
          </Text>
          <Input
            label="이메일"
            style={[styles.input, isError && styles.hasErrors, {fontSize: 16}]}
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
          <Input
            secure
            label="비밀번호 확인"
            style={[styles.input, isError && styles.hasErrors]}
            defaultValue={confirmPassword}
            onChangeText={text => {
              setConfirmPassword(text);
            }}
          />
          {isError && <Text color={'red'}>{error}</Text>}

          <Button
            normal
            onPress={() => {
              signUp();
            }}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                가입
              </Text>
            )}
          </Button>
          <Button shadow style={styles.shadow}>
            <Text center gray onPress={() => navigation.goBack()}>
              뒤로
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = {
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

export default SignupScreen;
