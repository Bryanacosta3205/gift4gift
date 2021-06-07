import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Item from '../components/Item';
import {CREATE_TABLES} from '../SQL/CREATE_TABLES';
const db = SQLite.openDatabase({name: 'mydata'});
const HomeScreen = ({navigation}) => {

  const [articles, setArticles] = useState([]);

  useEffect(function () {
    db.transaction(function (t) {
      t.executeSql(
        CREATE_TABLES.user,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      t.executeSql(
        CREATE_TABLES.comment,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      t.executeSql(
        CREATE_TABLES.article,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      t.executeSql(
        CREATE_TABLES.offer,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      t.executeSql(
        CREATE_TABLES.offerArticle,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      t.executeSql(
        CREATE_TABLES.artcicleOffer,
        [],
        () => console.log('CREATED TABLES'),
        error => console.log({error}),
      );
      // db.transaction(function (t) {
      //   t.executeSql(
      //     'INSERT INTO User (id, username, phone, pass, image_url) VALUES (null,?,?,?,?)',
      //     ['Bryan Acosta' ,'3123345641','password','https://avatars.githubusercontent.com/u/32991810?s=60&v=4'],
      //     function (tx, res) {
            
      //       console.log('Nota guardada satisfactoriamente');
            
      //     },
      //     error => console.log({error}),
      //   );
      // });
    });
  }, []);

  useEffect(function() {
    navigation.addListener('focus', function() {
        
      db.transaction(function(t) {
        
            t.executeSql(`SELECT User.username, Article.id, title, created_at, Article.image_url, User.image_url as profilePicture  FROM Article
            left join User on User.id = Article.id_user
            `,[], function(tx, res) {
                let data = [];
                for (let i = 0; i < res.rows.length; i++) {
                    data.push(res.rows.item(i));
                }
                setArticles(data);
            }, (error) => { console.log({ error }) });
        });
    })
  }, [navigation]);

  console.log(articles)

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {
        articles.map(({id,title,created_at,image_url, username,profilePicture})=>(
          <Item
        key={id}
        id={id}
        userName={username}
        title={title}
        publishedDate={`Published on ${created_at}`}
        imageUrl={image_url}
        profilePicture={profilePicture}
      />
        ))
      }
      
      
    </ScrollView>
  );
};

export default HomeScreen;
