import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = () => {
    return (
        <View style={styles.wrapper}>
            <View>
              <View style={styles.header}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image style={{width:20,height:20,marginRight:5}} source={require('../images/profile.png')} />
                <Text>CoffeTaste</Text>
                </View>
                <Text>•••</Text>
              </View>
              <Text style={{margin:5,color:'#1597BB',fontWeight:'bold'}}>“From Animals Into Gods”</Text>
              <Image source={require('../images/book.png')} />
              <View style={{flexDirection:'row',alignItems:'center',marginTop:5,justifyContent:'space-between'}}>
              <MaterialCommunityIcons  name="heart" size={20} color={'red'} />
              
              <Text style={styles.published}>Published on April 26,2021</Text>
              </View>
              <Text style={styles.reactions} >Bryan and 307 others are interested</Text>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'center',
      marginBottom:30,
      marginTop:20
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom:10
    },
    published: {
      
      fontSize: 11,
      
    },
    reactions:{
        marginTop:5,
        marginBottom:5
    }
  });

export default Item;
