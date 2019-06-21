import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import AdminScreen from './src/screens/AdminScreen';
import SplashScreen from './src/screens/SplashScreen'
import drawerContentComponents from './src/screens/drawerContentComponents';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      jwt: ''
    };

    this.logOut = this.logOut.bind(this);
  }

  // For Splash Screen
  performTimeConsumingTask = async() => {
    return new Promise((resolve) => 
      setTimeout(
        () => { resolve('result') },
        2000
      ));
  }

  // For Splash Screen
  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({
        isLoading: false
      });
    }
  }

  // Logout
  logOut = () => {
    this.setState({
        jwt: ''
    })
}

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
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
    },
    Admin: {
      screen: AdminScreen
    },
    Splash: {
      screen: SplashScreen
    }
  },
    {
      contentComponent: drawerContentComponents
    }
  );

  // export { MyNavbar };
