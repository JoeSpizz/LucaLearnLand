import {View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

function Alphabet({navigation}) {
const goHome= ()=>{
    navigation.navigate(`Home`)
}
  return (
    <View>
        <Text>Alphabet Land: Time to learn your letters!</Text>
        <Text style={styles.button} 
        onPress={goHome}
        > Go Back</Text>
    </View>
  )
}

export default Alphabet

const styles= EStyleSheet.create({
    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#00FC00',
        backgroundColor:'#00FC00',
        marginTop: 20,
      }
})