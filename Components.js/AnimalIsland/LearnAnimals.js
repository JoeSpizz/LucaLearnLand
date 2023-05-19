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
import Monkey from './Animals/Monkey';
import Seagull from './Animals/Seagull';
import Sheep from './Animals/Sheep';
import Whale from './Animals/Whale';
import Wolf from './Animals/Wolf';
import Dog from './Animals/Dog';
import Rabbit from './Animals/Rabbit';
import Mouse from './Animals/Mouse';
import GuineaPig from './Animals/GuineaPig';
import Raccoon from './Animals/Raccoon';
import Squirrel from './Animals/Squirrel';
import Skunk from './Animals/Skunk';
import Turkey from './Animals/Turkey';
import Chicken from './Animals/Chicken';
import Llama from './Animals/Llama';
import Shark from './Animals/Shark';
import Walrus from './Animals/Walrus';
import Turtle from './Animals/Turtle';
import Frog from './Animals/Frog';
import Crocodile from './Animals/Crocodile';
import Dolphin from './Animals/Dolphin';
import Fish from './Animals/Fish';
import Zebra from './Animals/Zebra';
import Hippopotamus from './Animals/Hippo';
import Fox from './Animals/Fox';



function Count({navigation}) {
  const [animal, setAnimal]= useState(0)


const animals = {farm: [<Cow/>, <Donkey/>, <Duck/>,  <Goat/>, <Horse/>, <Turkey/>, <Pig/>, <Rooster/>, <Sheep/>, <Llama/>,<Chicken/>],
                forest: [<Owl/>,<Eagle/>,<Elephant/>,<Lion/>,<Zebra/>, <Hippopotamus/>, <Fox/>, <Zebra/>, <Monkey/>, <Wolf/>],
                neighborhood: [<Cat/>,<Dog/>,<Rabbit/>,<Mouse/>,<GuineaPig/>,<Raccoon/>,<Crow/>,<Squirrel/>,<Skunk/>],
                ocean: [<Shark/>, <Fish/>,<Walrus/>, <Turtle/>, <Frog/>, <Crocodile/>, <Dolphin/>, <Seagull/>,<Whale/>,]
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

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Learning Animals!</Text>
        <Text style={styles.title2}>Look, Click, Listen, Learn</Text>
        { location ?  
          <View>
            <Text style={styles.explore} onPress={reset}> Explore A New Area?</Text>
              {location[animal]}
              <View  style={styles.arrows} {...panResponder.panHandlers}>
                <Image style={styles.arrow} source={require('../../assets/swipe-left.png')} resizeMode="contain" />
                <Image style={styles.arrow} source={require('../../assets/swipe-right.png')}  resizeMode="contain"/>
              </View>  
          </View>
      :    
          <View style={styles.iconBox}>
            <Text> Select an Area to Explore</Text>
            <Text style={styles.pick}  onPress={()=>setLocation(animals.neighborhood)}> 
              <Image style={styles.icon} source={require('../../assets/animal-pictures/dog-icon.png')} resizeMode="cover"/>
            </Text>
            <Text style={styles.pick} onPress={()=>setLocation(animals.farm)}> 
              <Image style={styles.icon} source={require('../../assets/animal-pictures/cow-icon.png')} resizeMode="cover"/></Text>
              <Text style={styles.pick}  onPress={()=>setLocation(animals.forest)}> 
              <Image style={styles.icon} source={require('../../assets/animal-pictures/elephant-icon.png')} resizeMode="cover"/>
            </Text>
            <Text style={styles.pick}  onPress={()=>setLocation(animals.ocean)}> 
              <Image style={styles.icon} source={require('../../assets/animal-pictures/fish-icon.png')} resizeMode="cover"/>
            </Text>
          </View>
          }
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
      fontWeight: "bold",
      color: 'red',
      marginTop: 5,
      marginBottom: -20,
      borderWidth: 1,
      borderColor: "red",
      width: 250,
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: "#00FC00"
    },
    iconBox:{
      alignItems: 'center',
      justifyContent: 'center'
    },
    pick:{
      fontSize: '2rem',
      color: "white", 
      height: 150, 
    },
    icon:{
      height: 100,
      width: 100
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