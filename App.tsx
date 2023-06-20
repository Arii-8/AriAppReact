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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// mengimport halaman
import { GetStarted } from './src/GetStarted/GetStarted';
import { Login } from './src/Login/Login';
import { Register } from './src/Register/Register';
import { Home } from './src/Home/Home';
import { About } from './src/About/About';

// Deklarasi Stack untuk navigasi antar halaman
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// export fungsi utama menampilkan app
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}