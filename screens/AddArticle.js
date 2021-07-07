import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Keyboard,
} from 'react-native';
import Carousel from '../components/Carousel';
import SQLite from 'react-native-sqlite-storage';
import LogButton from '../components/Buttons/LogButton';
import {useForm} from '../hooks/useForm';
const db = SQLite.openDatabase({name: 'mydata'});

const AddArticle = ({navigation}) => {
  const host = 'http://192.168.0.18:3000';
  const {title, details, onChange, cleanForm} = useForm({
    title: '',
    details: '',
  });

  const onSubmit = () => {
    if (title && details) {
      fetch(`${host}/newPost`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          details,
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSQ8A0Mym9TSxkWEZNMdY9KQ8NlGzgZYAo8srMbEBdNWyzIkS97K1A3zh68qb_v9kMlI&usqp=CAU',
          id_user: 1,
        }),
      })
        .then(resp => {
          cleanForm();
          navigation.goBack()
        })
        .catch(err => console.log(err));
    }
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrapper}>
      <Carousel />

      <TextInput
        placeholderTextColor="#b3b5ba"
        style={styles.input}
        placeholder="Title"
        onChangeText={value => onChange(value, 'title')}
        value={title}
      />

      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Details"
        placeholderTextColor="#b3b5ba"
        onChangeText={value => onChange(value, 'details')}
        value={details}
      />
      <LogButton text="Save" onPress={onSubmit} />
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
