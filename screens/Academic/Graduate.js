import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Graduate= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{marginLeft: '10%', width: '18%'}}>
            <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')} isPressedState={true}></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"}></Button> {/*onPress={() => navigation.navigate('Twoplus2')}*/}
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                
                <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.15}}></Button>
                
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Vision Trip"} ></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width: '50%', marginBottom: '10%'}}>
            <FONT type={"Subtitle2"} style={{ color: ''}}>Master Program</FONT>
            <FONT type={"Body"}style={{marginTop: 30, color: ''}}>MIU challenges students to explore innovative intellectual interests through scholarly and personal competency programs. Emphasizing on professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. </FONT>
            <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
                <FONT type={"Subtitle2"} style={{color: ''}}>School of Management (SoM)</FONT>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button style={{color: ''}} type="Seven" text={'Master in Business Administration (MBA)'}>
                </Button>
                <Button style={{color: '', marginLeft: 55}} type="Seven" text={'Master’s Start-Up Business Administration'}>
                </Button>
            </View>
            <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
                <FONT type={"Subtitle2"} style={{color: ''}}>School of Computing Science (SoCS)</FONT>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button style={{color: ''}} type="Seven" text={'Master of Sofware Engineering (MSE)'}>
                </Button>
            </View>
            <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
                <FONT type={"Subtitle2"} style={{color: ''}}>School of International Studies and Communication (SoISC)</FONT>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button style={{color: ''}} type="Seven" text={'School of International Studies and Communication (SoISC)'}>
                </Button>
            </View>
            <View style={{width: 1025, height: 29, marginTop: 30, backgroundColor: '#EDF0FF'}}>
                <FONT type={"Subtitle2"} style={{color: ''}}>Programs</FONT>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Button style={{color: ''}} type="Seven" text={'Master In Foreign Language Education (FLE)'}>
                </Button>
            </View>
        </View>
        <View style={{width: width * 0.1, marginTop: '-5%', marginLeft: 'auto'}}>
            <Image source={require('../../assets/images/cal-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    </ScrollView>
  );
}

export default Graduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
});
