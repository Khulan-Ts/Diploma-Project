import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const AcademicCal= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%',}}>
        <View style={{marginLeft: '11%', width: '18%'}}>
            <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')}></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')}></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"} ></Button> {/*onPress={() => navigation.navigate('Twoplus2')}*/}
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                  <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')} isPressedState={true}></Button>
            </View>
        </View>
        <View style={{width: '50%', marginLeft: '5%', marginBottom: '10%'}}>
          <Image source={require('../../assets/images/calendar-1.png')} style={{ height: '78%', width: 'auto' }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-2.png')} style={{ height: '65%', width: 'auto', marginTop: '-2%' }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-3.png')} style={{ height: '75%', width: 'auto', marginTop: '-2%' }} resizeMode="contain"/>
          <Image source={require('../../assets/images/calendar-4.png')} style={{ height: '60%', width: 'auto', marginTop: '-2%' }} resizeMode="contain"/>
        </View>
        <View style={{width: width * 0.1, marginBottom: height * 0.3, marginLeft: 'auto', marginTop: '-5%'}}>
          <Image source={require('../../assets/images/cal-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    </ScrollView>
  );
}

export default AcademicCal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fcfc"
  },
});