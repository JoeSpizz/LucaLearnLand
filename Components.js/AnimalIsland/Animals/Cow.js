import {View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Audio} from 'expo-av'
import { useEffect } from 'react';


function Cow() {
useEffect(()=>{
    const moo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/cow.mp3')
        )
        await sound.playAsync()
    }
    moo()
},[])

const play = ()=>{
    const moo = async ()=>{
        const {sound} = await Audio.Sound.createAsync(
          require('../../../assets/animals/cow.mp3')
        )
        await sound.playAsync()
    }
    moo()
}

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Cow</Text>
        <TouchableOpacity onPress={play}>
        <View style={styles.picture} >
          <Image style={styles.Cow} source={require("../../../assets/animal-pictures/cow.jpg")} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
      </View>
      )
}

export default Cow

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
    Cow: {
        // width: 300,
        height: 300,
        borderWidth: 15,
        borderStyle: "solid",
        borderColor: '#00FC00',
    }
})
