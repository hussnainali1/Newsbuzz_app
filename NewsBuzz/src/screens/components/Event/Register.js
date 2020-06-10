// import React from "react";
// import { View, Text, StyleSheet, StatusBar } from "react-native";
// // import DatePicker from "react-native-simple-date-picker";
// import { ScrollView } from "react-native-gesture-handler";
// import DatePicker from "react-native-datepicker";
// import {
//   Container,
//   Content,
//   Header,
//   Form,
//   Input,
//   Item,
//   Button,
//   TouchableOpacity,
//   Label
// } from "native-base";
// import AlertPro from "react-native-alert-pro";

// import TimePicker from "react-native-24h-timepicker";
// export default class Register extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Manager_name: " ",
//       Manager_phone: " ",
//       Manager_email: " ",
//       Manager_locatioin: " ",
//       Event_city: " ",
//       Event_time: " ",
//       Event_date: "15-05-2018",
//       Event_title: " ",
//       sitting_capacity: " ",
//       Event_description: " "
//     };
//   }

//   getdata = async () => {
//     if (this.state.Manager_name == " ") {
//       alert("enter Manager_name ");
//     } else if (this.state.Manager_phone == " ") {
//       alert("enter Manager_phone ");
//     } else if (this.state.Manager_email == " ") {
//       alert("enter Manager_email ");
//     } else if (this.state.Manager_email == " ") {
//       alert("enter Manager_email ");
//     } else if (this.state.Manager_locatioin == " ") {
//       alert("enter Manager_locatioin ");
//     } else if (this.state.Event_city == " ") {
//       alert("enter Event_city ");
//     } else if (this.state.Event_time == " ") {
//       alert("enter Event_time ");
//     } else if (this.state.Event_date == " ") {
//       alert("enter Event_date ");
//     } else if (this.state.Event_title == " ") {
//       alert("enter Event_title ");
//     } else if (this.state.sitting_capacity == " ") {
//       alert("enter sitting_capacity ");
//     } else if (this.state.Event_description == " ") {
//       alert("enter Event_description ");
//     }

//     // alert("successfull");
//     else {
//       fetch("http:/http://newsbuzz-server.herokuapp.com/saveEvent", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           Manager_name: this.state.Manager_name,
//           Manager_phone: this.state.Manager_phone,
//           Manager_email: this.state.Manager_email,
//           Manager_locatioin: this.state.Manager_locatioin,
//           Event_city: this.state.Event_city,
//           Event_time: this.state.Event_time,
//           Event_date: this.state.Event_date,
//           Event_title: this.state.Event_title,
//           sitting_capacity: this.state.sitting_capacity,
//           Event_description: this.state.Event_description
//         })
//       })
//         .then(res => res.json())
//         .then(data => {
//           if (data == null) alert("-__- ");
//           else {
//             alert("successfull");
//           }
//         });
//     }
//   };

//   onCancel() {
//     this.TimePicker.close();
//   }

