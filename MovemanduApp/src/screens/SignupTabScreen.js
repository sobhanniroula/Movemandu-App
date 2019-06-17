import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';


export default class SignupTabScreen extends Component {
    render() {
        return (
            <View style={[styles.container, styles.colorGreen]}>
                    <Text style={styles.text}><Icon name="ios-person-add" style={{fontSize: 50}} /></Text>
                    
                </View>
        )

    }
}



const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
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
