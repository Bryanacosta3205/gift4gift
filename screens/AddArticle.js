import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';
import Carousel from '../components/Carousel';

const AddArticle = () => {
  return (
    <View style={styles.wrapper}>
      <Carousel />
      
      <TextInput placeholderTextColor='#b3b5ba' style={styles.input} placeholder="Title" />
      <TextInput placeholderTextColor='#b3b5ba' style={styles.input} placeholder="Condition" />
      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Details"
        placeholderTextColor='#b3b5ba'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 45,
    width: '100%',
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#b3b5ba',
    borderRadius: 5,
    
  },
  textArea: {
    height: 100,
    width: '100%',
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#b3b5ba',
    borderRadius: 5,
  },
});

export default AddArticle;