//   onConfirm(hour, minute) {
//     this.setState({ Event_time: `${hour}:${minute}` });
//     this.TimePicker.close();
//   }
//   render() {
//     return (
//       <ScrollView
//         vertical
//         showsVerticalScrollIndicator={false}
//         style={
//           {
//             // marginTop: StatusBar.currentHeight
//           }
//         }
//       >
//         <Container
//           style={{
//             // marginTop: StatusBar.currentHeight,
//             flex: 1,
//             backgroundColor: "#fff",
//             // justifyContent: "center",
//             padding: 10
//           }}
//         >
//           <Form>
//             <Item floatingLabel>
//               <Label>Manager Name:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Manager_name => this.setState({ Manager_name })}
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Manager Phone#:</Label>
//               <Input
//                 autoCorrect={false}
//                 keyboardType="numeric"
//                 autoCapitalize="none"
//                 onChangeText={Manager_phone => this.setState({ Manager_phone })}
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Manager Email:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Manager_email => this.setState({ Manager_email })}
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Event location</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Manager_locatioin =>
//                   this.setState({ Manager_locatioin })
//                 }
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Event City:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Event_city => this.setState({ Event_city })}
//               />
//             </Item>
//             {/* <View style={styles.container11}>
//               <Text style={styles.text}>REACT NATIVE</Text>
//               <Text style={styles.text}>24 HOURS FORMAT TIMEPICKER</Text>
//               <TouchableOpacity
//                 onPress={() => this.TimePicker.open()}
//                 style={styles.button}
//               >
//                 <Text style={styles.buttonText}>TIMEPICKER</Text>
//               </TouchableOpacity>
//               <Text style={styles.text}>{this.state.Event_time}</Text>
//               <TimePicker
//                 ref={ref => {
//                   this.TimePicker = ref;
//                 }}
//                 onCancel={() => this.onCancel()}
//                 onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
//               />
//             </View> */}
//             <Item floatingLabel>
//               <Label>Event time:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Event_city => this.setState({ Event_time })}
//               />
//               s
//             </Item>
//             {/* </Item> */}
//             {/* <Item floatingLabel> */}
//             {/* <Label>Event date:</Label> */}
//             {/* <View > */}
//             <DatePicker
//               style={{ alignItems: "auto", width: 200 }}
//               date={this.state.Event_date} //initial date from state
//               mode="date" //The enum of date, datetime and time
//               placeholder="select date"
//               format="DD-MM-YYYY"
//               minDate="01-01-2016"
//               maxDate="01-01-2030"
//               confirmBtnText="Confirm"
//               cancelBtnText="Cancel"
//               customStyles={{
//                 dateIcon: {
//                   position: "absolute",
//                   left: 0,
//                   top: 30,
//                   marginLeft: 0
//                 },
//                 dateInput: {
//                   marginLeft: 32,
//                   marginTop: 50
//                 }
//               }}
//               onDateChange={date => {
//                 this.setState({ Event_date: date });
//               }}
//             />
//             {/* </View> */}
//             {/* <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Event_date => this.setState({ Event_date })}
//               /> */}
//             {/* </Item> */}
//             <Item floatingLabel>
//               <Label>Event titile:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Event_title => this.setState({ Event_title })}
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Sitting Capacity:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={sitting_capacity =>
//                   this.setState({ sitting_capacity })
//                 }
//               />
//             </Item>
//             <Item floatingLabel>
//               <Label>Event description:</Label>
//               <Input
//                 autoCorrect={false}
//                 autoCapitalize="none"
//                 onChangeText={Event_description =>
//                   this.setState({ Event_description })
//                 }
//               />
//             </Item>

//             <Button
//               onPress={this.getdata}
//               style={{ marginTop: 10 }}
//               full
//               rounded
//               success
//             >
//               <Text style={{ color: "white" }}>Register</Text>
//             </Button>
//           </Form>
//         </Container>
//       </ScrollView>
//     );
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 50,
//     padding: 16
//   },
//   container11: {
//     flex: 1,
//     alignItems: "center",
//     backgroundColor: "#fff",
//     paddingTop: 100
//   },
//   text: {
//     fontSize: 20,
//     marginTop: 10
//   },
//   button: {
//     backgroundColor: "#4EB151",
//     paddingVertical: 11,
//     paddingHorizontal: 17,
//     borderRadius: 3,
//     marginVertical: 50
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "600"
//   }
// });

import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label,
} from "native-base";
//import AlertPro from "react-native-alert-pro";

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Manager_name: " ",
      Manager_phone: " ",
      Manager_email: " ",
      Manager_locatioin: " ",
      Event_city: " ",
      Event_time: " ",
      Event_date: "01-01-2020",
      Event_title: " ",
      sitting_capacity: " ",
      Event_description: " ",
    };
  }

  getdata = async () => {
    if (this.state.Manager_name == " ") {
      alert("enter Manager_name ");
    } else if (this.state.Manager_phone == " ") {
      alert("enter Manager_phone ");
    } else if (this.state.Manager_email == " ") {
      alert("enter Manager_email ");
    } else if (this.state.Manager_email == " ") {
      alert("enter Manager_email ");
    } else if (this.state.Manager_locatioin == " ") {
      alert("enter Manager_locatioin ");
    } else if (this.state.Event_city == " ") {
      alert("enter Event_city ");
    } else if (this.state.Event_time == " ") {
      alert("enter Event_time ");
    } else if (this.state.Event_date == " ") {
      alert("enter Event_date ");
    } else if (this.state.Event_title == " ") {
      alert("enter Event_title ");
    } else if (this.state.sitting_capacity == " ") {
      alert("enter sitting_capacity ");
    } else if (this.state.Event_description == " ") {
      alert("enter Event_description ");
    }

    // alert("successfull");
    else {
      fetch("http://http://newsbuzz-server.herokuapp.com/saveEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Manager_name: this.state.Manager_name,
          Manager_phone: this.state.Manager_phone,
          Manager_email: this.state.Manager_email,
          Manager_locatioin: this.state.Manager_locatioin,
          Event_city: this.state.Event_city,
          Event_time: this.state.Event_time,
          Event_date: this.state.Event_date,
          Event_title: this.state.Event_title,
          sitting_capacity: this.state.sitting_capacity,
          Event_description: this.state.Event_description,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data == null) alert("-__- ");
          else {
            alert("successfull");
          }
        });
    }
  };

  render() {
    return (
      <ScrollView
        vertical
        showsVerticalScrollIndicator={false}
        style={
          {
            // marginTop: StatusBar.currentHeight
          }
        }
      >
        <Container
          style={{
            // marginTop: StatusBar.currentHeight,
            flex: 1,
            backgroundColor: "#fff",
            // justifyContent: "center",
            padding: 10,
          }}
        >
          <Form>
            <Item floatingLabel>
              <Label>Manager Name:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Manager_name) => this.setState({ Manager_name })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Manager Phone#:</Label>
              <Input
                autoCorrect={false}
                keyboardType="numeric"
                autoCapitalize="none"
                onChangeText={(Manager_phone) =>
                  this.setState({ Manager_phone })
                }
              />
            </Item>
            <Item floatingLabel>
              <Label>Manager Email:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Manager_email) =>
                  this.setState({ Manager_email })
                }
              />
            </Item>
            <Item floatingLabel>
              <Label>Event location</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Manager_locatioin) =>
                  this.setState({ Manager_locatioin })
                }
              />
            </Item>
            <Item floatingLabel>
              <Label>Event City:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Event_city) => this.setState({ Event_city })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Event timihg:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Event_time) => this.setState({ Event_time })}
              />
            </Item>

            <Item floatingLabel>
              <Label>Event titile:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Event_title) => this.setState({ Event_title })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Sitting Capacity:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(sitting_capacity) =>
                  this.setState({ sitting_capacity })
                }
              />
            </Item>
            <Item floatingLabel>
              <Label>Event description:</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(Event_description) =>
                  this.setState({ Event_description })
                }
              />
            </Item>
            <DatePicker
              style={{ alignItems: "auto", width: 200 }}
              date={this.state.Event_date} //initial date from state
              mode="date" //The enum of date, datetime and time
              placeholder="select date"
              format="DD-MM-YYYY"
              minDate="01-01-2016"
              maxDate="01-01-2030"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 10,
                  top: 30,
                  marginLeft: 10,
                },
                dateInput: {
                  marginLeft: 20,
                  marginTop: 50,
                  // marginLeft:
                },
              }}
              onDateChange={(date) => {
                this.setState({ Event_date: date });
              }}
            />

            <Button
              onPress={this.getdata}
              style={{ marginTop: 50 }}
              full
              rounded
              success
            >
              <Text style={{ color: "white" }}>Register</Text>
            </Button>
          </Form>
        </Container>
      </ScrollView>
    );
  }
}
