
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { OverlayImage } from './src/components/OverlayImage';
import FONT from './src/components/Titles';
import Button from './src/components/Button';
import HoverCard from './src/components/hoverCard';
import Pamphlet from './src/components/pamphlet';
import TeacherRow from './src/components/teacherRow';

const AnotherScreen = () => {
  const { width, height } = useWindowDimensions();
  const teachers = [
    { id: 1, image: require('./assets/images/lei_teachers/1.png'), name: "teacher #1" },
    { id: 2, image: require('./assets/images/lei_teachers/2.png'), name: "teacher #2" },
    { id: 3, image: require('./assets/images/lei_teachers/3.png'), name: "teacher #3" },
    { id: 4, image: require('./assets/images/lei_teachers/4.png'), name: "teacher #4" },
    { id: 5, image: require('./assets/images/lei_teachers/5.png'), name: "teacher #5" },
    { id: 6, image: require('./assets/images/lei_teachers/6.png'), name: "teacher #6" },
    { id: 7, image: require('./assets/images/lei_teachers/7.png'), name: "teacher #7" },
    { id: 8, image: require('./assets/images/lei_teachers/8.png'), name: "teacher #8" }
  ];
  return (
    
    <View style={{ flex: 1, backgroundColor: 'gray'}}>
      <TeacherRow teachers={teachers}/>
    </View>
  );
};

export default AnotherScreen;
