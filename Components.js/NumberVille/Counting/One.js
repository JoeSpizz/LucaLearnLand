import {useState} from 'react'
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import {Audio} from 'expo-av'

function One(props) {
    const [pressed, setPressed] = useState(false)
    
    const handlePress = ()=>{
        setPressed(true)
        async function countOne() {
          const { sound, status } = await Audio.Sound.createAsync(
            require('../../../assets/numbers/1s.mp3')
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
        countOne()
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

  return (
    <View  >
    <TouchableWithoutFeedback onPressIn={()=>handlePress()}>
    <Text style={styles.imageContainer}>
      <View style={styles.test}>
          <Image style={pressed ? styles.buttonPressed : styles.picture} source={require('../../../assets/countgame/grave-digger.png')}/>  
          </View>
          </Text>
      </TouchableWithoutFeedback>
      <View>
     <Text style={pressed ? styles.visible : styles.invisible}>{1}</Text>
     </View>
      </View>
  )
}

export default One

const styles = EStyleSheet.create({
    imageContainer:{
        maxHeight: "100%",
        alignItems: 'center',
        marginTop: 150
      },
      picture:{
        width: 280, height: 230,
      },
      buttonPressed: {
        width: 280, height: 230,
         opacity: .3,
        },
        visible:{
          color: '#00FC00',
          fontSize: '10rem',
          fontWeight: 'bold',
          position: 'absolute',
          bottom: 0,
          left: 100
        },
        invisible:{
          color: 'transparent'
        },
    })