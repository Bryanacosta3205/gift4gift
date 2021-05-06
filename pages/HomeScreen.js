import React from 'react';
import {ScrollView} from 'react-native';
import Item from '../components/Item';

const HomeScreen = () => {
  return (
    <ScrollView>
      <Item userName={'CoffeTaste'} title={'"From Animals Into Gods"'} />
      <Item userName={'CoffeTaste'} title={'"From Animals Into Gods"'}/>
    </ScrollView>
  );
};

export default HomeScreen;
