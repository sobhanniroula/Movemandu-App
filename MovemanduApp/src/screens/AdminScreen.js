import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView , Dimensions} from 'react-native';
import { Icon, Button, Container, Header, Content, Left, Body, Right } from 'native-base';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tableHead: ['ID','Name','Date Posted','Place','Edit','Delete'],
            tableData: [
                ['1','New house','2019-06-01','New Baneshwor','Edit','X'],
                ['2','Red house','2019-06-05','Kalanki','Edit','X'],
                ['3','White house','2019-06-11','Maitidevi','Edit','X'],
                ['4','Old house','2019-06-19','Old Baneshwor','Edit','X'],
            ]
        };
    }
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

                    <View style={{flex: 1, width: '95%'}}>
                        <View style={{height: 50, marginTop: 30}}>
                            <Button style={styles.button}>
                                <Text style={{fontFamily: 'Raleway', fontSize: 14, color: '#ddd'}}>Add new post</Text>
                            </Button>
                        </View>
                        
                        <View style={{flex: 1, marginTop: 20, padding: 1}}>
                            <ScrollView horizontal={true}>
                                <View>
                                    <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}} style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>
                                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.postTextHead} />
                                    </Table>

                                    <ScrollView style={styles.dataWrapper}>
                                        <Table borderStyle={{borderColor: '#c1c0b9'}}>
                                            <Rows data={this.state.tableData} textStyle={styles.postText} />
                                        </Table>
                                    </ScrollView>
                                        
                                </View>
                            </ScrollView>
                            
                            
                        </View>
                    </View>
                    
                </Content>

            </Container>
        );
    }
}

const { WIDTH, HEIGHT } = Dimensions.get('window');

const styles = StyleSheet.create({
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
    head: {
        height: 40,
        backgroundColor: '#777'
    },
    postTextHead: {
        marginRight: 20,
        color: '#ccc',
        fontFamily: 'Raleway',
        fontSize: 12,
        textAlign: 'center',
        width: 50
    },
    postText: {
        marginRight: 20,
        color: '#aaa',
        fontFamily: 'Raleway',
        fontSize: 12,
        textAlign: 'center',
        height: 50,
        backgroundColor: '#ccc',
        width: 50
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
});