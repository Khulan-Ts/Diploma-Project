import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "../../src/components/Header";
import CardButton from "../../src/components/cardButtons";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import { useNavigation } from "@react-navigation/native";
import Footer from "../../src/components/footer"

const OurPeople=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', marginTop:width*0.05}}>
            <Image
                source={require("../../assets/images/calligraphy/OurPeopleCal1.png")}
                style={{width:width*0.08, height:width*0.25, marginLeft:width*0.005}}resizeMode="contain"
            />
            <View style={{flexDirection:'column', width:width*0.8035}}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{marginLeft: width*0.02, width: width*0.13}}>
                        <View style={{marginTop: width*0.01}}>
                            <View style={{borderBottomWidth: 1}}>
                                <Button type="Secondary" text={"About us"}  onPress={() => navigation.navigate('About us')} ></Button>
                            </View>
                            <View style={{borderBottomWidth: 1}}>
                                <Button type="Secondary" text={"Our people"} isPressedState={true}></Button>
                            </View>
                                <View style={{borderBottomWidth: 1}}>
                            <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                            </View>
                            <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
                        </View>
                    </View>

                <View style={{marginLeft:width*0.1,flexDirection:'column', alignItems:'flex-start'}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>LEADERSHIP</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.397}}
                        /> 
                    </View>
        
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start',flex:1, width:width*0.70, marginTop:'3%', marginLeft:width*0.02}}>
                        <View style={{flexDirection:'column', width:width*0.1, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.09}}>
                            <Image
                            source={require("../../assets/images/president2.png")}
                            style={{width: width*0.35, height: width*0.162, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>OH MOON KWON</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>President</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.08, alignItems:'center', paddingBottom:width*0.007 }}>
                            <Image
                            source={require("../../assets/images/huh.png")}
                            style={{width: width*0.35, height: width*0.162, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>HUH KWON</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Vice President</FONT>
                        </View>
                        </View>
                </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.05}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>PRESIDENT OFFICE</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.56}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/bilguun.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>BILGUUN ENKHAMGALAN</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Director of Finance Office</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/sumiya.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}} resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>SUMIYA ENKHCHIMEG</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Secretary</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007 }}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>ENKHSUREN ERDENBAT</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Project Manager</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                            <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>PRESIDENT OFFICE</FONT>
                            <Image source={require("../../assets/images/horline.png")}
                            style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.56}}
                            /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03, marginBottom:width*0.05}}>
                        <View style={{flexDirection:'column',width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>DEAN</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Dean of Planning Affairs</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>SELENGE JAMIYANDORJ</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Human Recource Manager</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/lawyer.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>ICHINKHORLOO LOSOL</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Lawyer</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/abigail.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>ABIGAIL JACOBOVSKY</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>International Recruiting</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Staff & Dorm Manager</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>UYANGA. D</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Cashier</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column', marginLeft:width*0.02, marginBottom:width*0.05}}>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/ruvim.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>RUVIM ANDRYECHENKO</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Director of Information</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Communication Center</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/purvee.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>PURVEE DASHBALJIR</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Software Engineer of</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> Information Communication Center</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginBottom:width*0.03}}>
                            <Image
                            source={require("../../assets/images/daniel.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>DANIEL ANDREYCHENKO</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Software Engineer of</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> Information Communication Center</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.05}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:width*0.01, fontWeight:'bold', justifyContent:'left', fontSize:25}}>ACADEMIC & STUDENT AFFAIRS</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:width*0.0145, marginLeft:width*0.01, width:width*0.43}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column', marginLeft:width*0.02}}>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.02, marginBottom:width*0.05}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.1}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:width*0.01, fontWeight:'bold', justifyContent:'left', fontSize:25}}>EXTERNAL & ADMISSION AFFAIRS</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:width*0.01, marginLeft:width*0.01, width:width*0.415}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={require("../../assets/images/blank.png")}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>Name</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>Occupation</FONT>
                        </View>
                    </View>
                </View>
            </View>
            
            <Image
                source={require("../../assets/images/calligraphy/miucal.png")}
                style={{width:width*0.1, height:width*0.5, marginTop:-width*0.01}}resizeMode="contain"
            />
        </View>
        <Footer/>
        
    </ScrollView>
   );
}

export default OurPeople

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
  
  
  
  });