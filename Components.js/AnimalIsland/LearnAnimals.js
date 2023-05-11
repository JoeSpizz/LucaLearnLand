import { View, Text, Image, PanResponder, TouchableOpacity } from 'react-native';
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
import Monkey from './Animals/Monkey';
import Seagull from './Animals/Seagull';
import Sheep from './Animals/Sheep';
import Whale from './Animals/Whale';
import Wolf from './Animals/Wolf';



function Count({navigation}) {
  const [animal, setAnimal]= useState(0)


const animals = {farm: [<Cow/>,   <Donkey/>, <Duck/>,  <Goat/>, <Horse/>,  <Pig/>, <Rooster/>, <Sheep/>],
                forest: [<Owl/>,<Eagle/>,<Elephant/>,<Lion/>,<Monkey/>, <Wolf/>],
                neighborhood: [<Cat/>,<Crow/>,],
                ocean: [<Seagull/>,<Whale/>,]
                }

const [location, setLocation] = useState()

const swipeLeft = () => {
  if(animal === 0){
    setAnimal(location.length-1)
  }
  else{setAnimal(animal - 1)}
}

const swipeRight = () => {
  if(animal === location.length -1){
    setAnimal(0)
  }
  else{
    setAnimal(animal + 1)
  }
}

const goHome= ()=>{
    navigation.navigate(`Animals`)
}
const reset = ()=>{
  setLocation()
  setAnimal(0)
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
// console.log(location[animal])
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Learning Animals!</Text>
        <Text style={styles.title2}>Look, Click, Listen, Learn</Text>
{ location ?  
          <View>
            <Text style={styles.explore} onPress={reset}> Explore a new Area?</Text>
        {location[animal]}
        <View  style={styles.arrows} {...panResponder.panHandlers}>
        <Image style={styles.arrow} source={require('../../assets/left-arrow.png')} resizeMode="contain" />
      
        <Image style={styles.arrow} source={require('../../assets/right-arrow.png')}  resizeMode="contain"/>
      </View>  
        </View>
        
      :    <View>
      <Text> Select an Area to Explore</Text>
      <Text style={styles.pick} onPress={()=>setLocation(animals.farm)}> Farm </Text>
      <Text style={styles.pick}  onPress={()=>setLocation(animals.forest)}> Great Outdoors </Text>
      <Text style={styles.pick}  onPress={()=>setLocation(animals.neighborhood)}> Neighborhood </Text>
      <Text style={styles.pick}  onPress={()=>setLocation(animals.ocean)}> Ocean </Text>
      </View>}
        
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
    explore:{
      textAlign: 'center',
      fontSize: '1.5rem',
      color: 'red',
      marginTop: 5,
      marginBottom: -20,
      borderWidth: 1,
      borderColor: "red",
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    pick:{
      fontSize: '2rem',
      color: "white"
    },
    arrows: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom:190
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