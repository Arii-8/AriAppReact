import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GetStarted from "../../GetStarted/GetStarted";
import { Home } from "../../Home/Home";
import { About } from "../../About/About";

const Tab = createBottomTabNavigator();

export function Navbar({route}) {

  return (
      <Tab.Navigator initialRouteName={'getstarted'}>
        <Tab.Screen
          name={'getstarted'}
          component={GetStarted}
          options={{
            tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("../../../assets/home1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
            ),
          }}
        />
        <Tab.Screen
          name={'home'}
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("../../../assets/book1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
            ),
          }}
        />
        <Tab.Screen
          name={'about'}
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("../../../assets/people1.png")}
                  style={{ width: size, height: size, tintColor: color }}
                />
            ),
          }}
        />
      </Tab.Navigator>
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
