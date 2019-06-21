import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationActions } from 'react-navigation';


export default class drawerContentComponents extends Component {

    constructor(props) {
        super(props);

        this.navigateToScreen = this.navigateToScreen.bind(this);
    }

    navigateToScreen = route =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })


  render() {
      if(!this.props.jwt) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/Dharahara.jpg')} style={{flex: 1, height: '100%', width: '100%'}}>
                    <View style={styles.headerContainer}>
                        <View style={{top: 25, left: 10, justifyContent: 'flex-start'}}>
                            <Image source={require('../../assets/user-logo.png')} style={styles.userLogo}></Image>
                        </View>
                        <View style={{justifyContent: 'flex-end', marginLeft: 25, marginBottom: 10}}>
                            <Text style={{fontFamily: 'Raleway', color: '#fff', fontSize: 16, fontWeight: 'bold'}}>James Smith</Text>
                            <Text style={{fontFamily: 'Raleway', color: '#ddd', fontSize: 12, lineHeight: 20}}>james.smith@example.com</Text>
                        </View>
                    </View>
                    <View style={styles.screenContainer}>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')}> <Icon name="ios-home" style={{color: '#eee', fontSize: 20}}/>   Home</Text>
                        </View>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Settings') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Settings') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Settings')}> <Icon name="ios-settings" style={{color: '#eee', fontSize: 20}}/>   Settings</Text>
                        </View>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Splash') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Splash') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Splash')}><Icon name="md-water" style={{color: '#eee', fontSize: 20}}/>   Splash Screen</Text>
                        </View>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Login') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Login') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Login')}><Icon name="ios-log-in" style={{color: '#eee', fontSize: 20}}/>   Login</Text>
                        </View>
                        
                    </View>
                    <View style={styles.footer}>
                        <View style={{justifyContent: 'flex-start'}}>
                            <ImageBackground source={require('../../assets/movemandu-white.png')} style={{flex: 1, width: 100, height: 50, marginRight: '5%', left: '30%', top: '80%'}} ></ImageBackground>
                        </View>
                        <View style={{justifyContent: 'flex-end', bottom: 30}}> 
                        <Text style={[styles.footerText, styles.myFont]}>{'\u00A9'} 2019. {'\n'}Sobhan Niroula</Text>
                        </View>
                        
                    </View>
                </ImageBackground> 
            </View>
        );
      } else if (this.props.jwt) {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/Dharahara.jpg')} style={{flex: 1, height: '100%', width: '100%'}}>
                    <View style={styles.headerContainer}>
                        <View style={{top: 25, left: 10, justifyContent: 'flex-start'}}>
                            <Image source={require('../../assets/user-logo.png')} style={styles.userLogo}></Image>
                        </View>
                        <View style={{justifyContent: 'flex-end', marginLeft: 25, marginBottom: 10}}>
                            <Text style={{fontFamily: 'Raleway', color: '#fff', fontSize: 16, fontWeight: 'bold'}}>James Smith</Text>
                            <Text style={{fontFamily: 'Raleway', color: '#ddd', fontSize: 12, lineHeight: 20}}>james.smith@example.com</Text>
                        </View>
                    </View>
                    <View style={styles.screenContainer}>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Home') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')}> <Icon name="ios-home" style={{color: '#eee', fontSize: 20}}/>   Home</Text>
                        </View>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Settings') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Settings') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Settings')}> <Icon name="ios-settings" style={{color: '#eee', fontSize: 20}}/>   Settings</Text>
                        </View>
                        <View style={[styles.screenStyle, styles.mt25, (this.props.activeItemKey=='Admin') ? styles.activeBackgroundColor : null]}>
                            <Text style={[styles.screenTextStyle, styles.myFont, (this.props.activeItemKey=='Admin') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Admin')}>  <Icon name="ios-man" style={{color: '#eee', fontSize: 20}}/>   Admin</Text>
                        </View>
                        
                        <View style={[styles.screenStyle, styles.mt25]}>
                            <Text style={[styles.screenTextStyle, styles.myFont]} onPress={this.props.logOut}><Icon name="ios-log-in" style={{color: '#eee', fontSize: 20}}/>   Logout</Text>
                        </View>
                        
                    </View>
                    <View style={styles.footer}>
                        <View style={{justifyContent: 'flex-start'}}>
                            <ImageBackground source={require('../../assets/movemandu-white.png')} style={{flex: 1, width: 100, height: 50, marginRight: '5%', left: '30%', top: '80%'}} ></ImageBackground>
                        </View>
                        <View style={{justifyContent: 'flex-end', bottom: 30}}> 
                        <Text style={[styles.footerText, styles.myFont]}>{'\u00A9'} 2019. {'\n'}Sobhan Niroula</Text>
                        </View>
                        
                    </View>
                </ImageBackground> 
            </View>
        )
      }
    
  }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%'
    },
    headerContainer: {
        height: 100,
        flexDirection: 'row',
        top: '5%'
    },
    myFont: {
        fontFamily: 'Raleway'
    },
    userLogo: {
        height: 80,
        width: 80,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 80/2
    },
    headerText: {
        color: '#fff8f8',
    },
    screenContainer: { 
        paddingTop: 70,
        width: '100%'
    },
    screenStyle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    screenTextStyle:{
        fontSize: 18, 
        textAlign: 'center',
        color: '#fff',
        paddingLeft: '10%'
    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: '#eee',
        fontFamily: 'Raleway'
    },
    activeBackgroundColor: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: 280,
        borderRadius: 15
    },
    mt25: {
        marginTop: 15
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        height: 60
    },
    footerText: {
        position: 'absolute',
        left: 50,
        fontSize: 12,
        color: '#ddd'
    }
});