import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Overview= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: width * 0.03}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%'}}>
                <Image source={require('../../assets/images/a_overview.png')} style={{width: 'auto', height: width * 0.12}} resizeMode="contain"/>
            </View>
            <View style={{ width: width * 0.18}}>
                <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                    <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>Admissions</FONT>
                </View>
                    <View style={{}}>
                        <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                            <Button type="Secondary" text={"Overview"} onPress={() => navigation.navigate('Overview')}></Button>
                        </View>
                        <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                            <Button type="Secondary" text={"How to Apply"} onPress={() => navigation.navigate('How to Apply')} isPressedState={true}></Button>
                        </View>
                        <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                            <Button type="Secondary" text={"Tuition & Aids"} onPress={() => navigation.navigate('Tuition & Aids')}></Button> 
                        </View>
                            <Button type="Secondary" text={"Scholarship"} onPress={() => navigation.navigate('Scholarship')}></Button>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginTop: width * 0.045}}>
                                <Image source={require('../../assets/images/overview-2.png')} style={{width: width * 0.2, height: width * 0.13}} resizeMode="contain"/>
                            </View>
                            <View style={{marginTop: width * 0.045, marginLeft: width * 0.01}}>
                                <Image source={require('../../assets/images/overview-3.png')} style={{width: width * 0.38, height: width * 0.16}} resizeMode="contain"/>
                            </View>
                            <View style={{marginTop: width * 0.045, marginLeft: width * 0.01}}>
                                <Image source={require('../../assets/images/overview-1.png')} style={{width: width * 0.2, height: width * 0.13}} resizeMode="contain"/>
                            </View>
                            
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginBottom: '20%'}}>
                                <Image source={require('../../assets/images/overview-4.png')} style={{width: width * 0.2, height: width * 0.13}}/>
                            </View>
                            <View style={{ marginTop: width * 0.0015, marginLeft: width * 0.01}}>
                                <Image source={require('../../assets/images/overview-5.png')} style={{width: width * 0.38, height: width * 0.1}} resizeMode="contain"/>
                            </View>
                            <View style={{marginLeft: width * 0.01  }}>
                                <Image source={require('../../assets/images/overview-6.png')} style={{width: width * 0.2, height: width * 0.13}}/>
                            </View>
                            
                        </View>
                        <View>
                            <View style={{width: width * 0.35, marginLeft: width * 0.001, backgroundColor: 'rgba(000, 240, 255, 0.3)', height: 115, padding: 10}}>
                                <FONT type="Body" style={{ color: 'white'}}> When you decide to apply to Mongolia International University you will have the opportunity to explore courses across the programs and colleges that make up our university, crossing disciplines and charting your own unique academic path. </FONT>
                            </View>
                        </View>
                    </View>
                </View>
            <View style={{ width: width * 0.35, marginLeft: '3%', backgroundColor: '#EDF0FF', height: width * 0.14, padding: 15}}>
                <FONT type={"Regular"} style={{ color: '#3D2562', fontSize: 25}}>We want to get to know you through your application process, to hear your voice and explore your potential. We will be happy to assist you along the way! Are you ready to take the next step?</FONT>
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
