import {View, Text, PanResponder, Animated, Vibration, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useState } from 'react';
import {Audio} from 'expo-av'
import { Ionicons } from '@expo/vector-icons';
import AnimalSoundImage from './AnimalSoundImageComponent/AnimalSoundImage';



function Listen({navigation}) {
  const animalArray = ['cat', 'chicken', 'cow', 'duck', 'goat', 'crow', 'deer', 'dog', 'dolphin', 'donkey', 'eagle', 'elephant', 'fox', 'frogs', 'hippo', 'horse', 'lion', 'monkey', 'mouse', 'owl', 'pig', 'pigeon', 'rooster', 'seagull', 'walrus', 'whale', 'wolf', 'zebra'  ];
  const getRandomAnimal = () => {
    return animalArray[Math.floor(Math.random() * animalArray.length)];
  };
  const [animal, setAnimal] = useState(getRandomAnimal());
  const [randomAnimalSeed, setRandomAnimalSeed] = useState([animal, getRandomAnimal(), getRandomAnimal()])
  
  const [choices, setChoices] = useState()
  const [key, setKey] = useState(0)
  const [pan, setPan] = useState({ x: new Animated.Value(0), y: new Animated.Value(0) });
  const [lastPanPosition, setLastPanPosition] = useState({ x: 0, y: 0 });

    const animalSounds = {
      cat: require("../../assets/animals/cat.mp3"),
      chicken: require('../../assets/animals/chicken.mp3'),
      cow: require('../../assets/animals/cow.mp3'),
      duck: require('../../assets/animals/duck.mp3'),
      goat: require('../../assets/animals/goat.mp3'),
      crow: require('../../assets/animals/crow.mp3'),
      deer: require('../../assets/animals/deer.mp3'),
      dog: require('../../assets/animals/dog.mp3'),
      dolphin: require('../../assets/animals/dolphin.mp3'),
      donkey: require('../../assets/animals/donkey.mp3'),
      eagle: require('../../assets/animals/eagle.mp3'),
      elephant: require('../../assets/animals/elephant.mp3'),
      fox: require('../../assets/animals/fox.mp3'),
      frogs: require('../../assets/animals/frogs.mp3'),
      hippo: require('../../assets/animals/hippo.mp3'),
      horse: require('../../assets/animals/horse.mp3'),
      lion: require('../../assets/animals/lion.mp3'),
      monkey: require('../../assets/animals/monkey.mp3'),
      mouse: require('../../assets/animals/mouse.mp3'),
      owl: require('../../assets/animals/owl.mp3'),
      pig: require('../../assets/animals/pig.mp3'),
      pigeon: require('../../assets/animals/pigeon.mp3'),
      rooster: require('../../assets/animals/rooster-crows.mp3'),
      seagull: require('../../assets/animals/seagulls.mp3'),
      walrus: require('../../assets/animals/walrus.mp3'),
      whale: require('../../assets/animals/whale.mp3'),
      wolf: require('../../assets/animals/wolf.mp3'),
      zebra: require('../../assets/animals/zebra.mp3'),
  };
  const noise = animalSounds[animal]
  const [shuffledAnimalArray, setShuffledAnimalArray] = useState([]);

  useEffect(()=>{
    const shuffleArray = (array) => {
      return [...array].sort(() => Math.random() - 0.5);
    };
    const newShuffledAnimalArray = shuffleArray(randomAnimalSeed);
    setShuffledAnimalArray(newShuffledAnimalArray);

    const randomAnimals = [
      <AnimalSoundImage animal={newShuffledAnimalArray[0]} />, // picture
      <AnimalSoundImage animal={newShuffledAnimalArray[1]} />, // picture
      <AnimalSoundImage animal={newShuffledAnimalArray[2]} />,
    ];

    if(key===0){
    async function welcome() {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../assets/sounds/animal-sound-1.mp3')
      );
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    }
    welcome()
    setChoices(randomAnimals)
    setTimeout(() => {
    async function animalNoise() {
      const { sound, status } = await Audio.Sound.createAsync(
       noise
      );
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    }
    animalNoise()}, 2500)
    }
    else{
      setChoices(randomAnimals)
      async function animalNoise() {
        const { sound, status } = await Audio.Sound.createAsync(
         noise
        );
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      }
      setTimeout(()=>{
        animalNoise()
      }, 950)
     
    }
  },[animal])
  // console.log(ShuffledAnimalArray)
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
        width: 90,
        height: 50,
      };
      const correctAnimal = {
        x: correctAnimalPosition.x,
        y: correctAnimalPosition.y,
        width: correctAnimalDimensions.width,
        height: correctAnimalDimensions.height,
      };
    
      const randomAnimal = [{
        x: -120,
        y: 350,
        width: 45,
        height: 80,
        index: 0
      },
      {
        x: 40,
        y: 350,
        width: 25,
        height: 80,
        index: 1
      },{
        x: 160,
        y: 350,
        width: 35,
        height: 80,
        index: 2
      }];
      const overlap = randomAnimal.map(randomAnimalRectangle =>!(
          (correctAnimal.x + correctAnimal.width < randomAnimalRectangle.x ||
          randomAnimalRectangle.x + randomAnimalRectangle.width < correctAnimal.x ||
          correctAnimal.y + correctAnimal.height < randomAnimalRectangle.y ||
          randomAnimalRectangle.y + randomAnimalRectangle.height < correctAnimal.y
      )));

      if(overlap.includes(true)){
        let index = overlap.indexOf(true)
        if (shuffledAnimalArray[index]===animal) {
            async function tada() {
              const { sound } = await Audio.Sound.createAsync(
                require('../../assets/sounds/tada.mp3')
              );
             
              await sound.playAsync();
              sound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish) {
                  sound.unloadAsync();
                }
              });
            }
            tada()
            const next = getRandomAnimal()
            setAnimal(next)
            setRandomAnimalSeed([
              next,
              getRandomAnimal(),
              getRandomAnimal(),
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
              sound.setOnPlaybackStatusUpdate((status) => {
                if (status.didJustFinish) {
                  sound.unloadAsync();
                }
              });
            }
            wrong()
            Vibration.vibrate(500)
          }
    
      }
      if(correctAnimalPosition.x < -185 || correctAnimalPosition.x > 185 || correctAnimalPosition.y < -70 || correctAnimalPosition.y > 565){
        setLastPanPosition({ x: 0, y: 0 });
        setPan({ x: new Animated.Value(0), y: new Animated.Value(0) });  
        async function animalNoise() {
          const { sound, status } = await Audio.Sound.createAsync(
           noise
          );
          await sound.playAsync();
          sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
            }
          });
        }
          animalNoise()

      }
    },
  });
