import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './components/Home';
import Signup from './pages/Signup';

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