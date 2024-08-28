import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import en from "../../staticEN.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Exchange= ({ navigation, language }) => {
  const { width, height } = useWindowDimensions();
  const exchangeImg = data.exchangeImg;
  const exchangeEN = en.exchange;
  const exchangeMN = mn.exchange;
  const exchangeRU = ru.exchange;

    
  let content;
  switch (language){
    case 'mn':
        content = exchangeMN;
        break;
    case 'ru':
        content = exchangeRU;
        break;
    case 'en':
        content = exchangeEN;
        break;
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%',}}>
        <View style={{width: width * 0.1, marginBottom: height * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/ex-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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
                    <Button type="Secondary" text={content.AcademicButton2} onPress={() => navigation.navigate('Graduate')}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={content.AcademicButton3} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={content.AcademicButton4} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')} isPressedState={true}></Button>
                </View>
                <Button type="Secondary" text={content.AcademicButton5} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width: '50%', marginBottom: '10%', marginLeft: '5%'}}>
          <FONT style={{fontSize: 23}}>{content.ProgramTitle}</FONT>
          <FONT style={{fontSize: 20, marginTop: '2%'}}>
            {content.ProgramDescription}
          </FONT>
          <FONT style={{fontSize: 23, marginTop: '2%'}}>{content.ContactTitle}</FONT>
          <FONT type={'Body'} style={{marginTop: '2%', fontSize: 18}}>
            {content.ContactEmail}
          </FONT>
          <Image source={{uri: exchangeImg.Universities}} style={{width: width * 0.5, height: width * 0.15, marginTop: width * 0.01}} resizeMethod="contain"/>
        </View>
        <View style={{width: width * 0.1, marginBottom: height * 0.1, marginLeft: 'auto', marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer language={language}/>
    </ScrollView>
  );
}

export default Exchange

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});