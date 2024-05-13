import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Linking } from "react-native";
import FONT from "../../src/components/Titles";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json"

const Dorm=({navigation})=>{
    const { width, height } = useWindowDimensions();
    const { apply } = data.links;
    return(
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: '5%'}}>
                <View style={{width: width * 0.1, marginTop: '-1%', marginRight: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/dorm_cal.png')} 
                    style={{width: 'auto', height: width * 0.23}} resizeMode="contain"/>
                </View>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{ width: width * 0.72, marginLeft: width * 0.01, 
                        backgroundColor: 'white', height: width * 0.165, padding: width * 0.01 }}>                        
                        <FONT type={"Regular"} style={{ color: '#3D2562',fontSize: 22}}>
                            GLOBAL RESIDENCE (DORMITORY): LOCATED ON MIU'S CAMPUS</FONT>
                        <FONT type={"Body"} style={{marginTop: height * 0.03, color: '#3D2562', fontSize: 16}}>
                            MIU believes that the first year of university is crucial in building a successful university life and 
                            that the MIU Global Residence will support all freshmen to swiftly adjust to campus life, develop their 
                            four-year academic plan, and offer all MIU freshmen to live in a close-knit environment for academic, cultural, 
                            and social interactions and development. 
                            All freshmen are required to live in the dormitory on campus for their first year. Established in 2017, 
                            the dormitory is equipped with a kitchen, laundry facilities, internet access, and more. This building can house 
                            more than 200 students. While upperclassmen students are allowed to live in the Global Residence, freshmen students 
                            are given first priority. The Global Residence is led by the Dormitory Manager and upperclassmen students to ensure 
                            that freshmen are safe and healthy. </FONT>                      
                    </View>    
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: width * 0.26, marginLeft: width * 0.01}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * 0.02, padding: width * 0.01, 
                            backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 20}}>
                                    Room Type
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    Room Type A: Big Room with 4 students
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    Room Type B: Medium Room with 4 students
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    Room Type C: Small Room with 2 students
                                </FONT>
                            </View>
                        </View>
                        <View style={{width: width * 0.26, marginLeft: width * -0.011, padding: width * 0.01}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, 
                            backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 20}}>
                                    Housing Fee (₮)
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    ₮750,000
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    ₮750,000
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    ₮750,000
                                </FONT>
                            </View>
                        </View> 
                        <View style={{marginLeft: width * 0.01, marginTop: width * 0.018}}>
                            <View style={[styles.infoContainer, {width: width * 0.2, height: width * 0.08, padding: width * 0.0075, 
                                borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row'}}>
                                    <Clock width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: '5%', marginTop: '-1%'}}>
                                    <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                    <FONT style={{fontSize: 18}}>A full semester (3 months)</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width * 0.001}}>
                                    <Calendar width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: '5%'}}>
                                    <FONT type="Title2" style={{fontSize: 18}}>Contact us</FONT>
                                    <FONT style={{fontSize: 18}}>dir_student@miu.edu.mn.</FONT>
                                    </View>
                                </View>
                                </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width * 0.013, marginLeft: width * 0.019}} 
                            onPress={()=> Linking.openURL(apply)}></Button>
                        </View>
                    </View>
                </View>
                <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5, 
                    marginBottom: width * 0.1}} resizeMode="contain"/>
                </View>
            </View>
            <Footer/>
        </ScrollView>
    )
}

export default Dorm

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6FAFF"
    },
      infoContainer:{
        padding: 10,
        backgroundColor: "#EDF0FF",
        borderRadius: 30,
    }
});
  