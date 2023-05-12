import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Turkey() {
useEffect(()=>{
    const gobble = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/turkey.mp3')
        )
        await sound.playAsync()
    }
    gobble()
},[])

const play = ()=>{
    const gobble = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/turkey.mp3')
        )
        await sound.playAsync()
    }
    gobble()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Turkey</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Turkey} source={require("../../../assets/animal-pictures/turkey.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Turkey

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
    Turkey: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
