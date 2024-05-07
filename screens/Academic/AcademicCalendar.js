import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const AcademicCal= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: width * 0.05}}>
        <View style={{width: width * 0.1, marginBottom: height * 0.3, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/acacal-1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View style={{ width: width * 0.18, marginLeft: '1%'}}>
            <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')} isPressedState={true}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{ width: width * 0.5, marginLeft: width * 0.02, marginTop: '-2%', marginBottom: height * 0.1}}>
          <Image source={require('../../assets/images/calendar-1.png')} style={{ height: width * 0.38 , width: 'auto' }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-2.png')} style={{ height: width * 0.33, width: 'auto', marginTop: -height * 0.04 }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-3.png')} style={{ height: width * 0.37, width: 'auto', marginTop: -height * 0.04 }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-4.png')} style={{ height: width * 0.31, width: 'auto', marginTop: -height * 0.03 }} resizeMode="contain"/>
        </View>
        <View style={{width: width * 0.1, marginBottom: width * 0.5, marginLeft: 'auto', marginTop: '-2%'}}>
          <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default AcademicCal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});