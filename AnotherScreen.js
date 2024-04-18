
import React from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';

const AnotherScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button type={"Fourth"} text={"WHY THE IS NOT WORKING?"} numberOfLines={2} style={{width: 144}}></Button>
    </View>
  );
};

export default AnotherScreen;
