import React, { useState } from "react";
import { StyleSheet, Text, Image, Animated, View } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";

export default function App() {
  
  return (
    <View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: 1024,
  },
  historyImg:{
    width: 705,
    height: 393,
    borderRadius: 10,
    marginTop: 31,
    marginLeft: 63
  },
  history:{
    backgroundColor: '#EDF0FF',
    borderRadius: 10,
    maxWidth: 680,
    padding: 20,
    flex: 1,
    marginLeft: -120,
    marginTop: 110, 
    alignSelf: 'flex-start'
  }
});
