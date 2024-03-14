import * as React from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";

import { useFonts } from 'expo-font'
import ArrowIcon from "../../assets/icons/arrow";

export const Button = ({
  type = "Primary",
  text,
  numberOfLines = 1,
  onPress,
  onHoverIn,
  onHoverOut,
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false)
  const [fontLoaded] = useFonts({
    "Outfit-Regular": require('../../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-Bold": require('../../assets/fonts/Outfit-Bold.ttf'),
  });

  const ButtonStyles = [
    styles.common,
    type === "Primary" && isHovered && { borderBottomWidth: 1, borderColor: '#FCB900' },
    type === "Secondary" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Third" && {paddingRight: 10, paddingLeft: 10},
    type === "Third" && isPressed && {backgroundColor: '#FCB900'},
    type === "Fourth" && isPressed && {backgroundColor: '#FFDB78'},
    type === "Fifth" && {backgroundColor: '#FCB900', padding: 15, borderRadius: 20},
    type === "Sixth" && {backgroundColor: '#3D2562', padding: 10, borderRadius: 20},
    style,
  ];
  const TextStyle = [
    styles.text,
    type === "Primary" && {color: '#FFFF'},
    (type === "Secondary"|| "Third" || "Fourth") && isPressed && {color: '#3D2562'},
    type === "Primary" && isPressed && {color: '#FCB900'},
    type === "Secondary" && isHovered && {color: '#B592EB'},
    type === "Secondary" && {fontSize: 20},
    type === "Third" && isHovered && {color: '#FCB900'},
    type === "Fourth" && isHovered && {color: '#FFDB78'},
    type === "Fifth" && {color: '#3D2562', fontSize: 15},
    type === "Sixth" && {color: '#FCB900', fontSize: 15},
    {fontFamily: (fontLoaded && type!== "Apply") ? 'Outfit-Regular':(fontLoaded && type=== "Apply")? 'Outfit-Bold' : 'Arial' },
    type === "Apply" && {fontSize: 25, color:"#3D2562"}
  ];
  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => {
        onHoverIn?.();
        setIsHovered(true);
      }}
      onHoverOut={() => {
        onHoverOut?.();
        setIsHovered(false);
      }}
      onFocus={()=> setIsPressed(true)}
      onBlur={()=> setIsPressed(false)}
    >
      {type !== "Apply" &&
      <View style={ButtonStyles}>
        <Text numberOfLines={numberOfLines} style={TextStyle}>
          {text}
        </Text>
      </View>}
      {type === "Apply" &&
      <View style={styles.apply}>
        <Text numberOfLines={1} style={TextStyle}>
          {text}
        </Text>
        <View style={styles.iconContainer}>
          <ArrowIcon width={16} height={16}></ArrowIcon>
        </View>
      </View>}
    </Pressable>
  );
};
export default Button;

const styles = StyleSheet.create({
  common: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "transparent",
  },
  text: {
    color: "#000",
    fontSize: 18
  },
  apply:{
    width: 345,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#FFF'
  },
  iconContainer:{
    width: 31,
    height: 31, 
    borderRadius: 50,
    backgroundColor: "#3D2562",
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 51
  }
});
