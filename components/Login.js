import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.logo}>
        <Image source={require('../images/logo.png')} />
      </View>
      <Text style={styles.title}>GIFT 4 GIFT</Text>
      <View>
        {/* <Text>Email</Text> */}
        <TextInput style={styles.input} placeholder="Email" />
        {/* <Text>Password</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('G4G')}>
        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
          Log In
        </Text>
      </TouchableOpacity>

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
  button: {
    backgroundColor: '#0097b9',
    margin: 5,
    width: 80,
    padding: 7,
    borderRadius: 5,
  },

  input: {
    
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#b3b5ba',
    borderRadius: 5,
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
