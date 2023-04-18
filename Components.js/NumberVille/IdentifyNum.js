import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function IdentifyNum({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Numbers`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>What number is this?</Text>
        <Text style={styles.title2}>Learning Numbers!</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the NumberVille</Text>
    </View>
  )
}

export default IdentifyNum

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