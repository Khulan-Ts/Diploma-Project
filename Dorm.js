import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";
import { LinearGradient } from "react-native-svg";

const Dorm=({navigation})=>{
    const { width, height } = useWindowDimensions();
    return(
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: '5%'}}>
                <View style={{width: width * 0.1, marginTop: '-5%', marginRight: 'auto'}}>
                    <Image source={require('./assets/images/cal-2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>
                <View style={{marginLeft: '-4%', width: width * 0.2}}>
                    <View style={{ borderBottomWidth: 1, width: width * 0.15, paddingBottom: 14, paddingLeft:14}}>
                        <FONT type="Regular" style={{color: '#3D2562'}}>Dorm</FONT>
                    </View >
                    <View style={{marginTop: height * 0.02}}>
                        <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                            <Button type="Fourth" text={"Housing"} isPressedState={true}></Button>
                        </View>
                        <View style={{borderBottomWidth: 1, width: width * 0.11}}>
                            <Button type="Fourth" text={"Fee Information"} ></Button>
                        </View>
                        <View>
                            <Button type="Fourth" text={"Application Form"} ></Button>
                        </View>
                    </View>
                </View>
                <View style={{width: width * 0.5, marginBottom: height * 0.15}}>
                    <View style= {{backgroundColor: '#FFDB78'}}>
                        <FONT type={"Subtitle2"} style={{ color: '#3D2562'}}>Global Residence: Located on MIU's Campus</FONT>
                    </View>
                    <FONT type={"Body"}style={{marginTop: height * 0.03, color: '#3D2562'}}>MIU believes that the first year of university is crucial in building a successful university life and that the MIU Global Residence will support all freshmen to swiftly adjust to campus life, develop their four-year academic plan, and offer all MIU freshmen to live in a close-knit environment for academic, cultural, and social interactions and development. All freshmen are required to live in the dormitory on campus for their first year. Established in 2017, the dormitory is equipped with a kitchen, laundry facilities, internet access, and more. This building can house more than 200 students. The freshman experience in the dormitory is a vital piece of MIU’s student life as it teaches students to live in an international community. It gives them a place to study and build life-long friendships with their peers. While upperclassmen students are allowed to live in the Global Residence, freshmen students are given first priority. The Global Residence is led by the Dormitory Manager and upperclassmen students to ensure that freshmen are safe and healthy. </FONT>
                    <View style={{marginTop: height * 0.03, backgroundColor: '#FFDB78'}}>
                        <FONT type={"Subtitle2"} style={{color: '#3D2562'}}>Room Type: A&B</FONT>
                    </View>
                    <FONT type={"Title3"}style={{marginTop: height * 0.03, color: '#3D2562'}}>The current MIU dormitory complex is located off-campus and houses over 100 students. Typical dormitory rooms accommodate two to three students depending on the size of the room. The A & B Site Dormitory is equipped with kitchens with basic cooking utensils, common rooms for studying and exercising, wireless internet, and washing machines. When dormitory capacity is limited, freshmen are given first priority. Several faculty and staff may also live in the dormitory and serve as Dormitory Supervisors. Transportation from the dorm to campus is provided via school bus that leaves at 7:20 and 8:50 a.m. from Monday to Friday. </FONT>
                </View>
                <View style={{width: width * 0.1, marginTop: '-7%', marginBottom: height * 0.3, marginLeft: 'auto'}}>
                    <Image source={require('./assets/images/cal-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Dorm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white"
    },
  });
  