import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";

const Master_MBA= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/MBA_teachers/choihui.png'), text: "CHOI HUI PARK\nProfessor,\n Department chair" },
        { source: require('../../assets/images/MBA_teachers/victorngu.png'), text: "VICTOR NGU\n Professor" },
        { source: require('../../assets/images/MBA_teachers/junguk.png'), text: "JUNG KUK KIM\nAssociate Professor" },
        { source: require('../../assets/images/MBA_teachers/seung.png'), text: "SEUNG HUN BAEK\nSenior Lecturer" },
        { source: require('../../assets/images/MBA_teachers/zhihong.png'), text: "ZHI HONG WANG /Jossy/\n Senior Lecturer" },
        { source: require('../../assets/images/MBA_teachers/undrakh.png'), text: "UNDRAKH MUNKHBAATAR\nSecretary" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1}}>
                    <Image source={require('../../assets/images/calligraphy/MBAcal.png')} style={{width: 'auto', height: width * 0.27}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.132, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25, marginBottom:width*0.008}}>WELCOME TO MASTER IN BUSINESS ADMINISTRATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} >MBA (International Marketing) at MIU is founded to train students to become international professionals who can lead the global era. MBA (International Marketing) teaches students how to make practical strategies to activate companies by combining theories and practices which students will learn through direct visits to the business fields between Korea and Mongolia or other countries. Also, training leaders who are able to take significant responsibilities in domestic and international corporations.</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: width * 0.115, marginLeft: 'auto', marginTop: -width*0.02}}>
                    <Image source={require('../../assets/images/bachelorba2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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
                        title="Department Objectives" 
                        content={
                            <>
                                <span>• To educate students into professionals who can understand the flow of the international economy and management, &nbsp;&nbsp;&nbsp;and contribute to companies in the country and area as international management professionals.</span>{'\n'}
                                <span>• To equip students to become professionals who have the ability to apply expertise that is learned through direct visits to &nbsp;&nbsp;&nbsp;Korean (or international) companies in Mongolia and seminars of entrepreneurs in real business situations.</span>
                            </>
                        }
                        maxHeightPercentage={115}
                    />
                <ExpandableList
                    title="Curriculum"
                    content={<strong>Marketing for Entrepreneurs{'\n'}
                    Marketing Planning & Strategy{'\n'}
                    Brand Management{'\n'}
                    Sales Management{'\n'}
                    Retailing{'\n'}
                    Advertising{'\n'}
                    Consumer Behavior{'\n'}
                    Global Marketing{'\n'}
                    Field Study (Domestic, International){'\n'}
                    International Trade Practice (Korean, Mongolian)</strong>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.04}}>
                <View style={{backgroundColor:'white',borderRadius: width*0.03, borderWidth: 1,height:width*0.215, width: width*0.43,marginRight:width*0.04, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>Future Job</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {'\n'}• Professional Manager of All (Domestic, International & Global) &nbsp;&nbsp;Organizations
                        {'\n'}• Marketing Manager
                        {'\n'}• Financial Analyst & Banker
                        {'\n'}• HR Manager
                        {'\n'}• Business Consultant
                        {'\n'}• Financial Securities
                        {'\n'}• Investment Analyst
                        {'\n'}• Business Administrator
                        </FONT>
                    </View>  
                </View>
                <View style={{backgroundColor:'white',borderRadius: width*0.03, borderWidth: 1,height:width*0.215, width: width*0.27,borderColor:'#EDF0FF', shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>Opportunities</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {'\n'}• Professional Manager of All (Domestic, &nbsp;&nbsp;&nbsp;International & Global) Organizations
                        {'\n'}• Marketing Manager
                        {'\n'}• Financial Analyst & Banker
                        {'\n'}• HR Manager
                        {'\n'}• Business Consultant
                        {'\n'}• Financial Securities
                        {'\n'}• Investment Analyst
                        {'\n'}• Business Administrator
                        </FONT>
                    </View>  
                </View>
            </View>
            
            <Footer/>
        </ScrollView>
        
    );
}

export default Master_MBA;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});