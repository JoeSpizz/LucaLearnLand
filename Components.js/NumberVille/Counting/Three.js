import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Three(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(3).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
            if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])
        if((tally+1)===3){
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

    for (let i = 0; i < 3; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
            
           <Text style={styles.imageContainer}>
           <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/trucks/firetruck.png')}/>  
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

export default Three

const styles = EStyleSheet.create({
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginTop: 40,
        marginBottom: 20
      },
      picture:{
        width: 300, height: 130,
      },
      buttonPressed: {
        width: 300, height: 130,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '7rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: -30,
          left: 110
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -30,
          left: 110
        }
    })