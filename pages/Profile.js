import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import Item from '../components/Item';
const Profile = () => {
  return (
    
     <>
      <View style={styles.headerWrapper}>
        <View style={{alignItems:'center'}}>
          <Image style={{width:70,height:70}} source={require('../images/profile.png')} />
          <Text>CoffeTaste</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:200,marginLeft:40}}>
          <View style={{alignItems:'center'}}>
          <Text>8</Text>
          <Text>Articles</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Text>37</Text>
          <Text>Exchanges</Text>
          </View>
          <View style={{alignItems:'center'}}>
          <Text>11</Text>
          <Text>Reviews</Text>
          </View>
        </View>
      </View>
      <ScrollView>
      <Item/>
    </ScrollView>
     </>
  );
};

const styles = StyleSheet.create({
    headerWrapper:{
        flex:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:20
    }
});

export default Profile;
