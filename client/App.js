import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import InsuranceScreen from './src/screens/InsuranceScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import InsurancesScreen from './src/screens/InsurancesScreen';
import QuestionsScreen from './src/screens/QuestionsScreen';
import QuestionsCmp from './src/components/QuestionsComp';
import ResultScreen from './src/screens/ResultScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Insurance: InsuranceScreen,
    Insurances: InsurancesScreen,
    Questions: QuestionsCmp,
    Results: ResultScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Insurance Search',
    },
  }
);

export default createAppContainer(navigator);
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Services" component={ServicesScreen} />
//         <Stack.Screen name="Insurance" component={InsuranceScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
