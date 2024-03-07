import * as React from "react";

import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  Pressable,
} from "react-native";

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

  const ButtonStyles = [
    styles.common,
    border && { borderColor: "#3d2562", borderWidth: 1 },
    isHovered && type === "Primary" && { backgroundColor: "#3d3562" },
    isHovered && type === "Secondary" && { backgroundColor: "#fff" },
    style,
  ];
  const TextStyle = [
    styles.text,
    isHovered && type === "Primary" && { color: "#fff" },
    type === "Secondary" && { color: "#fff" },
    isHovered && type === "Secondary" && { color: "#3d3562" },
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
