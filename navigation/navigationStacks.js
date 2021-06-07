
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Sales from '../screens/Sales';
import AddArticle from '../screens/AddArticle';
import Profile from '../screens/Profile';
import {Text, TouchableOpacity} from 'react-native';
import HeaderButton from '../components/Buttons/HeaderButton';

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator  screenOptions={style.headerStyle} >
      <HomeStack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Home',}}
        
      />
    </HomeStack.Navigator>
  );
};

 const SalesStack = createStackNavigator();
 export const SalesStackScreen = () => {
  return (
    <SalesStack.Navigator screenOptions={style.headerStyle}>
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
    <ProfileStack.Navigator screenOptions={style.headerStyle}>
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
    <NewArticleStack.Navigator screenOptions={{
      
      headerTitleStyle:{
        fontSize:16,
        
      }
    }}>
      <NewArticleStack.Screen
        name="newArticle"
        component={AddArticle}
        options={{
          title: 'New product',
          headerLeft: () => <HeaderButton onPress={()=>navigation.goBack()} text='Cancel' /> ,
          
        }}
      />
    </NewArticleStack.Navigator>
  );
};


const style = {
  headerStyle:{
    headerTitleAlign:'left',
    headerTitleStyle:{
      fontSize:24,
      fontWeight:'bold'
    }
  }
}