import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const HeaderButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 16, marginLeft: 20, marginRight:20 , color: '#007cf8'},
});

export default HeaderButton;
