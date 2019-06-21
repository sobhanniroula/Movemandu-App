import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  View,
  Dimensions
} from 'react-native';


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;


const ButtonSubmit = ({ onPress, children }) => {
  
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'mediumpurple',
    backgroundColor: "rebeccapurple",
    borderRadius: 25,
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 5
  }
};

export { ButtonSubmit };


  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     top: 15,
  //     alignItems: 'center',
  //     justifyContent: 'flex-start',
  //   },
  //   button: {
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     backgroundColor: '#F035E0',
  //     height: MARGIN,
  //     borderRadius: 20,
  //     zIndex: 100,
  //   },
  //   circle: {
  //     height: MARGIN,
  //     width: MARGIN,
  //     marginTop: -MARGIN,
  //     borderWidth: 1,
  //     borderColor: '#F035E0',
  //     borderRadius: 100,
  //     alignSelf: 'center',
  //     zIndex: 99,
  //     backgroundColor: '#F035E0',
  //   },
  //   text: {
  //     color: 'white',
  //     backgroundColor: 'transparent',
  //     fontFamily: 'Raleway',
  //     letterSpacing: 3
  //   },
  //   image: {
  //     width: 24,
  //     height: 24,
  //   },
  // });