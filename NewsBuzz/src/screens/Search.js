import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { Searchbar } from "react-native-paper";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import TravelGuide from "./components/Guide/TravelGuide";
export class Search extends Component {
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
                //     "http://newsbuzz-server.herokuapp.com/api/search/MSadmission"
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
  render(navigation) {
    return (
      <View style={{ flex: 1, marginTop: 24 }}>
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
          onIconPress={console.log("Press MEEEEEE", Math.random() * 10)}
          // onsearch={this.ShowHideTextComponentView}
        />

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
                    value="http://newsbuzz-server.herokuapp.com/api/search/latest"
                  />
                  <Picker.Item
                    label="Bussiness"
                    value="http://newsbuzz-server.herokuapp.com/api/search/bussiness"
                  />
                  <Picker.Item
                    label="Sports"
                    value="http://newsbuzz-server.herokuapp.com/api/search/sports"
                  />
                  <Picker.Item
                    label="Technology"
                    value="http://newsbuzz-server.herokuapp.com/api/search/technology"
                  />
                  <Picker.Item
                    label="World"
                    value="http://newsbuzz-server.herokuapp.com/api/search/world"
                  />
                  <Picker.Item
                    label="MS Admission"
                    value="http://newsbuzz-server.herokuapp.com/api/search/MSadmission"
                  />
                  <Picker.Item
                    label="BS Admission"
                    value="http://newsbuzz-server.herokuapp.com/api/search/BSadmission"
                  />
                  <Picker.Item
                    label="MS Scholarships"
                    value="http://newsbuzz-server.herokuapp.com/api/search/MSscholarship"
                  />
                  <Picker.Item
                    label="BS Scholarships"
                    value="http://newsbuzz-server.herokuapp.com/api/search/BSscholarship"
                  />
                  <Picker.Item
                    label="Jobs"
                    value="http://newsbuzz-server.herokuapp.com/api/search/searchjobs"
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
                btn={"X"}
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
      </View>
    );
  }
}

export default Search;
