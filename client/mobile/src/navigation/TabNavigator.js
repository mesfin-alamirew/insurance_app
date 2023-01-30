import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import InsuranceScreen from '../screens/InsuranceScreen';
import AppStack from './AppStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ServicesScreen from '../screens/ServicesScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen> */}
      <Tab.Screen
        name="Home"
        options={({ route }) => ({
          tabBarStyle: {
            //display: getTabBarVisibility(route),
            // backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color="teal" size={size} />
          ),
        })}
        component={AppStack}
      ></Tab.Screen>

      <Tab.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color="teal" size={size} />
          ),
        }}
        name="Insurance"
        component={InsuranceScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
