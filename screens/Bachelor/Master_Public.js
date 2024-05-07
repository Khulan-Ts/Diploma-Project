import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Master_Public= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/mpublic/jericho.png'), text: "JERICHO BURG\n Dean of School of International\n Studies and Communication" },
        { source: require('../../assets/images/mpublic/mohammad.png'), text: "MOHAMMAD\n ISHFAQ \n Lecturer" },
        { source: require('../../assets/images/mpublic/hriday.png'), text: "HRIDAY CHANDRA \n SARMA\n Lecturer" },
        { source: require('../../assets/images/mpublic/awele.png'), text: "AWELE OGUEJIOFOR \nLecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05, height: width * 0.58}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/masterpublic.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, backgroundColor: 'white', height: width*0.08, padding: width*0.01, marginTop: width*-0.016}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO MASTER IN PUBLIC ADMINISTRATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18, padding: width*0.005}} lines={3}>Mater of Public Administration (MPA) program is designed to prepare professionally-trained and 
                    ethical government officials and public service officers. MPA Students are to gain fundamental knowledge of public policy, its analysis and implementation 
                    that will impower them to make a positive change in their communities as well as internationally.</FONT>
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
                                    <Clock width={24} height={28}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>2 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.002, }}>
                                    <Calendar width={25} height={25}/>
                                    <View style={{marginLeft: width*0.007}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: width*0.008, marginLeft: width*.002}} ></Button>
                </View>
                <View style={{width: width*0.99, marginTop: width*0.03}}>
                    <ExpandableList 
                    title="Admission Requirements" 
                    content={"All applicants must have completed or be expected to complete high school, secondary education, or an equivalent education prior to their enrollment. All applicants must take an entrance exam as part of the admission process. \n \n The Entrance Exam consists of three sections: Essay, Grammar & Vocabulary. \n 70% Entrance Exam (20% Grammar / Essay 40% / Speaking 40%) \n 30% Statement of Purpose & Recommendation Letter "}
                    maxHeightPercentage={120}
                />
                    <ExpandableList
                        title="Curriculum"
                        content={"Year 1 / Students are introduced to \n Theoretical knowledge in Public Affairs\n Research Methodology and Design\n Economic Theories and Public Policy \n \n Year 2 / Students move to\n In depth studies of the Public Affairs and practices\n Practical application of the theoretical knowledge through supervised independent research and thesis; "}
                        maxHeightPercentage={115}
                    />
                </View>
            </View>
            <View style={{borderRadius: 30, borderWidth: 1, width: width*0.38,marginTop: width*0.020, marginLeft: width*0.12, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Major Curriculum</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• MPA Major Curriculum:
                {'\n'}• Communication for Public Affairs,
                {'\n'}• Research Methods,
                {'\n'}• Public Policy and Strategy,
                {'\n'}• Economic Theory in Public Affairs,
                {'\n'}• Local Autonomy and Public Management,
                {'\n'}• Organizational Dynamics and Leadership,
                {'\n'}• Thesis
                </FONT>
            </View>  
            </View>
            <View style={{borderRadius: 30, borderWidth: 1, height:width*0.188, width: width*0.35, marginLeft: width*0.510, marginTop: width*-0.188, shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
            <View style={{marginLeft: width*0.01}}>
                <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.005}}>Career Opportunity</FONT>
            </View>
            <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                <FONT type="Regular" style={{fontSize: 18}}>
                {'\n'}• Public Officer in Central & Local Government
                {'\n'}• Manager in NPO
                {'\n'}• Policy Analyst & Consultant
                {'\n'}• International Development Organizations UNDP,
                {'\n'}  World Bank, Asia Development Bank,
                {'\n'}• Private Sector Multinational Companies, 
                {'\n'}  Development Companies
                </FONT>
            </View>  
            </View>
            <Footer/>
        </ScrollView>
        
    );
}

export default Master_Public;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
    infoContainer:{
        backgroundColor: "#EDF0FF"
    }
});