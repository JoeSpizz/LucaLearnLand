import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Walrus() {
useEffect(()=>{
    const grunt = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/walrus.mp3')
        )
        await sound.playAsync()
    }
    grunt()
},[])

const play = ()=>{
    const grunt = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/walrus.mp3')
        )
        await sound.playAsync()
    }
    grunt()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Walrus</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Walrus} source={require("../../../assets/animal-pictures/walrus.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Walrus

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
    Walrus: {
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
