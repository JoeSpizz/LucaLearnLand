import {View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect } from 'react';
import {Audio} from 'expo-av'

function Alphabet({navigation}) {
  useEffect(()=>{
    const welcome = async()=>{
    const {sound, status}= await Audio.Sound.createAsync(
      require('../assets/sounds/alphabetintro.mp3')
    )
    await sound.playAsync()
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  
    // Use the 'status' object to check if the audio is already finished
    if (status && status.didJustFinish) {
      sound.unloadAsync();
    }
    }
    welcome()
  },[])
  const pressed = (e)=>{
    navigation.navigate(e)
  }
const goHome= ()=>{
  const goBack = async ()=>{
      const {sound, status} = await Audio.Sound.createAsync(
        require('../assets/sounds/what-else.mp3')
      )
      await sound.playAsync()
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
  }
  goBack()
    navigation.navigate(`Home`)
}
  return (
  <View style={styles.container}>
        <Text style={styles.title}>Alphabet Land</Text>
        <Text style={styles.title2}>Let's Learn Our Letters!</Text>
  <View>
    <Text style={styles.button} onPress={()=>{pressed('Tracing')}}>
      <View style={styles.buttonContainer}>
        <Image style={styles.truck} source={require('../assets/trucks/truck-7.png')} />
        <Text style={styles.buttonText}>Trace</Text>
      </View>
    </Text>
    <Text style={styles.button} onPress={()=>{pressed('IdentifyLet')}}>
      <View style={styles.buttonContainer}>
        <Image style={styles.truck} source={require('../assets/trucks/truck-7.png')} />
        <Text style={styles.buttonText}>Identify</Text>
      </View>
    </Text>
    <Text style={styles.button} onPress={()=>{pressed('Cases')}}>
      <View style={styles.buttonContainer}>
        <Image style={styles.truck} source={require('../assets/trucks/truck-7.png')} />
        <Text style={styles.buttonText}>Upper vs Lower</Text>
      </View>
    </Text>
  </View>

    <Text style={styles.homeButton} 
        onPress={goHome}
        > Back to the PlayGround
    </Text>
  </View>
  )
}

export default Alphabet

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'red',
      height: '100%',
      
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
    buttonContainer:{
      flexDirection: 'column',
      alignItems: 'center',
    },
    button:{
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    },
    buttonText:{
      color: "#FFFF00"
    },
    truck:{
      height: 70,
      width: 110,
      resizeMethod: 'resize'
    },

    homeButton: {
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