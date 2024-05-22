import React from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";

const OurPeople=({navigation, language})=>{
  const { width, height } = useWindowDimensions();
  const ourPeopleImg = data.ourPeopleImg;
  const ourPeopleEN = data.ourPeopleEN;
  const ourPeopleMN = mn.ourPeopleMN;
  const ourPeopleRU = ru.ourPeopleRU;

  let content;
    switch (language){
    case 'mn':
      content = ourPeopleMN;
      break;
    case 'ru':
      content = ourPeopleRU;
      break;
    case 'en':
      content = ourPeopleEN;
      break;
  }

  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', marginTop:width*0.05}}>
            <Image
                source={require("../../assets/images/calligraphy/OurPeopleCal1.png")}
                style={{width:width*0.08, height:width*0.25, marginLeft:width*0.005}}resizeMode="contain"
            />
            <View style={{flexDirection:'column', width:width*0.8035}}>
                <View style={{ flexDirection: 'row'}}>
                    <View style={{width: width * 0.13, marginLeft: '2%'}}>
                        <View style={{ borderBottomWidth: 1, width: width*0.15,  paddingBottom: width*0.007, paddingLeft:width*0.007}}>
                            <FONT type="Regular" style={{color: '#000000', fontSize:28}}>{content.AboutUsTitle}</FONT>
                        </View>
                        <View style={{marginTop: width*0.01}}>
                            <View style={{borderBottomWidth: 1}}>
                                <Button type="Secondary" text={content.AboutUsButton1} onPress={() => navigation.navigate('About us')} ></Button>
                            </View>
                            <View style={{borderBottomWidth: 1}}>
                                <Button type="Secondary" text={content.AboutUsButton2} onPress={() => navigation.navigate('Our people')}isPressedState={true}></Button>
                            </View>
                                <View style={{borderBottomWidth: 1}}>
                            <Button type="Secondary" text={content.AboutUsButton3} onPress={() => navigation.navigate('Plan and Report')} ></Button> 
                            </View>
                            <Button type="Secondary" text={content.AboutUsButton4} onPress={() => navigation.navigate('Giving Information')}></Button>
                        </View>
                    </View>

                <View style={{marginLeft:width*0.1,flexDirection:'column', alignItems:'flex-start'}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>{content.LeadershipTitle}</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.397}}
                        /> 
                    </View>
        
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start',flex:1, width:width*0.70, marginTop:'3%', marginLeft:width*0.02}}>
                        <View style={{flexDirection:'column', width:width*0.1, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.09}}>
                            <Image
                            source={{uri: ourPeopleImg.Leadership1}}
                            style={{width: width*0.35, height: width*0.162, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresidentName}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresidentOccu}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.08, alignItems:'center', paddingBottom:width*0.007 }}>
                            <Image
                            source={{uri: ourPeopleImg.Leadership2}}
                            style={{width: width*0.35, height: width*0.162, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.VicePresName}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.VicePresOccu}</FONT>
                        </View>
                        </View>
                </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.05}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>{content.PresidentOfficeTitle}</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.56}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresidentOffice1}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresidentOfficeName1}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresidentOfficeOccu1}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresidentOffice2}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}} resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresidentOfficeName2}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresidentOfficeOccu2}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007 }}>
                            <Image
                            source={{uri: ourPeopleImg.PresidentOffice3}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresidentOfficeName3}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresidentOfficeOccu3}</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                            <FONT style={{marginTop:'1%', fontWeight:'bold', justifyContent:'left', fontSize:25}}>{content.PresidentOfficeTitle}</FONT>
                            <Image source={require("../../assets/images/horline.png")}
                            style={{marginTop:'1%', marginLeft:width*0.01, width:width*0.56}}
                            /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03, marginBottom:width*0.05}}>
                        <View style={{flexDirection:'column',width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice1}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName1}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu1}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice2}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName2}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu2}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice3}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName3}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu3}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice4}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName4}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu41}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu42}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice5}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName5}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu5}</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column', marginLeft:width*0.02, marginBottom:width*0.05}}>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice6}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName6}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu61}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu62}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice7}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName7}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu71}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> {content.PresOfficeOccu72}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginBottom:width*0.03}}>
                            <Image
                            source={{uri: ourPeopleImg.PresOffice8}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.PresOfficeName8}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.PresOfficeOccu81}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}> {content.PresOfficeOccu82}</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.05}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:width*0.01, fontWeight:'bold', justifyContent:'left', fontSize:25}}>{content.AcademicStudentAffairsTitle}</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:width*0.0145, marginLeft:width*0.01, width:width*0.43}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs1}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName1}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu1}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs2}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName2}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu2}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs3}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName3}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu3}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs4}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName4}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu4}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs5}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName5}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu5}</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column', marginLeft:width*0.02}}>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.02, marginBottom:width*0.05}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs6}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName6}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu6}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs7}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName7}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu7}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs8}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName8}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu8}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs9}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName9}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu9}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={{uri: ourPeopleImg.AcademicStudentAffairs10}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.AcademicStudentAffairsName10}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.AcademicStudentAffairsOccu10}</FONT>
                        </View>
                        </View>
                </View>
                <View style={{flexDirection:'column',marginLeft:width*0.02, marginTop:width*0.02, marginBottom:width*0.1}}>
                    <View style={{flexDirection:'row',width:width, textAlign:'center',alignItems:'center'}}>
                        <FONT style={{marginTop:width*0.01, fontWeight:'bold', justifyContent:'left', fontSize:25}}>{content.ExternalAdmissionAffairsTitle}</FONT>
                        <Image source={require("../../assets/images/horline.png")}
                        style={{marginTop:width*0.01, marginLeft:width*0.01, width:width*0.415}}
                        /> 
                    </View>
                    <View style={{ flexDirection: 'row',alignContent:'space-between',flex:1, width:width, marginTop:width*0.03}}>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.ExternalAdmissionAffairs1}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.ExternalAdmisssionAffairsName1}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.ExternalAdmisssionAffairsOccu1}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007,  marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.ExternalAdmissionAffairs2}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.ExternalAdmisssionAffairsName2}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.ExternalAdmisssionAffairsOccu2}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.ExternalAdmissionAffairs3}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.ExternalAdmisssionAffairsName3}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.ExternalAdmisssionAffairsOccu3}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007, marginRight:width*0.02}}>
                            <Image
                            source={{uri: ourPeopleImg.ExternalAdmissionAffairs4}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.ExternalAdmisssionAffairsName4}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.ExternalAdmisssionAffairsOccu4}</FONT>
                        </View>
                        <View style={{flexDirection:'column', width:width*0.14, height:width*0.15, alignItems:'center', paddingBottom:width*0.007}}>
                            <Image
                            source={{uri: ourPeopleImg.ExternalAdmissionAffairs5}}
                            style={{width: width*0.25, height: width*0.15, borderRadius:50}}resizeMode="contain"
                            /> 
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007}}>{content.ExternalAdmisssionAffairsName5}</FONT>
                            <FONT style={{fontSize:15, fontWeight:'bold', textAlign:'center'}}>{content.ExternalAdmisssionAffairsOccu5}</FONT>
                        </View>
                    </View>
                </View>
            </View>
            
            <Image
                source={require("../../assets/images/calligraphy/miucal.png")}
                style={{width:width*0.1, height:width*0.5, marginTop:-width*0.01}}resizeMode="contain"
            />
        </View>
        <Footer language={language}/>
        
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