import { Animated, Text, View, Easing, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useRef, useEffect } from 'react';
import { Audio } from 'expo-av';


export default function Button({nav, navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(-50)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const engine = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
          async function breaking() {
            const { sound, status } = await Audio.Sound.createAsync(
              require('../assets/sounds/breaking.wav')
            );
            await sound.setVolumeAsync(0.15)
            await sound.playAsync();
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
          breaking()
          
            transX.setValue(-160);
            transY.setValue(Math.floor(Math.random() * 100) + 1)
            Animated.sequence([
            Animated.parallel([
              Animated.timing(transX, {
                toValue: -100,
                useNativeDriver: true,
              }),
              Animated.timing(transY, {
                toValue: (-80),
                useNativeDriver: true,
              }),]),
              Animated.parallel([
                Animated.timing(transX, {
                  toValue: -20,
                  useNativeDriver: true,
                }),
                Animated.timing(transY, {
                  toValue: (20),
                  useNativeDriver: true,
                }),]),
              Animated.parallel([
                Animated.timing(transX, {
                  toValue: 0,
                  useNativeDriver: true,
                }),
                Animated.timing(transY, {
                  toValue: (0),
                  useNativeDriver: true,
                }),
            ])
        ]).start()})
        return focusHandler;

    }, [navigation]);
//sound library
    async function takeOff() {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../assets/sounds/takeoffengine.mp3')
      );
      await sound.setVolumeAsync(0.25)
      await sound.playAsync();
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

   



    //navigate to next page on press
const wiggle = ()=>{
    takeOff()
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
             
        ]).start(()=> {navigation.navigate(`${nav}`)});
    
}



  return (
    <View>
    <Animated.View style={{
        height: 100,
       transform: [{ translateX: transX}, {translateY: transY}, {rotate: engine}],
      }}>
        
    <Text style={styles.buttonLabel}
    onPress={wiggle}
    > 
     <Image style={styles.buttonImage} source={require('./truck2.png')}/>
      </Text>
   
  </Animated.View>
    <Text style={styles.buttonText}  onPress={wiggle}>{nav}</Text>
    </View>
  )
}

const styles = EStyleSheet.create({
  
    buttonLabel: {
      height: '100%'
      
    },
    buttonImage:{
      height: 60,
      width: 110,
      position: 'absolute',
      resizeMethod: 'resize'
  },
    buttonText:{
      marginLeft: 'auto',
      marginRight: 'auto',
      color: 'blue',
      fontWeight: 'bold',
      fontSize: '1.5 rem'
    }
  });
 