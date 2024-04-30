
import React from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
import { OverlayImage } from './src/components/OverlayImage';
import FONT from './src/components/Titles';
import Button from './src/components/Button';
import HoverCard from './src/components/hoverCard';

const AnotherScreen = () => {
  const { width, height } = useWindowDimensions();
  return (
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
      

      <HoverCard
                image={require("./assets/images/sports.png")}
                type={"Sport"}
                title={"Sport Complex"}
                bottomText={'Schedule: Monday 4:00 - 6:00 pm \n            Wednesday 4:00 - 6:00 pm\n            Friday 4:00 - 6:00 pm'}
              >
                The sports complex is a three-floor building currently featuring a large indoor sports hall and cross-fit style gym.
                {"\n"}
                {"\n"}
                The cross-fit style gym has full equipment and tools for people who want to spend their time useful.
                {"\n"}
                {"\n"}
                To make a reservation at sport hall:
                {"\n"}+976 99223366
                {"\n"}
                To get price information on cross gym:
                {"\n"}
                +976 99223366
              </HoverCard>
    </View>
  );
};

export default AnotherScreen;
