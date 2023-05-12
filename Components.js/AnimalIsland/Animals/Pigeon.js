import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Pigeon() {
useEffect(()=>{
    const coo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/pigeon.mp3')
        )
        await sound.playAsync()
    }
    coo()
},[])

const play = ()=>{
    const coo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/pigeon.mp3')
        )
        await sound.playAsync()
    }
    coo()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Pigeon</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Pigeon} source={require("../../../assets/animal-pictures/pigeon.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Pigeon

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
    Pigeon: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
