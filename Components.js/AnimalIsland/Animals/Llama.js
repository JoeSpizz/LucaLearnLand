import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Llama() {
useEffect(()=>{
    const oink = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/llama.mp3')
        )
        await sound.playAsync()
    }
    oink()
},[])

const play = ()=>{
    const oink = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/llama.mp3')
        )
        await sound.playAsync()
    }
    oink()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Llama</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Llama} source={require("../../../assets/animal-pictures/llama.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Llama

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
    Llama: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
