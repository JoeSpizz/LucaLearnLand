import { View, Text, Image, PanResponder } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useState } from 'react'
import Cat from './Animals/Cat'
import Cow from './Animals/Cow'
import Owl from './Animals/Owl'
import Crow from './Animals/Crow'
import Donkey from './Animals/Donkey'
import Duck from './Animals/Duck'
import Eagle from './Animals/Eagle';
import Elephant from './Animals/Elephant';
import Goat from './Animals/Goat';
import Horse from './Animals/Horse';
import Lion from './Animals/Lion';
import Pig from './Animals/Pig';
import Rooster from './Animals/Rooster';


function Count({navigation}) {
  const [animal, setAnimal]= useState(0)

const animals = {farm: [<Cat/>, <Cow/>, <Owl/>, <Crow/>, <Donkey/>, <Duck/>, <Eagle/>, <Elephant/>, <Goat/>, <Horse/>, <Lion/>, <Pig/>, <Rooster/>],
                forest: [],
                neighborhood: []
                }
const [location, setLocation] = useState(animals.farm)
const swipeLeft = () => {
  setAnimal(animal - 1)
}

const swipeRight = () => {
  setAnimal(animal + 1)
}

const goHome= ()=>{
    navigation.navigate(`Animals`)
}

const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onPanResponderRelease: (evt, gestureState) => {
    if (gestureState.dx < 0) {
      swipeRight()
    } else {
      swipeLeft()
    }
  },
})

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Learning Animals!</Text>
        <Text style={styles.title2}>Look, Click, Listen, Learn</Text>
<View>
        {location[animal]}
        </View>
    
        <View  style={styles.arrows} {...panResponder.panHandlers}>
        <Image style={styles.arrow} source={require('../../assets/left-arrow.png')} resizeMode="contain" />
      
        <Image style={styles.arrow} source={require('../../assets/right-arrow.png')}  resizeMode="contain"/>
      </View>
        
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
    arrows: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 55,
      left: 0
    },
    arrow: {
      height: 200,
      width: 180,
      marginHorizontal: 10,
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