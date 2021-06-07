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
      //     'INSERT INTO Article (id, title, details, image_url, id_user) VALUES (null,?,?,?,?)',
      //     ['Assassins Creed II PC' ,'2nd game of assassins creed series','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSQ8A0Mym9TSxkWEZNMdY9KQ8NlGzgZYAo8srMbEBdNWyzIkS97K1A3zh68qb_v9kMlI&usqp=CAU', 2],
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
        
            t.executeSql("SELECT * FROM Article",[], function(tx, res) {
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
        articles.map(({id,title,created_at,image_url})=>(
          <Item
        key={id}
        id={id}
        userName={'CoffeTaste'}
        title={title}
        publishedDate={`Published on ${created_at}`}
          imageUrl={image_url}
      />
        ))
      }
      
      
    </ScrollView>
  );
};

export default HomeScreen;
