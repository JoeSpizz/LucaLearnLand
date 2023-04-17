import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Count({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Animals`)
}
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Who makes this sound?</Text>
        <Text style={styles.title2}>A listening game</Text>
        
        <Text style={styles.button} 
        onPress={goHome}
        > Back to the Animal Island</Text>
    </View>
  )
}

export default Count

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