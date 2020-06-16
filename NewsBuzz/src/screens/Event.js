import React from "react";
import { View, Text, StatusBar } from "react-native";
import Register from "./components/Event/Register";
import AllEvents from "./components/Event/AllEvents";
import Userlocation from "./components/Event/Userlocation";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";

const navigator = createMaterialTopTabNavigator(
  {
    Register: {
      screen: Register,
      navigationOptions: {
        tabBarLabel: "Registration",
      },
    },
    AllEvents: {
      screen: AllEvents,
      navigationOptions: {
        tabBarLabel: "All Events",
      },
    },
    Userlocation: {
      screen: Userlocation,
      navigationOptions: {
        tabBarLabel: "Location",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      tabStyle: {
        height: 65,
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: "500",
      },
      // showLabel: false,
      style: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#ff0000",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 10,
      },
    },
  }
);

export default createAppContainer(navigator);
