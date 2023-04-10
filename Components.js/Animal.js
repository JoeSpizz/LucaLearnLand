import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Animal({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Animal Island</Text>
        <Text style={styles.title2}>The Creature Quarter</Text>
        
        <Text style={styles.button} 
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