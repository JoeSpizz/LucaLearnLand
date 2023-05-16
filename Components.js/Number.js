import {View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import {useEffect} from 'react'

function Number({navigation}) {

  useEffect(()=>{
    const welcome = async ()=>{
      const {sound, status} = await Audio.Sound.createAsync(
        require('../assets/sounds/numberville.mp3')
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
  })

  const pressed = (e)=>{
    navigation.navigate(e)
  }
const goHome= ()=>{
  const goBack = async ()=>{
    const {sound, status} = await Audio.Sound.createAsync(
      require('../assets/sounds/what-else-2.mp3')
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
goBack()
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Numbers</Text>
        <Text style={styles.title2}>Countdown to fun!</Text>


        <View>
        <Text style={styles.button} onPress={()=>{pressed('TracingNum')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/racecar-1.png')} />
            <Text style={styles.buttonText}>Trace</Text>
            </View>
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('IdentifyNum')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/racecar-1.png')} />
          <Text style={styles.buttonText}>Identify</Text>
            </View>
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('Count')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/racecar-1.png')} />
          <Text style={styles.buttonText}>Count</Text>
            </View>
        </Text>
        </View>

        
        <Text style={styles.homeButton} 
        onPress={goHome}
        > Back to the PlayGround</Text>
    </View>
  )
}

export default Number

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
    button:{
      height:85,
      marginTop: 65,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    buttonText:{
      color:'#00FC00',
    textAlign: 'center'},
    truck:{
      height: 60,
      width: 110,
      resizeMethod: 'resize'
    },

    homeButton: {
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