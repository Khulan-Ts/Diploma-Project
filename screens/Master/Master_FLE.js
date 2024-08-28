import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View, Linking } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";
import data from '../../static.json';
import en from "../../staticEN.json";
import mn from '../../staticMN.json';
import ru from '../../staticRU.json';

const Master_FLE= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    const { apply } = data.links;
    const imagesWithText = data.fleImagesWithText;
    let content;
    switch (language) {
        case 'mn':
            content = mn.masterFle;
            break;
        case 'ru':
            content = ru.masterFle;
            break;
        case 'en':
        default:
            content = en.masterFle;
            break;
    }
    useEffect( () => {
        
    })

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1}}>
                    <Image source={require('../../assets/images/calligraphy/FLEcal.png')} style={{width: 'auto', height: width * 0.4}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.147, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25, marginBottom:width*0.008}}>{content.welcomeTitle}</FONT>
                    <FONT type="Regular" style={{fontSize: 18}}>{content.welcomeDescription}</FONT>
                </View>
                <View style={{width: width * 0.1, marginBottom: width * 0.115, marginLeft: 'auto', marginTop: -width*0.02}}>
                    <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
                </View>       
            </View>
            <View style={{
                backgroundColor: '#F6FAFF',
                borderBottomEndRadius: width * 0.011,
                borderBottomStartRadius:width * 0.011,
                width: width*0.5,
                marginTop: width*-0.43,
                marginLeft: width*0.11
            }}>
                <FONT type="Subtitle" style={{fontSize:25, marginBottom: width*0.01}}>{content.meetOurFaculties}</FONT>

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
                                        <FONT type="Title2" style={{fontSize: 18}}>{content.durationTitle}</FONT>
                                        <FONT style={{fontSize: 18}}>{content.durationContent}</FONT>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: width*0.001, alignItems:'center', marginLeft:width*0.015}}>
                                    <Calendar width={width*0.02} height={width*0.02}/>
                                    <View style={{marginLeft: width*0.015}}>
                                        <FONT type="Title2" style={{fontSize: 18}}>{content.intakesTitle}</FONT>
                                        <FONT style={{fontSize: 18}}>{content.intakesContent}</FONT>
                                    </View>
                                </View>
                            </View>
                            <Button type="Apply2" text={content.ApplyButton} style={{ marginLeft: width*0.005, marginTop:width*0.03}} onPress={()=> Linking.openURL(apply)}></Button>
                </View>
                <View style={{width: width*0.95, marginTop: width*0.05}}>
                    <ExpandableList 
                        title={content.admissionRequirementsTitle} 
                        content={content.admissionRequirementsContent}
                        maxHeightPercentage={115}
                    />
                <ExpandableList
                    title={content.curriculumTitle}
                    content={<strong>{content.curriculumContent}</strong>}
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.02, marginBottom:width*0.05}}>
                <View style={{backgroundColor:'white',borderRadius: width*0.03, borderWidth: 1,height:width*0.145, width: width*0.725,marginRight:width*0.04, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>{content.careerOpportunityTitle}</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                            {content.careerOpportunityContent}
                        </FONT>
                    </View>  
                </View>
            </View>
            
            <Footer language={language}/>
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