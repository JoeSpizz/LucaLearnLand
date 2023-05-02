import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Four(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(4).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])

          if((tally+1)===4){
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
        }}}

    for (let i = 0; i < 4; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback style={styles.box} onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
            <Text style={styles.imageContainer}>
                <View>
                    <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/trucks/truck6.png')}/>  
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
    <View >
      {block}
      </View>
  )
}

export default Four

const styles = EStyleSheet.create({
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginBottom: 35
      },
      picture:{
        width: 180, height: 150,
      },
      buttonPressed: {
        width: 180, height: 150,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '7rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: -10,
          left: 60,
        
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: -50,
          left: 60,
          
        }
    })