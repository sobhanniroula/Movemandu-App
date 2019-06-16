import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import LoginScreen from './LoginScreen';
import drawerContentComponents from './drawerContentComponents';


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
