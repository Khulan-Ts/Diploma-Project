import React, {useState} from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import ToolTip from "../../src/components/Tooltip";
import Footer from "../../src/components/footer";

const Howtoapply_Graduate= ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{width: width * 0.1, marginTop: '-1%' }}>
            <Image source={require('../../assets/images/howtoapply1.png')} style={{width: 'auto', height: width * 0.25}} resizeMode="contain"/>
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
                <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '-2.5%'}}>
                    <Button type="Fourth" text={"Graduate Programs"} onPress={() => navigation.navigate('Graduate Programs')}></Button>
                </View>
            </View>
            <View style={{flexDirection: "row", width: width*0.6, marginLeft:'-4%', marginTop: '6%', justifyContent:'center'}}>
              <ToolTip text={'Submitting all Required Application Forms through MIU Official Website, or through email: admission@miu.edu.mn'} lines={3} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>1</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Application {"\n"}Form</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={'The application documents will be evaluated by the Admission Committee.'} lines={2} style={{width: width*0.25}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>2</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Document {"\n"}Screening</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={'Applicants will be notified individually with their interview schedule.'} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>3</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Application {"\n"}Interview</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginRight: '-0.5%', marginLeft: '0.5%'}}></View>
              <ToolTip text={' Applicants will receive individual admission result email from the Admission Affairs Office.'} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>4</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Admission {"\n"}Result {"\n"} Announcement</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '-0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={' Applicants will receive the official acceptance letters and invoices from the Admission Affairs office.'} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>5</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>Official {"\n"}Acceptance {"\n"} Letter</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: "0.5%"}}></View>
              <ToolTip text={' Applicants need to send the receipts of their payments to the Admission Affairs office.'} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT>6</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>Payment {"\n"}of {"\n"}Fees</FONT>
              </View>
              </ToolTip>
            </View>
          </View>
          <View style={{width: width * 0.1, marginLeft:'auto', marginTop: '-1%' }}>
            <Image source={require('../../assets/images/howtoapply2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    <View style={{marginLeft: '11%', marginTop: '-28%', flexDirection: 'row'}}>
      <FONT type="Title3" style={{color:'#3D2562'}}>Required Documents:</FONT>
    <View style={{marginLeft: '1%'}}>
      <FONT type="Regular" style={{fontSize: 22, color: '#3D2562'}}>•  Completed Admission Application Form 
      {'\n'}•  Statement of Purpose (SOP) in English 
      {'\n'}•  Two Recommendation Letter in English 
      {'\n'}•  Notarized English Certificate of Bachelor’s Degree 
      {'\n'}•  Notarized Official Bachelor’s Degree Transcript in English
      {'\n'}•  English Resume with Photo Attached【Optional】
      {'\n'}•  English Proficiency Test Score【Optional】
      {'\n'}•  Valid Passport (Copy)
      {'\n'}•  HIV/ AIDS Test Result
      {'\n'}•  Passport Photos
      {'\n'}•  Application Fee /25 USD/
      </FONT>
    </View>
    </View>
      <Footer/>
    </ScrollView>
  );
}

export default Howtoapply_Graduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6faff"
  },
});