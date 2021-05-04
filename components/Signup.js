import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{fontWeight: 'bold', margin: 10, fontSize: 16}}>
        Create an account
      </Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={{backgroundColor:'#0097b9', margin: 5,width:80,padding:7,borderRadius:5}}>
          <Text style={{textAlign:'center',color:'white',fontWeight:'bold'}}>Signup</Text>
      </TouchableOpacity>

      <Text
        style={{color: '#2978B5', marginTop: 10}}
        onPress={() => navigation.navigate('signin')}>
        Haven't an account yet? Sign up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#b3b5ba',
    borderRadius: 5,
  },
});

export default Signup;
