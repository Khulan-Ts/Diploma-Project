import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";
import data from "../../static.json";
import mn from "../../staticMN.json";
import ru from "../../staticRU.json";


const Twoplus2=({navigation, language})=>{
  const { width, height } = useWindowDimensions();
  const twoplus2Img = data.Twoplus2Img;
  const twoplus2EN = data.twoplus2EN;
  const twoplus2MN = mn.twoplus2MN;
  const twoplus2RU = ru.twoplus2RU;

    
  let content;
  switch (language){
    case 'mn':
        content = twoplus2MN;
        break;
    case 'ru':
        content = twoplus2RU;
        break;
    case 'en':
        content = twoplus2EN;
        break;
  }

  return (
    <ScrollView style={styles.container}>
       <View style={{flexDirection: "row", marginTop: width*0.05}}>
       <View style={{width: width * 0.1, marginTop: '-2%'}}>
          <Image source={require('../../assets/images/calligraphy/2p2cal1.png')} style={{width: 'auto', height: width * 0.3}} resizeMode="contain"/>
      </View>
        <View style={{ width: width * 0.18, marginLeft: '1%'}}>
              <View style={{ borderBottomWidth: width * 0.0008, width: '90%', paddingBottom: width * 0.01, paddingLeft: width * 0.01}}>
                  <FONT type="Regular" style={{color: '#000000', fontSize: 28}}>{content.AcademicTitle}</FONT>
              </View>
              <View style={{marginTop: '5%'}}>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                      <Button type="Secondary" text={content.AcademicButton1} onPress={() => navigation.navigate('Undergraduate')}></Button>
                  </View>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                      <Button type="Secondary" text={content.AcademicButton2} onPress={() => navigation.navigate('Graduate')}></Button>
                  </View>
                      <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                  <Button type="Secondary" text={content.AcademicButton3} onPress={() => navigation.navigate('2 + 2 program')}  isPressedState={true}></Button> 
                  </View>
                  <View style={{borderBottomWidth: width * 0.0008, width: '70%'}}>
                    <Button type="Secondary" text={content.AcademicButton4} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                  </View>
                  <Button type="Secondary" text={content.AcademicButton5} onPress={() => navigation.navigate('Academic Calendar')}></Button>
              </View>
          </View>

          <View style={{flexDirection:'column', alignItems:'flex-start',justifyContent:'left',flex:1, width:width*0.65, marginTop:width*0.01}}>
             <Image
                source={{uri: Twoplus2Img.albanyImg}}
                style={{width: width*0.6, height:width*0.25}}resizeMode="contain"
              />
              <FONT style={{backgroundColor:'#EDF0FF',marginTop:width*0.05, marginLeft:width*0.07, width:width*0.3,color: '#000000', textAlign:'left', fontSize: 23,}}>{content.Introduction}</FONT>
              <Image
                source={{uri: Twoplus2Img.introduction}}
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
              <FONT style={{marginBottom:width*0.01,backgroundColor:'#EDF0FF',color: '#000000',  fontSize: 23, textAlign:'center',  width:width*0.2}}>{content.QualificationTitle}</FONT>
              <FONT style={styles.text}>{content.Qualification1}</FONT>
              <FONT style={styles.text}>{content.Qualification2}</FONT>
              <FONT style={styles.text}>{content.Qualification3}</FONT>
            </View>
            <View style={styles.infoSection2}>
              <FONT style={{marginBottom:width*0.01, backgroundColor: '#EDF0FF',color: '#000000', fontSize: 23, textAlign:'center', width:width*0.25}}>{content.ExpensesTitle}</FONT>
              <FONT style={styles.text}>{content.Expenses1}</FONT>
              <FONT style={styles.text}>{content.Expenses2}</FONT>
              <FONT style={styles.text1}>{content.Expenses3}</FONT>
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
