import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";

const Graduate=({navigation})=>{
  
  return (
    <ScrollView style={styles.container}> 
      <View style={{ flexDirection: 'row', marginTop: 159}}>
        <View>
          <View style={{marginLeft: 160, borderBottomWidth:1, width: 210, paddingBottom: 4, paddingLeft: 14}}>
            <FONT type="Regular" style={{color: ''}}>Academics</FONT>
          </View >
          <View style={{marginTop: 20, marginLeft: 160}}>
            <View style={{borderBottomWidth: 1, width: 144}}>
            <Button type="Secondary" text={"Undergraduate"} ></Button>
            </View>
            <View style={{borderBottomWidth: 1, width: 144}}>
            <Button type="Secondary" text={"Graduate"} ></Button>
            </View>
            <View style={{borderBottomWidth: 1, width: 144}}>
            <Button type="Secondary" text={"2+2 program"} ></Button>
            </View>
            <Button type="Secondary" numberOfLines={2} text={"Exchange student Program"} ></Button>
            <View style={{borderBottomWidth: 1, width: 144}}>
            </View>
            <View style={{borderBottomWidth: 1, width: 144}}>
            <Button type="Secondary" text={"Vision Trip"} ></Button>
            </View>
            <Button type="Secondary" text={"Academic Calendar"}></Button>
            </View>
        </View>
        <View style={{width: 1025, height: 151, marginLeft: 49, marginBottom: 132}}>
          <FONT type={"Subtitle2"} style={{marginTop: 48, color: ''}}>Master Program</FONT>
          <FONT type={"Body"}style={{marginTop: 30, color: ''}}>MIU challenges students to explore innovative intellectual interests through scholarly and personal competency programs. Emphasizing on professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. </FONT>
          <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: ''}}>School of Management (SoM)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{color: ''}} type="Secondary" text={'Master in Business Administration (MBA)'}>
            </Button>
            <Button style={{color: '', marginLeft: 55}} type="Secondary" text={'Master’s Start-Up Business Administration'}>
            </Button>
          </View>
          <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: ''}}>School of Computing Science (SoCS)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{color: ''}} type="Secondary" text={'Master of Sofware Engineering (MSE)'}>
            </Button>
          </View>
          <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: ''}}>School of International Studies and Communication (SoISC)</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{color: ''}} type="Secondary" text={'School of International Studies and Communication (SoISC)'}>
            </Button>
          </View>
          <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: ''}}>Programs</FONT>
          </View>
          <View style={{flexDirection: 'row', }}>
            <Button style={{color: ''}} type="Secondary" text={'Master In Foreign Language Education (FLE)'}>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Graduate

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
    elevation: 3, // Required for Android
    // Other header styles such as height, padding, etc.
  },
  image: {
    width: "100%",
    height: 1024,
  },
});
