import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const AcademicCal= ({ navigation, language }) => {
  const { width, height } = useWindowDimensions();
  const academicImg = data.academicImg;
  const academicEN = data.academicEN;
  const academicMN = mn.academicMN;
  const academicRU = ru.academicRU;

    
  let content;
  switch (language){
    case 'mn':
        content = academicMN;
        break;
    case 'ru':
        content = academicRU;
        break;
    case 'en':
        content = academicEN;
        break;
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05}}>
        <View style={{width: width * 0.1, marginBottom: height * 0.3, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/acacal-1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View style={{ width: width * 0.18, marginLeft: '1%'}}>
            <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>{content.AcademicTitle}</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton1} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton2} onPress={() => navigation.navigate('Graduate')} isPressedState={true}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={content.AcademicButton3} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={content.AcademicButton4} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={content.AcademicButton5} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{ width: width * 0.5, marginLeft: width * 0.02, marginTop: '-2%', marginBottom: height * 0.1}}>
          <Image source={{uri: academicImg.cal1}} style={{ height: width * 0.38 , width: 'auto' }} resizeMode="contain"/>
          <Image source={{uri: academicImg.cal2}} style={{ height: width * 0.33, width: 'auto', marginTop: -height * 0.04 }} resizeMode="contain"/>
          <Image source={{uri: academicImg.cal3}} style={{ height: width * 0.37, width: 'auto', marginTop: -height * 0.04 }} resizeMode="contain"/>
          <Image source={{uri: academicImg.cal4}} style={{ height: width * 0.31, width: 'auto', marginTop: -height * 0.03 }} resizeMode="contain"/>
        </View>
        <View style={{width: width * 0.1, marginBottom: width * 0.5, marginLeft: 'auto', marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default AcademicCal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});