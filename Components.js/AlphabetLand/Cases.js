import {View, Text, PanResponder, Animated, Vibration } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useState } from 'react';
import {Audio} from 'expo-av'

function Cases({navigation}) {
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const getRandomLetter = () => {
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
  };
  const getMatchingLowercaseLetter = (letter) => {
    return letter.toLowerCase();
  };
  const [uppercaseLetter, setUppercaseLetter] = useState(getRandomLetter());
  const [lowercaseLetters, setLowercaseLetters] = useState([
    getMatchingLowercaseLetter(uppercaseLetter),
    getRandomLetter().toLowerCase(),
    getRandomLetter().toLowerCase(),
  ]);
  const [test, setTest] = useState()
  const [key, setKey] = useState(0)
  const [pan, setPan] = useState({ x: new Animated.Value(0), y: new Animated.Value(0) });
  const [lastPanPosition, setLastPanPosition] = useState({ x: 0, y: 0 });

  // shuffles array so lowercase letters are random
 useEffect(()=>{
   const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const shuffledArray = shuffleArray(lowercaseLetters);
  setTest(shuffledArray)
  },[uppercaseLetter])

  useEffect(()=>{
    if(key===0){
    async function welcome() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/letter-case-2.mp3')
      );
      await sound.playAsync();
    }
    welcome()}
  },[])


  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      pan.x.setValue(lastPanPosition.x + gestureState.dx);
      pan.y.setValue(lastPanPosition.y + gestureState.dy);
      setLastPanPosition({ x: lastPanPosition.x + gestureState.dx, y: lastPanPosition.y + gestureState.dy });

    },
    onPanResponderRelease: (evt, gestureState) => {
     
      //defines position and size of uppercase letter block
      const upperLetterPosition = {
        x: lastPanPosition.x + gestureState.dx,
        y: lastPanPosition.y + gestureState.dy,
      };
      const upperLetterDimensions = {
        width: 65,
        height: 100,
      };
      const upperLetterRect = {
        x: upperLetterPosition.x,
        y: upperLetterPosition.y,
        width: upperLetterDimensions.width,
        height: upperLetterDimensions.height,
      };
    
      //  defines lowercase letter locations and sizes
      const lowercaseLetterRects = [{
        x: -120,
        y: 420,
        width: 25,
        height: 50,
        index: 0
      },
      {
        x: 40,
        y: 420,
        width: 5,
        height: 50,
        index: 1
      },{
        x: 160,
        y: 420,
        width: 35,
        height: 50,
        index: 3
      }];
       
        // check for overlap between the upper letter and the lowercase letter
        const overlap = lowercaseLetterRects.map(lowercaseLetterRect=> !(
          (upperLetterRect.x + upperLetterRect.width < lowercaseLetterRect.x ||
          lowercaseLetterRect.x + lowercaseLetterRect.width < upperLetterRect.x ||
          upperLetterRect.y + upperLetterRect.height < lowercaseLetterRect.y ||
          lowercaseLetterRect.y + lowercaseLetterRect.height < upperLetterRect.y)
        ))
    
        if (overlap.includes(true)) {
          let letter = overlap.indexOf(true)
          if(test[letter] === uppercaseLetter.toLowerCase()){
            async function tada() {
              const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/tada.mp3')
              );
             
              await sound.playAsync();
            }
            tada()
            const next = getRandomLetter()
            setUppercaseLetter(next)
            setLowercaseLetters([
              getMatchingLowercaseLetter(next),
              getRandomLetter().toLowerCase(),
              getRandomLetter().toLowerCase(),
            ])

            setTimeout(() => {
              setKey(key+1)
              setLastPanPosition({x:0, y:0})
              setPan({x: new Animated.Value(0), y: new Animated.Value(0)})
          }, 50);
          }
          else{
            async function wrong() {
              const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/incorrect.mp3')
              );
             
              await sound.playAsync();
            }
            wrong()
            Vibration.vibrate(500)
          }

        }
    
    },
  });



  
const goHome= ()=>{
    navigation.navigate(`Letters`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Upper vs Lower Case</Text>
        <Text style={styles.title2}>You've paired {key} letters</Text>
      <View style={styles.correctLetter}>
      <Animated.View
        style={[styles.text, {
          transform: [
            { translateX: pan.x },
            { translateY: pan.y }
          ]
        }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.upperLetter}>{uppercaseLetter}</Text>
      </Animated.View>
    </View>
    <View style={{ position: 'absolute', bottom: 150, left: 0, right: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessLetter}>{test? test[0] : null}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessLetter}>{test ? test[1] : null}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessLetter}>{test? test[2]: null}</Text>
          </View>
        </View>
      </View>

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
      },
      guessLetter: {
       color: "#FFFF00",
       textAlign:'center',
       fontSize: '5rem',
       borderColor: "#FFFF00",
       borderWidth: 1,
       width: 100,
       zIndex: 1

      },
      upperLetter: {
        textAlign: 'center',
        color: '#FFFF00',
        fontSize: '8rem',
      },
      correctLetter:{
        zIndex:2
      }
    
})