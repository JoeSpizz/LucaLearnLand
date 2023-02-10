import { Animated, View, Text, Easing } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useRef, useEffect } from 'react';


export default function Button({label, nav, navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(-50)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    
    const engine = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })

   useEffect(()=>{Animated.timing(transX, {
    toValue: 0,
    useNativeDriver: true,
  }).start();})
  useEffect(()=>{Animated.timing(transY, {
    toValue: (0),
    useNativeDriver: true,
  }).start();})

let down = Animated.timing(spinValue,{
    toValue: -.01,
    duration: 75,
    easing: Easing.linear, 
    useNativeDriver: true  
  })
  let up = Animated.timing(spinValue,{
    toValue: .01,
    duration: 75,
    easing: Easing.linear, 
    useNativeDriver: true  
  })

const wiggle = ()=>{
        Animated.sequence([
            up,
            down,
            up,
            down,
            up,
            down,
            up,
            down,
            up,
            down,
            Animated.timing(spinValue,{
                toValue: 0,
                duration: 100,
                easing: Easing.linear, 
                useNativeDriver: true  
              })
        ]).start(()=> {navigation.navigate(`${nav}`)});
     
}

  return (
    <Animated.View style={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 15,
        transform: [{ translateX: transX}, {translateY: transY}, {rotate: engine}],
      }}>
    <Text style={styles.button} 
    // onPress={() => navigation.navigate(`${nav}`)}
    onPress={wiggle}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </Text>
  </Animated.View>
  )
}

const styles = EStyleSheet.create({
    // buttonContainer: {
    //   alignItems: 'flex-start',
    //   justifyContent: 'space-between',
    //   marginLeft: 15,
    //   transform: { translateX: transX},
    // },
    button: {
      borderRadius: 10,
      borderWidth: 5,
      borderColor: '#00FC00',
      backgroundColor:'#00FC00',
      marginTop: 20,
    },
    buttonLabel: {
      color: '#195DF9',
      fontSize: 50,
      fontWeight: '800'
    },
  });