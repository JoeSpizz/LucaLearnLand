import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Components.js/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Luca's Play</Text>
      <Text style={styles.smallText}>(and Learn)</Text>
      <Text style={styles.text}>Ground</Text>
      <Button label="ABC..."/>
      <Button label = "123..."/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11D011',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  text:{
    color: 'red',
    fontSize: 50,
    fontWeight: "bold",
  },
  smallText:{
    fontSize: 20,
    color: 'blue',
    marginTop: -10,
    marginBottom: -15
  }
});
