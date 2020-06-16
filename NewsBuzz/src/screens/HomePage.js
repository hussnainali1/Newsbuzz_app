import React from "react";
import TravelGuide from "./components/Guide/TravelGuide";

import {
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  FlatList,
  Animated,
  Picker,
} from "react-native";
import {
  Ionicons as Icons,
  FontAwesome as FIcons,
  Feather as FeatherIcon,
} from "@expo/vector-icons";
import { TextInput, Searchbar } from "react-native-paper";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Category from "./components/Explore/Category";
// import Home from "./components/Explore/Home";
import Agent from "./components/Travel/Agent";
import { Button } from "native-base";
import { compose } from "redux";

const { height, width } = Dimensions.get("window");

export default class HomePage extends React.Component {
  render({ navigation } = this.props) {
    return (
      // ======================================
      <View style={{ flex: 1, marginTop: 24 }}>
        <View
          style={{
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <View
            style={{
              // flexDirection: "row",
              // alignItems: "stretch",
              paddingHorizontal: 10,
              paddingBottom: 10,
              // paddingTop: 0,
              backgroundColor: "white",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              // shadowOpacity: 0.2
              // elevation: 4
              // marginTop: 30
            }}
          ></View>
        </View>

        {/*Here we will return the view when state is true 
        and will return false if state is false*/}

        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } },
          ])}
        >
          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: "700" }}>
                Introducing NewsBuzz
              </Text>
              <Text style={{ fontWeight: "100", marginTop: 10 }}>
                Exploring all types of News in one place
              </Text>
              <View style={{ width: width - 40, height: 300, marginTop: 20 }}>
                <Image
                  style={{
                    flex: 1,
                    height: null,
                    width: null,
                    resizeMode: "cover",
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: "#dddddd",
                  }}
                  source={{
                    uri:
                      "https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                  }}
                />
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                }}
              >
                Our Services
              </Text>
              <View style={{ height: 400, marginTop: 20 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TouchableOpacity onPress={() => navigation.navigate("News")}>
                    <Category
                      imageUri={{
                        uri:
                          "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                      }}
                      Name="News"
                      desc="It is information about current events. Common topics for news reports include Latest, Business, Sports, Technology and World as well as athletic events, quirky or unusual events. It is newly received or noteworthy information, especially about recent events.
                     "
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Admission")}
                  >
                    <Category
                      imageUri={{
                        uri:
                          "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80",
                      }}
                      Name="Admissions"
                      desc="It is the Information about different admissions.It contains all the admission releated to graduate and undergraduate universities across all the cities in pakistan.So that student can easily find admission offered by different universities"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Scholarship")}
                  >
                    <Category
                      imageUri={{
                        uri:
                          "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1390&q=80",
                      }}
                      Name="Scholarship"
                      desc="It is the Information about different scholarships.It contains all the scholarships releated to local and international universities across all the cities in pakistan.So that student can easily find scholarships offered by differnt universities"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Jobs")}>
                    <Category
                      imageUri={{
                        uri:
                          "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                      }}
                      Name="Jobs"
                      desc="It is the Information about different Jobs.It contains different type of jobs across different cities in pakistan "
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Event")}
                  >
                    <Category
                      imageUri={{
                        uri:
                          "https://images.unsplash.com/photo-1480455454781-1af590be2a58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
                      }}
                      Name="Events"
                      desc="It contains all the events register by users and displayed it on our application it provide a platform where user can make publicity of there event without any cost"
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* // ========================================= */}
      </View>
    );
  }
}
