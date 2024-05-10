import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import HoverButton2 from "../../src/components/aboutusHover";
import Footer from "../../src/components/footer";



const AboutUs=({navigation})=>{
  const { width, height } = useWindowDimensions();
  const imageSize = width * 0.15;

  return (
    <ScrollView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start',  marginTop:width*0.05, marginLeft:width*0.05}}>
        <View style={{flexDirection:'column', justifyContent: 'space-between', alignItems:'center', width: width*0.81}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start', height:width*0.265}}>
          <Image
            source={require("../../assets/images/calligraphy/aboutusCal1.png")}
            style={{height: width*0.3, width:width*0.1}}resizeMode="contain"
          />
          <View style={{width: width * 0.13}}>
              <View style={{ borderBottomWidth: 1, width: width*0.15,  paddingBottom: width*0.007, paddingLeft:width*0.007}}>
                  <FONT type="Regular" style={{color: '#000000', fontSize:28}}>About us</FONT>
              </View>
              <View style={{marginTop: width*0.01}}>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={"Greetings"} onPress={() => navigation.navigate('About us')} isPressedState={true}></Button>
                  </View>
                  <View style={{borderBottomWidth: 1}}>
                      <Button type="Secondary" text={"Our people"} onPress={() => navigation.navigate('Our people')}></Button>
                  </View>
                      <View style={{borderBottomWidth: 1}}>
                  <Button type="Secondary" text={"Plan and report"} onPress={() => navigation.navigate('Plan and Report')} ></Button> 
                  </View>
                  <Button type="Secondary" text={"Giving information"} onPress={() => navigation.navigate('Giving Information')}></Button>
              </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex:1, width:width*0.67}}>
            <View style={{flexDirection:'column', width:width*0.27, alignItems:'center', justifyContent:'center', paddingbottom:width*0.1}}>
                <Image
                source={require("../../assets/images/president.png")}
                style={{width: width*0.4, height: width*0.2, borderRadius:50}}resizeMode="contain"
                /> 
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center', paddingTop:width*0.007, borderBottomWidth:width*0.0009}}>Oh Moon KWON, President</FONT>
                <FONT style={{fontSize:20, fontWeight:'bold', textAlign:'center'}}>Mongolia International University</FONT>
            </View>
            <View style={{marginLeft:0.05, width:width*0.38}}>
                <FONT style={{fontSize:25, fontWeight:'bold'}}>Message from the President</FONT>
                <FONT style={{fontSize:18, marginTop:'5%'}}>“It is my privilege to introduce you to Mongolia International University (MIU). 
                    The mission of our school is to equip our students with a quality education and character development,
                    preparing them to be leaders of integrity in the 21st century. MIU is a vibrant community where students 
                    have the opportunity to complete studies in a variety of academic fields. Through the investment of our 
                    international faculty and staff and our close-knit environment of instructors, mentors, and advisors, 
                    students will feel they are part of a family. They will be equipped with the skills and knowledge necessary 
                    to achieve great scholarly work.</FONT>
            </View>

          </View>

        </View>
        <FONT style={{fontSize:18, width: width*0.6, marginLeft:width*0.25}}>MIU challenges students to explore innovative intellectual interests 
        through scholarly and personal competency programs. Emphasizing professionalism, MIU students learn to make new connections
         in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. Most importantly, MIU is
          preparing a generation of distinctive leaders with the qualities of heart and character to serve their own people, nation, and
           the world. MIU will accompany you and take you one step closer to the portal of your future. ”</FONT>
        <View style={{alignItems:'center', marginTop:width*0.02, justifyContent:'center', marginLeft:width*0.09}}>
          <FONT style={{textAlign:'center', marginTop:width*0.03,marginBottom:width*0.02, fontWeight:'bold', fontSize:36}} >Vision Statement</FONT> 
          <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', width:width*0.8, marginTop:width*0.03, marginBottom:width*0.075}}>

            <View style={{flexDirection: 'row'}}>
              <HoverButton2 icon={require("../../assets/images/vision1.png")} text={"Fostering Excellence"} descr={'Our vision is to be an icon of academic excellence, inspring students to react new heights in their learning journey'}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision2.png")} text={"Sustainable Future"} descr={'championing sustainability practices, ensuring a gree-ner, more environmentally responsible future for gene-rations to come.'} style={{marginLeft: width*0.05}}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision3.png")} text={"Innovative Research"} descr={' We aspire to be a dynamic research hub, pioneering breakthroughs that address global challenges and transform industries'} style={{marginLeft: width*0.05}}></HoverButton2>
              <HoverButton2 icon={require("../../assets/images/vision4.png")} text={"Global Impact"} descr={' We aspire to be a dynamic research hub, pioneering breakthroughs that address global challenges and transform industries'} style={{marginLeft: width*0.05}}></HoverButton2>
            </View> 
          </View>
        </View>
        </View>
        <Image
            source={require("../../assets/images/calligraphy/miucal.png")}
            style={{height: width*0.5, width:width*0.1, marginTop:-width*0.01}}resizeMode="contain"
          />
      </View>
      <Footer/>


        
 
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

});
