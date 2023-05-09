import {View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect, useState } from 'react';

function Animal({navigation}) {
  const [forest, setForest] = useState()
useEffect(()=>{
  const welcome = async ()=>{
    const {sound} = await Audio.Sound.createAsync(
      require('../assets/sounds/animal-island.mp3')
    )
    setForest(sound)
    await sound.setVolumeAsync(0.75)
    await sound.playAsync()
}
welcome()

async function forest() {
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/animals/forest-ambience.mp3')
  );
  setForest(sound)
  await sound.playAsync();
}
forest();
}, [])

  const pressed = async (e)=>{
    if (forest) {
      await forest.stopAsync();
    }
    navigation.navigate(e)
  }

const goHome= async()=>{
  if (forest) {
    await forest.stopAsync();
  }
  const goBack = async ()=>{
    const {sound} = await Audio.Sound.createAsync(
      require('../assets/sounds/what-else-2.mp3')
    )
    await sound.playAsync()
}
goBack()
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animal Island</Text>
        <Text style={styles.title2}>The Creature Quarter</Text>

        <View>
        <Text style={styles.button} onPress={()=>{pressed('LearnAnimals')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/truck6.png')} />
           <Text style={styles.buttonText}> Learn Animals</Text>
           </View>
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('AnimalSounds')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/truck6.png')} />
          <Text style={styles.buttonText}>Identify Sound</Text>
          </View>
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('AnimalPictures')}}>
          <View>
          <Image style={styles.truck} source={require('../assets/trucks/truck6.png')} />
         <Text style={styles.buttonText}>Identify Picture </Text>
         </View>
        </Text>
        </View>
        
        <Text style={styles.homeButton} 
        onPress={goHome}
        > Back to the PlayGround</Text>
    </View>
  )
}

export default Animal

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
    button:{
      height:85,
      marginTop: 60,
      marginLeft: "auto",
      marginRight: 'auto'
    },
    buttonText:{
      color: '#E171FD',
      textAlign: 'center',
    },
    truck:{
      height: 70,
      width: 110,
      resizeMethod: 'resize'
    },

    homeButton: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#00FC00',
        backgroundColor:'#00FC00',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#D01AFD',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})