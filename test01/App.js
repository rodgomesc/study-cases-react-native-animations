import React, {useState} from 'react';
import {SafeAreaView, View, Text, Animated} from 'react-native';

export default function App() {
  const [width, setWidth] = useState(new Animated.Value(0));
  const [height, setHeight] = useState(new Animated.Value(4));

  Animated.sequence([
    Animated.timing(width, {
      toValue: 420,
      duration: 1500,
    }),

    Animated.timing(height, {
      toValue: 500,
      duration: 700,
    }),
  ]).start();

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View
        style={{
          width: width,
          height: height,
          backgroundColor: '#000',
        }}></Animated.View>
    </SafeAreaView>
  );
}
