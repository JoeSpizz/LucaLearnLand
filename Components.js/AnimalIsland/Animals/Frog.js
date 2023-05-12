import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Frog() {
useEffect(()=>{
    const meow = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/frogs.mp3')
        )
        await sound.playAsync()
    }
    meow()
},[])

const play = ()=>{
    const meow = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/frogs.mp3')
        )
        await sound.playAsync()
    }
    meow()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Frog</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Frog} source={require("../../../assets/animal-pictures/frog.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Frog

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
    Frog: {

        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
