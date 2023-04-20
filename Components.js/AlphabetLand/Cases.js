import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect } from 'react';
import {Audio} from 'expo-av'

function Cases({navigation}) {
  useEffect(()=>{
    async function welcome() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/letter-case-2.mp3')
      );
      await sound.playAsync();
    }
    welcome()
  })
const goHome= ()=>{
    navigation.navigate(`Letters`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Upper vs Lower Case</Text>
        <Text style={styles.title2}>A pairing game</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the Alphabet Land</Text>
    </View>
  )
}

export default Cases

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'red',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#FFFF00",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#FFFF00",
      fontWeight: 'bold'
    },

    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#A50000',
        backgroundColor:'#A50000',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFF00',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})