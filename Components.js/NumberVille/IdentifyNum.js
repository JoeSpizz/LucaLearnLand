import {View, Text, Animated, Easing, Image, TouchableWithoutFeedback, Vibration } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useRef, useEffect, useState} from 'react';
import {Audio, AV} from 'expo-av'



function IdentifyNum({navigation}) {
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
      const [number, setnumber] = useState('');
      const [number2, setnumber2] = useState('');
      const [number3, setnumber3] = useState('');
      const [number4, setnumber4] = useState('');

   
useEffect(()=>{
    setnumber(Math.floor(Math.random() * 20) + 1)
    setnumber2(Math.floor(Math.random() * 20) + 1)
    setnumber3(Math.floor(Math.random() * 20) + 1)
    setnumber4(Math.floor(Math.random() * 20) + 1)
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
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/sounds/number-match-1.mp3')
        );
        setRumble(sound)
       
        await sound.playAsync();
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



const blocks =[ <TouchableWithoutFeedback key={1} onPress={()=>guess(number)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerNumber}> {number}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={2} onPress={()=>guess(number2)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerNumber}> {number2}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={3} onPress={()=>guess(number3)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerNumber}> {number3}</Text>
    </View>
</TouchableWithoutFeedback>, 
<TouchableWithoutFeedback key={4} onPress={()=>guess(number4)}>
    <View>
    <Image style={styles.racer} source={myImage}/>
    <Text style={styles.racerNumber}> {number4}</Text>
    </View>
</TouchableWithoutFeedback>]

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};
const shuffledArray = shuffleArray(blocks);

const guess = (guess)=>{
if (guess === number){
    success()
}
else{
    failure()
}}

const success = ()=>{
    setnumber(null)
    setnumber2(null)
    setnumber3(null)
    setnumber4(null)
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
    
    navigation.navigate(`Numbers`)
}

  return (
      <View style={styles.big}>
    <Animated.View style={animatedStyle}>
    <View style={styles.container}>
     
        <Text style={styles.title}>What Number is This?</Text>
        <Text style={styles.title2}> You've gotten it right {key} times!</Text>
        {/* randomizes the Racer's with numbers on their chests */}
        <View style={styles.grid}>
        {shuffledArray.map((block) => block)}
        </View>
        {/* truck carrying the correct number */}
        <Animated.View  style={[{
       transform: [{ translateX: transX}, {translateY: transY},{rotate: engine}]
      },styles.guessBox]}>
           <Text style={styles.number}>
           {number}
            </Text>
            <Text style={styles.identifier} >
            <Image style={styles.truck} source={require('../../assets/trucks/racecar-2.png')} />
        </Text>
        </Animated.View>

        <Text style={styles.button} 
        onPress={goHome}
        > Back to the NumberVille</Text>
       
    </View>
    </Animated.View>
    </View>
  )
}

export default IdentifyNum

const styles= EStyleSheet.create({
    big:{backgroundColor: 'blue'},
    container:{
      height: '100%',
      backgroundColor: 'blue',
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
    racer:{
        height: 200,
        width: 180,
        textAlign: 'center'
    },
    racerNumber:{
        fontSize: "2rem",
        fontWeight: "bold",
        position: 'absolute',
        left: 65,
        top: 60,
        color: "#00FC00"
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
      guessBox:{ 
        position: 'absolute',
        bottom: 100,
        left: 100
        },
      identifier:{
          textAlign: "center",
          height: 200,
      },    
      number:{
          color: '#00FC00',
          fontWeight: 'bold',
          fontSize: '3.5rem', 
          position: 'absolute',
          top: 40,
          left: 20
      },
      truck:{
        height: 130,
        width: 200,
        // resizeMethod: 'cover',
      }
  
})
