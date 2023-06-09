import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Skunk() {
useEffect(()=>{
    const skunkIntro = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals-spoken/skunk-spoken.mp3')
        )
        await sound.playAsync()
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
              chirp()
            }
          });
        
          // Use the 'status' object to check if the audio is already finished
          if (status && status.didJustFinish) {
            sound.unloadAsync();
          }
    }
    skunkIntro()
    const chirp = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/skunk.mp3')
        )
        await sound.playAsync()
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
            }
          });
          if (status && status.didJustFinish) {
            sound.unloadAsync();
          }
    }
},[])

const play = ()=>{
    const chirp = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/skunk.mp3')
        )
        await sound.playAsync()
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
            }
          });
          if (status && status.didJustFinish) {
            sound.unloadAsync();
          }
    }
    chirp()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Skunk</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Skunk} source={require("../../../assets/animal-pictures/skunk.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Skunk

const styles= EStyleSheet.create({
    container:{
        height: '100%',
    },
    title: {
    marginTop: 30,
    fontSize:'2.5rem',
    textAlign: 'center',
    color: "#FFFF00",
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: -25
    
    },
    picture:{
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    Skunk: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
