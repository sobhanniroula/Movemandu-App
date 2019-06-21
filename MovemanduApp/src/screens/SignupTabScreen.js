import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput,
    KeyboardAvoidingView,
    Image,
    Dimensions
} from 'react-native';

import {UserInput} from '../forms/UserInput';
import {ButtonSubmit} from '../forms/ButtonSubmit';
import {Loading} from '../forms/Loading';
import Icon from 'react-native-vector-icons/Ionicons';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';




export default class SignupTabScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            rePassword: '',
            showPass: true,
            press: false,
            error: '',
            loading: false
        };
        
        this.showPass = this.showPass.bind(this);
    }


    showPass() {
        this.state.press === false ? 
        this.setState({showPass: false, press: true}) : 
        this.setState({showPass: true, press: false});
    }
    

    render() {
        const { username, email, password, rePassword, error, loading } = this.state;

        return (
            <View style={[styles.container, styles.colorGreen]}>

                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={{height: 80}}>
                    <Text style={styles.text}><Icon name="ios-person-add" style={{fontSize: 60}} /></Text>
                    </View>
                    
                    <View style={{marginTop: 60, height: 230}}>
                        <View style={{flex: 1}}>
                            <Icon name="ios-mail" style={styles.iconMail} />
                            <UserInput
                                placeholder='Email'
                                placeholderTextColor='white'
                                value={email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>

                        <View style={{flex: 1}}>
                            <Image source={usernameImg} style={styles.inlineImg} />      
                            <UserInput
                                placeholder='Username'
                                placeholderTextColor='white'
                                value={username}
                                onChangeText={username => this.setState({ username })}
                            />
                        </View>

                        <View style={{flex: 1}}>
                            <Image source={passwordImg} style={styles.inlineImg} />
                            <UserInput
                                placeholder='Password'
                                placeholderTextColor='white'
                                value={password}
                                secureTextEntry={this.state.showPass}
                                onChangeText={password => this.setState({ password })}
                            />
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.btnEye}
                                onPress={this.showPass}>
                                <Image source={eyeImg} style={styles.iconEye} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flex: 1}}>
                            <Image source={passwordImg} style={styles.inlineImg} />
                            <UserInput
                                placeholder='Re-enter password'
                                placeholderTextColor='white'
                                value={rePassword}
                                secureTextEntry={this.state.showPass}
                                onChangeText={rePassword => this.setState({ rePassword })}
                            />
                        </View>

                        <Text style={styles.errorText}>{error}</Text>
                        
                        <View style={styles.submitView}>
                            {!loading ? 
                                <ButtonSubmit>
                                    Register
                                </ButtonSubmit>
                            :
                                <Loading size={'large'} />
                            }
                        </View>

                    </View>

                </KeyboardAvoidingView>
                    
            </View>
        )

    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

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
    iconMail: {
        fontSize: 22, 
        color: '#fff', 
        position: 'absolute',
        marginTop: 10,
        marginLeft: 35
    },
    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 35,
        top: 9
    },
    btnEye: {
        position: 'absolute',
        top: 57,
        right: 30,
        zIndex:100
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)'
    },
    iconText: {
        color: '#fff',
        fontSize: 35,
        marginLeft: 5,
        paddingLeft: 5
    },

    submitView: {
        flex: 1, 
        top: 20, 
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009977',
        height: 40,
        width: DEVICE_WIDTH - 40,
        borderRadius: 20,
        zIndex: 100
    },
    submitText: {
        color: '#eee',
        letterSpacing: 2,
        fontFamily: 'Raleway',
        fontSize: 18,
        backgroundColor: 'transparent'
    },
    errorText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#dd2211'
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
