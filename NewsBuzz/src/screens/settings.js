import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Switch,AsyncStorage

} from 'react-native';
import { Card, Text, ButtonGroup, Button } from 'react-native-elements';

import * as fire from 'firebase';
import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';





const SHOW_NOTIFICATIONS_KEY = 'notifications';
const THEME_COLOR_KEY = 'theme_color';

export default class SettingScreen extends Component {

  state = {
    showNotifications: false,
    num:''
  }

  colors = ['blue', 'green', 'red', 'purple'];



  componentDidMount() {
    this.props.navigation.setParams({ colors: this.colors });
    this.loadAsyncData();
 
   
  }

  loadAsyncData = async () => {
    try {
      const showNotifications = await AsyncStorage.getItem(SHOW_NOTIFICATIONS_KEY)
      if (showNotifications !== null) {
        this.setState({ showNotifications: JSON.parse(showNotifications) });
      }
    } catch (e) {
      console.log(e)
    }

    try {
      const themeColorIndex = await AsyncStorage.getItem(THEME_COLOR_KEY)
      
      if (themeColorIndex !== null) {
        this.props.navigation.setParams({ themeIndex: JSON.parse(themeColorIndex) });
      }
    } catch (e) {
      console.log(e)
    }

    
  }

  storeNotification = async (key, showNotifications) => {
    try {
      await AsyncStorage.setItem(SHOW_NOTIFICATIONS_KEY, JSON.stringify(showNotifications))
      this.setState({ showNotifications });
      console.log(showNotifications);
      if(showNotifications){
        this.registerForPushNotifications()
        
      }
      else{
        console.log('Going In UnRegister');
      }
      if(showNotifications==false){
        this.unRegisterForPushnNotification();
      }

    } catch (e) {
      console.log(e);
    }
  }

  storeThemeColors = async (key, themeIndex) => {
    try {
      await AsyncStorage.setItem(THEME_COLOR_KEY, JSON.stringify(themeIndex));
      this.props.navigation.setParams({ themeIndex });
    } catch (e) {
      console.log(e);
    }
  }

 

  restoreDefaults = () => {
    this.storeNotification(SHOW_NOTIFICATIONS_KEY, false);
    this.storeThemeColors(THEME_COLOR_KEY, 0);
   
  }
  registerForPushNotifications = async () => {
    console.log('notifications')
    var tokens=[]
    fire.database().ref('scholarship/').once('value', function (snapshot) {
      console.log(snapshot)
     
      
     snapshot.forEach((child=>{
      const a = (child.val().tok);
      tokens.push(a)
      console.log(tokens)
     })
    )
    })
  


    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    
    if (existingStatus !== 'granted') {
      
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

  
      // Get the token that uniquely identifi 
      try{
      let token =await Notifications.getExpoPushTokenAsync();

      console.log("hello")
      console.log(token);
      let found = false;
      tokens.forEach(t=>{
        if(t==token){
          console.log('Token Found');
          found = true;
        }
      });

      if(found==false){
        console.log('Sending New Token');

        const num  = Math.floor((Math.random()*100)+1).toString()

        this.setState({num})
        
        fire.database().ref('scholarship/').child(num).set({
          tok:token
        });
      }
       

      }
      catch(e){
          console.log("error"+e)
      }

    }

    unRegisterForPushnNotification= async ()=>{
      
              const rem = this.state.num    
              let reference = fire.database().ref('scholarship/'+rem);
              reference.remove();
              console.log('done')
            
       

        
        }
        readUserData=async()=> {
          console.log('helloooooooooooooooooo')
          fire.database().ref('scholarship/').once('value', function (snapshot) {
              // console.log(snapshot.val())
              var tasks = [];;
             snapshot.forEach((child=>{
              const a = (child.val().tok);
              
            
              let response = fetch('https://exp.host/--/api/v2/push/send', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  to:a,
                  sound:'default',
                  title:'aur sunao',
                  body:'mai thek tm btao!'
                
              }),
            });
               
                
             }))
          
              
          });
      }
      
    
  render() {




    
    

 

    console.disableYellowBox = true;
    return (
        
      <View style={styles.container}>
     
        <Card containerStyle={styles.card} title='Notifications' >
          <View style={styles.row}>
            <Text style={{ fontSize: 16 }}>Show Notifications</Text>
            <Switch
              style={{ marginLeft: 16 }}
              trackColor='red'
              thumbColor='white'
              value={this.state.showNotifications}
              onValueChange={(showNotifications) => {
                this.storeNotification(SHOW_NOTIFICATIONS_KEY, showNotifications);
                
              }}
              // onValueChange={this.registerForPushNotifications()}
            />
          </View>
        </Card>
 
       
    
        <Button
          containerStyle={styles.restoreButtonContainer}
          buttonStyle={{
            padding: 16,
            backgroundColor:'red'
          }}
          onPress={this.readUserData}
          title="Send Notification"
        />
       
    
      </View>
    );
  }
 
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    //alignItems: 'center',
    height: '100%',
    backgroundColor: '#D0D3D4',
    marginTop:40,
    flex:1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonGroup: {
    height: 60,
    width: 300
  },
  buttonGroupText: {
    fontSize: 18,
    color: 'white'
  },
  slider: {
    width: 250,
    marginLeft: 16
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#EAECEE',
    borderColor: '#ABB2B9',
    borderWidth: 0.3,
    width: '90%',
  },
  restoreButtonContainer: {
    margin: 32
  }
});