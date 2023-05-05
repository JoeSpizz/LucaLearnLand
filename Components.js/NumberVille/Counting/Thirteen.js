import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Thirteen(props) {  const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(13).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])
        
          if((tally+1)===13){
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

    for (let i = 0; i < 13; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
           <Text style={styles.imageContainer}>
            <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/trash-truck.png')}/>  
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

export default Thirteen

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
     imageContainer:{   
        alignItems: 'center',
        height: 75
      },
      picture:{
        width: 135, height: 80,
      },
      buttonPressed: {
        width: 135, height: 80,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '4rem',
          fontWTen: 'bold',
          position: 'absolute',
          bottom: -10,
          left: 40
        },
        visibleTen:{
            color: '#00FC00',
            fontSize: '4rem',
            fontWTen: 'bold',
            position: 'absolute',
            bottom: -10,
            left: 20
          },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -20,
          left: 30
        }
    })