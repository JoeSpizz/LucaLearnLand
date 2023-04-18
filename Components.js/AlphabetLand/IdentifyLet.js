import {View, Text, Animated, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useRef, useEffect, useState} from 'react';

function Tracing({navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(-50)).current;
    const [key, setKey]= useState(0)

useEffect(()=>{
    const focusHandler = navigation.addListener('focus', () => {
        Animated.parallel([
            Animated.timing(transX, {
              toValue: 0,
              duration: 2075,
              useNativeDriver: true,
            }),
            Animated.timing(transY, {
              toValue: (0),
              duration: 2075,
              useNativeDriver: true,
            }),]).start()
})
return focusHandler;
}, [navigation, key]);

const help = ()=>{
    setKey(key+1)
}

let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));



const goHome= ()=>{
    navigation.navigate(`Letters`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>What Letter is This?</Text>
        <Text style={styles.title2}>The future home of the identify game</Text>
        <Animated.View style={[{
       transform: [{ translateX: transX}, {translateY: transY},]
      },styles.guessBox]}>
           <Text style={styles.letter}>
            {letter}
            </Text>
            <Text style={styles.identifier} onPress={help}>
            <Image style={styles.truck} source={require('../../assets/trucks/truck6.png')} />
        </Text>
        </Animated.View>
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
      },
      guessBox:{ 
        position: 'absolute',
        bottom: 150,
        left: 100
        },
      identifier:{
          textAlign: "center",
          height: 200,
      },    
      letter:{
          color: '#FFFF00',
          fontWeight: 'bold',
          fontSize: '3.5rem', 
          position: 'absolute',
          top: 18,
          left: 33
      },
      truck:{
        height: 130,
        width: 200,
        // resizeMethod: 'cover',
      },
})