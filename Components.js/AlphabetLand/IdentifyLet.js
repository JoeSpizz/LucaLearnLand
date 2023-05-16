import {View, Text, Animated, Easing, Image, TouchableWithoutFeedback, Vibration } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useRef, useEffect, useState} from 'react';
import {Audio} from 'expo-av'



function IdentifyLet({navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(0)).current;
    const [key, setKey]= useState(0)
    const [myImage, setMyImage]= useState(require('../../assets/racers/racer2.png'))
    const spinValue = useRef(new Animated.Value(0)).current;
    const engine = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
      const shakeAnimation = useRef(new Animated.Value(0)).current;
      const [rumble, setRumble] = useState()
      const [letter, setLetter] = useState('');
      const [letter2, setLetter2] = useState('');
      const [letter3, setLetter3] = useState('');
      const [letter4, setLetter4] = useState('');


   
useEffect(()=>{
    setLetter(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    setLetter2(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    setLetter3(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    setLetter4(String.fromCharCode(65 + Math.floor(Math.random() * 26)))
    async function rumble() {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/rumble.mp3')
        );
        setRumble(sound)
       
        await sound.playAsync();
      }
      rumble()

      if(key===0){
        async function welcome() {
            const { sound, status } = await Audio.Sound.createAsync(
              require('../../assets/sounds/letter-match-1.mp3')
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
          welcome()
      }

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



const blocks =[ <TouchableWithoutFeedback key={1} onPress={()=>guess(letter)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerLetter}> {letter}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={2} onPress={()=>guess(letter2)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerLetter}> {letter2}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={3} onPress={()=>guess(letter3)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerLetter}> {letter3}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={4} onPress={()=>guess(letter4)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerLetter}> {letter4}</Text>
    </View>
</TouchableWithoutFeedback>]

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
const shuffledArray = shuffleArray(blocks);

const guess = (guess)=>{
if (guess === letter){
    success()
}
else{
    failure()
}}

const success = ()=>{
    async function takeOff() {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/quicktakeoff.mp3')
        );
       
        await sound.playAsync();
      }
      takeOff()

      async function tada() {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/tada.mp3')
        );
       
        await sound.playAsync();
      }
      tada()
      setLetter('')
      setLetter2('')
      setLetter3(null)
      setLetter4(null)
    setMyImage(require('../../assets/racers/racerthumbsup.png'))
    let down = Animated.timing(spinValue,{
        toValue: -.01,
        duration: 75,
        easing: Easing.linear, 
        useNativeDriver: true  
      })
      let up = Animated.timing(spinValue,{
        toValue: .01,
        duration: 75,
        easing: Easing.linear, 
        useNativeDriver: true  
      })
        Animated.sequence([
            up,
            down,
            up,
            down,
            up,
            down,
            Animated.timing(spinValue,{
                toValue: 0,
                duration: 100,
                easing: Easing.linear, 
                useNativeDriver: true  
              }),
             
            Animated.timing(transX, {
                toValue: 300,
                useNativeDriver: true,
              }),
             
        ]).start(()=> {
        setMyImage(require('../../assets/racers/racer2.png'))  
        setKey(key+1)})
   
}

const failure = () => {
    async function wrong() {
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/incorrect.mp3')
        );
       
        await sound.playAsync();
      }
      wrong()
      Vibration.vibrate(500)
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 5, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start();
  };
  const animatedStyle = {
    transform: [{ translateX: shakeAnimation }],
    overflow: 'hidden'
  };

const goHome= async()=>{
    if (rumble) {
        await rumble.stopAsync();
      }
    
    navigation.navigate(`Letters`)
}

  return (
      <View style={styles.big}>
    <Animated.View style={animatedStyle}>
    <View style={styles.container}>
     
        <Text style={styles.title}>What Letter is This?</Text>
        <Text style={styles.title2}> You've gotten it right {key} times!</Text>
        {/* randomizes the Racer's with letters on their chests */}
        <View style={styles.grid}>
        {shuffledArray.map((block) => block)}
        </View>
        {/* truck carrying the correct letter */}
        <Animated.View  style={[{
       transform: [{ translateX: transX}, {translateY: transY},{rotate: engine}]
      },styles.guessBox]}>
           <Text style={styles.letter}>
           {letter}
            </Text>
            <Text style={styles.identifier} >
            <Image style={styles.truck} source={require('../../assets/trucks/truck6.png')} />
        </Text>
        </Animated.View>

        <Text style={styles.button} 
        onPress={goHome}
        > Back to the Alphabet Land</Text>
       
    </View>
    </Animated.View>
    </View>
  )
}

export default IdentifyLet

const styles= EStyleSheet.create({
    big:{backgroundColor: 'red'},
    container:{
      height: '100%',
      backgroundColor: 'red',
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
    racer:{
        height: 200,
        width: 180,
        textAlign: 'center'
    },
    racerLetter:{
        fontSize: "2rem",
        fontWeight: "bold",
        position: 'absolute',
        left: 65,
        top: 60,
        color: "#FFFF00"
    },
grid:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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
      }
  
})