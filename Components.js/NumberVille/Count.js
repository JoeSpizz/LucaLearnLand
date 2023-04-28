import {View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useEffect, useState} from 'react'
import {Audio} from 'expo-av'   

function Count({navigation}) {
    const [number, setNumber] = useState(1)
    const [tally, setTally]= useState(0)
    const [pressed, setPressed] = useState([]);
    const images = [
      require('../../assets/trucks/truck1.png'),
      require('../../assets/trucks/truck-7.png'),
      require('../../assets/trucks/truck6.png'),
      require('../../assets/trucks/truck1.png'),
      require('../../assets/trucks/truck-7.png'),
      require('../../assets/trucks/truck6.png'),
    ];
    const [counters, setCounters] = useState(Array(number).fill(null));
   


    useEffect(()=>{
        async function welcome() {
          const { sound } = await Audio.Sound.createAsync(
            require('../../assets/sounds/number-count-1.mp3')
          );
          await sound.playAsync();
        }
        welcome()
      },[])
      
      const block = []
  
      const playerCounts = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          
          setPressed([...pressed, i])
        if((tally+1)===number){
            setNumber(number+1)
            setTally(0)
            setPressed([])
            setCounters(Array(number+1).fill(null));
        }
      }
      }
      

      for (let i = 0; i < number; i++) {
      block.push(
      <View key={i} >
        <TouchableWithoutFeedback onPress={pressed.includes(i) ? null: ()=>playerCounts(i) }>
          <Text style={pressed.includes(i) ? styles.buttonPressed : undefined}>
              <Image style={styles.picture} source={images[number-1]}/>  
         </Text>
         
         
          </TouchableWithoutFeedback>
          <View>
         <Text style={pressed.includes(i)? styles.visible : styles.invisible}>{counters[i]}</Text>
         </View>
          </View>);
      }

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
        <View style={styles.countBox}>
       {block}
        </View>
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
        flex: 1,
    justifyContent: 'center', // aligns children vertically
    alignItems: 'center', // aligns children horizontally
    },
    countBox:{
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 15,
        borderStyle: "dashed",
        elevation: 15,
        height: "60%",
        width: "80%",
        backgroundColor: "grey"
    },
    picture:{
          width: 50,
          height: 50,
          resizeMethod: "contain",
    },
    buttonPressed: {
       opacity: .3
      },
      visible:{
        color: 'rgba(255, 0, 255, 1.0)',
        fontSize: '1.5rem',
        fontWeight: 'bold'
      },
      invisible:{
        color: 'transparent'
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