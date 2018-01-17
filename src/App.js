import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCeq3H0kp_jO2OPFO93uwzYsTXiIXWLVYQ",
      authDomain: "phone-auth-48825.firebaseapp.com",
      databaseURL: "https://phone-auth-48825.firebaseio.com",
      projectId: "phone-auth-48825",
      storageBucket: "phone-auth-48825.appspot.com",
      messagingSenderId: "73085473516"
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) { 
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  });
}
renderContent() {
  switch(this.state.loggedIn) {
    case true:
    return (
      <Button onPress={() => {firebase.auth().signOut()}}>
        Log Out
      </Button> 
    )
    case false: 
      return <LoginForm />
    default: 
      return (
        <View style={{flex:1, alignItems: 'center'}}>
          <Spinner size="large" />
        </View>)
  }
}
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
