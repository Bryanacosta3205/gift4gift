import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import CommentItem from '../components/CommentItem';

const Comment = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.commentContainer} showsVerticalScrollIndicator={false}>
        <CommentItem username={'Bryan Acosta'} comment='Me interesa'  />
        <CommentItem username={'Bryan Acosta'} comment='¿Sigue disponible?'  />
        
      </ScrollView>
      <View style={{flexDirection:'row',}}>
        {/* <View style={{borderRadius:20,width:30,height:30,backgroundColor:'lightgray',marginRight:5}} >
        </View> */}
        <TextInput
          style={styles.input}
          placeholder={'Escribe un comentario...'}
          placeholderTextColor={'gray'}
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
