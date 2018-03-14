import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';

export default class App extends React.Component {

  componentDidMount() {
    const config = {
      apiKey: "AIzaSyACoueMACZROmtFH6-cqOcKHtbPELZasYY",
      authDomain: "one-time-password-6f6b1.firebaseapp.com",
      databaseURL: "https://one-time-password-6f6b1.firebaseio.com",
      projectId: "one-time-password-6f6b1",
      storageBucket: "one-time-password-6f6b1.appspot.com",
      messagingSenderId: "658384252713"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
