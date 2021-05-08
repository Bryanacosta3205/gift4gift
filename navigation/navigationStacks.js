
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Sales from '../screens/Sales';
import AddArticle from '../screens/AddArticle';
import Profile from '../screens/Profile';
import {Text} from 'react-native';

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </HomeStack.Navigator>
  );
};

 const SalesStack = createStackNavigator();
 export const SalesStackScreen = () => {
  return (
    <SalesStack.Navigator>
      <SalesStack.Screen
        name="sales"
        component={Sales}
        options={{title: 'Sales'}}
      />
    </SalesStack.Navigator>
  );
};

 const ProfileStack = createStackNavigator();
 export const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </ProfileStack.Navigator>
  );
};

const NewArticleStack = createStackNavigator();
export const NewArticleStackScreen = ({navigation}) => {
  return (
    <NewArticleStack.Navigator>
      <NewArticleStack.Screen
        name="newArticle"
        component={AddArticle}
        options={{
          title: 'New Article',
          headerLeft: () => <Text onPress={()=>navigation.goBack()} style={{marginLeft:20,color:'#007cf8'}}>Cancel</Text>,
          headerRight: () => <Text style={{marginRight:20,color:'#007cf8'}}>Post</Text>,
        }}
      />
    </NewArticleStack.Navigator>
  );
};