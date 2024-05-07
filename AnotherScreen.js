
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { OverlayImage } from './src/components/OverlayImage';
import FONT from './src/components/Titles';
import Button from './src/components/Button';
import HoverCard from './src/components/hoverCard';
import Pamphlet from './src/components/pamphlet';

const AnotherScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    
    <View style={{ flex: 1, backgroundColor: 'gray'}}>
      <Pamphlet/>
    </View>
  );
};

export default AnotherScreen;
