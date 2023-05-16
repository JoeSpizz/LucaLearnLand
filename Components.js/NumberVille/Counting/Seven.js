import {useState, useEffect} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function Seven(props) {
    const [pressed, setPressed] = useState([]);
    const [counters, setCounters] = useState(Array(7).fill(null));
    const [tally, setTally]= useState(0)
    const block = []
    const readNumbers=[require(`../../../assets/numbers/1.mp3`),
    require(`../../../assets/numbers/2.mp3`),
    require(`../../../assets/numbers/3.mp3`),
    require(`../../../assets/numbers/4.mp3`),
    require(`../../../assets/numbers/5.mp3`),
    require(`../../../assets/numbers/6.mp3`)
  ]

  useEffect(() => {
    return () => {
      // Clean up audio resources
      Audio.Sound.stopAsync();
    };
  }, []);

const handlePress = (i)=>{
if (!counters[i]) {
  const newCounters = [...counters];
  newCounters[i] = tally + 1;
  setCounters(newCounters);
  setTally(tally+1);
  setPressed([...pressed, i])
  if((tally+1)<7){
    async function count() {
      const { sound } = await Audio.Sound.createAsync(
        readNumbers[(tally)]
      );
     
      await sound.playAsync();
    }
    count()
    }
  if((tally+1)===7){
    async function countTwo() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../../assets/numbers/7s.mp3')
      );
     
      await sound.playAsync();
    }
    countTwo()
    setTimeout(() => {
      async function tada() {
        const { sound } = await Audio.Sound.createAsync(
          require('../../../assets/sounds/tada.mp3')
        );
       
        await sound.playAsync();
      }
      tada()
    }, 1200);

          setTimeout(() => {
            props.onSuccess();
          }, 1500);
          }
        }
     }

    for (let i = 0; i < 7; i++) {
        block.push(
        <View key={i} >
          <TouchableWithoutFeedback style={styles.box} onPressIn={pressed.includes(i) ? null: ()=>handlePress(i) }>
           <Text style={styles.imageContainer}>
            <View>
                <Image style={pressed.includes(i) ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/bicycle.png')}/>  
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

export default Seven

const styles = EStyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
     imageContainer:{   
        alignItems: 'center',
        maxHeight: 100,
        marginBottom: 20,
        marginTop: 20
      },
      picture:{
        width: 130, height: 100,
      },
      buttonPressed: {
        width: 130, height: 100,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '6rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 10,
          left: 35
        },
        invisible:{
          color: 'transparent',
          position: 'absolute',
          bottom: 10,
          left: 30
        }
    })