import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Overview= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: '5%'}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%', marginRight: 'auto'}}>
                <Image source={require('../../assets/images/a_overview.png')} style={{width: 'auto', height: width * 0.12}} resizeMode="contain"/>
            </View>
            <View style={{ width: '18%', marginLeft: '-30%'}}>
                <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                    <FONT type="Regular" style={{color: '#000000'}}>Admissions</FONT>
                </View>
                <View style={{marginTop: '5%'}}>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"Overview"}></Button>
                    </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={"How to Apply"}></Button>
                    </View>
                        <View style={{borderBottomWidth: 1, width: '70%'}}>
                            <Button type="Secondary" text={"Tuition & Aids"}></Button> 
                    </View>
                    <View>
                        <Button type="Secondary" text={"Scholarship"}></Button>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginTop: '25%'}}>
                            <Image source={require('../../assets/images/overview-2.png')} style={{width: 260, height: 242}}/>
                        </View>
                        <View style={{marginTop: '25%', marginLeft: '6%'}}>
                            <Image source={require('../../assets/images/overview-3.png')} style={{width: 632, height: 300}}/>
                        </View>
                        <View style={{marginTop: '25%', marginLeft: '6%'}}>
                            <Image source={require('../../assets/images/overview-1.png')} style={{width: 260, height: 242}}/>
                                
                        </View>
                        
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{marginTop: '-15%', marginBottom: '20%'}}>
                            <Image source={require('../../assets/images/overview-4.png')} style={{width: 260, height: 242}}/>
                        </View>
                        <View style={{marginTop: '5%', marginLeft: '6%'}}>
                            <Image source={require('../../assets/images/overview-5.png')} style={{width: 632, height: 187}}/>
                        </View>
                        <View style={{marginTop: '-15%', marginLeft: '6%'}}>
                            <Image source={require('../../assets/images/overview-6.png')} style={{width: 260, height: 242}}/>
                        </View>
                        <View style={{width: width * 0.35, marginLeft: '-315%', marginTop: '20%', backgroundColor: 'rgba(237, 240, 255, 0.3)', height: 115, padding: 10}}>
                                <FONT type="Body" style={{ color: 'white'}}> When you decide to apply to Mongolia International University you will have the opportunity to explore courses across the programs and colleges that make up our university, crossing disciplines and charting your own unique academic path. </FONT>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: width * 0.35, marginLeft: '3%', backgroundColor: '#EDF0FF', height: height * 0.3, padding: 15}}>
                <FONT type={"Regular"} style={{ color: '#3D2562'}}>We want to get to know you through your application process, to hear your voice and explore your potential. We will be happy to assist you along the way! Are you ready to take the next step?</FONT>
            </View>
            <View style={{marginRight: '-30%', marginLeft: '1%'}}>
                <Image source={require('../../assets/images/overview-1.png')} style={{width: 315, height: 219}}/>
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
