import React from 'react'

import {StyleSheet, Text, View, Image} from 'react-native';


 const SaleItem = () => {
    return (
        <View style={styles.wrapper}>
        <Text style={{marginBottom: 10, color: '#1597BB', fontWeight: 'bold'}}>
          Assassin's Creed II
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center',marginBottom: 10}}>
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../images/profile.png')}
          />
          <Text>CoffeTaste</Text>
        </View>
        <View>
            <Text style={{marginBottom: 10}} >Offers: <Text style={{color:'#1597BB',fontWeight:'bold'}}>Raw VS SmackDown 2011</Text></Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
            <Text style={{color:'#206A5D',fontWeight:'bold'}}>Accept</Text>
            <Text style={{color:'#810000',fontWeight:'bold'}}>Reject</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
      marginBottom:40
    },
  });

export default SaleItem;