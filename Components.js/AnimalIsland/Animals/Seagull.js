import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Seagull() {
useEffect(()=>{
    const squawk = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/seagulls.mp3')
        )
        await sound.playAsync()
    }
    squawk()
},[])

const play = ()=>{
    const squawk = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/seagulls.mp3')
        )
        await sound.playAsync()
    }
    squawk()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Seagull</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Seagull} source={require("../../../assets/animal-pictures/seagull.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Seagull

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
    Seagull: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
