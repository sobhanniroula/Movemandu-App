import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, Platform, Image } from 'react-native';



export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
          StatusBar.setTranslucent(true);
        }
    }
    render() {

        const { WIDTH, HEIGHT } = Dimensions.get('window');
        return (
            
            <View style={{flex: 1, backgroundColor: '#999'}}>
                <StatusBar backgroundColor="transparent" barStyle="light-content" hidden/>

                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
                    <Image source={require('../../assets/logo.png')} style={{height: 100, width: 200, backgroundColor: 'transparent'}} />
                </View>
                </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center'
    },
    text: {
        color: '#bbb',
        fontSize: 50,
        fontFamily: 'Raleway',
        top: '38%'
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 5,
        paddingLeft: 5
    },
    transparent: {
        backgroundColor: 'transparent'
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