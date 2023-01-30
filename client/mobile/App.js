import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import InsuranceScreen from './src/screens/InsuranceScreen';
import ServicesScreen from './src/screens/ServicesScreen';

import { NavigationContainer } from '@react-navigation/native';
import InsurancesScreen from './src/screens/InsurancesScreen';

import QuestionsCmp from './src/components/QuestionsComp';
import ResultScreen from './src/screens/ResultScreen';
import LoginScreen from './src/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext, AuthProvider } from './src/context/authContext';
import AuthStack from './src/navigation/AuthStack';
// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Login: LoginScreen,
//     Insurance: InsuranceScreen,
//     Insurances: InsurancesScreen,
//     Questions: QuestionsCmp,
//     Results: ResultScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: 'Insurance Search',
//     },
//   }
// );

// export default createAppContainer(navigator);
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
