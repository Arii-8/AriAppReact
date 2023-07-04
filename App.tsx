/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// mengimport halaman
import GetStarted  from './src/GetStarted/GetStarted';
import { Login } from './src/Login/Login';
import { Register } from './src/Register/Register';
import {Navbar} from './src/components/Navbar/Navbar'

// Deklarasi Stack untuk navigasi antar halaman
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export fungsi utama menampilkan app
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={Navbar} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}