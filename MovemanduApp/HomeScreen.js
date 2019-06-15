import React, { Component } from 'react';
import { View, Text, Stylesheet } from 'react-native';
import { Icon, Button, Container, Header, Content, Left } from 'native-base';


export default class HomeScreen extends Component {
    render() {
        return (
            <Container>

                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} />
                    </Left>
                </Header>

                <Content contentContainerStyle={styles.container}>
                    <Text style={styles.text}>Home Screen</Text>
                </Content>

            </Container>
        );
    }
}


const styles = {
    container: {
            backgroundColor: '#009988',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
};