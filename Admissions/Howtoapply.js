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
      <View style={{width: width * 0.1, marginRight: 'auto', marginTop: '-1%' }}>
          <Image source={require('../assets/images/howtoapply1.png')} style={{width: 'auto', height: width * 0.25}} resizeMode="contain"/>
      </View>
        <View style={{marginLeft: '-1%', width: '18%'}}>
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
                    <Button type="Eight" text={"Scholarship"} numberOfLines={2} style={{width: width * 0.15}} onPress={() => navigation.navigate('Scholarship')}></Button>
                </View>
            </View>
        </View>
        <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: "row", width: '60%',}}>
            <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '6%', marginRight:'-6%'}}>
                <Button type="Fourth" text={"Undergraduate Programs"}  onPress={() => navigation.navigate('Undergraduate Programs')}></Button>
            </View>
            <View style={{borderRightWidth: 1, height: '20%'}}></View>
            <View style={{ width: '50%', alignItems: 'center', marginTop: '-1%', marginLeft: '1%'}}>
                <Button type="Fourth" text={"Graduate Programs"} style={{width: width * 0.20}} onPress={() => navigation.navigate('Graduate Programs')}></Button>
            </View>
        </View>
        
        <View style={{flexDirection: "row", width: '100%' }}>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>1</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>Application {"\n"}Form</FONT>
          </View>
          
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginLeft: -2, marginRight: -15 }}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>2</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>MIU {"\n"}Entrance Exam</FONT>
          </View>
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginLeft: -15 }}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>3</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>Document {"\n"}Screening</FONT>
          </View>
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginRight: -15}}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>4</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>Admission {"\n"}Result {"\n"} Announcement</FONT>
          </View>
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginLeft: -10, marginRight: -10 }}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>5</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>Scholarship {"\n"}Application {"\n"} Announcement</FONT>
          </View>
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginLeft: -15, marginRight: -5 }}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>6</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15}}>Official {"\n"}Acceptance {"\n"}Letter</FONT>
          </View>
          <View style={{ borderTopWidth: 1, width: "1.5%", marginTop: '1.9%', marginLeft: -5, marginRight: -3 }}></View>
          <View style={{ alignItems:'center'}}>
            <View style={{ backgroundColor: '#EDF0FF', borderRadius: "50%", width: width*0.04, height: height*0.08, alignItems: 'center', justifyContent: 'center'}}>
              <FONT>7</FONT>
            </View>
            <FONT type="Body" style={{textAlign: 'center', fontSize: 15   }}>Payment of{"\n"}Fees</FONT>
          </View>
          </View>
          </View>
      </View>
    </ScrollView>
  );
}

export default Howtoapply

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fcfc"
  },
});