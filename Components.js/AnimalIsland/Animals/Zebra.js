import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Zebra() {
useEffect(()=>{
    const chirp = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/zebra.mp3')
        )
        await sound.playAsync()
    }
    chirp()
},[])

const play = ()=>{
    const chirp = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/zebra.mp3')
        )
        await sound.playAsync()
    }
    chirp()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Zebra</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Zebra} source={require("../../../assets/animal-pictures/zebra.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Zebra

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
    Zebra: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
