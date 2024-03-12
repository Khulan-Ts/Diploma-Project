import * as React from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";

import { useFonts } from 'expo-font'

export const Button = ({
  type = "Primary",
  border,
  text,
  onPress,
  onHoverIn,
  onHoverOut,
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false)
  const [fontLoaded] = useFonts({
    Outfit: require('../../assets/fonts/Outfit-Regular.ttf'),
  });

  const togglePress= () =>{
    setIsPressed(!isPressed)
  }

  const ButtonStyles = [
    styles.common,
    border && { borderColor: "#3d2562", borderWidth: 1 },
    isHovered && type === "Primary" && { backgroundColor: "#3d3562" },
    isHovered && type === "Secondary" && { borderBottomWidth: 1, borderColor: '#FCB900' },
    style,
  ];
  const TextStyle = [
    styles.text,
    type === "Secondary" && { color: "#fff" },
    isPressed && {color: '#FCB900'},
    { fontFamily: fontLoaded ? 'Outfit' : 'Arial' }
  ];
  return (
    <Pressable
      onPress={() => {onPress?.();
      togglePress()
    }}
      onHoverIn={() => {
        onHoverIn?.();
        setIsHovered(true);
      }}
      onHoverOut={() => {
        onHoverOut?.();
        setIsHovered(false);
      }}
    >
      <View style={ButtonStyles}>
        <Text numberOfLines={1} style={TextStyle}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  common: {
    padding: 8,
    borderRadius: 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "transparent",
  },
  text: {
    color: "#3d3562",
  },
});
