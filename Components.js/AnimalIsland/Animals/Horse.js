import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Horse() {
useEffect(()=>{
    const horseIntro = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals-spoken/horse-spoken.mp3')
        )
        await sound.playAsync()
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.didJustFinish) {
              sound.unloadAsync();
              neigh()
            }
          });
        
          // Use the 'status' object to check if the audio is already finished
          if (status && status.didJustFinish) {
            sound.unloadAsync();
          }
    }
    horseIntro()
    const neigh = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/horse.mp3')
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
    const neigh = async ()=>{
        const {sound, status} = await Audio.Sound.createAsync(
          require('../../../assets/animals/horse.mp3')
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
    neigh()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Horse</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Horse} source={require("../../../assets/animal-pictures/horse.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Horse

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
    Horse: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
