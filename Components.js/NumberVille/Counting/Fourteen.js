import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Fourteen(props) {  const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(14).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const readNumbers=[require(`../../../assets/numbers/1.mp3`),
    require(`../../../assets/numbers/2.mp3`),
    require(`../../../assets/numbers/3.mp3`),
    require(`../../../assets/numbers/4.mp3`),
    require(`../../../assets/numbers/5.mp3`),
    require(`../../../assets/numbers/6.mp3`),
    require(`../../../assets/numbers/7.mp3`),
    require(`../../../assets/numbers/8.mp3`),
    require(`../../../assets/numbers/9.mp3`),
    require(`../../../assets/numbers/10.mp3`),
    require(`../../../assets/numbers/11.mp3`),
    require(`../../../assets/numbers/12.mp3`),
    require(`../../../assets/numbers/13.mp3`)
  ]
const handlePress = (i)=>{
if (!counters[i]) {
  const newCounters = [...counters];
  newCounters[i] = tally + 1;
  setCounters(newCounters);
  setTally(tally+1);
  setPressed([...pressed, i])
  if((tally+1)<14){
    async function count() {
      const { sound, status } = await Audio.Sound.createAsync(
        readNumbers[(tally)]
      );
     
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    
      // Use the 'status' object to check if the audio is already finished
      if (status && status.didJustFinish) {
        sound.unloadAsync();
      }
    }
    count()
    }
  if((tally+1)===14){
    async function countLast() {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../../assets/numbers/14s.mp3')
      );
     
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
    
      // Use the 'status' object to check if the audio is already finished
      if (status && status.didJustFinish) {
        sound.unloadAsync();
      }
    }
    countLast()
    setTimeout(() => {
      async function tada() {
        const { sound, status } = await Audio.Sound.createAsync(
          require('../../../assets/sounds/tada.mp3')
        );
       
        await sound.playAsync();
        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.didJustFinish) {
            sound.unloadAsync();
          }
        });
      
        // Use the 'status' object to check if the audio is already finished
        if (status && status.didJustFinish) {
          sound.unloadAsync();
        }
      }
      tada()
    }, 500);
          setTimeout(() => {
            props.onSuccess();
          }, 1500);
          }
        }
     }

    for (let i = 0; i < 14; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
           <Text style={styles.imageContainer}>
            <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/airplane.png')}/>  
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

export default Fourteen

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
     imageContainer:{   
        alignItems: 'center',
        height: 75, marginTop: 4
      },
      picture:{
        width: 135, height: 65,
      },
      buttonPressed: {
        width: 135, height: 65,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '3rem',
          fontWTen: 'bold',
          position: 'absolute',
          bottom: 10,
          left: 65
        },
        visibleTen:{
            color: '#00FC00',
            fontSize: '3rem',
            fontWTen: 'bold',
            position: 'absolute',
            bottom: 10,
            left: 45
          },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -20,
          left: 30
        }
    })