import React from 'react';

import {StyleSheet, Text, View, Image} from 'react-native';

const SaleItem = ({userName, titleWanted, offered}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{ titleWanted }</Text>
      <View style={styles.header}>
        <Image
          style={styles.headerImage}
          source={require('../images/profile.png')}
        />
        <Text>{ userName }</Text>
      </View>
      <View>
        <Text style={{marginBottom: 10}}>
          Offers: <Text style={styles.title}> {offered} </Text>
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={{color: '#206A5D', fontWeight: 'bold'}}>Accept</Text>
        <Text style={{color: '#810000', fontWeight: 'bold'}}>Reject</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  header: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
  headerImage: {width: 20, height: 20, marginRight: 5},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
    color: '#1597BB',
    fontWeight: 'bold',
  },
});

export default SaleItem;
