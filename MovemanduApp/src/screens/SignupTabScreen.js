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
import PropTypes from 'prop-types';
import UserInput from '../forms/UserInput';
import ButtonSubmit from '../forms/ButtonSubmit';
import Icon from 'react-native-vector-icons/Ionicons';
import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg from '../images/eye_black.png';




export default class SignupTabScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            phone_number: '',
            showPass: true,
            press: false
        };
        
        this.showPass = this.showPass.bind(this);
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
        }
    
    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {
            // here place your signup logic
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    showPass() {
        this.state.press === false ? 
        this.setState({showPass: false, press: true}) : 
        this.setState({showPass: true, press: false});
    }
    

    render() {
        return (
            <View style={[styles.container, styles.colorGreen]}>

                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={{height: 80}}>
                    <Text style={styles.text}><Icon name="ios-person-add" style={{fontSize: 60}} /></Text>
                    </View>
                    
                    <View style={{marginTop: 60, height: 230}}>
                        <View style={{flex: 1}}>
                            <Icon name="ios-mail" style={styles.iconMail} />
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                onChangeText={val => this.onChangeText('email', val)}
                            />
                        </View>

                        <View style={{flex: 1}}>
                            <Image source={usernameImg} style={styles.inlineImg} />      
                            <TextInput
                                style={styles.input}
                                placeholder='Username'
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                onChangeText={val => this.onChangeText('username', val)}
                            />
                        </View>

                        <View style={{flex: 1}}>
                            <Image source={passwordImg} style={styles.inlineImg} />
                            <TextInput
                                style={styles.input}
                                placeholder='Password'
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                secureTextEntry={this.state.showPass}
                                onChangeText={val => this.onChangeText('password', val)}
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
                            <TextInput
                                style={styles.input}
                                placeholder='Re-enter password'
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                secureTextEntry={this.state.showPass}
                                onChangeText={val => this.onChangeText('password', val)}
                            />
                        </View>
                        
                        <View style={styles.submitView}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={this.signUp}
                                style={styles.submitBtn}> 
                                <Text style={styles.submitText}>Register</Text>
                            </TouchableOpacity>
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
    input: {
        width: DEVICE_WIDTH - 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: '#fff',
        marginHorizontal: 20,
        borderRadius: 20,
        fontSize: 14,
        fontFamily: 'Raleway',
        margin: 2,
        paddingLeft: 50
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
