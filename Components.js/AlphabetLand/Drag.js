import React, { useState } from 'react';
import { StyleSheet, View, Text, PanResponder, Animated } from 'react-native';


const Drag = () => {
    const [pan, setPan] = useState({ x: new Animated.Value(0), y: new Animated.Value(0) });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });


  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove:(_, gestureState) => {
        pan.x.setValue(lastPosition.x + gestureState.dx);
        pan.y.setValue(lastPosition.y + gestureState.dy);
      },
    onPanResponderRelease: (_, gestureState) => {
        setLastPosition({ x: lastPosition.x + gestureState.dx, y: lastPosition.y + gestureState.dy });
    }
      });

  return (
    <View style={styles.container}>
    <Animated.View
      style={[styles.box, { transform: [{ translateX: pan.x }, { translateY: pan.y }] }]}
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
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
});

export default Drag;
