import React, {useState} from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../src/components/Titles";
import Button from "../src/components/Button";
import ToolTip from "../src/components/Tooltip";

const Howtoapply= ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{width: width * 0.1, marginTop: '-1%' }}>
            <Image source={require('../assets/images/howtoapply1.png')} style={{width: 'auto', height: width * 0.25}} resizeMode="contain"/>
        </View>
          <View style={{ marginLeft:'0.5%', width: '18%', marginTop: '-1%'}}>
              <View style={{ borderBottomWidth: 1, width: '80%', paddingBottom: 14, paddingLeft:14}}>
                  <FONT type="Regular">Admissions</FONT>
              </View>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: 1, width: '50%'}}>
                      <Button type="Eight" text={"Overview"} onPress={() => navigation.navigate('Overview')} isPressedState={true} ></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, width: '50%'}}>
                      <Button type="Eight" text={"How to Apply"} onPress={() => navigation.navigate('How to Apply')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1, width: '50%'}}>
                  <Button type="Eight" text={"Tuition & aids"} onPress={() => navigation.navigate('Tuition & Aids')}></Button> 
                  </View>
                  <View style={{ width: '50%'}}>
                      <Button type="Eight" text={"Scholarship"} style={{width: width * 0.15}} onPress={() => navigation.navigate('Scholarship')}></Button>
                  </View>
              </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: "row", width: width*0.55,}}>
                <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '6%', marginRight:'-6%'}}>
                    <Button type="Fourth" text={"Undergraduate Programs"}  onPress={() => navigation.navigate('Undergraduate Programs')}></Button>
                </View>
                <View style={{borderRightWidth: 1, height: height*0.06}}></View>
                <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '1%'}}>
                    <Button type="Fourth" text={"Graduate Programs"} style={{width: width * 0.20}} onPress={() => navigation.navigate('Graduate Programs')}></Button>
                </View>
            </View>
            
            <View style={{flexDirection: "row", width: width*0.6, marginLeft:'-8.8%', marginTop: '3%', justifyContent:'center'}}>
              <ToolTip text={'Submitting all Required Application Forms through MIU Official Website, or through email: admission@miu.edu.mn'} lines={3} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>1</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Application {"\n"}Form</FONT>
              </View>
              </ToolTip>
              
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: -2, marginRight: -15 }}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>2</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>MIU {"\n"}Entrance Exam</FONT>
              </View>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: -15 }}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>3</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Document {"\n"}Screening</FONT>
              </View>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginRight: -15}}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>4</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Admission {"\n"}Result {"\n"} Announcement</FONT>
              </View>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: -10, marginRight: -10 }}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>5</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>Scholarship {"\n"}Application {"\n"} Announcement</FONT>
              </View>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: -15, marginRight: -5 }}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>6</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>Official {"\n"}Acceptance {"\n"}Letter</FONT>
              </View>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: -5, marginRight: -3 }}></View>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>7</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'  }}>Payment of{"\n"}Fees</FONT>
              </View>
            </View>
          </View>
          <View style={{width: width * 0.1, marginLeft:'auto', marginTop: '-1%' }}>
            <Image source={require('../assets/images/howtoapply2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    <View style={{marginLeft: '11%', marginTop: '-28%', flexDirection: 'row'}}>
      <FONT type="Title3" style={{color:'#3D2562'}}>Required Documents:</FONT>
    <View style={{marginLeft: '1%'}}>
      <FONT type="Regular" style={{fontSize: 22, color: '#3D2562'}}>•  Completed Admission Application Form 
      {'\n'}•  Statement of Purpose (SOP) in English 
      {'\n'}•  One Recommendation Letter in English 
      {'\n'}•  English Certificate of High School Graduation /copy/ 
      {'\n'}•  Official High School Records in English /copy/ 
      {'\n'}•  Notarized English translation of National Exam score 
      {'\n'}•  Completed Resume Form 
      {'\n'}•  Copy of Valid Passport /copy/ 
      {'\n'}•  Two Passport-size Photos (3x4)
      {'\n'}•  HIV/AIDS Test Results /copy/ 
      {'\n'}•  Chest X-Ray Test Result in English 
      {'\n'}•  Application Fee /25 USD/ 
      {'\n'}•  Document Translation Fee 20,000₮ or 40,000₮ </FONT>
    </View>
    </View>
      
    </ScrollView>
  );
}

export default Howtoapply

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6faff"
  },
});