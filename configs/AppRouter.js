/* 
* import berbagai macam library yang dibutuhkan di component Royter untuk navigasi antar halaman
*/
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* 
* mengimport anta component halaman untuk navigasi berpindah antar halaman
*/
import { Login } from "../src/Login/Login";
import { Register } from "../src/Register/Register";
import { Home } from "../src/Home/Home";
import { About } from "../src/About/About";

// Deklarasi Stack untuk navigasi antar halaman
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// fungsi Lobby sebagai pusat bottom navbar
const Lobby = () => {
    return(
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    )
}

// Router navigasi antar halaman
export default function AppRouter(){
    return(
      <Stack.Navigator initialRouteName='Lobby'>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}} />
        <Stack.Screen name='Lobby' component={Lobby} options={{headerShown: false}} />
      </Stack.Navigator>
    )
}