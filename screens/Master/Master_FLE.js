import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Master_FLE= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/FLE_teachers/jericho.png'), text: "JERICHO BURG\nDean of School of International\nStudies and Relations" },
        { source: require('../../assets/images/FLE_teachers/mostafa.png'), text: "MOSTAFA AHMED\nLecturer" },
        { source: require('../../assets/images/FLE_teachers/suyong.png'), text: "SUYONG GIM\nProfessor" },
        { source: require('../../assets/images/FLE_teachers/dongryul.png'), text: "DONG-RYUL KANG\nLecturer" },
        { source: require('../../assets/images/FLE_teachers/jiyoung.png'), text: "JIYOUNG CHANG\nLecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1}}>
                    <Image source={require('../../assets/images/calligraphy/MBAcal.png')} style={{width: 'auto', height: width * 0.27}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.147, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25, marginBottom:width*0.008}}>WELCOME TO MASTER IN FOREIGN LANGUAGE EDUCATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18}}>FLE at MIU is founded for training international English education specialists who have a thorough understanding of Language Acquisition and various training and teaching methods. FLE teaches the basic principles and fundamentals of languages, which are crucial for effective foreign language education. 
                    {'\n'}FLE looks to enhance students’ understanding of both English and non-English speaking cultures and languages. The program also gives students the opportunity to examine their own language and culture through interaction with students from different cultures.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: width * 0.115, marginLeft: 'auto', marginTop: -width*0.02}}>
                    <Image source={require('../../assets/images/calligraphy/FLEcal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>       
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: 15,
                borderBottomStartRadius:15,
                width: width*0.5,
                marginTop: width*-0.43,
                marginLeft: width*0.11
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
                                        height:width*0.15,
                                    }}
                                />
                                <FONT style={{fontSize:13, textAlign: 'center'}}>{text}</FONT>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <View style={{marginLeft: width*0.57, marginTop: width*-0.17}}>
                            <View style={{width: width * 0.17, height: width* 0.115, backgroundColor:'#EFF0FF', justifyContent:'center', borderRadius:width*0.03, paddingBottom:width*0.0075, paddingTop:width*0.0075}}>
                                <View style={{flexDirection: 'row',marginTop: width*0.001, alignItems:'center', marginLeft:width*0.015}}>
                                    <Clock width={width*0.02} height={width*0.02}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>2 years / Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.001, alignItems:'center', marginLeft:width*0.015}}>
                                    <Calendar width={width*0.02} height={width*0.02}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginLeft: width*0.005, marginTop:width*0.03}} ></Button>
                </View>
                <View style={{width: width*0.95, marginTop: width*0.05}}>
                    <ExpandableList 
                        title="Admission Requirements" 
                        content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter"}
                        maxHeightPercentage={115}
                    />
                <ExpandableList
                    title="Curriculum"
                    content={<strong>Theory & Method in Second Language Learning{'\n'}
                        English Language Teaching Method{'\n'}
                        Material Use & Development for English Education{'\n'}
                        Teacher Education & Development{'\n'}
                        Principles of Language Testing{'\n'}
                        Teaching Language & Culture{'\n'}
                        Research Methodology for English Language{'\n'}
                        Teaching Seminar: Current Issues in Language Teaching{'\n'}
                        Professional Practice</strong>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.02, marginBottom:width*0.05}}>
                <View style={{backgroundColor:'white',borderRadius: width*0.03, borderWidth: 1,height:width*0.145, width: width*0.725,marginRight:width*0.04, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>Career Opportunity</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {'\n'}• FLE faculty members are from different foreign countries and are holding master and doctor degrees of prestigious universities 
                        {'\n'}• Providing classes and seminars that will be taught from various perspectives
                        {'\n'}• Helping students to complete an in-depth dissertation through one-on-one thesis guidance
                        {'\n'}• Providing an academic and systematic course about English education
                        </FONT>
                    </View>  
                </View>
            </View>
            
            <Footer/>
        </ScrollView>
        
    );
}

export default Master_FLE;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});