import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Six(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(6).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const readNumbers=[require(`../../../assets/numbers/1.mp3`),
            require(`../../../assets/numbers/2.mp3`),
            require(`../../../assets/numbers/3.mp3`),
            require(`../../../assets/numbers/4.mp3`),
            require(`../../../assets/numbers/5.mp3`)
          ]
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])
          if((tally+1)<6){
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
          if((tally+1)===6){
            async function countLast() {
              const { sound, status } = await Audio.Sound.createAsync(
                require('../../../assets/numbers/6s.mp3')
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

    for (let i = 0; i < 6; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback style={styles.box} onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
            
           <Text style={styles.imageContainer}>
           <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/trucks/blaze.png')}/>  
                </View>
           </Text>
          
            </TouchableWithoutFeedback>

            <View>
           <Text style={pressed.includes(i)? styles.visible : styles.invisible}>{counters[i]}</Text>
           </View>
           
            </View>);
        }

  return (
    <View style={styles.container}>
      {block}
      </View>
  )
}

export default Six

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
        marginTop: 30
      },
      picture:{
        width: 130, height: 90,
      },
      buttonPressed: {
        width: 130, height: 90,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '6rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 50,
          left: 40
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: 30,
          left: 40
        }
    })