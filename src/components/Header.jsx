import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable, Animated } from "react-native";
import Button from "./Button";


const Header = ({ type, buttontext, logoOnPress, Button1Press, Button2Press, Button3Press, Button4Press, Button5Press, style }) => {
  const containerStyle=[
    styles.container,
    style
  ]
  return (
      <Animated.View style={containerStyle}>
      <Pressable onPress={logoOnPress}>
        <Image
          source={require("../../assets/logo-1.png")}
          style={styles.logo}
        ></Image>
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          type={type}
          text={buttontext[0]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
          onPress={Button1Press}
        />
        <Button
          type={type}
          text={buttontext[1]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
          onPress={Button2Press}
        />
        <Button
          type={type}
          text={buttontext[2]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
          onPress={Button3Press}
        />
        <Button
          type={type}
          text={buttontext[3]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
          onPress={Button4Press}
        />
        <Button
          type={type}
          text={buttontext[4]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
          onPress={Button5Press}
        />
       
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingRight: 188,
    paddingLeft: 194,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 106,
    justifyContent: "space-between",
    zIndex: 99
  },
  logo: {
    width: 211,
    height: 60,
  },
  
});
