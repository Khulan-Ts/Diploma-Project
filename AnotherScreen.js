
import React from 'react';
import { View, Text } from 'react-native';
import HoverButton from './src/components/hoverButtons';

const AnotherScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row'}}>
      <HoverButton icon={require("./assets/icons/teachers.png")} text={"99+ Teachers"} nummber={'99+'}></HoverButton>
      <HoverButton icon={require("./assets/icons/research.png")} text={"12+ Research"} nummber={'12+'} ></HoverButton>
      <HoverButton icon={require("./assets/icons/department.png")} text={"15+ Departments"} nummber={'15+'}></HoverButton>
      </View> 
    </View>
  );
};

export default AnotherScreen;
