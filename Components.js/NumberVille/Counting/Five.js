import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Five(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(5).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const handlePress = (i)=>{
        if (!counters[i]) {
          const newCounters = [...counters];
          newCounters[i] = tally + 1;
          setCounters(newCounters);
          setTally(tally+1);
          setPressed([...pressed, i])

          if((tally+1)===5){
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

    for (let i = 0; i < 5; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
            <Text style={styles.imageContainer}>
                <View>
                    <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/big-rig.png')}/>  
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

export default Five

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 5
      },
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginBottom: 5
      },
      picture:{
        width: 150, height: 100,
      },
      buttonPressed: {
        width: 150, height: 100,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '6rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: -10,
          left: 50
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: 10,
          left: 40
        }
    })