import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputForm = ({placeholder, isPassword}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={isPassword}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#b3b5ba',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    margin: 5,
    padding: 10,
    width: '100%',
  },
});

export default InputForm;
