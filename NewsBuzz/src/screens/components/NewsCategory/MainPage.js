import React, { Component } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  RefreshControl,
} from "native-base";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Latest from "./Latest";
import Business from "./Business";
import Sports from "./Sports";
import Technology from "./Technology";
import WorldNews from "./WorldNews";
import { createAppContainer } from "react-navigation";
import { StatusBar } from "react-native";
const navigator = createMaterialTopTabNavigator(
  {
    Latest: {
      screen: Latest,
      navigationOptions: {
        tabBarLabel: "Latest",
      },
    },
    Business: {
      screen: Business,
      navigationOptions: {
        tabBarLabel: "Business",
      },
    },
    Sports: {
      screen: Sports,
      navigationOptions: {
        tabBarLabel: "Sports",
      },
    },
    Technology: {
      screen: Technology,
      navigationOptions: {
        tabBarLabel: "Technology",
      },
    },
    World: {
      screen: WorldNews,
      navigationOptions: {
        tabBarLabel: "World",
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "white",
      upperCaseLabel: false,
      tabStyle: {
        height: 70,
        width: 120,
      },
      scrollEnabled: true,
      animationEnablen: true,
      width: "auto",
      labelStyle: {
        fontSize: 16,
        fontWeight: "700",
        margin: 0,
        padding: 0,
      },
      indicatorStyle: {
        height: 5,
        backgroundColor: "white",
      },
      // showLabel: false,
      style: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "#ff0000",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        // height: 60,
        elevation: 10,
      },
    },
  }
);

export default createAppContainer(navigator);
