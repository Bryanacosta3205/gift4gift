import React from 'react';
import {ScrollView, View} from 'react-native';
import Item from '../components/Item';
import ProfileHeader from '../components/ProfileHeader';
const Profile = () => {
  return (
    <View style={{ height:'100%',   }}>
      <View style={{ height:130}}>
        <ProfileHeader />
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Item
          userName={'CoffeTaste'}
          title={'"From Animals Into Gods"'}
          publishedDate={'Published on April 26,2021'}
        />
        <Item
          userName={'CoffeTaste'}
          title={'"From Animals Into Gods"'}
          publishedDate={'Published on April 26,2021'}
        />
        <Item
          userName={'CoffeTaste'}
          title={'"From Animals Into Gods"'}
          publishedDate={'Published on April 26,2021'}
        />
        <Item
          userName={'CoffeTaste'}
          title={'"From Animals Into Gods"'}
          publishedDate={'Published on April 26,2021'}
        />
       
      </ScrollView>
    </View>
  );
};

export default Profile;
