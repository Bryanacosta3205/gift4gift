import React from 'react';
import {ScrollView} from 'react-native';
import Item from '../components/Item';

const HomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} >
      <Item userName={'CoffeTaste'} title={'"From Animals Into Gods"'} publishedDate={'Published on April 26,2021'} />
      <Item userName={'CoffeTaste'} title={'"From Animals Into Gods"'} publishedDate={'Published on April 26,2021'} />
    </ScrollView>
  );
};

export default HomeScreen;
