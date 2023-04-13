import {View, Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Alphabet({navigation}) {
  const pressed = (e)=>{
    navigation.navigate(e)
  }
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Alphabet Land</Text>
        <Text style={styles.title2}>Let's Learn Our Letters!</Text>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('Tracing')}}>
          <Image style={styles.truck} source={require('../assets/truck1.png')} />
            Trace
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('IdentifyLet')}}>
          <Image style={styles.truck} source={require('../assets/truck1.png')} />
          Identify
        </Text>
        </View>
        <View>
        <Text style={styles.button} onPress={()=>{pressed('Cases')}}>
          <Image style={styles.truck} source={require('../assets/truck1.png')} />
          Upper vs Lower
        </Text>
        </View>

       
       

        <Text style={styles.homeButton} 
        onPress={goHome}
        > Back to the PlayGround</Text>
    </View>
  )
}

export default Alphabet

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'red',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#FFFF00",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#FFFF00",
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
        borderColor: '#A50000',
        backgroundColor:'#A50000',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFF00',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})