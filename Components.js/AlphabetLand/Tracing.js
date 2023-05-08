import { View, Text, PanResponder, Animated } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import Svg, { Path } from 'react-native-svg';
import Drag from './Drag.js'



const line = "M 175,50 L 30,450"

// M 175,0 L 320,450 M 255,250 L 95,255";

function Tracing({ navigation }) {
  useEffect(() => {
    async function welcome() {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/sounds/letter-trace-1.mp3')
      );
      await sound.playAsync();
    }
    welcome();
  }, []);

  const pathRef = useRef();
  const pan = useRef(new Animated.ValueXY({ x: 10, y: 565 })).current;
  const [lastPanPosition, setLastPanPosition] = useState({ x: 0, y: 0 });
  console.log(lastPanPosition)
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const pathLength = pathRef.current.getTotalLength();
        const pathPoint = pathRef.current.getPointAtLength(pathLength + gestureState.dy);
        const x = pathPoint.x-20+ lastPanPosition.x ; // adjust for the radius of the ball
        console.log("last pan ")
        console.log(lastPanPosition)
        console.log('and then x ')
        console.log(x)
        const y = pathPoint.y+115 + lastPanPosition.y; // adjust for the radius of the ball
        if (pathPoint.x >= 30 && pathPoint.x <= 175) {
           pan.x.setValue(x);
      pan.y.setValue(y);;
      setLastPanPosition({x: x, y: y})
        }
      },
      onPanResponderRelease:(_, gestureState)=>{
       
      }
    })
  ).current;

  const goHome = () => {
    navigation.navigate(`Letters`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracings</Text>
      <Text style={styles.title2}>The future home of the tracing game</Text>

      <Svg style={styles.trail}>
        <Path
          ref={pathRef}
          d={line}
          stroke="yellow"
          strokeWidth="4"
          fill="none"
        />
        
      </Svg>
 

      <Animated.View
        style={[styles.draggable, pan.getLayout()]}
        {...panResponder.panHandlers}
      />

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