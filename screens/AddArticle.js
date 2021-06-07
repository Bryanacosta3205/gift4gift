import React from 'react';
import {StyleSheet, View, TextInput, Text, Button, Keyboard} from 'react-native';
import Carousel from '../components/Carousel';
import SQLite from 'react-native-sqlite-storage';
import LogButton from '../components/Buttons/LogButton'
import { useForm } from '../hooks/useForm';
const db = SQLite.openDatabase({name: 'mydata'});

const AddArticle = () => {

  const {title,condition,details,onChange,cleanForm} = useForm({
    title:'',
    condition:'',
    details:'',
  })

  const onSubmit = () => {
    if (title && details) {
      db.transaction(function (t) {
        t.executeSql(
          'INSERT INTO Article (id, title, details, image_url, id_user) VALUES (null,?,?,?,?)',
          [title ,details,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSQ8A0Mym9TSxkWEZNMdY9KQ8NlGzgZYAo8srMbEBdNWyzIkS97K1A3zh68qb_v9kMlI&usqp=CAU', 1],
          function (tx, res) {
            
            console.log('Nota guardada satisfactoriamente');
            cleanForm()
          },
          error => console.log({error}),
        );
      });
    }
    Keyboard.dismiss();
  };
    
 

  return (
    <View style={styles.wrapper}>
      <Carousel />
      
      <TextInput placeholderTextColor='#b3b5ba' style={styles.input} placeholder="Title"
      onChangeText={value => onChange(value, 'title')}
      value={title}
      />
      
      <TextInput
        style={styles.textArea}
        multiline={true}
        placeholder="Details"
        placeholderTextColor='#b3b5ba'
        onChangeText={value => onChange(value, 'details')}
        value={details}
      />
      <LogButton text='Save' onPress={onSubmit} />
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
