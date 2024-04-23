import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Lei_1= ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%',}}>
        <View style={{width: width * 0.1, marginRight: 'auto'}}>
          <Image source={require('../../assets/images/Lei1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
        </View>
        <View>
        <View style={[styles.textContainer, {width: width * 0.75, height: height * 0.36}]}>
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
                <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.175}}>
                    <Button type="Eight" text={"English Foundation Course"}></Button>
                </View>
                <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.175}}>
                    <Button type="Eight" text={"English Evening Course"}></Button>
                </View>
                <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.175}}>
                    <Button type="Eight" text={"Business English Course"}></Button>
                </View>
                <View style={{borderBottomWidth: 1, borderColor: "#3D2562", width: width * 0.175}}>
                    <Button type="Eight" text={"Mongolian Course"}></Button>
                </View>
                
                <Button type="Eight" text={"Additional Language Course"}></Button>
                
            </View>
            <View style={{borderLeftWidth: 1, borderColor: "#3D2562", height: height * 0.29}}>
                <FONT type="Body" style={{width: width * 0.45, marginLeft: "2%"}}>Our English Foundation Course is the heart of LEI. It is a immersive
                 English program that brings together students from multiple countries and works through 
                 activities, speaking structures, and other interactive coursework to help students improve 
                 their English. This course is made for recent high school graduates who wish to improve their 
                 English level in order to study at MIU. However, this program is available to anyone who wants 
                 to improve their English level and is recommended for all beginners and intermediate level students 
                 who plan to use English to study or work.</FONT>
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

export default Lei_1

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
  }
});