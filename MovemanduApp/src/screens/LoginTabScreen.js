import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    StyleSheet, 
    KeyboardAvoidingView, 
    ActivityIndicator, 
    Image, 
    Dimensions 
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {UserInput} from '../forms/UserInput';
import {ButtonSubmit} from '../forms/ButtonSubmit';
import { Loading } from '../forms/Loading';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';




export default class LoginTabScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
            showPass: true,
            press: false
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false ? 
        this.setState({showPass: false, press: true}) : 
        this.setState({showPass: true, press: false});
    }

    render() {
        const { username, password, error, loading } = this.state;

            return (
                <View style={[styles.container, styles.colorBlue]}>

                    <KeyboardAvoidingView behavior="padding" style={styles.container}>
                        <View style={{height: 80}}>
                        <Text style={styles.text}><Icon name="ios-log-in" style={{fontSize: 70}} /></Text>
                        </View>
                   
                        <View style={{marginTop: 75, height: 100}}>
                            <UserInput
                                source={usernameImg}
                                placeholder="Username"
                                value={username}
                                onChangeText={username => this.setState({ username })}
                            />
                            <UserInput
                                style={{marginTop: -35}}
                                source={passwordImg}
                                secureTextEntry={this.state.showPass}
                                placeholder="Password"
                                value={password}
                                onChangeText={password => this.setState({ password })}
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.btnEye}
                                onPress={this.showPass}>
                                <Image source={eyeImg} style={styles.iconEye} />
                            </TouchableOpacity>
                            
                            <Text style={styles.errorText}>
                                {error}
                            </Text>
                            
                            {!loading ? 
                                <ButtonSubmit> 
                                    Login
                                </ButtonSubmit>   
                            : 
                                <Loading size={'large'} />
                            }
                        </View>
                        
                    </KeyboardAvoidingView>

                    
                    
                </View>
            );
        

    }
}



const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center'
    },
    btnEye: {
        position: 'absolute',
        top: 57,
        right: 30
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Raleway',
        top: 50
    },
    errorText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#dd2211'
    },  
    fontFam: {
        fontFamily: 'Raleway'
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
