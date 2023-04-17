import {View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Animal({navigation}) {
  const pressed = (e)=>{
    navigation.navigate(e)
  }
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animal Island</Text>
        <Text style={styles.title2}>The Creature Quarter</Text>

        <View>
        <Text style={styles.button} onPress={()=>{pressed('LearnAnimals')}}>
          <Image style={styles.truck} source={require('../assets/trucks/truck1.png')} />
            Learn Animals
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('AnimalSounds')}}>
          <Image style={styles.truck} source={require('../assets/trucks/truck1.png')} />
          Identify Sound
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('AnimalPictures')}}>
          <Image style={styles.truck} source={require('../assets/trucks/truck1.png')} />
         Identify Picture 
        </Text>
        </View>
        
        <Text style={styles.homeButton} 
        onPress={goHome}
        > Back to the PlayGround</Text>
    </View>
  )
}

export default Animal

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'green',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#E171FD",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#E171FD",
      fontWeight: 'bold'
    },
    button:{
      height:85,
    },
    button2:{marginTop:40},
    truck:{
      height: 60,
      width: 110,
      resizeMethod: 'resize'
    },

    homeButton: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#00FC00',
        backgroundColor:'#00FC00',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#D01AFD',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})