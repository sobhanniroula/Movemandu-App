import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Container, Header, Content, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import LoginTabScreen from './LoginTabScreen';
import SignupTabScreen from './SignupTabScreen';



export default class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            currentRoute: 'first',
            currentColor: '',
            routes: [
              { key: 'first', title: 'Login' },
              { key: 'second', title: 'Signup' },
            ],
        };
    }
       

    render() {
        return (
            <Container>

                <Header style={styles.colorBlue} androidStatusBarColor='#2293f4'>
                    <Left style={{top: '4%'}}>
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




  
const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center'
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