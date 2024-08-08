import React from 'react'
import {HomePage, ProfilePage} from "../screens/ex"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const UserStack = () => {
  <Stack.Navigator
  initialRouteName='Home'
  screenOptions={{headerShown:false}}>

    <Stack.Screen name='Home' component={HomePage}/>
    <Stack.Screenn name="Profile" component={ProfilePage}/>

  </Stack.Navigator>
  
}

export default UserStack;

