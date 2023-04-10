import {View, Text, ImageBackground } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const image = { uri: "https://wallpaperaccess.com/full/1095871.jpg" };

function Color({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.container} source={image} resizeMode="cover">
        <Text style={styles.title}>Color Center</Text>
        <Text style={styles.title2}>A Page of Pigments</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the PlayGround</Text>
        </ImageBackground>
    </View>


  )
}

export default Color

const styles= EStyleSheet.create({
    container:{
      height: '100%',

    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "white",
      backgroundColor: "grey",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "white",
      backgroundColor: "grey",
      fontWeight: 'bold'
    },

    button: {
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