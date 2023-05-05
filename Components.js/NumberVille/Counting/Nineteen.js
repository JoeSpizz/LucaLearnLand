import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Nineteen(props) {  const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(19).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])
        
          if((tally+1)===19){
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

    for (let i = 0; i < 19; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
           <Text style={styles.imageContainer}>
            <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/racecar-4.png')}/>  
            </View>
           </Text>
          </TouchableWithoutFeedback>
          <View>

          { counters[i]>9 ? <Text style={pressed.includes(i)? styles.visibleTen : styles.invisible}>
               {counters[i]}
            </Text> : <Text style={pressed.includes(i)? styles.visible : styles.invisible}>
               {counters[i]}
            </Text>}

          </View>
        </View>);
    }

  return (
    <View style={styles.container}>
      {block}
    </View>
  )
}

export default Nineteen

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 10
      },
     imageContainer:{   
        alignItems: 'center',
        height: 77
      },
      picture:{
        width: 95, height: 70,
      },
      buttonPressed: {
        width: 95, height: 70,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '3rem',
          fontWTen: 'bold',
          position: 'absolute',
          bottom: 10,
          left: 35
        },
        visibleTen:{
            color: '#00FC00',
            fontSize: '3rem',
            fontWTen: 'bold',
            position: 'absolute',
            bottom: 10,
            left: 20
          },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -15,
          left: 25
        }
    })