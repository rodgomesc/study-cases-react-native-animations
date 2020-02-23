import React, {useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import BottomSheet from './src/BottomSheet';

const App = () => {
  const modalRef = useRef();

  return (
    <>
      <BottomSheet ref={modalRef}>
        <Text>Adicionar</Text>
      </BottomSheet>

      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => modalRef.current.open()}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderWidth: 1,
            borderColor: 'red',
            marginTop: 100,
            height: 48,
          }}>
          <Text>Adicionar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default App;
