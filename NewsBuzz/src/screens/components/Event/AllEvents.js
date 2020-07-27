import React, { Component } from "react";
import { View, Text, StatusBar, Alert, RefreshControl } from "react-native";
import TravelGuide from "../Guide/TravelGuide";
import { ScrollView } from "react-native-gesture-handler";
import ViewMoreText from "react-native-view-more-text";
import { AppRegistry, FlatList, StyleSheet } from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class Latest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false,
      location: null,
      address: null,
    };
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });

    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    // this.setState(address);
  };
  getGeocodeAsync = async (location) => {
    let address = await Location.reverseGeocodeAsync(location);
    address = JSON.stringify(address[0].city);
    this.setState({ address });
    console.log("=========");
    console.log(this.state.address);
    console.log("=========");
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
  };
  componentDidMount() {
    this.request_call_location();
    this.getData();
  }

  request_call_location = async () => {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!",
      });
    } else {
      await this._getLocationAsync();
    }
  };

  getData = async () => {
    // const response = await fetch("http://10.113.50.196:9000/api/news");
    const response = await fetch(
      "http://newsbuzz-server.herokuapp.com/api/display/registerEvent",

      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          current: this.state.address,
        }),
      }
    );

    const data = await response.json();
    this.setState({
      data: data,
      refreshing: false,
    });
  };

  render() {
    let address = "";
    let text = "Waiting..";
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      address = this.state.address;
      console.log(address);
    }

    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      >
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TravelGuide
              placeUri={{
                uri:
                  // item.img
                  "https://images.pexels.com/photos/3422053/pexels-photo-3422053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
              }}
              placeName={item.Event_name}
              placeDes={item.description}
              // capacity={item.Sitting_cap}
              date={item.Event_date}
              time={item.Event_time}
              location={item.location}
            />
          )}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
