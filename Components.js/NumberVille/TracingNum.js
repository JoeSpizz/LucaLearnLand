import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect} from 'react'
import {Audio} from 'expo-av'

function TracingNum({navigation}) {
    useEffect(()=>{
        async function welcome() {
          const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/number-trace-2.mp3')
          );
          await sound.playAsync();
        }
        welcome()
      })
const goHome= ()=>{
    navigation.navigate(`Numbers`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Trace the Number</Text>
        <Text style={styles.title2}>Follow along and Learn</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the NumberVille</Text>
    </View>
  )
}

export default TracingNum

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'blue',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#00FC00",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#00FC00",
      fontWeight: 'bold'
    },

    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#5578C8',
        backgroundColor:'#5578C8',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#00FC00',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})