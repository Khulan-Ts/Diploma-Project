import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";
import { useNavigation } from "@react-navigation/native";

const AboutUs=({navigation})=>{
  const { width, height } = useWindowDimensions();
  const imageSize = width * 0.15;

  return (
    <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start' }}>
          <View style={{marginLeft: '5%', width: '18%', marginTop:'10%'}}>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: 1, width: '70%'}}>
                      <Button type="Secondary" text={"About us"} onPress={() => navigation.navigate('')} isPressedState={true} ></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, width: '70%'}}>
                      <Button type="Secondary" text={"Our People"} onPress={() => navigation.navigate('')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1, width: '70%'}}>
                  <Button type="Secondary" text={"Plan and Report"} onPress={() => navigation.navigate('')}></Button> 
                  </View>
                  <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('')}></Button>
              </View>
          </View>
          <View>
            
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop:'10%',flex:1, width:width*0.9}}>
            <View style={{flexDirection:'column', width:'30%', height:'40%', alignItems:'center', paddingBottom:15}}>
                <Image
                source={require("./assets/images/president.png")}
                style={{width: width*0.4, height: height*0.4, borderRadius:50}}resizeMode="contain"
                /> 
                <FONT style={{fontSize:20, marginLeft:'5%', fontWeight:'bold', textAlign:'center', paddingTop:15, borderBottomWidth:1}}>Oh Moon KWON, President</FONT>
                <FONT style={{fontSize:20, marginLeft:'5%', fontWeight:'bold', textAlign:'center'}}>Mongolia International University</FONT>
            </View>
            <View style={{marginLeft:'5%', width:'60%'}}>
                <FONT style={{fontSize:25, fontWeight:'bold'}}>Message from the President</FONT>
                <FONT style={{fontSize:18, marginTop:'5%',  flexWrap:'wrap'}}>“It is my privilege to introduce you to Mongolia International University (MIU). 
                    The mission of our school is to equip our students with a quality education and character development,
                    preparing them to be leaders of integrity in the 21st century. MIU is a vibrant community where students 
                    have the opportunity to complete studies in a variety of academic fields. Through the investment of our 
                    international faculty and staff and our close-knit environment of instructors, mentors, and advisors, 
                    students will feel they are part of a family. They will be equipped with the skills and knowledge necessary 
                    to achieve great scholarly work. MIU challenges students to explore innovative intellectual interests 
                    through scholarly and personal competency programs.</FONT>
            </View>

          </View>
        </View>
        <FONT style={{fontSize:18, width:'70%', marginLeft:'25%'}}>Emphasizing professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. Most importantly, MIU is preparing a generation of distinctive leaders with the qualities of heart and character to serve their own people, nation, and the world. MIU will accompany you and take you one step closer to the portal of your future. ”</FONT>
        <FONT style={{textAlign:'center', marginTop:'3%', fontWeight:'bold', fontSize:36}} >Vision Statement</FONT> 
        <View style={{justifyContent:'center',alignContent:'space-between', flexDirection:'row', width:'100%', marginTop:'3%', marginBottom:'3%'}}>
            <Image
                source={require("./assets/images/vision1.png")}
                resizeMode="contain"
                style={{height: imageSize, width: imageSize, marginRight:50}}
            />
            <Image
                source={require("./assets/images/vision2.png")}
                resizeMode="contain"
                style={{height: imageSize, width: imageSize,  marginRight:50}}
            />
            <Image
                source={require("./assets/images/vision3.png")}
                resizeMode="contain"
                style={{height: imageSize, width: imageSize, marginRight:50}}
            />
            <Image
                source={require("./assets/images/vision4.png")}
                resizeMode="contain"
                style={{height: imageSize, width: imageSize}}
            />
        </View>
 
    </ScrollView>
  );
}

export default AboutUs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 3, // Required for Android
    // Other header styles such as height, padding, etc.
  },
  visimg:{
    resizeMode: 'contain',
  }



});
