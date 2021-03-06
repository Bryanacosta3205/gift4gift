import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

const ProfileHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignItems: 'center',}}>
        <Image
          style={{width: 60, height: 60}}
          source={require('../images/profile.png')}
        />
        <Text style={{fontWeight: 'bold', marginTop: 10}}>CoffeTaste</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 200,
          marginLeft: 40,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.stats}>8</Text>
          <Text>Products</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.stats}>37</Text>
          <Text>Exchanges</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.stats}>11</Text>
          <Text>Reviews</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    maxHeight:130,
    backgroundColor: 'white',
  },
  stats: {
    fontWeight: 'bold',
    
  },
});

export default ProfileHeader;
