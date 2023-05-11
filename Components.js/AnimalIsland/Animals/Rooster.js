import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Rooster() {
useEffect(()=>{
    const cockadoodledoo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/rooster-crows.mp3')
        )
        await sound.playAsync()
    }
    cockadoodledoo()
},[])

const play = ()=>{
    const cockadoodledoo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/rooster-crows.mp3')
        )
        await sound.playAsync()
    }
    cockadoodledoo()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Rooster</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Rooster} source={require("../../../assets/animal-pictures/rooster.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Rooster

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
    Rooster: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
