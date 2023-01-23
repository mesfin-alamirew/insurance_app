import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import InsuranceScreen from './src/screens/InsuranceScreen';
import ServicesScreen from './src/screens/ServicesScreen';

import { NavigationContainer } from '@react-navigation/native';
import InsurancesScreen from './src/screens/InsurancesScreen';

import QuestionsCmp from './src/components/QuestionsComp';
import ResultScreen from './src/screens/ResultScreen';
import LoginScreen from './src/screens/LoginScreen';

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Services" component={ServicesScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Insurance" component={InsuranceScreen} />
        <Stack.Screen name="Insurances" component={InsurancesScreen} />
        <Stack.Screen name="Questions" component={QuestionsCmp} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
