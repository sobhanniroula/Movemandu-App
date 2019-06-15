import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';


export default class SettingsScreen extends Component {
    render() {
        return (
            <Container>

                <Header>
                    <Left>
                        <Icon name="ios-menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>

                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.text}>Settings Screen</Text>
                </Content>

            </Container>
        );
    }
}



const styles = {
    container: {
            backgroundColor: '#226699',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
};