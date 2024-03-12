import * as React from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image
} from "react-native";

import { useFonts } from 'expo-font'

export const CardButton = ({
  image,
  text,
  onPress,
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [fontLoaded] = useFonts({
    Outfit: require('../../assets/fonts/Outfit-Regular.ttf'),
  });

  const TextStyle = [
    styles.text,
    { fontFamily: fontLoaded ? 'Outfit' : 'Arial' }
  ];
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => {
        setIsHovered(true);
      }}
      onHoverOut={() => {
        setIsHovered(false);
      }}
    >
      <Image
        source={image}
        style={[styles.image, isHovered && { backgroundColor: "rgba(0, 0, 0, 0.4)" }]}
      />
      <View style={styles.label}>
      <Text style={TextStyle} numberOfLines={1}>{text}</Text>
      </View>
    </Pressable>
  );
};
export default CardButton;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 255,
    height: 157,
  },
  label:{
    backgroundColor: '#FFC116',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: 10,
    padding: 4,
    zIndex: 1,
    marginTop: -12
  },
  text: {
    color: "#3d3562",
    fontSize: 15,
  },
});
