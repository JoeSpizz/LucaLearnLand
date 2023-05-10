import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Elephant() {
useEffect(()=>{
    const honk = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/elephant.mp3')
        )
        await sound.playAsync()
    }
    honk()
},[])

const play = ()=>{
    const honk = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/elephant.mp3')
        )
        await sound.playAsync()
    }
    honk()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Elephant</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Elephant} source={require("../../../assets/animal-pictures/elephant.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Elephant

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
    textDecorationLine: 'underline'
    },
    picture:{
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    Elephant: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
