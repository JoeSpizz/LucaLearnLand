import {View, Text, Animated, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useRef, useEffect, useState} from 'react';

function Tracing({navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(0)).current;
    const [key, setKey]= useState(0)
    const [myImage, setMyImage]= useState(require('../../assets/racers/racer2.png'))

useEffect(()=>{
    Animated.sequence([
        Animated.timing(transX, {
            toValue: -300,
            duration: .1,
            useNativeDriver: true,
          }),
          Animated.timing(transX, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          })
    ]).start()
    
           

}, [key]);

let letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
let letter2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
let letter3 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
let letter4 = String.fromCharCode(65 + Math.floor(Math.random() * 26));

const guess = (guess)=>{
if (guess === letter){
    reload()
}
else{
    alert("no")
}}

const reload = ()=>{
    setMyImage(require('../../assets/racers/racerthumbsup.png'))
    Animated.timing(transX, {
        toValue: 350,
        duration: 500,
        useNativeDriver: true,
      }).start(()=> {
        setMyImage(require('../../assets/racers/racer2.png'))  
        setKey(key+1)})
   
}

const goHome= ()=>{
    navigation.navigate(`Letters`)
}

  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>What Letter is This?</Text>
        <Text style={styles.title2}>The future home of the identify game</Text>
    <View style={styles.racerGrid}>
        <TouchableWithoutFeedback onPress={()=>guess(letter)}>
            <View>
            <Image style={styles.racer} source={myImage}/>
            <Text style={styles.racerLetter}> {letter}</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>guess(letter2)}>
            <View>
            <Image style={styles.racer} source={myImage}/>
            <Text style={styles.racerLetter}> {letter2}</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
        <View style={styles.racerGrid}>
        <TouchableWithoutFeedback onPress={()=>guess(letter3)}>
            <View>
            <Image style={styles.racer} source={myImage}/>
            <Text style={styles.racerLetter}> {letter3}</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>guess(letter4)}>
            <View>
            <Image style={styles.racer} source={myImage}/>
            <Text style={styles.racerLetter}> {letter4}</Text>
            </View>
        </TouchableWithoutFeedback>
        </View>

        




        <Animated.View style={[{
       transform: [{ translateX: transX}, {translateY: transY},]
      },styles.guessBox]}>
           <Text style={styles.letter}>
           {letter}
            </Text>
            <Text style={styles.identifier} onPress={reload}>
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
    racerGrid:{
        flexDirection: "row"
    },
    racer:{
        height: 200,
        width: 200,
        resizeMode: 'contain'
    },
    racerLetter:{
        fontSize: "2rem",
        fontWeight: "bold",
        position: 'absolute',
        left: 75,
        top: 60,
        color: "#FFFF00"
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
        bottom: 100,
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
          top: 13,
          left: 33
      },
      truck:{
        height: 130,
        width: 200,
        // resizeMethod: 'cover',
      },
})