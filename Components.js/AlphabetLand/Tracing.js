import { View, Text, PanResponder, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import DraggableBall from './Drag'

const line1 = "M 190,50 L 30,450";
const line2 = "M 190,50 L 350,450";
const line3 = "M 110,250 L 270,250";

function Tracing({ navigation }) {
  useEffect(() => {
    async function welcome() {
      const { sound, status } = await Audio.Sound.createAsync(
        require('../../assets/sounds/letter-trace-1.mp3')
      );
      await sound.playAsync();
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          sound.unloadAsync();
        }
      });
      if (status && status.didJustFinish) {
        sound.unloadAsync();
      }
    }
    welcome();
  }, []);

  const [lastPanPosition, setLastPanPosition] = useState({ x: 0, y: 0 });
  const [pan] = useState(new Animated.ValueXY({ x: 10, y: 565 }));
  const [panResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const pathPoint = pathRef.getPointAtLength(gestureState.dy);
        const x = pathPoint.x - 20 + lastPanPosition.x;
        const y = pathPoint.y + 115 + lastPanPosition.y;
        pan.x.setValue(pan.x._value + x);
        pan.y.setValue(pan.y._value + y);
      },
      onPanResponderRelease: (evt, gestureState) => {
        setLastPanPosition({ x: gestureState.dx, y: gestureState.dy });
      }
    })
  );

  const goHome = () => {
    navigation.navigate(`Letters`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracings</Text>
      <Text style={styles.title2}>The future home of the tracing game</Text>

      <View style={styles.gameContainer}>
      <Text style={styles.text}>A</Text>
      <DraggableBall />
    </View>
      <Text style={styles.button} onPress={goHome}>
        Back to the Alphabet Land
      </Text>
    </View>
  );
}

export default Tracing;

const styles = EStyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%',
  },
  title: {
    marginTop: 30,
    fontSize: '2.5rem',
    textAlign: 'center',
    color: '#FFFF00',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  boxContainer: {
    flex: 1,
  },
  draggable: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: 'blue',
    position: 'absolute',
  },
  drag: {
    position: 'absolute',
    left: 300,
    bottom: 300
  },
    title2:{
      fontSize:'1.5rem',
      textAlign: 'center',
      color: "#FFFF00",
      fontWeight: 'bold'
    },
    text: {
      fontSize: 100,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#A50000',
        backgroundColor:'#A50000',
        position: 'absolute',
        bottom: 0,
        width: "100%",
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFF00',
        paddingTop: 10,
        fontSize: '1.5rem'
      }
})