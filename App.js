import React from "react";
import { Text } from "react-native";
// import Main from "./airbnb/Main";
import Main from "./NewsBuzz/Main";
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDEgUHM7SH-DN9JzKiVKc71NabhZ1wb_Jk",
  authDomain: "dummy-448f6.firebaseapp.com",
  databaseURL: "https://dummy-448f6.firebaseio.com",
  projectId: "dummy-448f6",
  storageBucket: "dummy-448f6.appspot.com",
  messagingSenderId: "276915602668",
  appId: "1:276915602668:web:71c5b44ca585bd6c3a11c9",
  measurementId: "G-MTW703CDH1"
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
