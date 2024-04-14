import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";

const AcademicCal= ({ navigation }) => {

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row"}}>
        <View style={{marginLeft: 203, width:206}}>
            <View style={{marginTop: 159,borderBottomWidth: 1, width: 210, paddingBottom: 14,paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Academics</FONT>
            </View>
            <View style={{marginTop: 20}}>
                <View style={{borderBottomWidth: 1, width: 144}}>
                    <Button type="Secondary" text={"Undergraduate"} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: 144}}>
                    <Button type="Secondary" text={"Graduate"} ></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: 144}}>
                <Button type="Secondary" text={"2+2 program"} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: 144}}>
                
                <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: 169}}></Button>
                
                </View>
                <View style={{borderBottomWidth: 1, width: 144}}>
                    <Button type="Secondary" text={"Vision Trip"} ></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"}></Button>
            </View>
      </View>
        <View style={{width:799, height:648, marginLeft: 61, marginTop: 164, marginBottom: 132}}>
         
        </View>
      </View>
    </ScrollView>
  );
}

export default AcademicCal

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});