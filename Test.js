import React from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';

const Test = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button type='Secondary' text="test"/>
      <Button type='Primary' text="test"/>
      <Button type='Third' text="test"/>
      <Button type='Fourth' text="test"/>
    </View>
  );
};

export default Test;
