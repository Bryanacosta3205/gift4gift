import React,{useState,useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Item from '../components/Item';
import ProfileHeader from '../components/ProfileHeader';
const Profile = ({navigation}) => {

  const host = 'http://192.168.0.18:3000';
  const [articles, setArticles] = useState([]);

  useEffect(
    function () {
      navigation.addListener('focus', function () {
        
        fetch(`${host}/getOWnPosts/1`)
        .then(resp => resp.json())
        .then(({data})=>{
          setArticles(data)
          console.log(data)
        })
        .catch(err=>console.log(err))
      });
    },
    [navigation,articles],
  );


  

  return (
    <View style={{ height:'100%',   }}>
      <View style={{ height:130}}>
        <ProfileHeader />
        </View>
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
    </View>
  );
};

export default Profile;
