import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Number({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Numbers</Text>
        <Text style={styles.title2}>Countdown to fun!</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the PlayGround</Text>
    </View>
  )
}

export default Number

const styles= EStyleSheet.create({
    container:{
      backgroundColor: 'blue',
      height: '100%'
    },
    title:{
      marginTop: 30,
      fontSize:'2.5rem',
      textAlign: 'center',
      color: "#00FC00",
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#00FC00",
      fontWeight: 'bold'
    },

    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#5578C8',
        backgroundColor:'#5578C8',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#00FC00',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})