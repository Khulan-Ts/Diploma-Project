import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../src/components/Header";
import CardButton from "../../src/components/cardButtons";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import HoverButton from "../../src/components/aboutusHover";


const AboutUs=({navigation})=>{
  const { width, height } = useWindowDimensions();
  const imageSize = width * 0.15;

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start',  marginTop:'5%'}}>
        <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'center', width: width*0.80}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start'}}>
          <Image
            source={require("../../assets/images/aboutusCal1.png")}
            style={{height: height*0.6, width:width*0.1}}resizeMode="contain"
          />
          <View style={{width: '18%', marginLeft:'1%'}}>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: 1, width: '95%'}}>
                      <Button type="Secondary" text={"About us"} isPressedState={true} ></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, width: '95%'}}>
                      <Button type="Secondary" text={"Our people"} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1, width: '95%'}}>
                  <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                  </View>
                  <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
              </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex:1}}>
            <View style={{flexDirection:'column', width:'40%', alignItems:'center', justifyContent:'center'}}>
                <Image
                source={require("../../assets/images/president.png")}
                style={{width: width*0.4, height: height*0.4, borderRadius:50}}resizeMode="contain"
                /> 
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center', paddingTop:15, borderBottomWidth:1}}>Oh Moon KWON, President</FONT>
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Mongolia International University</FONT>
            </View>
            <View style={{marginLeft:'5%', width:'65%'}}>
                <FONT style={{fontSize:25, fontWeight:'bold'}}>Message from the President</FONT>
                <FONT style={{fontSize:18, marginTop:'5%',  flexWrap:'wrap'}}>“It is my privilege to introduce you to Mongolia
                    International University (MIU). 
                    The mission of our school is to equip our students with a quality education and character development,
                    preparing them to be leaders of integrity in the 21st century. MIU is a vibrant community where students 
                    have the opportunity to complete studies in a variety of academic fields. Through the investment of our 
                    international faculty and staff and our close-knit environment of instructors, mentors, and advisors, 
                    students will feel they are part of a family. They will be equipped with the skills and knowledge necessary 
                    to achieve great scholarly work.</FONT>
            </View>

          </View>

        </View>
        <FONT style={{fontSize:18, width:'75%', marginLeft:'45%'}}>MIU challenges students to explore innovative intellectual interests 
        through scholarly and personal competency programs. Emphasizing professionalism, MIU students learn to make new connections
         in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. Most importantly, MIU is
          preparing a generation of distinctive leaders with the qualities of heart and character to serve their own people, nation, and
           the world. MIU will accompany you and take you one step closer to the portal of your future. ”</FONT>
        <View style={{alignItems:'center', marginLeft:'20%', marginTop:'2%'}}>
          <FONT style={{textAlign:'center', marginTop:'3%',marginBottom:'2%', fontWeight:'bold', fontSize:36}} >Vision Statement</FONT> 
          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', width:'100%', marginTop:'3%', marginBottom:'5%', marginLeft:'5%'}}>
              {/* <Image
                  source={require("../../assets/images/vision1.png")}
                  resizeMode="contain"
                  style={{height: imageSize, width: imageSize, marginRight:50}}
              />
              <Image
                  source={require("../../assets/images/vision2.png")}
                  resizeMode="contain"
                  style={{height: imageSize, width: imageSize,  marginRight:50}}
              />
              <Image
                  source={require("../../assets/images/vision3.png")}
                  resizeMode="contain"
                  style={{height: imageSize, width: imageSize, marginRight:50}}
              />
              <Image
                  source={require("../../assets/images/vision4.png")}
                  resizeMode="contain"
                  style={{height: imageSize, width: imageSize}}
              /> */}
            <View style={{flexDirection: 'row'}}>
              <HoverButton icon={require("../../assets/images/vision1.png")} text={"Fostering Excellence"} descr={'Our vision is to be an icon of academic excellence, inspring students to react new heights in their learning journey'}></HoverButton>
              <HoverButton icon={require("../../assets/images/vision2.png")} text={"Sustainable Future"} descr={'championing sustainability practices, ensuring a gree-ner, more environmentally responsible future for gene-rations to come.'} style={{marginLeft: 50}}></HoverButton>
              <HoverButton icon={require("../../assets/images/vision3.png")} text={"Innovative Research"} descr={' We aspire to be a dynamic research hub, pioneering breakthroughs that address global challenges and transform industries'} style={{marginLeft: 50}}></HoverButton>
              <HoverButton icon={require("../../assets/images/vision4.png")} text={"Global Impact"} descr={' We aspire to be a dynamic research hub, pioneering breakthroughs that address global challenges and transform industries'} style={{marginLeft: 50}}></HoverButton>
            </View> 
          </View>
        </View>
        
        </View>
        <Image
            source={require("../../assets/images/aboutusCal2.png")}
            style={{height: height*1.1, width:width*0.1, marginTop:'-1%'}}resizeMode="contain"
          />
      </View>


        
 
    </ScrollView>
  );
}

export default AboutUs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6FAFF',
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

