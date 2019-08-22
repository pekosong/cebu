import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Dimensions,
  Modal,
  ScrollView,
  Image
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";
import { FlatList } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

function Welcome(props) {
  const { navigation } = props;
  const [showTerms, setShowTerms] = useState(false);
  scrollX = new Animated.Value(0);

  const renderIllustrations = () => {
    const { illustrations } = props;
    return (
      <FlatList
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            resizeMode="contain"
            style={{ width, height: height / 3, overflow: "visible" }}
          />
        )}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: scrollX } }
          }
        ])}
      />
    );
  };

  const renderSteps = () => {
    const { illustrations } = props;
    const stepPosition = Animated.divide(scrollX, width);
    return (
      <Block row center middle style={styles.stepsContainer}>
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: "clamp"
          });
          return (
            <Block
              animated
              flex={false}
              key={`step-${index}`}
              color="gray"
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  const renderTermsService = () => {
    return (
      <Modal
        animationType="slide"
        visible={showTerms}
        onRequestClose={() => setShowTerms(false)}
      >
        <Block
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
          space="between"
        >
          <Text h2 light>
            Terms of Service
          </Text>
          <ScrollView style={{ marginVertical: theme.sizes.padding }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: theme.sizes.base }}
            >
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>
          <Block middle padding={[theme.sizes.base / 2, 0]}>
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
      <Block center bottom flex={1}>
        <Text h2 center bold>
          좌담회 알바,
          <Text>{"  "}</Text>
          <Text primary style={{ fontSize: 50, fontFamily: "BMHANNAPro" }}>
            김징고
          </Text>
        </Text>
        <Text h3 gray2 style={{ marginTop: theme.sizes.padding / 2 }}>
          쉽게 돈 벌기
        </Text>
      </Block>
      <Block flex={1.5} center middle margin={[theme.sizes.padding * 2, 0]}>
        {renderIllustrations()}
        {renderSteps()}
      </Block>
      <Block middle flex={1} margin={[0, theme.sizes.padding * 2]}>
        <Button gradient onPress={() => navigation.navigate("Login")}>
          <Text center semibold white>
            Login
          </Text>
        </Button>
        <Button shadow style={styles.shadow}>
          <Text center semibold onPress={() => navigation.navigate("Signup")}>
            Signup
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
    marginTop: 30
  },
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#dfe6e9"
  }
});

Welcome.navigationOptions = {
  header: null
};
Welcome.defaultProps = {
  illustrations: [
    { id: 1, source: require("../assets/images/illustration_1.png") },
    { id: 2, source: require("../assets/images/illustration_2.png") },
    { id: 3, source: require("../assets/images/illustration_3.png") }
  ]
};

export default Welcome;
