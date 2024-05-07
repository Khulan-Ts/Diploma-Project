import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Master_SE= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/junghopark.png'), text: "JUNG HO PARK\nAssociate Professor,\n Department chair" },
        { source: require('../../assets/images/steveneisenbarth.png'), text: "STEVEN\n EISENBARTH \nProfessor" },
        { source: require('../../assets/images/dulguundusal.png'), text: "DULGUUNDUSAL T.\nLecturer" },
        { source: require('../../assets/images/dulamsuren.png'), text: "DULAMSUREN\n SHARKHUU \nAssistant Professor" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/bachelorba1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width*0.08, padding: width*0.01, marginTop: width*-.016}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO MASTER IN SOFTWARE ENGINEERING</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} lines={2}>Master in Software Engineering department at MIU provides the students who are able to fit in the 
                    technology era, with basic science and software engineering knowledge as well as field experiences</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/bachelorba2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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
                <View style={{marginLeft: width*0.58, marginTop: width*-0.16}}>
                            <View style={[styles.infoContainer, {width: width * 0.17, height: width* 0.115, padding: width * 0.0075, borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row',marginTop: width*0.01}}>
                                    <Clock width={24} height={28}/>
                                    <View style={{marginLeft: width*0.01}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>2 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.001, }}>
                                    <Calendar width={25} height={25}/>
                                    <View style={{marginLeft: width*0.005}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width*0.001, marginLeft: width*.002}} ></Button>
                </View>
                <View style={{width: width*1, marginTop: width*0.01}}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={130}
                />
                <ExpandableList
                    title="Curriculum"
                    content={<FONT>
                        <FONT style={{ fontWeight: 'bold' }}>
                            {'•Analysis of Software Artifacts\n'}
                            {'•Security-sensitive software\n'}
                            {'•Real-time software system\n'}
                            {'•Agile Software Development Frameworks\n'}
                            {'•Research in future system software (OS and programming language)\n'}
                            {'•System Architectures for Managers'}
                        </FONT>                                                                                                         
                      </FONT>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{marginBottom:width*0.1, borderRadius: 30, borderWidth: 1, width: width*0.75,marginTop: width*0.025, marginLeft: width*0.12, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Career Opportunity</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT lines={4} type="Regular" style={{fontSize: 18}}>
                        Our graduates work and intern in a range of jobs in a broad range of fields — public relations, marketing, advertising, 
                        social media, television, radio, magazines, human resources, event planning, education, nonprofits, and technology. We’ve also 
                        had graduates start their own businesses and others go on to graduate school in communication, law, public health, strategic 
                        communications, and education.
                </FONT>
            </View>  
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Master_SE;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF",
    }
});