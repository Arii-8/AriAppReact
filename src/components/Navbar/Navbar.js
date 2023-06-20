import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import { GetStarted } from "../../GetStarted/GetStarted";
import { Home } from "../../Home/Home";
import { About } from "../../About/About";

const Tab = createBottomTabNavigator();

// Screens names
const GetStartedName = 'GetStarted';
const HomeName = 'Home';
const AboutName = 'About';

export function Navbar() {
  const navigation = useNavigation();

  function handlePressGetStarted() {
    navigation.navigate(GetStartedName); // Pindah ke halaman GetStarted
  }

  function handlePressHome() {
    navigation.navigate(HomeName); // Pindah ke halaman Home
  }

  function handlePressAbout() {
    navigation.navigate(AboutName); // Pindah ke halaman About
  }

  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName={GetStartedName}>
        <Tab.Screen
          name={GetStartedName}
          component={GetStarted}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity onPress={handlePressGetStarted}>
                <Image
                  source={require("../../../assets/home1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={HomeName}
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity onPress={handlePressHome}>
                <Image
                  source={require("../../../assets/book1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={AboutName}
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => (
              <TouchableOpacity onPress={handlePressAbout}>
                <Image
                  source={require("../../../assets/people1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingBottom: 10,
    paddingVertical: 10,
    height: 50,
  },
});
