
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Alphabet from './Components.js/Alphabet';
import Title from './Components.js/Title';
import Number from './Components.js/Number';
import Color from './Components.js/Color';
import Animal from './Components.js/Animal';
import Tracing from './Components.js/AlphabetLand/Tracing'
import IdentifyLet from './Components.js/AlphabetLand/IdentifyLet'
import IdentifyNum from './Components.js/NumberVille/IdentifyNum'
import Cases from './Components.js/AlphabetLand/Cases'
import Count from './Components.js/NumberVille/Count'
import TracingNum from './Components.js/NumberVille/TracingNum'
import AnimalPictures from './Components.js/AnimalIsland/AnimalPictures'
import AnimalSounds from './Components.js/AnimalIsland/AnimalSounds'
import LearnAnimals from './Components.js/AnimalIsland/LearnAnimals'



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
 
    <NavigationContainer >
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Title} />
      <Stack.Screen name="Letters" component={Alphabet} />
      <Stack.Screen name="Numbers" component={Number} />
      <Stack.Screen name="Colors" component={Color} />
      <Stack.Screen name="Animals" component={Animal} />
      <Stack.Screen name="Tracing" component={Tracing} />
      <Stack.Screen name="IdentifyLet" component={IdentifyLet} />
      <Stack.Screen name="Cases" component={Cases} />
      <Stack.Screen name="IdentifyNum" component={IdentifyNum} />
      <Stack.Screen name="Count" component={Count} />
      <Stack.Screen name="TracingNum" component={TracingNum} />
      <Stack.Screen name="AnimalPictures" component={AnimalPictures} />
      <Stack.Screen name="AnimalSounds" component={AnimalSounds} />
      <Stack.Screen name="LearnAnimals" component={LearnAnimals} />
    </Stack.Navigator>
    
  </NavigationContainer>

  );
}
EStyleSheet.build({
 
})
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
  },
});
