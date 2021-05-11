import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Carousel = () => {
  const [tempURI, setTempURI] = useState([]);

  const handleSelectImages = () => {
    launchImageLibrary({mediaType: 'photo', quality: 0.5}, resp => {
      if (resp.didCancel) return;
      if (!resp.uri) return;
      console.log(resp.uri);
      setTempURI([...tempURI, resp.uri]);
    });
  };

  const handleRemoveItem = uri => {
    setTempURI(old => old.filter(item => item !== uri));
  };

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={tempURI.length ?{height: 145,}:{width:'100%'}}
      style={styles.carousel}>
      {tempURI.length > 0 &&
        tempURI.map(uri => (
          <View>
            <Image key={uri} style={styles.image} source={{uri: uri}} />
            <TouchableOpacity onPress={()=>handleRemoveItem(uri)} style={styles.close} >
          <MaterialCommunityIcons name="close-circle" size={20} color={'white'}  />
            </TouchableOpacity>
          </View>
        ))}
      {
        (tempURI.length < 5)&&(
          <TouchableOpacity
        style={
          tempURI.length > 0
            ? {...styles.imagePicker, width: 100}
            : styles.imagePicker
        }
        onPress={handleSelectImages}>
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
        <MaterialCommunityIcons name="image-multiple-outline" size={16} color='#b3b5ba'   />
        <Text style={styles.text}>
          Select images</Text>
        </View>
      </TouchableOpacity>
        )
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {marginRight: 10, borderRadius: 5, height: '100%', width: 100},
  text: {color: '#b3b5ba',marginLeft:5},
  carousel: {maxHeight: 150, flex: 1, flexDirection: 'row'},
  imagePicker: {
    borderRadius: 5,
    height: 145,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#b3b5ba',
    width: '100%',
    alignItems: 'center',
    marginBottom: 5,
  },
  close: {
    margin: 5,
    position: "absolute",
    top: 0,
    right: 10,
    
    
  }
});

export default Carousel;
