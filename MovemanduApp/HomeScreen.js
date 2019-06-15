import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base';


export default class HomeScreen extends Component {
    render() {
        return (
            <Container>

                <Header style={styles.colorOrange2}>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} style={styles.iconText} />
                    </Left>
                    <Body />
                    <Right/>
                </Header>

                <Content contentContainerStyle={[styles.container, styles.colorOrange2opc]}>
                    <Text style={styles.text}>Home Screen</Text>
                </Content>

            </Container>
        );
    }
}


const styles = {
    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 5,
        paddingLeft: 5
    },
    colorGreen: {
        backgroundColor: '#009988'
    },
    colorGreen2: {
        backgroundColor: '#7dc2af'
    },
    colorOrange: {
        backgroundColor: '#e27d60'
    },
    colorOrange2: {
        backgroundColor: '#da4f42'
    },
    colorOrange2opc: {
        backgroundColor: '#da4f42fa'
    },
    colorBlue: {
        backgroundColor: '#4887b0'
    }
};