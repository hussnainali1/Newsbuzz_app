import React, { Component } from "react";
import { View, Text, StatusBar, Alert } from "react-native";
import TravelGuide from "../screens/components/Guide/TravelGuide";
import { ScrollView } from "react-native-gesture-handler";

import { AppRegistry, FlatList, StyleSheet } from "react-native";

export default class jobs extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch("http://192.168.10.3:9000/api/jobs");
    // const response = await fetch("http:192.168.10.3:9000/api/tech");
    const data = await response.json();
    this.setState({
      data,
    });
    // console.log(this.state.data);
  };

  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{ paddingHorizontal: 20, fontSize: 24, fontWeight: "700" }}
        >
          Jobs
        </Text>

        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TravelGuide
              placeUri={{
                uri: item.img,
              }}
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
