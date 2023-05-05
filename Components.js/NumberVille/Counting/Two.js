import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Two(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(2).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
            if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          
          setPressed([...pressed, i])
        if((tally+1)===2){
          async function tada() {
            const { sound } = await Audio.Sound.createAsync(
              require('../../../assets/sounds/tada.mp3')
            );
           
            await sound.playAsync();
          }
          tada()

          setTimeout(() => {
            props.onSuccess();
          }, 1500);
        }
      }
     
    }

    for (let i = 0; i < 2; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback style={styles.box} onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
            
           <Text style={styles.imageContainer}>
           <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/trucks/headlights.png')}/>  
                </View>
           </Text>
          
            </TouchableWithoutFeedback>

            <View>
           <Text style={pressed.includes(i)? styles.visible : styles.invisible}>{counters[i]}</Text>
           </View>
           
            </View>);
        }

  return (
    <View >
      {block}
      </View>
  )
}

export default Two

const styles = EStyleSheet.create({
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginTop: 100,
      },
      picture:{
        width: 280, height: 170,
      },
      buttonPressed: {
        width: 280, height: 170,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '8rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: -50,
          left: 100
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -50,
          left: 100
        }
    })