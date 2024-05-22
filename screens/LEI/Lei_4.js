import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Calendar from "../../assets/icons/calendar";
import Clock from "../../assets/icons/clock";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";
import Footer from "../../src/components/footer";
import TeacherRow from "../../src/components/teacherRow";

const Lei_4= ({ navigation,language }) => {
  const { width } = useWindowDimensions();
  const { lei_apply } = data.links;
  const { lei_teachers }= data;

  const leiEN = data.leiEN;
  const leiMN = mn.leiMN;
  const leiRU = ru.leiRU;
    
  let content;
  switch (language){
    case 'mn':
      content = leiMN;
      break;
    case 'ru':
      content = leiRU;
      break;
    case 'en':
      content = leiEN;
      break;
  }

  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05, marginBottom: '5%'}}>
        <View style={{width: width * 0.1,}}>
          <Image source={require('../../assets/images/calligraphy/Lei1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View>
          <View style={[styles.textContainer, {width: width * 0.78, height: width * 0.155, padding: width * 0.011, borderRadius: 10,}]}>
              <FONT type="Title3" style={{fontSize: 25}}>{content.leiTitle}</FONT>
              <FONT style={{fontSize: 18, marginTop: '1%'}}>{content.leiDescription}</FONT> 
          </View>
          <View style={{flexDirection: 'row', marginTop: width * 0.05}}>
              <View>
                  <View style={{borderBottomWidth: width * 0.0002, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={content.leiButton1} onPress={() => navigation.navigate('English Foundation Course')} ></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0002, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={content.leiButton2} onPress={() => navigation.navigate('English Evening Course')}></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0002, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={content.leiButton3} onPress={() => navigation.navigate('Business English Course')}></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0002, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={content.leiButton4} onPress={() => navigation.navigate('Mongolian Course')} isPressedState={true}></Button>
                  </View>
                  <Button type="Nine" text={content.leiButton5} onPress={() => navigation.navigate('Additional Language Course')}></Button>
              </View>
              <View style={{borderLeftWidth: width * 0.0002, borderColor: "#3D2562", width: width * 0.41, height: width * 0.15}}>
                  <FONT type="Body" style={{ marginLeft: "2%", fontSize: 18, marginTop: '-2%'}}>{content.lei4description}</FONT>
              </View>
              <View style={{marginLeft: '1.5%'}}>
                <View style={[styles.infoContainer, {width: width * 0.16, height: width * 0.08, padding: width * 0.0075, borderRadius: width * 0.022}]}>
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
                      <FONT type="Title2" style={{fontSize: 18}}>{content.intakeTitle}</FONT>
                      <FONT style={{fontSize: 18}}>{content.intake}</FONT>
                    </View>
                  </View>
                </View>
                <Button type="Apply2" text={content.ApplyButton} style={{ marginTop: width * 0.015}} onPress={()=> Linking.openURL(lei_apply)}></Button>
              </View>
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center', marginTop: '7%'}}>
            <View style={{borderBottomWidth: width * 0.0002, borderColor: '#3D2562', width: width * 0.297, marginRight: '2%'}}/>
            <FONT type={"Title2"} style={{fontSize: 25, marginRight: '2%'}}>{content.meetourTeachers}</FONT>
            <View style={{borderBottomWidth: width * 0.0002, borderColor: '#3D2562', width: width * 0.297}}/>
          </View>
          <View style={{ flexDirection: 'column', marginTop: '7%' }}>
            <TeacherRow teachers={lei_teachers}/>
          </View>
        </View>
        <View style={{width: width * 0.1, marginTop: "-2%", marginLeft: 'auto'}}>
          <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer language={language}/>
    </ScrollView>
  );
}

export default Lei_4

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
  textContainer:{
    backgroundColor: '#fff',
    shadowColor: '#DFE4FF',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  infoContainer:{
    backgroundColor: "#EDF0FF",
  }
});