import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import { Button, Block, Text } from "../../components";
import { theme, mocks } from "../../constants";
import firebase from "../../constants/store";
import moment from "moment";

const FavoritesScreen = props => {
  const { navigation, profiles } = props;
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {}, []);

  return (
    <Block style={styles.header}>
      <Text h1 bold>
        저장소
      </Text>
    </Block>
  );
};

FavoritesScreen.navigationOptions = {
  header: null
};
FavoritesScreen.defaultProps = {
  profiles: mocks.profiles
};
const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: "center"
  },
  header: {
    marginTop: theme.sizes.base * 4.2,
    marginBottom: theme.sizes.base,
    paddingHorizontal: theme.sizes.padding
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  avatarChat: {
    width: theme.sizes.base * 4,
    height: theme.sizes.base * 4,
    borderRadius: theme.sizes.base * 2
  }
});

export default FavoritesScreen;
