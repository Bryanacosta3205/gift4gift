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

      <Text style={styles.title}>GIFT 4 GIFT</Text>

      <View style={styles.inputWrapper}>
        <InputForm placeholder="Email" />
        <InputForm placeholder="Password" isPassword={true} />
      </View>

      <LogButton text="Login" navigation={navigation} />

      <Text
        style={{color: '#2978B5', marginTop: 10}}
        onPress={() => navigation.navigate('signup')}>
        Haven't an account yet? Sign up
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
  },

  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#84d6e0',
    width: 150,
    height: 150,
    borderRadius: 100,
    marginTop: 50,
  },
  title: {
    margin: 25,
  },
});

export default Login;
