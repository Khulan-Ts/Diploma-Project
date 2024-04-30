import * as React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useFonts } from 'expo-font';

export const CardButton = ({
  image,
  text,
  onPress,
  type = 'Primary',
  style
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
      style={[{ marginRight: 16 }, style]}
    >
      
        <Image
          source={image}
          style={styles.image}
        />
        {isHovered && (
          <View style={styles.hoverBackground} />
        )}
        <View style={[styles.label, type === 'Secondary' && {backgroundColor: '#B592EB'}]}>
          <Text style={TextStyle} numberOfLines={1}>{text}</Text>
        </View>
      
    </Pressable>
  );
};

export default CardButton;

const styles = StyleSheet.create({
  image: {
    width: 255,
    height: 157,
    borderRadius: 10
  },
  hoverBackground: {
    ...StyleSheet.absoluteFillObject,
    height: 157,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
  label: {
    backgroundColor: '#FFC116',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "flex-start",
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5, 
    paddingLeft: 10,
    paddingRight: 10,
    zIndex: 1,
    marginTop: -12
  },
  text: {
    color: "#3d3562",
    fontSize: 15,
  },
});
