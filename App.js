
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Alphabet from './Components.js/Alphabet';
import Title from './Components.js/Title';
import Number from './Components.js/Number';
import Color from './Components.js/Color';
import Animal from './Components.js/Animal';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Title} />
      <Stack.Screen name="Letters" component={Alphabet} />
      <Stack.Screen name="Numbers" component={Number} />
      <Stack.Screen name="Colors" component={Color} />
      <Stack.Screen name="Animals" component={Animal} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
EStyleSheet.build({
 
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    paddingTop: 30,
  },
  title:{
    marginLeft:20
  }
});
