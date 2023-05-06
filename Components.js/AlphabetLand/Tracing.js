import {View, Text, PanResponder, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect, useRef} from 'react'
import {Audio} from 'expo-av'
import Drag from './Drag'


function Tracing({navigation}) {

  
    useEffect(()=>{
        async function welcome() {
          const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/letter-trace-1.mp3')
          );
          await sound.playAsync();
        }
        welcome()
      })
  
      
      const pan = useRef(new Animated.ValueXY()).current;

      const panResponder = useRef(
        PanResponder.create({
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
        })
      ).current;
    


const goHome= ()=>{
    navigation.navigate(`Letters`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tracings</Text>
        <Text style={styles.title2}>The future home of the tracing game</Text>

        

   <Drag />
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the Alphabet Land</Text>
    </View>
  )
}

export default Tracing

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
    boxContainer:{
      flex: 1,
    },
    draggable: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'blue',
    },
    trail: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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