import React from "react";
import { Image } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Browse from "../screens/Browse";
import Forgot from "../screens/Forgot";
import Signup from "../screens/Signup";
import Settings from "../screens/Settings";
// import Explore from "../screens/Explore";

// import Product from "../screens/Product";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Welcome,
    Login,
    Browse,
    Forgot,
    Signup,
    Settings
    // Browse, Explore, Settings, Product
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white,
        borderBottomColor: "transparent",
        elevation: 0
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
