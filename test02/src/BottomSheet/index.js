import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {Animated, TouchableWithoutFeedback, PanResponder} from 'react-native';

import {AnimatedBackdrop, AnimatedContainer, Separator} from './styles';

const BottomActionSheet = ({children}, ref) => {
  const [containerHeight, setContainerHeight] = useState(0);

  const backDropVisible = new Animated.Value(0);
  const bottom = new Animated.Value(containerHeight);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, {dy}) => dy >= 20,
    onPanResponderMove: (_, {dy}) => bottom.setValue(dy),

    onPanResponderRelease: (_, {dy}) => {
      bottom.flattenOffset();

      const percentageToClose = 0.2 * containerHeight;

      if (dy > percentageToClose) {
        return close();
      }

      open();
    },
  });

  function animatedIn() {
    backDropVisible.setValue(1);
    Animated.spring(bottom, {toValue: 0}).start();
  }

  function animateOut() {
    Animated.spring(bottom, {toValue: containerHeight}).start(() => {
      backDropVisible.setValue(0);
    });
  }

  function open() {
    animatedIn();
  }

  function close() {
    animateOut();
  }

  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  return (
    <>
      <TouchableWithoutFeedback onPress={() => animateOut()}>
        <AnimatedBackdrop
          style={{
            opacity: bottom.interpolate({
              inputRange: [0, containerHeight],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
            left: backDropVisible.interpolate({
              inputRange: [0, 1],
              outputRange: [1000, 0],
              extrapolate: 'clamp',
            }),
          }}
        />
      </TouchableWithoutFeedback>
      <AnimatedContainer
        {...panResponder.panHandlers}
        onLayout={event => setContainerHeight(event.nativeEvent.layout.height)}
        style={{
          transform: [
            {
              translateY: bottom.interpolate({
                inputRange: [0, containerHeight],
                outputRange: [0, containerHeight],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}>
        <Separator />
        {children}
      </AnimatedContainer>
    </>
  );
};

export default forwardRef(BottomActionSheet);
