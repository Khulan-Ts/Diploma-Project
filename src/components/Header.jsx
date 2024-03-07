import React, { useState } from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import Button from "./Button";

const Header = ({ type, buttontext, onPress, style }) => {
  const containerStyle = [
    styles.container,
    type === "Secondary" && { backgroundColor: "transparent" },
    style,
  ];
  return (
    <View style={containerStyle}>
      <Pressable onPress={onPress}>
        <Image
          source={require("../../assets/logo-2-white.png")}
          style={styles.image}
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
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3d2562",
    //paddingBottom: 8,
    //paddingTop: 8,
    paddingRight: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 0,
    width: "100%",
    height: 80,
    justifyContent: "space-between",
  },
  image: {
    width: 250,
    height: 80,
  },
});
