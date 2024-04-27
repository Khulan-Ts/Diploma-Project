
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { OverlayImage } from './src/components/OverlayImage';

const AnotherScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <OverlayImage image={require('./assets/images/flags.png')} style={{width: width * 0.25, height: height * 0.4, borderRadius: 50}}/>
    </View>
  );
};

export default AnotherScreen;
