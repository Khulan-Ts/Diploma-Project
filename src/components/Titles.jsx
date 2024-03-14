import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from 'expo-font';

export const FONT = ({
  type = "Regular",
  text,
  style,
}) => {
  let fontName = 'Outfit-Regular'; 

  switch (type) {
    case 'Subtitle':
      fontName = 'Outfit-Medium';
      break;
    case 'Title':
      fontName = 'Outfit-ExtraBold';
      break;
    case 'Body':
      fontName = 'Outfit-Light'
    case 'Subtitle2':
      fontName = 'Outfit-Regular'
    default:
      break;
  }

  const [fontLoaded] = useFonts({
    'Outfit-Regular': require('../../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('../../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-ExtraBold': require('../../assets/fonts/Outfit-ExtraBold.ttf'),
    'Outfit-Light': require('../../assets/fonts/Outfit-Light.ttf'),
  });

  const TextStyle = [
    styles.text,
    { fontFamily: fontLoaded ? fontName : 'Arial', fontSize: getFontSize(type) },
    style,
  ];

  return (
    <Text style={TextStyle}>
      {text}
    </Text>
  );
};

const getFontSize = (type) => {
  switch (type) {
    case 'Regular':
      return 28;
    case 'Subtitle':
      return 28;
    case 'Title':
      return 50;
    case 'Body':
      return 18;
    case 'Subtitle2':
      return 23
    default:
      return 28; 
  }
};

const styles = StyleSheet.create({
  text: {
    color: "#3d3562",
  },
});

export default FONT;
