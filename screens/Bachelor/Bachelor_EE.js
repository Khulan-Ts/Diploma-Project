import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_EE= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/ee_teachers/dulguunsaran.png'), text: "DULGUUNSARAN\nAMARTUVSHIN\n Lecturer, Department chair" },
        { source: require('../../assets/images/ee_teachers/yang.png'), text: "YANG LIU (SUNNY)\n Senior Lecturer" },
        { source: require('../../assets/images/ee_teachers/eva.png'), text: "EVA LIU\n Senior Lecturer" },
        { source: require('../../assets/images/ee_teachers/purevtsagaan.png'), text: "PUREVTSAGAAN\nENKHJARGAL\nLecturer" },
        { source: require('../../assets/images/ee_teachers/jonathan.png'), text: "JONATHAN SANDE\nLecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05, height: width * 0.58}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/bachelor_ee.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width*0.08, padding: width*0.01, marginTop: width*-0.016, borderRadius: width * 0.008}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF ENGLISH EDUCATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18, padding: width*0.005}} lines={3}>English Education Department seeks to train up effective and innovative English teachers across 
                    Mongolia and Central Asia with a high-quality education that guides students to service with honesty, integrity, humility and professionalism.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>       
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: 15,
                borderBottomStartRadius:15,
                width: width*0.5,
                marginTop: width*-0.5,
                marginLeft: width*0.12
            }}>
                <FONT type="Subtitle" style={{fontSize:25, marginBottom: width*0.01}}>Meet our Faculties</FONT>

                <ScrollView alwaysBounceHorizontal={true} horizontal showsHorizontalScrollIndicator={false}>
                    {imagesWithText.map(({ source, text }) => (
                        <View key={source} style={{ alignItems:'center',marginRight: width*0.015}}>
                            <View style={{ alignItems: 'center' }}>
                                <Image
                                    resizeMode='contain'
                                    source={source}
                                    style={{
                                        width: width*0.108,
                                        height:height*0.25,
                                    }}
                                />
                                <FONT style={{fontSize:13, textAlign: 'center'}}>{text}</FONT>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{marginLeft: width*0.58, marginTop: width*-0.18}}>
                            <View style={[styles.infoContainer, {width: width * 0.16, height: width* 0.112, padding: width * 0.0075, borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row',marginTop: width*0.02}}>
                                    <Clock width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>4 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.002, }}>
                                    <Calendar width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width*0.008, marginLeft: width*.002}} ></Button>
                </View>
                <View style={{width: width*0.99, marginTop: width*0.02, marginBottom: width * 0.13}}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={130}
                />
                <ExpandableList
                    title="Curriculum"
                    content={"• Linguistics\n• Teaching Methodology\n• Principle of Education\n• Educational Psychology\n• English Translation Practice"}
                    maxHeightPercentage={125}
                />
                </View>
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_EE;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF"
    }
});