import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_MC= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/mc_teachers/image1.png'), text: "JERICHO BURG\nDean of School of International\n Studies and Relations" },
        { source: require('../../assets/images/mc_teachers/image2.png'), text: "MOSTAFA AHMED\n Lecturer" },
        { source: require('../../assets/images/mc_teachers/image3.png'), text: "SUYONG GIM\nProfessor" },
        { source: require('../../assets/images/mc_teachers/image4.png'), text: "DONG-RYUL KANG\nLecturer" },
        { source: require('../../assets/images/mc_teachers/image5.png'), text: "JIYOUNG CHANG\nLecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/calligraphy/bachIRcal.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width * 0.13, padding: width*0.01, marginTop: width*-0.016}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF THE MEDIA AND COMMUNICATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} lines={6}>The Media and Communication (MC) Department of MIU prepares skilled and innovative professionals in the fields of journalism, public relations, marketing, and media production. Our students develop a strong foundation in media and communication theory and practice, journalism, and media policy, with a sequence of courses that equip them to produce creative media content for national and international audiences. Public relations, advertising, and strategic communication round out the curriculum, enabling students to specialize in their area of professional interest.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>       
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: 15,
                borderBottomStartRadius:15,
                width: width*0.5,
                marginTop: width*-0.47,
                marginLeft: width*0.12
            }}>
                <FONT type="Subtitle" style={{fontSize:25, marginBottom: width*0.02}}>Meet our Faculties</FONT>

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
                <View style={{marginLeft: width*0.55, marginTop: width*-0.16, backgroundColor: '#EDF0FF',}}>
                            <View style={[styles.infoContainer, {width: width * 0.16, height: width* 0.1, padding: width * 0.0075, borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row',marginTop: width*0.01}}>
                                    <Clock width={24} height={28}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>4 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.001, }}>
                                    <Calendar width={25} height={25}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width*0.01, marginLeft: width*.002}} ></Button>
                </View>
                <View style={{width: width*0.95, marginTop: width*0.05  }}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={120}
                />
                <ExpandableList
                    title="Curriculum"
                    content={"Year 1&2 / Students are introduced to \n – Basic knowledge each of the SISC majors: International Relations, Media & Communication, and International Development, Diplomacy, and International Law; \n - Fundemental academic writing and reading skills; \n Year 3 / Students can chose their concentration \n – Media Writing, PR, Advertising, and Communication \n – Practical media tools and photoshooting \n Year 4 / Students move to \n – Practical usage of the skills learned in classes through internships \n – MC graduation project development and research work"}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.45,marginTop: width*0.025, marginLeft: width*0.12, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Career Opportunities</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• Journalists
                {'\n'}• Radio/TV Producers
                {'\n'}• Writers 
                {'\n'}• Media Marketing/Advertising/PR Persons
                </FONT>
            </View>  
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.27, marginLeft: width*0.576, marginTop: width*-0.123, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Opportunity</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• Mongolian NTV, MN25, NTV, EDU TV, TV2, Bloomberg Mongolia TVs and Global Internship for foreign students in their countries
                </FONT>
            </View>  
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_MC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF",
    }
});