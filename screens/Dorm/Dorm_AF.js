import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Button from "../../src/components/Button";

const Dorm=({navigation})=>{
    const { width, height } = useWindowDimensions();
    return(
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: '5%'}}>
                <View style={{width: width * 0.1, marginTop: '-1%', marginRight: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/dorm_cal.png')} style={{width: 'auto', height: width * 0.23}} resizeMode="contain"/>
                </View>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{ width: width * 0.7, marginLeft: '1%', backgroundColor: 'white', height: height * 0.35, padding: 15 }}>
                        <View style={{width: width * 0.65, marginLeft: '2%', marginBottom: height * 0.1}}>
                            <FONT type={"Regular"} style={{ color: '#3D2562'}}>GLOBAL RESIDENCE (DORMITORY): LOCATED ON MIU'S CAMPUS</FONT>
                            <FONT type={"Body"}style={{marginTop: height * 0.03, color: '#3D2562'}}>MIU believes that the first year of university is crucial in building a successful university life and that the MIU Global Residence will support all freshmen to swiftly adjust to campus life, develop their four-year academic plan, and offer all MIU freshmen to live in a close-knit environment for academic, cultural, and social interactions and development. 
                                All freshmen are required to live in the dormitory on campus for their first year. Established in 2017, the dormitory is equipped with a kitchen, laundry facilities, internet access, and more. This building can house more than 200 students. While upperclassmen students are allowed to live in the Global Residence, freshmen students are given first priority. The Global Residence is led by the Dormitory Manager and upperclassmen students to ensure that freshmen are safe and healthy. </FONT>
                        </View>
                    </View>    
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: width * 0.26, marginLeft: '2%'}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: "5%", padding:15, backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 18}}>
                                    Room Type
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2, padding:15}}>
                                <FONT type={"Body"}>
                                    Room Type A: Big Room with 4 students
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2, padding:15}}>
                                <FONT type={"Body"}>
                                Room Type B: Medium Room with 4 students
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2, padding:15}}>
                                <FONT type={"Body"}>
                                Room Type C: Small Room with 2 students
                                </FONT>
                            </View>
                        </View>
                        <View style={{width: width * 0.26, marginLeft: '-0.6%', padding:5}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: '3.9%', padding:15, backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 18}}>
                                    Housing Fee (₮)
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2.5, padding:15 }}>
                                <FONT type={"Body"}>
                                ₮750,000
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2, padding:15 }}>
                                <FONT type={"Body"}>
                                ₮750,000
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: -2, padding:15 }}>
                                <FONT type={"Body"}>
                                ₮750,000
                                </FONT>
                            </View>
                        </View> 
                        <View style={{marginLeft: '1%', marginTop: '1.8%'}}>
                            <View style={[styles.infoContainer, {width: width * 0.17, height: height * 0.17}]}>
                                <View style={{flexDirection: 'row',marginTop: '1%'}}>
                                    <Clock width={24} height={28}/>
                                    <View style={{marginLeft: '5%'}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>A full semester (3 months)</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: '1%', }}>
                                    <Calendar width={25} height={25}/>
                                    <View style={{marginLeft: '5%'}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Contatc Us</FONT>
                                        <FONT style={{fontSize: 18}}>dir_student@miu.edu.mn</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: '8%', marginLeft: '2%'}} ></Button>
                        </View>
                    </View>
                </View>
                <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Dorm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8fcfc"
    },
      infoContainer:{
        padding: 10,
        backgroundColor: "#EDF0FF",
        borderRadius: 30,
    }
});
  