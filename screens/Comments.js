import React, {useEffect, useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import CommentItem from '../components/CommentItem';
import { useForm } from '../hooks/useForm';

const Comment = ({navigation, route: {params}}) => {
  const host = 'http://192.168.0.18:3000';
  const {id} = params;

  const [comments, setComments] = useState([]);
  

  const {comment, onChange, cleanForm} = useForm({
    comment: '',
  });

  const onSubmit = ()=>{
    
    if(comment){
      fetch(`${host}/newComment`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content:comment,
          id_userBelongs:1,
          id_article:id
        }),
      })
        .then(resp => {
          cleanForm()
          fetch(`${host}/getComments/${id}`)
          .then(resp => resp.json())
          .then(({data}) => setComments(data))
          .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
    
    Keyboard.dismiss();
  }

  useEffect(
    function () {
      navigation.addListener('focus', function () {
        fetch(`${host}/getComments/${id}`)
          .then(resp => resp.json())
          .then(({data}) => setComments(data))
          .catch(err => console.log(err));
      });
    },
    [navigation],
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.commentContainer}
        showsVerticalScrollIndicator={false}>
        {comments.map(({id, username, content}) => (
          <CommentItem key={id}  username={username} comment={content} />
        ))}
      </ScrollView>
      <View style={{flexDirection: 'row'}}>
        
        <TextInput
          style={styles.input}
          placeholder={'Escribe un comentario...'}
          placeholderTextColor={'gray'}
          onChangeText={value => onChange(value, 'comment')}
          value={comment}
          onSubmitEditing={onSubmit}
        />
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 30,
    flexGrow: 1,
  },
  commentContainer: {
    flexGrow: 2,
    marginBottom: 20,
  },
  input: {
    justifyContent: 'flex-end',
    position: 'absolute',
    // backgroundColor:'blue'
  },
});
