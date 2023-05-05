import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Eight(props) {  const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(8).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])
        
          if((tally+1)===8){
            async function tada() {
                const { sound } = await Audio.Sound.createAsync(require('../../../assets/sounds/tada.mp3')
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

    for (let i = 0; i < 8; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback style={styles.box} onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
           <Text style={styles.imageContainer}>
            <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/orange-racer.png')}/>  
            </View>
           </Text>
          </TouchableWithoutFeedback>
          <View>
           <Text style={pressed.includes(i)? styles.visible : styles.invisible}>
               {counters[i]}
            </Text>
          </View>
        </View>);
    }

  return (
    <View style={styles.container}>
      {block}
    </View>
  )
}

export default Eight

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginBottom: 70,
        marginTop: 10
      },
      picture:{
        width: 80, height: 160,
      },
      buttonPressed: {
        width: 80, height: 160,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '6rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 30,
          left: 10
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: 10,
          left: 30
        }
    })