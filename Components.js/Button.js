import { Animated, View, TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useRef, useEffect } from 'react';


export default function Button({label, nav, navigation}) {
    const translationX = useRef(new Animated.Value(-160)).current;
    const translationY = useRef(new Animated.Value(-50)).current
   useEffect(()=>{Animated.timing(translationX, {
    toValue: 0,
    useNativeDriver: true,
  }).start();})
  useEffect(()=>{Animated.timing(translationY, {
    toValue: (0),
    useNativeDriver: true,
  }).start();})

  return (
    <Animated.View style={{
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginLeft: 15,
        transform: [{ translateX: translationX}, {translateY: translationY}],
      }}>
    <TouchableOpacity style={styles.button} 
    onPress={() => navigation.navigate(`${nav}`)}
    // onPress={wiggle}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  </Animated.View>
  )
}

const styles = EStyleSheet.create({
    // buttonContainer: {
    //   alignItems: 'flex-start',
    //   justifyContent: 'space-between',
    //   marginLeft: 15,
    //   transform: { translateX: translationX},
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