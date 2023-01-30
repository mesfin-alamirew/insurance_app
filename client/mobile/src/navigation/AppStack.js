import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import InsuranceScreen from '../screens/InsuranceScreen';
import InsurancesScreen from '../screens/InsurancesScreen';
import ResultScreen from '../screens/ResultScreen';
import QuestionsCmp from '../components/QuestionsComp';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="Services1" component={ServicesScreen} />
        <Stack.Screen name="Insurance" component={InsuranceScreen} />
        <Stack.Screen name="Insurances" component={InsurancesScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
        <Stack.Screen name="Questions" component={QuestionsCmp} />
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
