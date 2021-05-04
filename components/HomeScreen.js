import React from 'react';
import { ScrollView } from 'react-native';
import Item from './Item';

const HomeScreen = () => {
    return (
        <ScrollView>
          <Item/>
          <Item/>
        
        </ScrollView>
      );
}



export default HomeScreen;