const replaySound = ()=>{
  async function animalNoise() {
    const { sound, status } = await Audio.Sound.createAsync(
     noise
    );
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        sound.unloadAsync();
      }
    });
  }
    animalNoise()

}
  const goHome= ()=>{
    navigation.navigate(`Animals`)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who makes this sound?</Text>
      <Text style={styles.title2}>A listening game</Text>
      <Ionicons name="volume-high" onPress={()=>replaySound()} style={styles.audio}/>
        <View style={styles.correctAnimal}>
          <Animated.View
            style={[styles.text, {
            transform: [
              { translateX: pan.x },
              { translateY: pan.y }
            ],  alignItems: 'center', // Center horizontally
            justifyContent: 'center', 
            }]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.animalSoundBox}>
             <Image source={require("../../assets/trucks/animal_safari_truck.png")} style={styles.animalSound} resizeMode='cover'/>
            </Text>
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
      >
        Back to the Animal Island
      </Text>
    </View>
  )
}

export default Listen

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
       borderColor: "#E171FD",
       borderWidth: 1,
       zIndex: 1
      },
      text: {
        marginTop: 25
      }
,      animalSound: {
        width: 70,
        height: 80,
      },
      animalSoundBox: {
    
        width: 100,
        height: 200
       
      },
      correctAnimal:{
        zIndex:2
      },
      audio:{
        fontSize: '2rem',
        color: 'yellow',
        textAlign: 'center'
      }
     
})