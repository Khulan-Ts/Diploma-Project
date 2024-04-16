import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable, useWindowDimensions } from "react-native";
import Button from "./Button";


const Header = ({ 
  type, 
  buttontext,
  logoOnPress,
  Button1Press,
  Button2Press,
  Button3Press,
  Button4Press,
  Button5Press,
  style,
}) => {
  const {width, height} = useWindowDimensions()
  const paddingHorizontal = width * 0.12
  const headerHeight = height * 0.18
  
  const containerStyle = [
    styles.container,
    {paddingLeft: paddingHorizontal,
    paddingRight: paddingHorizontal,
    height: headerHeight},
    style
  ]

  return (
      <View style={containerStyle}>
      <Pressable onPress={logoOnPress}>
        <Image
          source={require("../../assets/images/logo-1.png")}
          style={styles.logo}
        />
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    justifyContent: "space-between",
    zIndex: 99
  },
  logo: {
    width: 211,
    height: 60,
  },
  
});
