import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Overview= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
    <ScrollView
        style={styles.container}
    >
        <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{width: width * 0.1, marginTop: '-1.5%', marginRight: 'auto'}}>
            <Image source={require('../../assets/images/a_overview.png')} style={{width: 'auto', height: width * 0.1}} resizeMode="contain"/>
        </View>
        <View style={{ width: '18%', marginLeft: '-10%'}}>
            <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Admissions</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Overview"} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"How to Apply"} onPress={() => navigation.navigate('Graduate')} isPressedState={true}></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                <Button type="Secondary" text={"Tuition & Aids"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                  <Button type="Secondary" text={"Scholarship"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
            </View>
        </View>
        <View>
            <View style={{ width: width * 0.5, marginLeft: '3%', backgroundColor: '#EDF0FF', height: height * 0.2}}>
                <FONT type={"Regular"} style={{ color: '#3D2562'}}>We want to get to know you through your application process, to hear your voice and explore your potential. We will be happy to assist you along the way! Are you ready to take the next step?</FONT>
            </View>
        </View>
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
          <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    </ScrollView>
  );
}

export default Overview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
