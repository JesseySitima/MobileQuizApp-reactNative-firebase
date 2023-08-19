import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import QuizApp from './src';
import Playground from './src/Playground';
import Test from './src/Test'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='QuizApp' component={QuizApp}/>
        <Stack.Screen name='Playground' component={Playground}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
}