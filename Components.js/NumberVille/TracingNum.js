import {View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect, useState} from 'react'
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

const [letter, setLetter] = useState('A');
const [filled, setFilled] = useState(0);
const [sound, setSound] = useState();

useEffect(() => {
  if (filled >= 0.95) {
    setFilled(0);
    setLetter(String.fromCharCode(letter.charCodeAt(0) + 1));
    playSound();
  }
}, [filled]);

const playSound = () => {
  setSound(new Sound('tada.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
    }
  }));
  setTimeout(() => {
    sound.play();
  }, 200);
}

const handlePress = (e) => {
  if (e.nativeEvent.size) {
    const x = e.nativeEvent.locationX;
    const y = e.nativeEvent.locationY;
    const width = e.nativeEvent.size.width;
    const height = e.nativeEvent.size.height;
    
    const area = width * height;
    const filledArea = x * y;
    setFilled(filledArea / area);
    
    const newColor = `rgb(${Math.floor(255*filled)}, 0, 0)`;
    setStyle({backgroundColor: newColor});
  }
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Trace the Number</Text>
        <Text style={styles.title2}>Follow along and Learn</Text>
        
        <View style={styles.gameContainer}>
      <TouchableOpacity 
        style={[styles.letter, {backgroundColor: `#${Math.floor(255*filled).toString(16)}`}]}
        onPress={handlePress}>
        <Text style={styles.text}>{letter}</Text>
      </TouchableOpacity>
    </View>


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
      },
      gameContainer: {
        flex: 1, 
        backgroundColor: 'gray',
        alignItems: 'center', 
        justifyContent: 'center'
      },
      letter: {
        width: '80%', 
        height: '80%', 
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center', 
        justifyContent: 'center'
      },
      text: {
        fontSize: 400, 
        color: 'black'
      }
})