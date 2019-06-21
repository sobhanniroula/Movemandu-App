import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Container, Header, Content, Left, Body, Right } from 'native-base';
import LoginScreen from '../screens/LoginScreen';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LoginTabScreen from '../screens/LoginTabScreen';
import SignupTabScreen from '../screens/SignupTabScreen';

export default class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };
  }

  render() {
    return(
      <View style={styles.container}>
            <LoginScreen />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};