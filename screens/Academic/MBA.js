import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../src/components/Header";
import CardButton from "../../src/components/cardButtons";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import expandableList from "../../src/components/dptExpandable";


const MBA=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
        <View >
            <expandableList title="Admission Requirements" content="text"></expandableList>
            <expandableList title="Curriculum" content="text"></expandableList>
       </View>
    </ScrollView>
  );
}

export default MBA
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6FAFF',
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 3, // Required for Android
    // Other header styles such as height, padding, etc.
  }

});
