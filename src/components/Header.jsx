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
  style,
}) => {
  const { width, height } = useWindowDimensions();

  const containerStyle = [
    styles.container,
    {paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
    paddingTop: width * 0.02,
    paddingBottom: width * 0.02,
    height: width * 0.08
    },
    style
  ]

  return (
      <View style={containerStyle}>
      <Pressable onPress={logoOnPress}>
        <Image
          source={require("../../assets/images/logo-1.png")}
          style={{ width: width * 0.16, height: height * 0.1 }}
        />
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          type={type}
          text={buttontext[0]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={Button1Press}
        />
        <Button
          type={type}
          text={buttontext[1]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={Button2Press}
        />
        <Button
          type={type}
          text={buttontext[2]}
          style={{ marginRight: width * 0.01, height: width * 0.036, borderRadius: 0 }}
          onPress={Button3Press}
        />
        <Button
          type={type}
          text={buttontext[3]}
          style={{ height: width * 0.036, borderRadius: 0 }}
          onPress={Button4Press}
        />
       
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d2562',
    alignItems: "center",
    flexDirection: "row",
    top: 0,
    width: "100%",
    justifyContent: "space-between",
    zIndex: 99
  },
  
  
});
