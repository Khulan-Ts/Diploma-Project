import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Bachelor_CS= ({ navigation }) => {
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
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width*0.1, padding: width*0.01, marginTop: width*-.016}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF COMPUTER SCIENCE</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} lines={3}>Computer Science (CS) major at MIU offers opportunities to explore the science of information processing. Particular interest is 
                    placed on making computation fast and efficient. CS focuses on the core theories of computing as well as hands-on learning and practical work experiences.</FONT>
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
                                        <FONT style={{fontSize: 18}}>4 years/ Onsite</FONT>
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
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 1 / Students are introduced to:\n"}</FONT>
                        {"Foundation of basic coding                                                                                Foundation in mathematics and physics\n"}
                        {"Teamwork skills\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 2 / Students develop skills in:\n"}</FONT>
                        {"Computer science theories, methods and practices                              Understanding of computer software, tools and design\n"}
                        {"Understanding a range of programming languages                             Problem-solving and analytical skills\n"}
                        {"such as Java, C, C++, Javascript and SQL\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 3 / Students gain knowledge in:\n"}</FONT>
                        {"Mobile application programming                                                                   Multimedia Programming\n"}
                        {"Computer Security                                                                                                 Web development and web design\n"}
                        <FONT style={{ fontWeight: 'bold' }}>{"Year 4 / Students move into:\n"}</FONT>
                        {"Advanced programming skills                                                                          Cloud Computing\n"}
                        {"Robotics                                                                                                                      Artificial Intelligence"}
                      </FONT>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.17,marginTop: width*0.025, marginLeft: width*0.12, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Skills</FONT>
            </View>
            <View style={{marginLeft:width*0.01, marginBottom: width*0.01}}> 
                <FONT lines={6} type="Regular" style={{fontSize: 18}}>
                    Skills you will develop in CS department are problem-solving, 
                    critical thinking, creativity, coding, task management, efficiency, etc
                </FONT>
            </View>  
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.33   , marginLeft: width*0.307, marginTop: width*-0.140, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>We Connect</FONT>
            </View>
            <View style={{marginLeft:width*0.01, marginBottom: width*0.028}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                Full stack developer                          System administrator
                {'\n'}Database administrator                Data scientist
                {'\n'}Computer hardware                        Systems analyst
                {'\n'}engineer                                                 Multimedia animator
                {'\n'}Systems software developer
                </FONT>
            </View>  
            </View>
            <View style={{borderRadius: 30, borderColor: "#CDD4FB", borderWidth: 1, width: width*0.215  , marginLeft: width*0.655, marginTop: width*-0.24, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Alumni</FONT>
            </View>
            <View style={{marginLeft:width*0.01, marginBottom: width*0.01}}> 
                <FONT type="Regular" lines={6}style={{fontSize: 18}}>
                    CS graduates are employed at many well known companies such as 
                    Khan Bank, Unitel Group, Oyu Tolgoi LLC, Hurd Group, Nomin Holding, 
                    Khas Bank, Khangai LLC, IT Zone, CAA Mongolia, etc.
                </FONT>
            </View>  
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Bachelor_CS;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF",
    }
});