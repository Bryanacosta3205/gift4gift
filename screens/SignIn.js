import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import LogButton from '../components/Buttons/LogButton';
import InputForm from '../components/TextFields/InputForm';

const Login = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Image source={require('../images/logo.png')} />
      </View>

      <Text style={styles.title}>{'Gift 4 Gift'}</Text>

      <View style={styles.inputWrapper}>
        <InputForm placeholder="Email" />
        <InputForm placeholder="Password" isPassword={true} />
      </View>

      <LogButton text="Login" onPress={()=>navigation.navigate('G4G')} />

      <Text
        style={{color: '#2978B5', marginTop: 10}}
        onPress={() => navigation.navigate('signup')}>
        Haven't an account yet? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },

  inputWrapper: {
    alignItems: 'center',
    width: '75%',
    paddingLeft:30,
    paddingRight:30,
    borderRadius:10
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84d6e0',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold', margin: 10, fontSize: 24,
    
  },
});

export default Login;
