import React, { useState, useEffect } from "react";
import { StyleSheet, Image, ScrollView, Switch, TextInput } from "react-native";
import { Divider, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import Slider from "react-native-slider";

const Settings = props => {
  const { profiles } = props;
  const [budget, setBudget] = useState(850);
  const [monthly_cap, setMonthly_cap] = useState(1700);
  const [notifications, setNotifications] = useState(true);
  const [newsletters, setNewsletters] = useState(false);
  const [editing, setEditing] = useState(null);
  const [profile, setProfile] = useState({});

  const handleEdit = (name, text) => {
    profile[name] = text;
    setProfile(profile);
  };
  const renderEdit = name => {
    if (editing === name) {
      return (
        <TextInput
          defaultValue={profile[name]}
          onChangeText={text => handleEdit([name], text)}
        />
      );
    }
    return <Text bold>{profile[name]}</Text>;
  };

  const toggleEdit = name => {
    setEditing(!editing ? name : null);
  };

  useEffect(() => {
    setProfile(profiles);
  }, []);

  return (
    <Block>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Settings
        </Text>
        <Button>
          <Image source={profiles.avatar} style={styles.avatar} />
        </Button>
      </Block>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Block style={styles.inputs}>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{ marginBottom: 10 }}>
                Username
              </Text>
              {renderEdit("username")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("username")}>
              {editing === "username" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{ marginBottom: 10 }}>
                Location
              </Text>
              {renderEdit("location")}
            </Block>
            <Text medium secondary onPress={() => toggleEdit("location")}>
              {editing === "location" ? "Save" : "Edit"}
            </Text>
          </Block>
          <Block row space="between" margin={[10, 0]} style={styles.inputRow}>
            <Block>
              <Text gray2 style={{ marginBottom: 10 }}>
                E-mail
              </Text>
              <Text bold>{profiles.email}</Text>
            </Block>
          </Block>
        </Block>

        <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
        <Block style={styles.sliders}>
          <Block margin={[10, 0]}>
            <Text gray2 style={{ marginBottom: 10 }}>
              Budget
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={1000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={budget}
              onValueChange={value => setBudget(value)}
            />
            <Text caption gray2 right>
              ${budget.toFixed(0)}
            </Text>
          </Block>
          <Block margin={[10, 0]}>
            <Text gray2 style={{ marginBottom: 10 }}>
              Monthly Cap
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={5000}
              style={{ height: 19 }}
              thumbStyle={styles.thumb}
              trackStyle={{ height: 6, borderRadius: 6 }}
              minimumTrackTintColor={theme.colors.secondary}
              maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
              value={monthly_cap}
              onValueChange={value => setMonthly_cap(value)}
            />
            <Text caption gray2 right>
              ${monthly_cap.toFixed(0)}
            </Text>
          </Block>
        </Block>
        <Divider />
        <Block style={styles.toggles}>
          <Block
            row
            center
            space="between"
            style={{ marginBottom: theme.sizes.base * 2 }}
          >
            <Text gray2>Notifications</Text>
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
            <Text gray2>Newsletters</Text>
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

Settings.navigationOptions = {};
Settings.defaultProps = {
  profiles: mocks.profiles
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    width: theme.sizes.base * 2.2,
    height: theme.sizes.base * 2.2
  },
  inputs: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.base * 2
  },
  inputRow: {
    alignItems: "flex-end"
  },
  sliders: {
    marginTop: theme.sizes.base * 0.5,
    paddingHorizontal: theme.sizes.base * 2
  },
  thumb: {
    width: theme.sizes.base,
    height: theme.sizes.base,
    borderRadius: theme.sizes.base,
    borderColor: "white",
    borderWidth: 3,
    backgroundColor: theme.colors.secondary
  },
  toggles: {
    paddingHorizontal: theme.sizes.base * 2
  }
});

export default Settings;
