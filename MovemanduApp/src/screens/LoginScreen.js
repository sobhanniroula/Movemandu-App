import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Container, Header, Content, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LoginTabScreen from './LoginTabScreen';
import SignupTabScreen from './SignupTabScreen';



export default class LoginScreen extends Component {
    state = {
        index: 0,
        currentRoute: 'first',
        currentColor: '',
        routes: [
          { key: 'first', title: 'Login' },
          { key: 'second', title: 'Signup' },
        ],
      };

      handleColor = () => {
        if (this.state.index === 0) {
            this.setState({
                currentColor: 'background: "#4887b0"'
            });
        } else {
            this.setState({
                currentColor: 'background: "#00bb88"'
            });
        }
    }


    render() {
        return (
            <Container>

                <Header style={styles.colorBlue} androidStatusBarColor='#4887b0'>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} style={styles.iconText} />
                    </Left>
                    <Body />
                    <Right />
                </Header>

                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: LoginTabScreen,
                        second: SignupTabScreen,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width}}
                    style={this.state.currentColor}
                />

            </Container>
        );
    }
}




// const LoginSignupTab = createAppContainer(
//     createMaterialTopTabNavigator(
//     {
//       Login: { screen: LoginTabScreen },
//       Signup: { screen: SignupTabScreen },
//     },
//     {
//       tabBarPosition: 'top',
//       swipeEnabled: true,
//       animationEnabled: true,
//       tabBarOptions: {
//         activeTintColor: '#FFFFFF',
//         inactiveTintColor: '#F8F8F8',
//         style: {
//           backgroundColor: '#633689',
//         },
//         labelStyle: {
//           textAlign: 'center',
//         },
//         indicatorStyle: {
//           borderBottomColor: '#87B56A',
//           borderBottomWidth: 2,
//         },
//       },
//     }
//   ));

  
const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
            // justifyContent: 'center'
    },
    scene: {
        flex: 1,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Raleway',
        top: 50
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 5,
        paddingLeft: 5
    },
    colorGreen: {
        backgroundColor: '#00bb88'
    },
    colorGreen2: {
        backgroundColor: '#7dc2af'
    },
    colorGreenOpc: {
        backgroundColor: '#00bb88fa' 
    },
    colorOrange: {
        backgroundColor: '#e27d60'
    },
    colorOrange2: {
        backgroundColor: '#da4f42'
    },
    colorOrange2opc: {
        backgroundColor: '#da4f42e8'
    },
    colorBlue: {
        backgroundColor: '#4887b0'
    }
});