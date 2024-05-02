import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../src/components/Header";
import CardButton from "../../src/components/cardButtons";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import ExpandableList from "../../src/components/dptExpandable";


const MBA=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
       <ExpandableList 
          title="Admission Requirements" 
          content="All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process."
          maxHeightPercentage={130}
       />
       <ExpandableList
          title="Curriculum"
          content="Content for item 2"
          maxHeightPercentage={180}
        />
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
