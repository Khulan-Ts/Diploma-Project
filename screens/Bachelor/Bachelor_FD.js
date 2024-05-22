import React, { useEffect } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Clock from "../../assets/icons/clock";
import Calendar from "../../assets/icons/calendar";
import Footer from "../../src/components/footer";
import ExpandableList from "../../src/components/dptExpandable";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Bachelor_FD= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    const imagesWithText = data.fdImagesWithText;
    let content;
    switch (language){
    case 'mn':
      content = mn.bachelorFdMN;
      break;
    case 'ru':
      content = ru.bachelorFdRU;
      break;
    case 'en':
      content = data.bachelorFdEN;
      break;
  }
    useEffect( () => {
        
    })

    return (
        <ScrollView
            style={styles.container}
        >
            <View style={{flexDirection: "row", marginTop: width * 0.05}}>
                <View style={{width: width * 0.1, marginTop: '-2%'}}>
                    <Image source={require('../../assets/images/calligraphy/FDcal.png')} style={{width: 'auto', height: width * 0.27}} resizeMode="contain"/>
                </View>
             
                <View style={{width: width * 0.75, marginLeft: width * 0.006, marginBottom: width* 0.02, backgroundColor: 'white', height: width*0.075, padding: width*0.01, marginTop: width*-.016, borderRadius:width*0.005}}>
                    <FONT type="Title" style={{fontSize: 25}}>{content.welcomeTitle}</FONT>
                    <FONT type="Regular" style={{fontSize: 18}} >{content.welcomeDescription}</FONT>
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
                marginTop: width*-0.5,
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
                            <Button type="Apply2" text={content.ApplyButton} style={{ marginLeft: width*0.005, marginTop:width*0.03}} ></Button>
                </View>
                <View style={{width: width*0.95, marginTop: width*0.05}}>
                    <ExpandableList 
                    title={content.admissionRequirementsTitle}
                    content={content.admissionRequirementsContent}
                    maxHeightPercentage={115}
                />
                <ExpandableList
                    title={content.curriculumTitle}
                    content={
                        <>
                            <span>
                                <strong>{content.curriculumContent1}</strong>
                            </span>{'\n'}
                            <span>
                                <strong>&nbsp;&nbsp;{content.curriculumContentTitle2} </strong>{content.curriculumContent2}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{content.curriculumContent3}
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;{content.curriculumContentTitle3} </strong>{content.curriculumContent4}
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;{content.curriculumContentTitle4} </strong>{content.curriculumContent5}
                             </span>{'\n'}
                             <span>
                                <strong>&nbsp;&nbsp;{content.curriculumContentTitle5} </strong>{content.curriculumContent6}
                             </span>

                        </>
                    }
                    maxHeightPercentage={110}
                />
                </View>
            </View>
            <View style={{flexDirection:'row', width:width, marginTop:width*0.04}}>
                <View style={{backgroundColor:'white',borderRadius: width*0.022, borderWidth: 1,height:width*0.18, width: width*0.43,marginRight:width*0.04, marginLeft: width*0.11,borderColor:'#EDF0FF',shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2}}>
                    <View style={{marginLeft: width*0.01}}>
                        <FONT type="Title2" style={{fontSize: 25, marginTop:width*0.01}}>{content.skillDevelopmentTitle}</FONT>
                    </View>
                    <View style={{marginLeft:width*0.02, marginBottom: width*0.01}}> 
                        <FONT type="Regular" style={{fontSize: 18}}>
                        {content.skillDevelopmentContent1}&nbsp;&nbsp;{content.skillDevelopmentContent2}
                        </FONT>
                    </View>  
                </View>
                <View style={{backgroundColor:'white',borderRadius: width * 0.022, borderWidth: 1,height:width*0.165, width: width*0.27,borderColor:'#EDF0FF', shadowColor: '#CDD4FB',shadowOffset: { width: 1, height: 2 },shadowOpacity: 1,shadowRadius: 2, marginBottom: width*0.1}}>
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

export default Bachelor_FD;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6FAFF"
    },
});