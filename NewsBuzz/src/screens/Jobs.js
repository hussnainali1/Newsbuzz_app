import React, { Component } from "react";
import { View, Text, StatusBar, Alert, RefreshControl } from "react-native";
import Jobs_travelGuid from "./components/Guide/Jobs_travelGuid";
import { ScrollView } from "react-native-gesture-handler";

import { AppRegistry, FlatList, StyleSheet } from "react-native";

export default class jobs extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      refreshing: false,
    };
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.componentDidMount();
  };
  componentDidMount() {
    this.updateJobsData();
    this.getData();
  }

  updateJobsData = async () => {
    const response = await fetch(
      "http://http://newsbuzz-server.herokuapp.com/api/img/DBdata/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // if (data == null)
        // alert("-__- ");
        // else {
        //   // alert("successfull");
        // }
      });
    // console.log(this.state.data);
  };
  getData = async () => {
    const response = await fetch(
      "http://http://newsbuzz-server.herokuapp.com/api/jobs"
    );
    // const response = await fetch("http:http://newsbuzz-server.herokuapp.com/api/tech");
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
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
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
            <Jobs_travelGuid
              placeUri={{
                uri: item.img,
              }}
              placeName={item.tilte}
              placeDes={item.discription}
              place_img_detail={item.description_img_link_data}
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
