import * as React from "react";

import {
  View,
  StyleSheet,
  Text,
  Pressable,
  useWindowDimensions
} from "react-native";

import { useFonts } from 'expo-font'
import ArrowIcon from "../../assets/icons/arrow";

const Button = ({
  type = "Primary",
  text,
  numberOfLines = 1,
  onPress,
  onHoverIn,
  onHoverOut,
  isPressedState,
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [fontLoaded] = useFonts({
    "Outfit-Regular": require('../../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-Bold": require('../../assets/fonts/Outfit-Bold.ttf'),
    "Outfit-SemiBold": require('../../assets/fonts/Outfit-SemiBold.ttf'),
    "Outfit-Medium": require('../../assets/fonts/Outfit-Medium.ttf'),
    "Outfit-ExtraBold": require('../../assets/fonts/Outfit-ExtraBold.ttf')
  });

  const { width, height } = useWindowDimensions();

  React.useEffect(()=>{
    setIsPressed(isPressedState)
  },[isPressedState]);

  const ButtonStyles = [
    styles.common,
    type === "Primary" && isHovered && { borderBottomWidth: 1, borderColor: '#FCB900' },
    type === "Secondary" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Third" && {paddingRight: 10, paddingLeft: 10},
    type === "Third" && isPressed && {backgroundColor: '#FCB900'},
    type === "Fourth" && isPressed && {backgroundColor: '#FFDB78'},
    type === "Fifth" && {backgroundColor: '#FCB900', padding: 15, borderRadius: 20},
    type === "Sixth" && {backgroundColor: '#3D2562', padding: 10, borderRadius: 20},
    type === "Seven" && isHovered && { backgroundColor: "#EDF0FF"},
    type === "Eight" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Nine" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Apply2" && {
      backgroundColor: '#FFDB78', 
      paddingBottom: 20, 
      paddingTop: 20,
      borderRadius: 30,
      width: width * 0.16,
      },
    type === "Ten" && {backgroundColor: '#3d2562', width: width * 0.3, paddingTop: 10, paddingBottom: 10},
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
    type === "Fourth" && {color: '#3D2562'},
    type === "Fourth" && isHovered && {color: '#FFDB78'},
    type === "Fourth" && isPressed && isHovered && {color: '#3D2562'},
    type === "Fifth" && {color: '#3D2562', fontSize: 15},
    type === "Sixth" && {color: '#FCB900', fontSize: 15},
    {fontFamily: (fontLoaded && type !== "Apply" && type !== "Apply2" && type !== "Nine" && type !== "Ten") ? 
    'Outfit-Regular' : (fontLoaded && type === "Apply") ? 'Outfit-Bold' : 
    (fontLoaded && type === "Apply2") ? 'Outfit-SemiBold': (fontLoaded && type === "Nine") ? 'Outfit-Medium' 
    : (fontLoaded && type === "Ten") ? 'Outfit-ExtraBold': 'Arial' },
    type === "Apply" && {fontSize: 25, color:"#3D2562"},
    type === "Seven" && {color: '#000', fontSize: 18},
    type === "Eight" && {color: '#3D2562'},
    type === "Apply2" && {color: '#3D2562', fontSize: 25},
    type === "Nine" && {color: '#3D2562', fontSize: 20},
    type === 'Ten' && {color: '#fff', fontSize: 17, letterSpacing: 2},
  ]; 
  const TextWidth= [
    style?.width && {width: style.width, paddingLeft: 5, paddingRight: 5},
  ];
  return (
    <View>
      {type !== "Apply" &&
      <View style={ButtonStyles}>
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
          <View style={TextWidth}>
            <Text numberOfLines={numberOfLines} style={TextStyle}>
              {text}
            </Text>
          </View>
        </Pressable>
        </View>
      }

      {type === "Apply" &&  
        <Pressable
          onPress={onPress}
          style={[styles.apply,{width: width * 0.25, height: height * 0.15}]}
        >
          <Text numberOfLines={1} style={TextStyle}>
            {text}
          </Text>
          <View style={styles.iconContainer}>
            <ArrowIcon width={16} height={16}></ArrowIcon>
          </View>
        </Pressable>
      }
    </View>
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
    fontSize: 18,
  },
  apply:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  iconContainer:{
    width: 31,
    height: 31, 
    borderRadius: 50,
    backgroundColor: "#3D2562",
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 51,
  }
});