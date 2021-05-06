import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddArticle from '../pages/AddArticle';
import Profile from '../pages/Profile';
import Sales from '../pages/Sales';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: 'gray',

        style: {
          backgroundColor: '#FFFFFF',
          borderColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sales"
        component={Sales}
        options={{
          tabBarLabel: 'Sales',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="sale" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="New article"
        component={AddArticle}
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
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
