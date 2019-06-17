import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';


export default class drawerContentComponents extends Component {

    navigateToScreen = route =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#A40606bd', '#D98324']} style={styles.linearGradient}>
            <View style={styles.headerContainer}>
                <ImageBackground source={require('../../assets/movemandu-black.png')} style={{flex: 1, width: 275, justifyContent: 'center', marginTop: 5}} ></ImageBackground>
            </View>
            <View style={styles.screenContainer}>
                <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')}><Icon name="ios-home" style={{color: '#ccc', fontSize: 22}}/>    Home</Text>
                </View>
                <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Settings') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Settings') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Settings')}><Icon name="ios-settings" style={{color: '#ccc', fontSize: 22}}/>    Settings</Text>
                </View>
                <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Login') ? styles.activeBackgroundColor : null]}>
                    <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Login') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Login')}><Icon name="ios-log-in" style={{color: '#ccc', fontSize: 22}}/>    Login</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.footerText, styles.myFont]}>{'\u00A9'} 2019. Sobhan Niroula</Text>
            </View>
            </LinearGradient>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    headerContainer: {
        height: 150,
    },
    myFont: {
        fontFamily: 'Raleway'
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        paddingTop: 20,
        width: '100%'
    },
    screenStyle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 22, 
        textAlign: 'center',
        color: '#ddd',
        paddingLeft: '25%'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#ccc'
    },
    activeBackgroundColor: {
        backgroundColor: '#ce690ded',
        width: 270
    },
    mt25: {
        marginTop: 35
    },
    footer: {
        flex: 1
    },
    footerText: {
        position: 'absolute',
        bottom: 25,
        left: 50,
        fontSize: 12,
        color: '#ddd'
    }
});