import React from 'react';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

const Button = ({onPress, children}) => {
  return (
    <TouchableHighlight style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default Button;
