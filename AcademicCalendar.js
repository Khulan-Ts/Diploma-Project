import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";

const AcademicCal= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%',}}>
        <View style={{marginLeft: '10%', width: width * 0.2}}>
            <View style={{ borderBottomWidth: 1, width: width * 0.15, paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Academics</FONT>
            </View>
            <View style={{marginTop: height * 0.02}}>
                <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                    <Button type="Secondary" text={"Undergraduate"} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                    <Button type="Secondary" text={"Graduate"} ></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                <Button type="Secondary" text={"2+2 program"} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                
                <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.12}}></Button>
                
                </View>
                <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                    <Button type="Secondary" text={"Vision Trip"} ></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"}></Button>
            </View>
        </View>
        <View style={{width: width * 0.5, marginBottom: height * 0.15}}>
          <Image source={require('./assets/images/calendar-1.png')} style={{ height: width * 0.38, width: 'auto' }} resizeMode="contain"/>
          <Image source={require('./assets/images/calendar-2.png')} style={{ height: width * 0.33, width: 'auto', marginTop: height * -0.02 }} resizeMode="contain"/>
          <Image source={require('./assets/images/calendar-3.png')} style={{ height: width * 0.38, width: 'auto', marginTop: height * -0.02 }} resizeMode="contain"/>
          <Image source={require('./assets/images/calendar-4.png')} style={{ height: width * 0.28, width: 'auto', }} resizeMode="contain"/>
        </View>
        <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto'}}>
          <Image source={require('./assets/images/cal-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    </ScrollView>
  );
}

export default AcademicCal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});