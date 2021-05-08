import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
} from 'react-native';
import LogButton from '../components/Buttons/LogButton';
import InputForm from '../components/TextFields/InputForm';

const Signup = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={{fontWeight: 'bold', margin: 10, fontSize: 24}}>
        Create an account
      </Text>

      <InputForm placeholder="Username" />
      <InputForm placeholder="Email" />
      <InputForm placeholder="Phone" />
      <InputForm placeholder="Password" isPassword={true} />
      <InputForm placeholder="Confirm password" isPassword={true} />

      <LogButton text="Signup" onPress={()=>navigation.navigate('G4G')} />

      <Text
        style={{color: '#2978B5', marginTop: 10}}
        onPress={() => navigation.goBack()}>
        Already have an account? Sign In
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
  
});

export default Signup;
