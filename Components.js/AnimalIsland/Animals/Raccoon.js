import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Raccoon() {
useEffect(()=>{
    const squall = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/raccoon.mp3')
        )
        await sound.playAsync()
    }
    squall()
},[])

const play = ()=>{
    const squall = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/raccoon.mp3')
        )
        await sound.playAsync()
    }
    squall()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Raccoon</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Raccoon} source={require("../../../assets/animal-pictures/raccoon.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Raccoon

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
    Raccoon: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
