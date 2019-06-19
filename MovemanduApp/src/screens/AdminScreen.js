import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base';


export default class SettingsScreen extends Component {
    render() {
        return (
            <Container>

                <Header style={styles.colorPurple} androidStatusBarColor='#96f'>
                    <Left style={{top: '4%'}}>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} style={styles.iconText} />
                    </Left>
                    <Body />
                    <Right />
                </Header>

                <Content contentContainerStyle={[styles.container, styles.colorPurple]}>
                    <View style={{top: '1%'}}>
                    <Text style={styles.textHeader}>Admin Panel</Text>
                    </View>

                    <View style={{flex: 1, width: '90%'}}>
                        <View style={{height: 50, marginTop: 30}}>
                            <Button style={styles.button}>
                                <Text style={{fontFamily: 'Raleway', fontSize: 14, color: '#ddd'}}>Add new post</Text>
                            </Button>
                        </View>
                        
                        <View style={{flex: 1, marginTop: 20, flexDirection: 'row'}}>
                            <Text style={styles.postText}>1</Text>
                            <Text style={styles.postText}>Baneshwor House</Text>
                            <Text style={styles.postText}>2019-06-19</Text>
                            <Text style={styles.postText}>New Baneshwor</Text>
                            
                        </View>
                    </View>
                    
                </Content>

            </Container>
        );
    }
}


const styles = {
    container: {
            flex: 1,
            alignItems: 'center'
    },
    textHeader: {
        color: '#bbb',
        fontSize: 35,
        fontFamily: 'Raleway'
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 5,
        paddingLeft: 5
    },
    postText: {
        marginRight: 20,
        color: '#ddd',
        fontFamily: 'Raleway',
        fontSize: 12
    },
    button: {
        height: 40,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7711ff'
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
    },
    colorPurple: {
        backgroundColor: '#9966ff'
    }
};