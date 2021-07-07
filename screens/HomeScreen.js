import React, {useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Item from '../components/Item';
import {CREATE_TABLES} from '../SQL/CREATE_TABLES';
const db = SQLite.openDatabase({name: 'mydata'});
const HomeScreen = ({navigation}) => {
  const host = 'http://192.168.0.18:3000';
  const [articles, setArticles] = useState([]);

  useEffect(
    function () {
      navigation.addListener('focus', function () {
        fetch(`${host}/getPosts`)
          .then(resp => resp.json())
          .then(({data}) => setArticles(data))
          .catch(err => console.log(err));
      });
    },
    [navigation,articles],
  );
 


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {articles.map(
        ({id, title, created_at, image_url, username, profilePicture}) => (
          <Item
            key={id}
            id={id}
            userName={username}
            title={title}
            publishedDate={`Published on ${created_at}`}
            imageUrl={image_url}
            profilePicture={profilePicture}
            navigation={navigation}
            setArticles={setArticles}
            onPress={() => navigation.navigate('Home', {screen: 'Comments',params:{id}})}
          />
        ),
      )}
    </ScrollView>
  );
};

export default HomeScreen;
