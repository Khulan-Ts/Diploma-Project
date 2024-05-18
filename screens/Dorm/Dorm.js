import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Linking } from "react-native";
import FONT from "../../src/components/Titles";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json"
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Dorm=({navigation, language})=>{
    const { width, height } = useWindowDimensions();
    const { apply } = data.links;
    const dormEN = data.dormEN;
    const dormMN = mn.dormMN;
    const dormRU = ru.dormRU;
    
    let content;
    switch (language){
        case 'mn':
            content = dormMN;
            break;
        case 'ru':
            content = dormRU;
            break;
        case 'en':
            content = dormEN;
            break;
    }

    return(
        <ScrollView style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: '5%'}}>
                <View style={{width: width * 0.1, marginTop: '-1%', marginRight: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/dorm_cal.png')} style={{width: 'auto', height: width * 0.23}} resizeMode="contain"/>
                </View>
                
                <View style={{flexDirection: 'column'}}>
                    <View style={{ width: width * 0.72, marginLeft: width * 0.01, backgroundColor: 'white', height: width * 0.165, padding: width * 0.01 }}>                        
                        <FONT type={"Regular"} style={{ color: '#3D2562',fontSize: 22}}>{content.dormTitle}</FONT>
                        <FONT type={"Body"} style={{marginTop: height * 0.03, color: '#3D2562', fontSize: 16}}>{content.dormDescription}</FONT>                      
                    </View>    
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: width * 0.26, marginLeft: width * 0.01}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * 0.02, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 20}}>
                                    {content.roomtypeTitle}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.roomtype1}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.roomtype2}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01}}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.roomtype3}                                </FONT>
                            </View>
                        </View>
                        <View style={{width: width * 0.26, marginLeft: width * -0.011, padding: width * 0.01}}>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * 0.01, padding: width * 0.01, backgroundColor: '#EDF0FF' }}>
                                <FONT type={"Title3"} style={{fontSize: 20}}>
                                    {content.housingfeeTitle}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.housingfee1}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.housingfee2}
                                </FONT>
                            </View>
                            <View style={{ borderWidth: 2, borderColor: '#CDD4FB', marginTop: width * -0.001, padding: width * 0.01 }}>
                                <FONT type={"Body"} style={{ fontSize: 15}}>
                                    {content.housingfee3}
                                </FONT>
                            </View>
                        </View> 
                        <View style={{marginLeft: width * 0.01, marginTop: width * 0.018}}>
                            <View style={[styles.infoContainer, {width: width * 0.2, height: width * 0.08, padding: width * 0.0075, borderRadius: width * 0.022}]}>
                                <View style={{flexDirection: 'row'}}>
                                    <Clock width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: '5%', marginTop: '-1%'}}>
                                    <FONT type="Title2" style={{fontSize: 18}}>{content.durationTitle}</FONT>
                                    <FONT style={{fontSize: 18}}>{content.duration}</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width * 0.001}}>
                                    <Calendar width={width * 0.02} height={width * 0.02}/>
                                    <View style={{marginLeft: '5%'}}>
                                    <FONT type="Title2" style={{fontSize: 18}}>{content.contactTitle}</FONT>
                                    <FONT style={{fontSize: 18}}>{content.contact}</FONT>
                                    </View>
                                </View>
                                </View>
                            <Button type="Apply2" text={content.ApplyButton} style={{ marginTop: width * 0.013, marginLeft: width * 0.019}} onPress={()=> Linking.openURL(apply)}></Button>
                        </View>
                    </View>
                </View>
                <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto'}}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5, marginBottom: width * 0.1}} resizeMode="contain"/>
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
  