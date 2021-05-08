import React from 'react';
import {ScrollView} from 'react-native';
import Item from '../components/Item';
import ProfileHeader from '../components/ProfileHeader';
const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <ScrollView>
        <Item
          userName={'CoffeTaste'}
          title={'"From Animals Into Gods"'}
          publishedDate={'Published on April 26,2021'}
        />
      </ScrollView>
    </>
  );
};

export default Profile;
