import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer  documentTitle theme={{colors:{background:"white",card:"white",text:"black",border:'white'}}}>
      {/* screenOptions={{headerTitleAlign:'left'}}  */}
      <Stack.Navigator >
        <Stack.Screen name="signin" component={Login} options={{title:'Signin'}} />
        <Stack.Screen name="G4G"  component={Home} options={{headerLeft:()=>null,title:'G4G'}}  />
        <Stack.Screen name="signup"  component={Signup} options={{title:'Signup',headerLeft:()=>null}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;