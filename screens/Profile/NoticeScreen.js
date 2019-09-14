import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Switch } from "react-native";
import { Button, Block, Text } from "../../components";
import { theme } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const NoticeScreen = props => {
  const { navigation } = props;
  const [notifications, setNotifications] = useState(true);
  const [newsletters, setNewsletters] = useState(false);

  useEffect(() => {}, []);

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Button onPress={() => navigation.goBack()}>
          <Block center row>
            <Ionicons
              size={35}
              color={theme.colors.primary}
              name="ios-arrow-back"
            />
          </Block>
        </Button>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.toggles}>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text h3>알림설정</Text>
            <Switch
              value={notifications}
              onValueChange={value => setNotifications(value)}
            />
          </Block>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text h3>새정보받기</Text>
            <Switch
              value={newsletters}
              onValueChange={value => setNewsletters(value)}
            />
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
};

NoticeScreen.navigationOptions = {
  header: null
};
NoticeScreen.defaultProps = {};
const styles = StyleSheet.create({
  header: {
    marginTop: theme.sizes.base * 3,
    paddingHorizontal: theme.sizes.padding
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2
  }
});

export default NoticeScreen;
