import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import InsuranceScreen from '../screens/InsuranceScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Insurance" component={InsuranceScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
