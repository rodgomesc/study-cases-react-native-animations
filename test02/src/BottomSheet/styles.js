import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const AnimatedBackdrop = Animated.createAnimatedComponent(styled.View`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`);

export const AnimatedContainer = Animated.createAnimatedComponent(styled.View`
  background: #fff;
  position: absolute;
  height: 300px;
  bottom: 0;
  left: 0;
  right: 0;
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  padding: 24px;
`);

export const Separator = styled.View`
  height: 3px;
  border-radius: 3px;
  width: 80px;
  background: gray;
  margin: 0 auto;
`;
