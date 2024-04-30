import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const PlanReport = ({ navigation }) => {
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop:'5%'}}>
        <View style={{width: width * 0.1, marginTop: '-0.5%'}}>
          <Image source={require('../../assets/images/calligraphy/plancal.png')} style={{width: 'auto', height: width * 0.2}} resizeMode="contain"/>
        </View>
          <View style={{width: width * 0.13, marginLeft:'1%',}}>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={"About us"} onPress={() => navigation.navigate('About us')}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={"Our people"} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1}}>
                  <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('Plan and Report')} isPressedState={true}></Button> 
                  </View>
                  <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
              </View>
          </View>
          <View style={{marginLeft: width * 0.02, marginBottom: height * 0.1, }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FONT type="Title2" style={{fontSize: 25, marginRight: width * 0.01}}>STRATEGIC PLAN</FONT>
              <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.45}}/>
            </View>

            <Image source={require("../../assets/images/plan_pamphlet/1.png")} resizeMode="contain" style={{height: height * 0.9, width: width * 0.6}}/>

            <View style={{marginLeft: -width * 0.15, marginTop: height * 0.05}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.15}}/>
                <FONT type="Title2" style={{fontSize: 25, marginRight: width * 0.01, marginLeft: width * 0.01}}>ACCREDITATION</FONT>
                <View style={{borderTopWidth: 0.7, borderColor: '#3d2562', width: width * 0.445}}/>
              </View>
              <View style={{flexDirection: 'row', marginTop: height * 0.05}}>
                <Image source={require("../../assets/images/plan_pamphlet/acc1.png")}
                  resizeMode="contain" style={{height: height * 0.27, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={require("../../assets/images/plan_pamphlet/acc2.png")}
                  resizeMode="contain" style={{height: height * 0.27, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={require("../../assets/images/plan_pamphlet/acc3.png")}
                  resizeMode="contain" style={{height: height * 0.27, width: width * 0.18, marginRight: width * 0.01}}/> 
                <Image source={require("../../assets/images/plan_pamphlet/acc4.png")}
                  resizeMode="contain" style={{height: height * 0.27, width: width * 0.18, marginRight: width * 0.01}}/> 
              </View>
            </View>
          </View>
        <View style={{width: width * 0.1, marginLeft: 'auto', marginTop: '-2%'}}>
          <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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

