import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../src/components/Header";
import CardButton from "../../src/components/cardButtons";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";

const OurPeople=({navigation})=>{
  const { width, height } = useWindowDimensions();
  const imageSize = width * 0.15;

  return (
    <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start', marginTop:'5%' }}>
            <View style={{marginLeft: '11%', width: '18%'}}>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: 1, width: '77%'}}>
                      <Button type="Secondary" text={"About us"}  onPress={() => navigation.navigate('About us')} ></Button>
                  </View>
                  <View style={{borderBottomWidth: 1, width: '77%'}}>
                      <Button type="Secondary" text={"Our people"} isPressedState={true}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1, width: '77%'}}>
                  <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                  </View>
                  <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
              </View>
          </View>

          <View style={{marginLeft:'5%',flexDirection:'column', alignItems:'flex-start'}}>
            <View style={{flexDirection:'row',width:'100%', textAlign:'center',alignItems:'center'}}>
                <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left'}}>LEADERSHIP</FONT>
                <Image source={require("../../assets/images/horline.png")}
                style={{marginTop:'1%', marginLeft:'1%', width:'50%'}}
                /> 
            </View>
  
            <View style={{ flexDirection: 'row', alignItems: 'flex-start',flex:1, width:width*0.70, marginTop:'3%'}}>
                <View style={{flexDirection:'column', width:'20%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/president2.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>OH MOON KWON</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>President</FONT>
                </View>
                <View style={{flexDirection:'column', width:'20%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/huh.png")}
                    style={{width:width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, marginLeft:'5%', fontWeight:'bold', textAlign:'center', paddingTop:15}}>HUH KWON</FONT>
                    <FONT style={{fontSize:15, marginLeft:'5%', fontWeight:'bold', textAlign:'center'}}>Vice President</FONT>
                </View>
                </View>
          </View>
        </View>
        <View style={{flexDirection:'column',marginLeft:'5%', marginTop:'2%'}}>
            <View style={{flexDirection:'row',width:'100%', textAlign:'center',alignItems:'center'}}>
                <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left'}}>PRESIDENT OFFICE</FONT>
                <Image source={require("../../assets/images/horline.png")}
                style={{marginTop:'1%', marginLeft:'1%', width:'63%'}}
                /> 
            </View>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'3%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'3%'}}>
                    <Image
                    source={require("../../assets/images/bilguun.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>BILGUUN ENKHAMGALAN</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Director of Finance Office</FONT>
                </View>
                <View style={{flexDirection:'column', width:'15%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'3%'}}>
                    <Image
                    source={require("../../assets/images/sumiya.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>SUMIYA ENKHCHIMEG</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Secretary</FONT>
                </View>
                <View style={{flexDirection:'column', width:'15%', height:'40%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>ENKHSUREN ERDENBAT</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Project Manager</FONT>
                </View>
                </View>
          </View>
          <View style={{flexDirection:'column',marginLeft:'5%', marginTop:'2%'}}>
            <View style={{flexDirection:'row',width:'100%', textAlign:'center',alignItems:'center'}}>
                    <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left'}}>PRESIDENT OFFICE</FONT>
                    <Image source={require("../../assets/images/horline.png")}
                    style={{marginTop:'1%', marginLeft:'1%', width:'63%'}}
                    /> 
            </View>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'3%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>DEAN</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Dean of Planning Affairs</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>SELENGE JAMIYANDORJ</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Human Recource Manager</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/lawyer.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>ICHINKHORLOO LOSOL</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Lawyer</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/abigail.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>ABIGAIL JACOBOVSKY</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>International Recruiting</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Staff & Dorm Manager</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>UYANGA. D</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Cashier</FONT>
                </View>
                </View>
          </View>
          <View style={{flexDirection:'column',marginLeft:'5%'}}>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'2%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/ruvim.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>RUVIM ANDRYECHENKO</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Director of Information</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Communication Center</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/purvee.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>PURVEE DASHBALJIR</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Software Engineer of</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> Information Communication Center</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/daniel.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>DANIEL ANDREYCHENKO</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Software Engineer of</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> Information Communication Center</FONT>
                </View>
                </View>
          </View>
          <View style={{flexDirection:'column',marginLeft:'5%', marginTop:'2%'}}>
            <View style={{flexDirection:'row',width:'100%', textAlign:'center',alignItems:'center'}}>
                <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left'}}>ACADEMIC & STUDENT AFFAIRS</FONT>
                <Image source={require("../../assets/images/horline.png")}
                style={{marginTop:'1%', marginLeft:'1%', width:'50%'}}
                /> 
            </View>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'3%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                </View>
          </View>
          <View style={{flexDirection:'column',marginLeft:'5%'}}>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'2%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                </View>
          </View>
          <View style={{flexDirection:'column',marginLeft:'5%', marginBottom:'5%', marginTop:'2%'}}>
            <View style={{flexDirection:'row',width:'100%', textAlign:'center',alignItems:'center'}}>
                <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left'}}>EXTERNAL & ADMISSION AFFAIRS</FONT>
                <Image source={require("../../assets/images/horline.png")}
                style={{marginTop:'1%', marginLeft:'1%', width:'47%'}}
                /> 
            </View>
            <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:'100%', marginTop:'3%'}}>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15,  marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15, marginRight:'2.5%'}}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                <View style={{flexDirection:'column', width:'16%', height:'40%', alignItems:'center', paddingBottom:15 }}>
                    <Image
                    source={require("../../assets/images/blank.png")}
                    style={{width: width*0.35, height: height*0.35, borderRadius:50}}resizeMode="contain"
                    /> 
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:15}}>Name</FONT>
                    <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                </View>
                </View>
          </View>
    </ScrollView>
   );
}

export default OurPeople

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
  
  
  
  });