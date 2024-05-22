import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import HoverButton2 from "../../src/components/aboutusHover";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";


const AboutUs=({navigation, language})=>{
  const { width, height } = useWindowDimensions();
  const imageSize = width * 0.15;
  const aboutusImg = data.aboutusImg;
  const aboutusEN = data.aboutusEN;
  const aboutusMN = mn.aboutusMN;
  const aboutusRU = ru.aboutusRU;

  let content;
    switch (language){
    case 'mn':
      content = aboutusMN;
      break;
    case 'ru':
      content = aboutusRU;
      break;
    case 'en':
      content = aboutusEN;
      break;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start',  marginTop:width*0.05, marginLeft:width*0.05}}>
        <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'center', width: width*0.81}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start', height:width*0.265}}>
          <Image
            source={require("../../assets/images/calligraphy/aboutusCal1.png")}
            style={{height: width*0.3, width:width*0.1}}resizeMode="contain"
          />
          <View style={{width: width * 0.13}}>
              <View style={{ borderBottomWidth: 1, width: width*0.15,  paddingBottom: width*0.007, paddingLeft:width*0.007}}>
                  <FONT type="Regular" style={{color: '#000000', fontSize:28}}>{content.AboutUsTitle}</FONT>
              </View>
              <View style={{marginTop: width*0.01}}>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={content.AboutUsButton1} onPress={() => navigation.navigate('About us')} isPressedState={true}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={content.AboutUsButton2} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1}}>
                  <Button type="Secondary" text={content.AboutUsButton3} onPress={() => navigation.navigate('Plan and Report')} ></Button> 
                  </View>
                  <Button type="Secondary" text={content.AboutUsButton4} onPress={() => navigation.navigate('Giving Information')}></Button>
              </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex:1, width:width*0.67}}>
            <View style={{flexDirection:'column', width:width*0.27, alignItems:'center', justifyContent:'center', paddingbottom:width*0.1}}>
                <Image
                source={{uri: aboutusImg.presidentImg}}
                style={{width: width*0.4, height: width*0.2, borderRadius:50}}resizeMode="contain"
                /> 
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007, borderBottomWidth:width*0.0009}}>Oh Moon KWON, President</FONT>
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Mongolia International University</FONT>
            </View>
            <View style={{marginLeft:0.05, width:width*0.38}}>
                <FONT style={{fontSize:25, fontWeight:'bold'}}>{content.PresidentMessageTitle}</FONT>
                <FONT style={{fontSize:18, marginTop:'5%'}}>{content.PresidentMessage1}</FONT>
            </View>

          </View>

        </View>
        <FONT style={{fontSize:18, width: width*0.6, marginLeft:width*0.25}}>{content.PresidentMessage2}</FONT>
        <View style={{alignItems:'center', marginTop:width*0.02, justifyContent:'center', marginLeft:width*0.09}}>
          <FONT style={{textAlign:'center', marginTop:width*0.03,marginBottom:width*0.02, fontWeight:'bold', fontSize:36}} >{content.VisionTitle}</FONT> 
          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', width:width*0.8, marginTop:width*0.03, marginBottom:width*0.075}}>

            <View style={{flexDirection: 'row'}}>
              <HoverButton2 icon={require("../../assets/images/vision/vision1.png")} text={content.hoverText1} descr={content.hoverDescr1}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision/vision2.png")} text={content.hoverText2} descr={content.hoverDescr2} style={{marginLeft: width*0.05}}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision/vision3.png")} text={content.hoverText3} descr={content.hoverDescr3} style={{marginLeft: width*0.05}}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision/vision4.png")} text={content.hoverText4} descr={content.hoverDescr4} style={{marginLeft: width*0.05}}></HoverButton2>
            </View> 
          </View>
        </View>
        </View>
        <Image
            source={require("../../assets/images/calligraphy/miucal.png")}
            style={{height: width*0.5, width:width*0.1, marginTop:-width*0.01}}resizeMode="contain"
          />
      </View>
      <Footer language={language}/>


        
 
    </ScrollView>
  );
}

export default AboutUs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6FAFF',
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 3, // Required for Android
    // Other header styles such as height, padding, etc.
  },

});
