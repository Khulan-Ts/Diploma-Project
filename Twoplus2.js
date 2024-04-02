import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";
import { useNavigation } from "@react-navigation/native";

const Twoplus2=({navigation})=>{

  return (
    <ScrollView
      style={styles.container}
    >
        <View style={{marginLeft: 100, width:136, height:35}}>
          <View style={{marginTop: 159,borderBottomWidth: 1, width: 210, paddingBottom: 14,paddingLeft:14}}>
          <FONT text={'Undergraduate'} style={{color: '#62253E'}}></FONT>
          </View>
          <Button type="Secondary" text={"Undergraduate"}></Button>
          <Button type="Secondary" text={"Graduate"}></Button>
          <Button type="Secondary" text={"2+2 program"}></Button>
          <Button type="Secondary" text={"Exchange student Program"}></Button>
          <Button type="Secondary" text={"Vision Trip"}></Button>
          <Button type="Secondary" text={"Academic Calendar"}></Button>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/2p2.png")}
            style={styles.image}
          />
          <View style={{backgroundColor: '#EDF0FF', marginTop:40, width:'100%'}}>
            <FONT style={{color: '#000000', textAlign:'left', fontSize: 23}}>INTRODUCTION</FONT>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.row}>
              <FONT style={[styles.cell1, {fontSize:25}]}>Why 2+2?</FONT>
              <View style={styles.verticalLine} />
              <FONT style={[styles.cell2, {fontSize:25}]}>2 years (MIU) + 2 years (SUNY Albany) = 2 Diplomas</FONT>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.row}>
              <FONT style={[styles.cell1, {fontSize:18}]}>Goal</FONT>
              <View style={styles.verticalLine} />
              <FONT style={[styles.cell2, {fontSize:18}]}>To cultivate global individuals with academic literacy and international sense</FONT>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.row}>
              <View style={styles.cell1}>
                <FONT style={styles.text}>Why choose</FONT>
                <FONT style={styles.text}>2 + 2?</FONT>
              </View>
                <View style={styles.verticalLine} />
                <View style={styles.cell2}>
                  <FONT style={styles.text}>• Low cost and affordable fee</FONT>
                  <FONT style={styles.text}>• Acquiring English knowledge for 2 years at MIU</FONT>
                  <FONT style={styles.text}>• Obtain two diplomas (MIU and SUNY Albany)</FONT>
                  <FONT style={styles.text}>• Experience campus life in Mongolia, USA and other cultures</FONT>
                </View>
            </View>

          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoSection}>
            <View style={{backgroundColor: '#EDF0FF', marginTop:40}}>
              <FONT style={{color: '#000000',  fontSize: 23, textAlign:'center'}}>QUALIFICATIONS</FONT>
            </View>
            <FONT style={styles.text}>• Requirements: Undergraduate students, who completed 2 years at MIU</FONT>
            <FONT style={styles.text}>• GPA: 3.4/4.0 or higher</FONT>
            <FONT style={styles.text}>• English Test: TOEFL IBT 70 or IELTS 6.0 or above</FONT>
          </View>
          <View style={styles.infoSection}>
            <View style={{backgroundColor: '#EDF0FF', marginTop:40}}>
              <FONT style={{color: '#000000', fontSize: 23, textAlign:'center'}}>EXPENSES</FONT>
            </View>
            <FONT style={styles.text}>• 1 year Tuition: USD 28,350</FONT>
            <FONT style={styles.text}>• 1 year Dormitory: USD 13,882</FONT>
            <FONT style={[styles.text, {fontWeight:'bold'}]}>• Total: USD 42,132</FONT>
          </View>
        </View>



      {/* <View style={{marginLeft: 150}}> */}


      {/* </View> */}
    </ScrollView>
  );
}

export default Twoplus2

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width:'75%',
    marginTop:'10%',
    marginLeft:'30%',
    flex: 1,
  },
  
  image: {
    width: 500,
    height: 300,
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
  tableContainer: {
    width:"100%",
    flexDirection: 'column',
    marginTop: 40,
    alignItems:'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell1: {
    flex: 0.25,
    textAlign:'center',
    alignItems: 'center',
    padding: 10,
  },
  cell2: {
    flex: 2,
    alignItems: 'left',
    padding: 10,
  },
  verticalLine: {
    height: '100%',
    width:0.5,
    backgroundColor: '#000',
  },
  horizontalLine: {
    width: '70%',
    height: 0.5,
    backgroundColor: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom:'10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoSection: {
    flexDirection: 'column',
    width: '45%', 
    alignItems:'left',
  },

});
