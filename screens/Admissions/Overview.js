import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Overview= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    const overviewImg = data.overviewImg;
    let content;
    switch (language){
    case 'mn':
      content = mn.overviewMN;
      break;
    case 'ru':
      content = ru.overviewRU;
      break;
    case 'en':
      content = data.overviewEN;
      break;
  }
    return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", marginTop: width * 0.05}}>
            <View style={{width: width * 0.1, marginTop: '-1.5%'}}>
                <Image source={require('../../assets/images/overviewcal.png')} style={{width: 'auto', height: width * 0.11}} resizeMode="contain"/>
            </View>
            <View style={{ width: width * 0.18, marginLeft:'1%'}}>
                <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                    <FONT type="Regular" style={{fontSize: 28}}>{content.AdmissionsTitle}</FONT>
                </View>
                    <View style={{}}>
                        <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                            <Button type="Secondary" text={content.AdmissionsButton1} onPress={() => navigation.navigate('Over View')} isPressedState={true}></Button>
                        </View>
                        <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                            <Button type="Secondary" text={content.AdmissionsButton2} onPress={() => navigation.navigate('How To Apply UnderGraduate')} ></Button>
                        </View>
                            <Button type="Secondary" text={content.AdmissionsButton3} onPress={() => navigation.navigate('Scholarship')}></Button>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginTop: width * 0.045}}>
                                <Image source={{uri: overviewImg.overview1}} style={{width: width * 0.2, height: width * 0.13}} resizeMode="contain"/>
                            </View>
                            <View style={{marginTop: width * 0.043, marginLeft: width * 0.01}}>
                                <Image source={{uri: overviewImg.overview2}} style={{width: width * 0.37, height: width * 0.16}} resizeMode="contain"/>
                            </View>
                            <View style={{marginTop: width * 0.041, marginLeft: width * 0.01}}>
                                <Image source={{uri: overviewImg.overview3}} style={{width: width * 0.2, height: width * 0.13}} resizeMode="contain"/>
                            </View>
                            
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{marginBottom: width * 0.01, marginTop: width * -0.025}}>
                                <Image source={{uri: overviewImg.overview4}} style={{width: width * 0.2, height: width * 0.16}} resizeMode="contain"/>
                            </View>
                            <View style={{ marginTop: width * 0.004, marginLeft: width * 0.01}}>
                                <Image source={{uri: overviewImg.overview5}} style={{width: width * 0.37, height: width * 0.13}}/>
                            </View>
                            <View style={{marginLeft: width * 0.01, marginTop: width * -0.048}}>
                                <Image source={{uri: overviewImg.overview6}} style={{width: width * 0.2, height: width * 0.2}} resizeMode="contain"/>
                            </View>
                            
                        </View>
                        <View>
                            <View style={{width: width * 0.35, marginLeft: width * 0.226, backgroundColor: 'rgba(000, 000, 0000, 0.3)', height: width * 0.08, padding: width * 0.01, position: 'absolute', marginTop: width * -0.116 }}>
                                <FONT type="Body" style={{ color: 'white', fontSize: 15}}> {content.text1}</FONT>
                            </View>
                        </View>
                        <View>
                            <View style={{width: width * 0.35, marginLeft: width * 0.226, backgroundColor: 'rgba(000, 000, 0000, 0.3)', height: width * 0.1, padding: width * 0.01, position: 'absolute', marginTop: width * -0.28 }}>
                                <FONT type="Body" style={{ color: 'white', fontSize: 17}}> {content.text2} </FONT>
                            </View>
                        </View>
                    </View>
                    
                </View>
            <View style={{ width: width * 0.35, marginLeft: '2%', backgroundColor: '#EDF0FF', height: width * 0.14, padding: width * 0.01}}>
                <FONT type={"Regular"} style={{ color: '#3D2562', fontSize: 25}}>{content.text3}</FONT>
            </View>
            <View style={{marginRight: '-30%', marginLeft: '1%'}}>
                <Image source={{uri: overviewImg.overview7}} style={{width: width * 0.23, height: width * 0.14}} resizeMode="contain"/>
            </View>
            
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto', marginBottom: width * 0.1}}>
            <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
        </View>
        <Footer language={language}/>
    </ScrollView>
  );
}

export default Overview

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
