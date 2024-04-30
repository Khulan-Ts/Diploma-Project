import * as React from "react";
import { View, StyleSheet, Text, useWindowDimensions } from "react-native";
import { useFonts } from 'expo-font';

export const FONT = ({
  type = "Regular",
  children,
  lines,
  style: externalStyle,
}) => {
  let fontName = 'Outfit-Regular'; 
  const windowWidth = useWindowDimensions().width;
  const scaleFactor = windowWidth / 1360;

  switch (type) {
    case 'Subtitle':
      fontName = 'Outfit-Medium';
      break;
    case 'Title':
      fontName = 'Outfit-ExtraBold';
      break;
    case 'Body':
      fontName = 'Outfit-Light';
      break;
    case 'Subtitle2':
      fontName = 'Outfit-Regular';
      break;
    case 'Title2':
      fontName = 'Outfit-SemiBold';
      break;
    case 'Title3':
      fontName = 'Outfit-Bold';
      break;
    default:
      break;
  }

  const [fontLoaded] = useFonts({
    'Outfit-Regular': require('../../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-Medium': require('../../assets/fonts/Outfit-Medium.ttf'),
    'Outfit-ExtraBold': require('../../assets/fonts/Outfit-ExtraBold.ttf'),
    'Outfit-Light': require('../../assets/fonts/Outfit-Light.ttf'),
    'Outfit-SemiBold': require('../../assets/fonts/Outfit-SemiBold.ttf'),
    'Outfit-Bold': require('../../assets/fonts/Outfit-Bold.ttf'),
  });

  const calculateFontSize = (originalFontSize) => {
    return originalFontSize * scaleFactor;
  };

  const modifyStyle = () => {
    if (externalStyle && externalStyle.fontSize) {
      return {
        ...externalStyle,
        fontSize: calculateFontSize(externalStyle.fontSize)
      };
    }
    return externalStyle;
  };

  const modifiedStyle = modifyStyle();

  const TextStyle = [
    styles.text,
    { fontFamily: fontLoaded ? fontName : 'Arial' },
    modifiedStyle,
  ];

  return (
    <Text style={TextStyle} numberOfLines={lines} >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#3d2562",
  },
});

export default FONT;
