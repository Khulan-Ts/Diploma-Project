import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import en from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Graduate= ({ navigation, language }) => {
  const { width, height } = useWindowDimensions();
  const graduateEN = en.graduateEN;
  const graduateMN = mn.graduateMN;
  const graduateRU = ru.graduateRU;

    
  let content;
  switch (language){
    case 'mn':
        content = graduateMN;
        break;
    case 'ru':
        content = graduateRU;
        break;
    case 'en':
        content = graduateEN;
        break;
  }
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05}}>
      <View style={{width: width * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/gradcal.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
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
        <View style={{width: width * 0.52, marginBottom: height * 0.1, marginLeft: width * 0.02}}>
          <FONT type={"Subtitle2"} style={{ color: '#3D2562', fontSize: 23}}>{content.DegreeProgram}</FONT>
          <FONT type={"Body"}style={{marginTop: width * 0.016, color: '#3D2562', marginBottom: '2%', fontSize: 18}}>{content.DegreeDescription}</FONT>
          <View style={{backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>{content.SomTitle}</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={content.MBAButton} onPress={()=>navigation.navigate("Master MBA")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>{content.SoCSTitle}</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={content.MSEButton} onPress={()=>navigation.navigate("Master SE")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>{content.SoISCTitle}</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={content.MPAButton} onPress={()=> navigation.navigate("Master Public")}>
            </Button>
          </View>
          <View style={{marginTop: width * 0.01, backgroundColor: '#EDF0FF'}}>
            <FONT type={"Subtitle2"} style={{color: '#3D2562', fontSize: 23}}>{content.ProgramTitle}</FONT>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Button style={{marginTop: width * 0.01, color: '#3D2562'}} type="Seven" text={content.MSEButton} onPress={()=>navigation.navigate("Master FLE")}>
            </Button>
          </View>
        </View>
        <View style={{width: width * 0.1, marginTop: '-2%', marginLeft: 'auto',marginBottom: width * 0.1}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer language={language}/>
    </ScrollView>
  );
}

export default Graduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});
