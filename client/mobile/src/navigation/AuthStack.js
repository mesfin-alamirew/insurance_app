import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { AuthContext } from '../context/authContext';
import AppStack from './AppStack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import TabNavigator from './TabNavigator';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const { isLoading, token } = useContext(AuthContext);
  if (isLoading) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>;
  }

  return (
    <NavigationContainer>
      {token !== null ? (
        <TabNavigator />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AuthStack;
