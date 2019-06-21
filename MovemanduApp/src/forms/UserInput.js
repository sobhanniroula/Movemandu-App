import React from 'react';
import { View, TextInput, Text, Dimensions } from 'react-native';

const UserInput = ({ source, value, onChangeText, placeholder, secureTextEntry, multiline, numberOfLines }) => {
  const {inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <TextInput
        source={source}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={"#eee"}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        autoCapitalize={"none"}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={inputStyle}
      />
    </View>
  );
};


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputStyle: {
    width: DEVICE_WIDTH - 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        color: '#fff',
        marginHorizontal: 20,
        borderRadius: 20,
        fontSize: 14,
        fontFamily: 'Raleway',
        margin: 2,
        paddingLeft: 50,
        letterSpacing: 1
  }
};

export { UserInput };




// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     width: DEVICE_WIDTH - 40,
//     height: 40,
//     marginHorizontal: 20,
//     paddingLeft: 45,
//     borderRadius: 20,
//     color: '#fff',
//     fontFamily: 'Raleway'
//   },
//   inputWrapper: {
//     flex: 1
//   },
//   inlineImg: {
//     position: 'absolute',
//     zIndex: 99,
//     width: 22,
//     height: 22,
//     left: 35,
//     top: 9,
//   }
// });