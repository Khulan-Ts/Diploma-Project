import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Exchange= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%',}}>
        <View style={{width: width * 0.1, marginBottom: height * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/ex-1.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
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
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')}></Button>
                </View>
                    <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')} isPressedState={true}></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width: '50%', marginBottom: '10%', marginLeft: '5%'}}>
          <FONT style={{fontSize: 23}}>Degree Program</FONT>
          <FONT style={{fontSize: 20, marginTop: '2%'}}>
            “Undergraduate students have the chance to study abroad as an 
            exchange student at several prestigious universities in the Republic 
            of Korea. Our partnering universities range from public and private 
            universities and depending on the partnering universities, students 
            enjoy various scholarships and additional benefits. Students are eligible 
            to study abroad during the Spring and Fall semesters of their Sophomore and 
            Junior year, or the Fall semester of their Senior year.”
          </FONT>
          <FONT style={{fontSize: 23, marginTop: '2%'}}>Exchange Program Contact Emails:</FONT>
          <FONT type={'Body'} style={{marginTop: '2%', fontSize: 18}}>
            student2@miu.edu.mn
            {"\n"}
            dir_student@miu.edu.mn
          </FONT>
        </View>
        <View style={{width: width * 0.1, marginBottom: height * 0.1, marginLeft: 'auto', marginTop: '-2%'}}>
          <Image source={require('../../assets/images/miucal.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
}

export default Exchange

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
});