import * as React from "react";
import { View, StyleSheet, Text, Pressable, useWindowDimensions, Image } from "react-native";
import { useFonts } from 'expo-font'
import ArrowIcon from "../../assets/icons/arrow";

const Button = ({
  type = "Primary",
  text,
  img,
  numberOfLines = 1,
  onPress,
  isPressedState,
  style,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const { width, height } = useWindowDimensions();
  const scaleFactor = width /1360

  const [fontLoaded] = useFonts({
    "Outfit-Regular": require('../../assets/fonts/Outfit-Regular.ttf'),
    "Outfit-Bold": require('../../assets/fonts/Outfit-Bold.ttf'),
    "Outfit-SemiBold": require('../../assets/fonts/Outfit-SemiBold.ttf'),
    "Outfit-Medium": require('../../assets/fonts/Outfit-Medium.ttf'),
    "Outfit-ExtraBold": require('../../assets/fonts/Outfit-ExtraBold.ttf')
  });

  React.useEffect(()=>{
    setIsPressed(isPressedState)
  },[isPressedState]);

  const calculateFontSize = (originalFontSize) => {
    return originalFontSize * scaleFactor
  }

  const ButtonStyles = [
    styles.common,
    {paddingRight: width * 0.004,
      paddingLeft: width * 0.004,
      paddingTop: width * 0.005,
      paddingBottom: width * 0.005,
      borderRadius: width * 0.008,},
    type === "Primary" && isHovered && { borderBottomWidth: 1, borderColor: '#FCB900' },
    type === "Secondary" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Third" && {paddingRight: width * 0.08, paddingLeft: 0.08},
    type === "Third" && isPressed && {backgroundColor: '#FCB900'},
    type === "Fourth" && isPressed && {backgroundColor: '#FFDB78'},
    type === "Fifth" && {backgroundColor: '#FCB900', padding: width * 0.011, borderRadius: width * 0.015},
    type === "Sixth" && {backgroundColor: '#3D2562', padding: 10, borderRadius: 20},
    type === "Seven" && isHovered && { backgroundColor: "#EDF0FF"},
    type === "Eight" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Nine" && isPressed && {backgroundColor: "#EDF0FF"},
    type === "Apply2" && {
      backgroundColor: '#FFDB78', 
      paddingBottom: width * 0.015, 
      paddingTop: width * 0.015,
      borderRadius: width * 0.022,
      width: width * 0.16,
      },
    type === "Ten" && {backgroundColor: '#3d2562', width: width * 0.3, paddingTop: width * 0.009, paddingBottom: width * 0.009},
    style,
  ];
  const TextStyle = [
    styles.text,
    {fontSize: calculateFontSize(18)},
    type === "Primary" && {color: '#FFFF'},
    (type === "Secondary"|| "Third" || "Fourth") && isPressed && {color: '#3D2562'},
    type === "Primary" && isPressed && {color: '#FCB900'},
    type === "Secondary" && isHovered && {color: '#B592EB'},
    type === "Secondary" && {fontSize: calculateFontSize(20)},
    type === "Third" && isHovered && {color: '#FCB900'},
    type === "Fourth" && {color: '#3D2562'},
    type === "Fourth" && isHovered && {color: '#FFDB78'},
    type === "Fourth" && isPressed && isHovered && {color: '#3D2562'},
    type === "Fifth" && {color: '#3D2562', fontSize: calculateFontSize(15)},
    type === "Sixth" && {color: '#FCB900', fontSize: calculateFontSize(15)},
    {fontFamily: (fontLoaded && type !== "Apply" && type !== "Apply2" && type !== "Nine" && type !== "Ten") ? 
    'Outfit-Regular' : (fontLoaded && type === "Apply") ? 'Outfit-Bold' : 
    (fontLoaded && type === "Apply2") ? 'Outfit-SemiBold': (fontLoaded && type === "Nine") ? 'Outfit-Medium' 
    : (fontLoaded && type === "Ten") ? 'Outfit-ExtraBold': 'Arial' },
    type === "Apply" && {fontSize: calculateFontSize(25), color:"#3D2562"},
    type === "Seven" && {color: '#000', fontSize: calculateFontSize(18)},
    type === "Eight" && {color: '#3D2562'},
    type === "Apply2" && {color: '#3D2562', fontSize: calculateFontSize(25)},
    type === "Nine" && {color: '#3D2562', fontSize: calculateFontSize(20)},
    type === 'Ten' && {color: '#fff', fontSize: calculateFontSize(17), letterSpacing: width * 0.0015},
  ]; 
  const TextWidth= [
    style?.width && {width: style.width, paddingLeft: width * 0.003, paddingRight: width * 0.003},
  ];
  return (
    <View>
      {type !== "Apply" &&
      <View style={ButtonStyles}>
        <Pressable
        onPress={onPress}
        onHoverIn={() => {
          setIsHovered(true);
        }}
        onHoverOut={() => {
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
          {img && <Image source={img} resizeMode="contain" style={{width: width * 0.025, height: width * 0.025}}/>}
        </Pressable>
        </View>
      }

      {type === "Apply" &&  
        <Pressable
          onPress={onPress}
          style={[styles.apply,{width: width * 0.25, height: width * 0.08, borderRadius: width * 0.011,}]}
        >
          <Text numberOfLines={1} style={TextStyle}>
            {text}
          </Text>
          <View style={[styles.iconContainer, {marginLeft: width * 0.03, width: width * 0.03, height: width * 0.03 }]}>
            <ArrowIcon width={width * 0.015} height={width * 0.015}></ArrowIcon>
          </View>
        </Pressable>
      }
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  common: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    backgroundColor: "transparent",
  },
  text: {
    color: "#000",
  },
  apply:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },
  iconContainer:{
    borderRadius: 50,
    backgroundColor: "#3D2562",
    justifyContent:'center',
    alignItems: 'center',
    
  }
});