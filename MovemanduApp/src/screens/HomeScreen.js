import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Right, Footer } from 'native-base';



export default class HomeScreen extends Component {
    render() {
        return (                 
                <Container>
                  
                  <Header style={styles.colorOrange2} androidStatusBarColor='#da4f42'>
                      <Left style={{top: '4%'}}>
                          <Icon name="menu" onPress={() => this.props.navigation.navigate('DrawerOpen')} style={styles.iconText} />
                      </Left>
                      <Body />
                      <Right/>
                  </Header>
  
                  <Content contentContainerStyle={[styles.container, styles.colorOrange2opc]}>
                      <Text style={styles.text}>welcome</Text>   
                      <Button iconLeft rounded style={styles.button}>
                          <Icon name='search' />
                          <Text style={{padding: 20, marginLeft: 10, color: '#ddd', fontSize: 15, fontFamily: 'Raleway'}}>Search  Apartments</Text>
                      </Button>             
                  </Content>
  
              </Container>   
            
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center'           
    },
    text: {
        color: '#aaa',
        fontFamily: 'Raleway',
        fontSize: 55,
        top: '38%'
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 2,
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
    },
    textMove: {
        fontSize: 25,
        color: '#00b300',
        marginTop: '50%',
        textAlign: 'left'
    },
    textMandu: {
        fontSize: 40,
        color: '#ccc',
        marginTop: '0%',
        fontFamily: 'Raleway'
    },
    button: {
        backgroundColor: '#ee4f42fa',
        color: '#ddd',
        width: '70%',
        top: '120%',
       padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        
    }
});