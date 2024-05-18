import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import Pamphlet from "../../src/components/pamphlet";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const PlanReport = ({ navigation, language }) => {
  const { width, height } = useWindowDimensions();
  const planReportImg = data.planReportImg;
  const planReportEN = data.planReportEN;
  const planReportMN = mn.planReportMN;
  const planReportRU = ru.planReportRU;

  let content;
    switch (language){
    case 'mn':
      content = planReportMN;
      break;
    case 'ru':
      content = planReportRU;
      break;
    case 'en':
      content = planReportEN;
      break;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop:'5%'}}>
        <View style={{width: width * 0.1, marginTop: '-0.5%'}}>
          <Image source={require('../../assets/images/calligraphy/plancal.png')} style={{width: 'auto', height: width * 0.2}} resizeMode="contain"/>
        </View>
          <View style={{width: width * 0.15}}>
              <View style={{ borderBottomWidth: width * 0.0008, paddingBottom: width * 0.01, paddingLeft: width * 0.007}}>
                <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>{content.AboutUsTitle}</FONT>
              </View>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: width * 0.0008, width: '85%'}}>
                      <Button type="Secondary" text={content.AboutUsButton1} onPress={() => navigation.navigate('About us')}></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0008, width: '85%'}}>
                      <Button type="Secondary" text={content.AboutUsButton2} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: width * 0.0008, width: '85%'}}>
                  <Button type="Secondary" text={content.AboutUsButton3} onPress={() => navigation.navigate('Plan and Report')} isPressedState={true}></Button> 
                  </View>
                  <Button type="Secondary" text={content.AboutUsButton4} onPress={() => navigation.navigate('Giving Information')}></Button>
              </View>
          </View>
          <View style={{marginLeft: width * 0.02 }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FONT type="Title2" style={{fontSize: 25, marginRight: width * 0.01}}>{content.StategicPlanTitle}</FONT>
              <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.45}}/>
            </View>
            <View style={{marginTop: width* 0.02}}>
              <Pamphlet/>
            </View>
            <View style={{marginLeft: -width * 0.15, marginTop: width * 0.45}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.15}}/>
                <FONT type="Title2" style={{fontSize: 25, marginRight: width * 0.01, marginLeft: width * 0.01}}>{content.AccredationTitle}</FONT>
                <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.445}}/>
              </View>
              <View style={{flexDirection: 'row', marginTop: width * 0.03, backgroundColor: "#EDF0FF", paddingTop: width * 0.02, paddingBottom: width * 0.02, paddingLeft: width * 0.01, paddingRight: width * 0.01}}>
                <Image source={{uri: planReportImg.accredationImg1}}
                  style={{height: width * 0.1283, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={{uri: planReportImg.accredationImg2}}
                  style={{height: width * 0.1283, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={{uri: planReportImg.accredationImg3}}
                  style={{height: width * 0.1283, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={{uri: planReportImg.accredationImg4}}
                  style={{height: width * 0.1283, width: width * 0.18}}/> 
              </View>
            </View>
          </View>
        <View style={{width: width * 0.1, marginLeft: 'auto', marginTop: '-2%', marginBottom: width * 0.3}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default PlanReport

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6FAFF',
  },
});

