import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Calendar from "../../assets/icons/calendar";
import Clock from "../../assets/icons/clock";

const Lei_3= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%', marginBottom: '5%'}}>
        <View style={{width: width * 0.1, marginRight: 'auto'}}>
          <Image source={require('../../assets/images/Lei1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View>
          <View style={[styles.textContainer, {width: width * 0.78, height: height * 0.33}]}>
              <FONT type="Title3" style={{fontSize: 25}}>LANGUAGE EDUCATION INSTITUTE</FONT>
              <FONT style={{fontSize: 18, marginTop: '1%'}}>LEI is a language school that focuses on English for 
              daily life, education, and business communication. Students of all ages and nationalities 
              can participate in our communicative program and learn all language skills – speaking, reading,
              writing, and listening. Our teachers are highly skilled and trained to use activities and speaking 
              structures to help students engage with the language and practice with their classmates. We believe 
              in active classrooms where students have the opportunity to engage in the language they are learning, 
              and in combining all language skills together to increase learning and retention. We always seek to 
              use the new methods and research in teaching foreign languages, and we keep our teachers up to date 
              with regular training and observations.</FONT>
          </View>
          <View style={{flexDirection: 'row', marginTop: '5%'}}>
              <View>
                  <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={"English Foundation Course"} onPress={() => navigation.navigate('English Foundation Course')}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={"English Evening Course"} onPress={() => navigation.navigate('English Evening Course')}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={"Business English Course"} onPress={() => navigation.navigate('Business English Course')} isPressedState={true}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.192}}>
                      <Button type="Nine" text={"Mongolian Course"} onPress={() => navigation.navigate('Mongolian Course')}></Button>
                  </View>
                  <Button type="Nine" text={"Additional Language Course"} onPress={() => navigation.navigate('Additional Language Course')}></Button>
              </View>
              <View style={{borderLeftWidth: 1, borderColor: "#3D2562", width: width * 0.41, height: height * 0.31}}>
                  <FONT type="Body" style={{ marginLeft: "2%", marginTop: '-1%', fontSize: 18}}>This course is perfect for businesses 
                  that want to improve their employee’s English level for international business and customer service. 
                  The program is customizable to the individual company’s needs with options for days, times, and levels. 
                  Companies can pay a testing fee to have their employee’s leveled, and then work with LEI office staff 
                  to organize a program with 1-2 qualified teachers who will come to the office during business hours or 
                  at a convenient time throughout the week to teach a 10 week business English course.</FONT>
              </View>
              <View style={{marginLeft: '1.5%', marginTop: '-1%'}}>
                <View style={[styles.infoContainer, {width: width * 0.16, height: height * 0.19}]}>
                  <View style={{flexDirection: 'row'}}>
                    <Clock width={width * 0.02} height={width * 0.02}/>
                    <View style={{marginLeft: '5%', marginTop: '-1%'}}>
                      <FONT type="Title2" style={{fontSize: 18}}>Duration</FONT>
                      <FONT style={{fontSize: 18}}>1 year / Full-time</FONT>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: '5%'}}>
                    <Calendar width={width * 0.02} height={width * 0.02}/>
                    <View style={{marginLeft: '5%'}}>
                      <FONT type="Title2" style={{fontSize: 18}}>Intakes</FONT>
                      <FONT style={{fontSize: 18}}>August -  September</FONT>
                    </View>
                  </View>
                </View>
                <Button type="Apply2" text={"APPLY"} style={{ marginTop: '5%'}} ></Button>
              </View>
          </View>
          <View style={{flexDirection: 'row',alignItems: 'center', marginTop: '7%'}}>
            <View style={{borderBottomWidth: 0.7, borderColor: '#3D2562', width: width * 0.297, marginRight: '2%'}}/>
            <FONT type={"Title2"} style={{fontSize: 25, marginRight: '2%'}}>meet our teachers</FONT>
            <View style={{borderBottomWidth: 0.7, borderColor: '#3D2562', width: width * 0.297}}/>
          </View>
          <View style={{marginTop: '7%'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/1.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #1</FONT>
              </View>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/2.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #2</FONT>
              </View>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/3.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #3</FONT>
              </View>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/4.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #4</FONT>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image source={require('../../assets/images/lei_teachers/5.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #5</FONT>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: '5%'}}>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/6.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #6</FONT>
              </View>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/7.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #7</FONT>
              </View>
              <View style={{alignItems: 'center', marginRight: '3%'}}>
                <Image source={require('../../assets/images/lei_teachers/8.png')} style={{width: width * 0.135, height: height * 0.31}} resizeMode="contain"/>
                <FONT type="Subtitle" style={{fontSize: 15, marginTop: '3%'}}>teacher #8</FONT>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: width * 0.1, marginTop: "-2%", marginLeft: 'auto'}}>
          <Image source={require('../../assets/images/Lei2.png')} style={{width: 'auto', height: width * 0.5}} resizeMode="contain"/>
        </View>
      </View>
    </ScrollView>
  );
}

export default Lei_3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
  textContainer:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#DFE4FF',
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  infoContainer:{
    padding: 10,
    backgroundColor: "#EDF0FF",
    borderRadius: 30,
  }
});