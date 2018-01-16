import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCeq3H0kp_jO2OPFO93uwzYsTXiIXWLVYQ",
      authDomain: "phone-auth-48825.firebaseapp.com",
      databaseURL: "https://phone-auth-48825.firebaseio.com",
      projectId: "phone-auth-48825",
      storageBucket: "phone-auth-48825.appspot.com",
      messagingSenderId: "73085473516"
    });
  
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
