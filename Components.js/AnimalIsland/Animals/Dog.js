import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Dog() {
useEffect(()=>{
    const bark = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/dog.mp3')
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
    bark()
},[])

const play = ()=>{
    const dogIntro = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals-spoken/dog-spoken.mp3')
        )
        await sound.playAsync()
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
              bark()
            }
          });
        
          // Use the 'status' object to check if the audio is already finished
          if (status && status.didJustFinish) {
            sound.unloadAsync();
          }
    }
    dogIntro()
    const bark = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/dog.mp3')
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
    
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Dog</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Dog} source={require("../../../assets/animal-pictures/dog.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Dog

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
    Dog: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
