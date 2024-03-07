import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import Button from "./Button";

const Header = ({ type, buttontext, style }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-2-white.png")}
        style={styles.image}
      ></Image>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          type="Secondary"
          text={buttontext[0]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type="Secondary"
          text={buttontext[1]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type="Secondary"
          text={buttontext[2]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type="Secondary"
          text={buttontext[3]}
          style={{ marginRight: 10, height: 48, borderRadius: 0 }}
        />
        <Button
          type="Secondary"
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
    padding: 8,
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
    height: 64,
  },
});
