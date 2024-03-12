import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable, Animated } from "react-native";
import Button from "./Button";


const Header = ({ type, buttontext, onPress, style }) => {
  const containerStyle = [
    styles.container,
    type === "Secondary" && { backgroundColor: "transparent" },
    style,
  ];
  return (
      <Animated.View style={containerStyle}>
      <Pressable onPress={onPress}>
        <Image
          source={require("../../assets/logo-1.png")}
          style={styles.logo}
        ></Image>
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          type={type === "Secondary" ? "Primary" : "Secondary"}
          text={buttontext[0]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type={type === "Secondary" ? "Primary" : "Secondary"}
          text={buttontext[1]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type={type === "Secondary" ? "Primary" : "Secondary"}
          text={buttontext[2]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type={type === "Secondary" ? "Primary" : "Secondary"}
          text={buttontext[3]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type={type === "Secondary" ? "Primary" : "Secondary"}
          text={buttontext[4]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
       
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingRight: 191,
    paddingLeft: 191,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 109,
    justifyContent: "space-between",
    zIndex: 99
  },
  logo: {
    width: 211,
    height: 60,
  },
  
});
