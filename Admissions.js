import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import { useNavigation } from "@react-navigation/native";


const Admissions= ({ navigation }) =>{
  
  return(
    <ScrollView style={styles.container}>
      <View style={{marginTop: 229}}>
        <Button type="Secondary" text={"Overview"}>
         </Button>
        <View></View>
      </View>
    </ScrollView>
  )
}

export default Admissions

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
