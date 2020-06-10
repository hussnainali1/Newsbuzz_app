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
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      Category: "latest",
      status: false,
      data: [],
      show: true,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    const response = await fetch("http://http://newsbuzz-server.herokuapp.com");
    // const response = await fetch("http:http://newsbuzz-server.herokuapp.com/api/tech");
    const data = await response.json();
    // this.setState({
    //   data,
    // });
    // console.log(this.state.data);
  };
  hideShowTextComponentView = () => {
    this.setState({ Category: "" });
    if (this.state.status == false) {
      this.setState({ status: true, show: false });
    }
  };

  ShowHideTextComponentView = () => {
    this.setState({ Category: "" });
    if (this.state.status == true) {
      this.setState({
        status: false,
        // show: true
      });
    }
  };
  updateSearch = async () => {
    // alert(this.state.search);
    const { search, Category } = this.state;
    if (this.state.search.length > 2) {
      fetch(this.state.Category, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchData: search,
          Category: Category,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            // console.log(data);
            // alert(this.state.Category);
            if (data != null) {
              // alert(data.tilte);
              // const data = await response.json();
              this.setState({
                data,
              });

              data.map((item) => {
                // if (
                //   this.state.Category ==
                //     "http://CC:9000/api/search/BSadmission" ||
                //   this.state.Category ==
                //     "http://http://newsbuzz-server.herokuapp.com/api/search/MSadmission"
                // ) {
                // alert(item.discription.trim());
                // } else {
                alert(item.tilte.trim());
                // }

                // alert(item.discription.trim());
              });
            } else {
              alert("Data not found");
            }
            // alert(this.state.tilte);
          } catch (e) {
            // alert("error hai", e);
            alert(e);
          }
        });
    } else {
      alert("enter a keyword");
    }
  };
  clickme = () => {
    var data = this.state.Category;
    if (data == "") {
      alert("Please Select a Option");
    } else {
      // alert(data);
    }
  };
  search = async () => {};

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

        <Searchbar
          placeholder="Type Here..."
          width="1200%"
          showCancel="true"
          showLoading="true"
          round="true"
          onChangeText={(search) => this.setState({ search })}
          // onBlur={this.updateSearch}
          onSubmitEditing={this.updateSearch}
          onFocus={this.hideShowTextComponentView}
          onBlur={this.ShowHideTextComponentView}
          // onsearch={this.ShowHideTextComponentView}
        />

        {/*Here we will return the view when state is true 
        and will return false if state is false*/}
        {this.state.show ? (
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
                    <TouchableOpacity
                      onPress={() => navigation.navigate("News")}
                    >
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
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Jobs")}
                    >
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
        ) : (
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: "center", flex: 1, margin: 10 }}>
              {
                // Pass any View or Component inside the curly bracket.
                // Here the ? Question Mark represent the ternary operator.

                this.state.status ? (
                  <Picker
                    style={{ width: "auto" }}
                    selectedValue={this.state.Category}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({ Category: itemValue })
                    }
                  >
                    <Picker.Item
                      label="Select a category before searching"
                      value=""
                    />
                    <Picker.Item
                      label="LATEST"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/latest"
                    />
                    <Picker.Item
                      label="Bussiness"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/bussiness"
                    />
                    <Picker.Item
                      label="Sports"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/sports"
                    />
                    <Picker.Item
                      label="Technology"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/technology"
                    />
                    <Picker.Item
                      label="World"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/world"
                    />
                    <Picker.Item
                      label="MS Admission"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/MSadmission"
                    />
                    <Picker.Item
                      label="BS Admission"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/BSadmission"
                    />
                    <Picker.Item
                      label="MS Scholarships"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/MSscholarship"
                    />
                    <Picker.Item
                      label="BS Scholarships"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/BSscholarship"
                    />
                    <Picker.Item
                      label="Jobs"
                      value="http:/http://newsbuzz-server.herokuapp.com/api/search/searchjobs"
                    />
                  </Picker>
                ) : null
              }
            </View>

            <FlatList
              data={this.state.data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <TravelGuide
                  // navigation={navigation}
                  //   btn={'X'}
                  placeUri={{
                    uri: item.img,
                    // "https://images.pexels.com/photos/3422053/pexels-photo-3422053.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  }}
                  placeName={item.tilte}
                  placeDes={item.discription}
                />
              )}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </ScrollView>
        )}

        {/* // ========================================= */}
      </View>
    );
  }
}
