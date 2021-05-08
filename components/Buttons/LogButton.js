import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const LogButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

LogButton.propTypes = {
  text: PropTypes.string,
  navigation: PropTypes.object,
};

LogButton.defaultProps = {
  text: 'Button',
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2b57f8',
    margin: 5,
    padding: 10,
    width: 100,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LogButton;
