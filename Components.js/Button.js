import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


export default function Button({label, nav, navigation}) {
  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(`${nav}`)}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = EStyleSheet.create({
    buttonContainer: {
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginLeft: 15
    },
    button: {
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#00FC00',
      backgroundColor:'#00FC00',
    },
    'buttonContainer:first-child': {
        marginLeft: 30
      },
    buttonLabel: {
      color: '#195DF9',
      fontSize: 50,
      fontWeight: '800'
    },
  });