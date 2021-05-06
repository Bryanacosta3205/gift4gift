import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const LogButton = ({text, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('G4G')}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

LogButton.propTypes = {
  text: PropTypes.string,
  navigation: PropTypes.object,
};

LogButton.defaultProps = {
    text: 'Button'
  };

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0097b9',
    margin: 5,
    width: 80,
    padding: 7,
    borderRadius: 5,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LogButton;
