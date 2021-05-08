import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const AddArticle = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableHighlight style={styles.imagePicker}>
        <Text style={{color: '#b3b5ba'}}>Select images</Text>
      </TouchableHighlight>
      <TextInput style={styles.input} placeholder="Title" />
      <TextInput style={styles.input} placeholder="Condition" />
      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Details"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
  },

  input: {
    height: 40,
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
  imagePicker: {
    borderRadius: 5,
    height: 150,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#b3b5ba',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default AddArticle;
