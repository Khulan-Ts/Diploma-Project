import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Dimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useRef, useEffect } from "react";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";

const Bachelor_BA= ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    useEffect( () => {
        
    })
    const imagesWithText = [
        { source: require('../../assets/images/choihuipark.png'), text: "CHOI HUI PARK\nProfessor,\n Department chair" },
        { source: require('../../assets/images/victorngu.png'), text: "VICTOR NGU\n Professor" },
        { source: require('../../assets/images/jungkukkim.png'), text: "JUNG KUK KIM\nAssociate Professor" },
        { source: require('../../assets/images/seunghunbaek.png'), text: "SEUNG HUN BAEK\n SeniorLecturer" },
        { source: require('../../assets/images/zhihong.png'), text: "ZHI HONG WANG /Jossy/\nSenior Lecturer" },
    ];

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/bachelorba1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.02, marginBottom: height * 0.1, backgroundColor: 'white', height: height*0.2, padding: width*0.01, marginTop: width*-.016}}>
                    <FONT type="Title" style={{fontSize: 25}}>WELCOME TO THE DEPARTMENT OF BUSINESS ADMINISTRATION</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} lines={3}>Business Administration Department (BA) trains in managerial
                   discipline and educates students on how to effectively compete in the international business environment. 
                   Students are instructed to handle dynamic decision-making process problems in an era of globalization 
                   and information revolution in the world.</FONT>
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
                <View style={{marginLeft: '110%', marginTop: '-32%', backgroundColor: '#EDF0FF'}}>
                            <View style={[styles.infoContainer, {width: width * 0.17, height: height * 0.17}]}>
                                <View style={{flexDirection: 'row',marginTop: '1%'}}>
                                    <Clock width={24} height={28}/>
                                    <View style={{marginLeft: '5%'}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                                        <FONT style={{fontSize: 18}}>4 years/ Onsite</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: '1%', }}>
                                    <Calendar width={25} height={25}/>
                                    <View style={{marginLeft: '5%'}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                                        <FONT style={{fontSize: 18}}>August-September</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={"APPLY"} style={{ marginTop: '8%', marginLeft: '2%'}} ></Button>
                        </View>
            </View>
        </ScrollView>
        
    );
}

export default Bachelor_BA;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});