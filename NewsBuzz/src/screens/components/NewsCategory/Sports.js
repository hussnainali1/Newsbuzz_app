import React, { Component } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import TravelGuide from "../Guide/TravelGuide";
import { ScrollView } from "react-native-gesture-handler";

import {
  AppRegistry,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native";

class Latest extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false,
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.getData();
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    // const response = await fetch("http://10.113.50.196:9000/api/sports");
    const response = await fetch(
      "http://http://newsbuzz-server.herokuapp.com/api/sports"
    );
    const data = await response.json();
    this.setState({
      data: data,
      refreshing: false,
    });
    // console.log(this.state.data);
  };

  render() {
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
              placeUri={{ uri: item.img }}
              placeName={item.tilte}
              placeDes={item.discription}
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
export default Latest;
