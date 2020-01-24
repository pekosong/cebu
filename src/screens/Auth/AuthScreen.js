import React, {useState} from 'react';
import {Animated, StyleSheet, Modal, ScrollView} from 'react-native';

import {Button, Block, Text} from 'app/src/components';
import {colors, sizes} from 'app/src/styles';

function Welcome(props) {
  const {navigation} = props;
  const [showTerms, setShowTerms] = useState(false);
  scrollX = new Animated.Value(0);

  const renderTermsService = () => {
    return (
      <Modal
        animationType="slide"
        visible={showTerms}
        onRequestClose={() => setShowTerms(false)}>
        <Block padding={[sizes.padding * 2, sizes.padding]} space="between">
          <Text h2 light>
            Terms of Service
          </Text>
          <ScrollView style={{marginVertical: sizes.padding}}>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text caption gray height={24} style={{marginBottom: sizes.base}}>
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
          </ScrollView>
          <Block middle padding={[sizes.base / 2, 0]}>
            <Button gradient onPress={() => setShowTerms(false)}>
              <Text center white>
                I understand
              </Text>
            </Button>
          </Block>
        </Block>
      </Modal>
    );
  };
  return (
    <Block>
      <Block center middle flex={1}>
        <Text h2 center bold>
          Hello,
          <Text>{'  '}</Text>
          <Text bold primary style={{fontSize: 65}}>
            Cebu
          </Text>
        </Text>
        <Text h3 gray2>
          세부의 모든 것
        </Text>
      </Block>
      <Block middle flex={0.4} margin={[0, sizes.padding]}>
        <Button gradient onPress={() => navigation.navigate('Login')}>
          <Text center semibold white>
            로그인
          </Text>
        </Button>
        <Button shadow style={styles.shadow}>
          <Text center semibold onPress={() => navigation.navigate('Signup')}>
            회원 가입
          </Text>
        </Button>
        <Button onPress={() => setShowTerms(true)}>
          <Text center caption gray>
            Terms of service
          </Text>
        </Button>
      </Block>
      {renderTermsService()}
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  stepsContainer: {
    position: 'absolute',
    bottom: sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
});

Welcome.navigationOptions = {
  header: null,
};

export default Welcome;
