import React from "react";
import { Text } from "react-native";
// import Main from "./airbnb/Main";
import Main from "./NewsBuzz/Main";
import * as firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyDEgUHM7SH-DN9JzKiVKc71NabhZ1wb_Jk",
//   authDomain: "dummy-448f6.firebaseapp.com",
//   databaseURL: "https://dummy-448f6.firebaseio.com",
//   projectId: "dummy-448f6",
//   storageBucket: "dummy-448f6.appspot.com",
//   messagingSenderId: "276915602668",
//   appId: "1:276915602668:web:71c5b44ca585bd6c3a11c9",
//   measurementId: "G-MTW703CDH1"
// };

var firebaseConfig = {
  apiKey: "AIzaSyDS_9Ve_U9bpevkRSm_f1Xlz_FrceRBiu0",
  authDomain: "newsbuzz-notification-app.firebaseapp.com",
  databaseURL: "https://newsbuzz-notification-app.firebaseio.com",
  projectId: "newsbuzz-notification-app",
  storageBucket: "newsbuzz-notification-app.appspot.com",
  messagingSenderId: "153342114262",
  appId: "1:153342114262:web:81ea07553661d272624c77",
  measurementId: "G-XYZEDQC3TN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const App = () => {
  return (
    <>
      {/* <MainWindow /> */}
      {/* <Jiasd /> */}
      {/* <Main /> */}
      <Main />
      {/* <Text>Hello</Text> */}
    </>
  );
};

export default App;
