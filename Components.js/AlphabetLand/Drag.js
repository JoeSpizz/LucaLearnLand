import React, { useRef, useState } from 'react';
import { View, PanResponder, Animated, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const DraggableBall = () => {
  const [ballPosition] = useState(new Animated.ValueXY({ x: 150, y: 80 }));
  const [path, setPath] = useState('');

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: () => {
        setPath(`M${ballPosition.x._value},${ballPosition.y._value} `);
      },
      onPanResponderMove: (_, gestureState) => {
        const { dx, dy, moveX, moveY } = gestureState;
        ballPosition.setValue({
          x: ballPosition.x._value + dx,
          y: ballPosition.y._value + dy,
        });
        setPath(prevPath => `${prevPath}L${moveX},${moveY} `);
        gestureState.dx = 0; // Reset dx value
        gestureState.dy = 0; // Reset dy value
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill}>
        <Path d={path} stroke="blue" strokeWidth={4} fill="none" />
      </Svg>
      <Animated.View
        style={[styles.ball, ballPosition.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
});

export default DraggableBall;
