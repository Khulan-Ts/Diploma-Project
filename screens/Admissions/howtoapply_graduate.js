import React from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import ToolTip from "../../src/components/Tooltip";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const Howtoapply_Graduate= ({ navigation, language }) => {
    const { width, height } = useWindowDimensions();
    let content;
    switch (language){
    case 'mn':
      content = mn.Howtoapply_GradMN;
      break;
    case 'ru':
      content = ru.Howtoapply_GradRU;
      break;
    case 'en':
      content = data.Howtoapply_GradEN;
      break;
  }
    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{width: width * 0.1, marginTop: '-1%' }}>
            <Image source={require('../../assets/images/howtoapply1.png')} style={{width: 'auto', height: width * 0.25}} resizeMode="contain"/>
        </View>
          <View style={{ width: width * 0.18, marginLeft: '1%'}}>
                <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                    <FONT type="Regular" style={{fontSize: 28}}>{content.AdmissionsTitle}</FONT>
                </View>
                <View style={{}}>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={content.AdmissionsButton1} onPress={() => navigation.navigate('Over View')}></Button>
                    </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                        <Button type="Secondary" text={content.AdmissionsButton2} onPress={()=> navigation.navigate('How to Apply UnderGraduate')} isPressedState={true}></Button>
                    </View>
                    <View>
                        <Button type="Secondary" text={content.AdmissionsButton3} onPress={() => navigation.navigate('Scholarship')}></Button>
                    </View>
                </View>
            </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: "row", width: width*0.55,}}>
                <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '6%', marginRight:'-6%'}}>
                    <Button type="Fourth" text={content.undergradButton}  onPress={() => navigation.navigate('How To Apply UnderGraduate')}></Button>
                </View>
                <View style={{borderRightWidth: 1, height: height*0.06}}></View>
                <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '-2.5%'}}>
                    <Button type="Fourth" text={content.graduateButton} onPress={() => navigation.navigate('How To Apply Graduate')} isPressedState={true}></Button>
                </View>
            </View>
            <View style={{flexDirection: "row", width: width*0.6, marginLeft:'-4%', marginTop: '6%', justifyContent:'center'}}>
              <ToolTip text={content.tooltipText1} lines={3} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>1</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Application {"\n"}Form</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={content.tooltipText2} lines={2} style={{width: width*0.25}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>2</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Document {"\n"}Screening</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={content.tooltipText3} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>3</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Application {"\n"}Interview</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginRight: '-0.5%', marginLeft: '0.5%'}}></View>
              <ToolTip text={content.tooltipText4} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>4</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color: '#3D2562'}}>Admission {"\n"}Result {"\n"} Announcement</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '-0.5%', marginRight: '0.5%'}}></View>
              <ToolTip text={content.tooltipText5} lines={2} style={{width: width*0.35}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>5</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>{content.acceptanceLetterText}</FONT>
              </View>
              </ToolTip>
              <View style={{ borderTopWidth: 1, width: "3%", marginTop: '3%', marginLeft: '0.5%', marginRight: "0.5%"}}></View>
              <ToolTip text={content.tooltipText6} lines={2} style={{width: width*0.3}}>
              <View style={{ alignItems:'center'}}>
                <View style={{ backgroundColor: '#FFD971', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
                  <FONT style={{fontSize: 30}}>6</FONT>
                </View>
                <FONT type="Body" style={{textAlign: 'center', fontSize: 15, color:'#3D2562'}}>{content.paymentText}</FONT>
              </View>
              </ToolTip>
            </View>
          </View>
          <View style={{width: width * 0.1, marginLeft:'auto', marginTop: '-1%', zIndex:-999}}>
            <Image source={require('../../assets/images/calligraphy/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    <View style={{marginLeft: '11%', marginTop: '-28%', flexDirection: 'row', marginBottom: width*0.1}}>
      <FONT type="Title3" style={{color:'#3D2562', fontSize: 22}}>{content.RequiredDocumentsTitle}</FONT>
    <View style={{marginLeft: '1%'}}>
      <FONT type="Regular" style={{fontSize: 22, color: '#3D2562'}}>
        {content.RequiredDocuments}
      </FONT>
    </View>
    </View>
    <Footer language={language}/>
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