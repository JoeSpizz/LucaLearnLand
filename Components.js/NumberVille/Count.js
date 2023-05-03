import {View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect, useState} from 'react'
import {Audio} from 'expo-av'   
import One from './Counting/One';
import Two from './Counting/Two';
import Three from './Counting/Three';
import Four from './Counting/Four';
import Five from './Counting/Five';
import Six from './Counting/Six';
import Seven from './Counting/Seven';
import Eight from './Counting/Eight';
import Nine from './Counting/Nine';
import Ten from './Counting/Ten';
import Eleven from './Counting/Eleven';
import Twelve from './Counting/Twelve';
import Thirteen from './Counting/Thirteen';
import Fourteen from './Counting/Fourteen';
import Fifteen from './Counting/Fifteen';
import Sixteen from './Counting/Sixteen';
import Seventeen from './Counting/Seventeen';
import Eighteen from './Counting/Eighteen';
import Nineteen from './Counting/Nineteen';
import Twenty from './Counting/Twenty';

function Count({navigation}) {
    const [number, setNumber] = useState(3)

    useEffect(()=>{
        async function welcome() {
          const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/number-count-1.mp3')
          );
          await sound.playAsync();
        }
        welcome()
      },[])
  
      const success = ()=>{
        setNumber(number+1)
      }
      const reset = () => {
        setNumber(1)
      }
      const images = [
        <One onSuccess={success} />,
        <Two onSuccess={success} />,
       <Three onSuccess={success} />,
       <Four onSuccess={success} />,
       <Five onSuccess={success} />,
       <Six onSuccess={success} />,
       <Seven onSuccess={success} />,
       <Eight onSuccess={success} />,
       <Nine onSuccess={success} />,
       <Ten onSuccess={success} />,
       <Eleven onSuccess={success} />,
       <Twelve onSuccess={success} />,
       <Thirteen onSuccess={success} />,
       <Fourteen onSuccess={success} />,
       <Fifteen onSuccess={success} />,
       <Sixteen onSuccess={success} />,
       <Seventeen onSuccess={success} />,
       <Eighteen onSuccess={success} />,
       <Nineteen onSuccess={success} />,
       <Twenty onReset={reset} />,
      ];

const goHome= ()=>{
    navigation.navigate(`Numbers`)
}

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
          Count
          </Text>
        <Text style={styles.title2}>
          How many do you see?
        </Text>
        
        <View style={styles.countBoxContainer}>
  
       {images[number-1]}
    
        </View>
        
        <Text style={styles.button} 
        onPress={goHome}> 
        Back to the NumberVille
        </Text>
    </View>
  )
}

export default Count

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
    countBoxContainer:{
      marginTop: 20,
      width: "80%",
     height: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderWidth: 10,
      borderStyle: "dashed",
      elevation: 15,
     backgroundColor: "grey",
     alignItems: 'center',
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