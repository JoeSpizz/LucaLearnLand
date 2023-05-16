import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Sheep() {
useEffect(()=>{
    const baah = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/sheep.mp3')
        )
        await sound.playAsync()
    }
    baah()
},[])

const play = ()=>{
    const baah = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/sheep.mp3')
        )
        await sound.playAsync()
    }
    baah()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Sheep</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Sheep} source={require("../../../assets/animal-pictures/sheep.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Sheep

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
    Sheep: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})