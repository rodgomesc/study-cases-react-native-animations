import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {event} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';

export default function App() {
  const translateX = new Animated.Value(0);
  const onGestureEvent = event([
    {
      nativeEvent: {
        translationX: translateX,
      },
    },
  ]);
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            styles.box,
            {
              transform: [{translateX: translateX}],
            },
          ]}>
          <Text>hi</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
});
