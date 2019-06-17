import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import drawerContentComponents from './src/screens/drawerContentComponents';


export default class App extends Component {
  render() {
    return (
      
        <MyNavbar /> 
             
    );
  }
}

const MyNavbar = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Settings: {
      screen: SettingsScreen
    },
    Login: {
      screen: LoginScreen
    }
  },
    {
      contentComponent: drawerContentComponents
    }
  );
