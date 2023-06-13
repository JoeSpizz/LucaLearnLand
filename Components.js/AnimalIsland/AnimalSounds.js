import {View, Text, PanResponder, Animated, Vibration } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useState } from 'react';
import {Audio} from 'expo-av'
import { Ionicons } from '@expo/vector-icons';
import AnimalSoundImage from './AnimalSoundImageComponent/AnimalSoundImage';



function Count({navigation}) {
  const animalArray = ['cat', 'chicken', 'cow', 'duck', 'goat', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'eagle', 'elephant', 'fox', 'frogs', 'hippo', 'horse', 'lion' ];
  const getRandomAnimal = () => {
    return animalArray[Math.floor(Math.random() * animalArray.length)];
  };
  const [animal, setAnimal] = useState(getRandomAnimal());
  const randomAnimalSeed = [animal, getRandomAnimal(), getRandomAnimal()]
  const [randomAnimals, setrandomAnimals] = useState([
    <AnimalSoundImage animal={animal}/>, //picture
    <AnimalSoundImage animal={randomAnimalSeed[1]}/>, //picture
    <AnimalSoundImage animal={randomAnimalSeed[2]}/>, //picture
  ]);
  const [choices, setChoices] = useState()
  const [key, setKey] = useState(0)
  const [pan, setPan] = useState({ x: new Animated.Value(0), y: new Animated.Value(0) });
  const [lastPanPosition, setLastPanPosition] = useState({ x: 0, y: 0 });

 useEffect(()=>{
   const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  const shuffledArray = shuffleArray(randomAnimals);

  setChoices(shuffledArray)
  },[animal])

  useEffect(()=>{
    if(key===0){
    async function welcome() {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../assets/sounds/letter-case-2.mp3')
      );
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
      if (status && status.didJustFinish) {
        sound.unloadAsync();
      }
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
     
      const correctAnimalPosition = {
        x: lastPanPosition.x + gestureState.dx,
        y: lastPanPosition.y + gestureState.dy,
      };
      const correctAnimalDimensions = {
        width: 65,
        height: 100,
      };
      const correctAnimal = {
        x: correctAnimalPosition.x,
        y: correctAnimalPosition.y,
        width: correctAnimalDimensions.width,
        height: correctAnimalDimensions.height,
      };
    
      const randomAnimal = [{
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
       
        // check for overlap
        const overlap = randomAnimal.map(randomAnimalRectangle=> !(
          (correctAnimal.x + correctAnimal.width < randomAnimalRectangle.x ||
          randomAnimalRectangle.x + randomAnimalRectangle.width < correctAnimal.x ||
          correctAnimal.y + correctAnimal.height < randomAnimalRectangle.y ||
          randomAnimalRectangle.y + randomAnimalRectangle.height < correctAnimal.y)
        ))
    
        if (overlap.includes(true)) {
          let letter = overlap.indexOf(true)
          console.log(overlap)
          
          if(randomAnimalSeed[letter] === animal){
            async function tada() {
              const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/tada.mp3')
              );
             
              await sound.playAsync();
            }
            tada()
            const next = getRandomAnimal()
            setAnimal(next)

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
    navigation.navigate(`Animals`)
  }
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Who makes this sound?</Text>
        <Text style={styles.title2}>A listening game</Text>
        
        <View style={styles.correctAnimal}>
      <Animated.View
        style={[styles.text, {
          transform: [
            { translateX: pan.x },
            { translateY: pan.y }
          ]
        }]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.animalSound}>
          <Ionicons name="volume-high" style={styles.animalSound}/></Text>
      </Animated.View>
    </View>
    <View style={{ position: 'absolute', bottom: 150, left: 0, right: 0 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessAnimal}>{choices? choices[0] : null}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessAnimal}>{choices ? choices[1] : null}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.guessAnimal}>{choices? choices[2]: null}</Text>
          </View>
        </View>
      </View>

        <Text style={styles.button} 
        onPress={goHome}
        > Back to the Animal Island</Text>
    </View>
  )
}

export default Count

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'green',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#E171FD",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#E171FD",
      fontWeight: 'bold'
    },

    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '',
        backgroundColor:'#00FC00',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#E171FD',
        paddingTop: 10,
        fontSize: '1.5rem'
      },
      guessAnimal: {
       color: "#E171FD",
       textAlign:'center',
       fontSize: '2rem',
       borderColor: "#E171FD",
       borderWidth: 1,
       width: 100,
       zIndex: 1

      },
      animalSound: {
        textAlign: 'center',
        color: '#E171FD',
        fontSize: '8rem',
      },
      correctAnimal:{
        zIndex:2
      }
     
})