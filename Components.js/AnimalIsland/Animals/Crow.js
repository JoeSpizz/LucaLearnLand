import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Crow() {
useEffect(()=>{
    const caw = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/crow.mp3')
        )
        await sound.playAsync();
    }
    caw()
},[])
const play = async ()=>{
    const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/animals/crow.mp3')
      );
      await sound.playAsync();
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Crow</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Crow} source={require("../../../assets/animal-pictures/crow.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Crow

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
    Crow: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
