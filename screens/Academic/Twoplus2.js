import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";


const Twoplus2=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
       <View style={{flexDirection: "row", marginTop: width*0.05}}>
       <View style={{width: width * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/2p2cal1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
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
                  <Button type="Secondary" text={"2+2 program"} onPress={() => navigation.navigate('2 + 2 program')}  isPressedState={true}></Button> 
                  </View>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                  </View>
                  <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
              </View>
          </View>

          <View style={{flexDirection:'column', alignItems:'flex-start',justifyContent:'left',flex:1, width:width*0.65, marginTop:width*0.01}}>
             <Image
                source={require("../../assets/images/albany.png")}
                style={{width: width*0.6, height:width*0.25}}resizeMode="contain"
              />
              <FONT style={{backgroundColor:'#EDF0FF',marginTop:width*0.05, marginLeft:width*0.07, width:width*0.3,color: '#000000', textAlign:'left', fontSize: 23,}}>INTRODUCTION</FONT>
              <Image
                source={require("../../assets/images/2p2introduction.png")}
                style={{marginTop:width*0.02,height: width*0.2, width:width*0.4, marginLeft:width*0.075}}resizeMode="contain"
              />
          </View>
          <Image
            source={require("../../assets/images/calligraphy/miucal.png")}
            style={{height: width*0.5, width:width*0.1, marginTop:-width*0.01}}resizeMode="contain"
          />
        </View>
        <View style={[styles.infoContainer, {marginLeft:width*0.17, flexDirection: 'row', marginTop: width*0.07, marginBottom:width*0.07, alignItems: 'left',}]}>
            <View style={{flexDirection: 'column',marginRight:width*0.1}}>
              <FONT style={{marginBottom:width*0.01,backgroundColor:'#EDF0FF',color: '#000000',  fontSize: 23, textAlign:'center',  width:width*0.2}}>QUALIFICATIONS</FONT>
              <FONT style={styles.text}>• Requirements: Undergraduate students,{'\n'}   who completed 2 years at MIU</FONT>
              <FONT style={styles.text}>• GPA: 3.4/4.0 or higher</FONT>
              <FONT style={styles.text}>• English Test: TOEFL IBT 70 or IELTS 6.0 or above</FONT>
            </View>
            <View style={styles.infoSection2}>
              <FONT style={{marginBottom:width*0.01, backgroundColor: '#EDF0FF',color: '#000000', fontSize: 23, textAlign:'center', width:width*0.25}}>EXPENSES</FONT>
              <FONT style={styles.text}>• 1 year Tuition: USD 28,350</FONT>
              <FONT style={styles.text}>• 1 year Dormitory: USD 13,882</FONT>
              <FONT style={styles.text1}>• Total: USD 42,132</FONT>
            </View>
          </View> 
          <Footer/>
    </ScrollView>
  );
}

export default Twoplus2

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
  imageContainer: {
    flex: 1,
  },
  

  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    
  },
  text: {
      fontSize: 18,
      marginTop: 5,
  },
  text1: {
    fontSize: 18,
    marginTop: 5,
    fontWeight:'bold',
},



});
