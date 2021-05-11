import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './screens/SignIn';
import Signup from './screens/Signup';
import {
  HomeStackScreen,
  SalesStackScreen,
  ProfileStackScreen,
  NewArticleStackScreen,
} from './navigation/navigationStacks';


const AuthStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const isAuth = true;
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: '#f5f6fc',
          card: 'white',
          text: 'black',
          border: 'white',
        },
      }}>
      {isAuth ? (
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#000000',
            inactiveTintColor: 'gray',

            style: {
              backgroundColor: '#FFFFFF',
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Sales"
            component={SalesStackScreen}
            options={{
              tabBarLabel: 'Sales',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="sale" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="New article"
            component={NewArticleStackScreen}
            options={{
              tabBarLabel: 'New',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="plus-circle"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="signin"
            component={Login}
            options={{title: 'SignIn'}}
          />
          <AuthStack.Screen
            name="signup"
            component={Signup}
            options={{title: 'Create an account'}}
          />
        </AuthStack.Navigator>
      )}

      {/* screenOptions={{headerTitleAlign:'left'}} 
       <Stack.Navigator >
        <Stack.Screen name="signin" component={Login} options={{title:'Signin'}} />
        <Stack.Screen name="G4G"  component={Home} options={{headerLeft:()=>null,title:'GIFT4GIFT'}}  />
        <Stack.Screen name="signup"  component={Signup} options={{title:'Signup',}}  />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
