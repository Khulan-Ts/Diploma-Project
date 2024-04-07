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
          <View style={{marginTop: 159,borderBottomWidth: 1, width: 210, paddingBottom: 14}}>
            <FONT style={{color: 'black', textAlign:'left', fontSize: 28}}>Academics</FONT>
          </View>
          <View style={{marginLeft: 25, marginTop: 25}}>
            <Button type="Secondary" text={"Undergraduate"}></Button>
            <Button type="Secondary" text={"Graduate"}></Button>
            <Button type="Secondary" text={"2+2 program"}></Button>
            <Button type="Secondary" text={"Exchange student Program"}></Button>
            <Button type="Secondary" text={"Vision Trip"}></Button>
            <Button type="Secondary" text={"Academic Calendar"}></Button>
          </View>

      </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/ualbany.png")}
            style={styles.image}
          />
          <View style={[styles.backgroundContainer, { marginTop:40, width:'70%'}]}>
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
          <View style={styles.infoContainer}>
          <View style={styles.infoSection}>
            <View style={[styles.backgroundContainer2, {backgroundColor: '#EDF0FF', marginTop:40}]}>
              <FONT style={{color: '#000000',  fontSize: 23, textAlign:'center'}}>QUALIFICATIONS</FONT>
            </View>
            <FONT style={styles.text}>• Requirements: Undergraduate students,{'\n'}   who completed 2 years at MIU</FONT>
            <FONT style={styles.text}>• GPA: 3.4/4.0 or higher</FONT>
            <FONT style={styles.text}>• English Test: TOEFL IBT 70 or IELTS 6.0 or above</FONT>
          </View>
          <View style={styles.infoSection2}>
            <View style={[styles.backgroundContainer2, {backgroundColor: '#EDF0FF', marginTop:40, marginBottom:20}]}>
              <FONT style={{color: '#000000', fontSize: 23, textAlign:'center'}}>EXPENSES</FONT>
            </View>
            <FONT style={styles.text}>• 1 year Tuition: USD 28,350</FONT>
            <FONT style={styles.text}>• 1 year Dormitory: USD 13,882</FONT>
            <FONT style={[styles.text, {fontWeight:'bold'}]}>• Total: USD 42,132</FONT>
          </View>
        </View>
        </View>
        <View style={styles.verticalImage}>
        <Image
          source={require('./assets/verticalimg.png')}
          style={styles.verticalImageImg}
          resizeMode="contain" // Adjust the resizeMode as needed
        />
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
    backgroundColor:'##f9f8f5',
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
    marginTop: 140,
    marginLeft:'30%',
    flex: 1,
  },
  
  image: {
    width: '60%',
    height:'60%',
    // height: 400,
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
    marginTop: 70,
    marginBottom:'10%',
    // justifyContent: 'center',
    alignItems: 'left',
  },
  infoSection: {
    flexDirection: 'column',
    alignItems:'flex-start',
    marginRight:159,
  },
  infoSection2: {
    flexDirection: 'column',
    alignItems:'flex-start',
  },
  backgroundContainer: {
    overflow: 'hidden', // Ensure the gradient doesn't overflow its container
    alignSelf: 'flex-start', // Align the container to the start of its parent
    backgroundColor: 'transparent', // Ensure the text is visible
    // Add gradient background
    backgroundImage: 'linear-gradient(to right, #C7C4F2 20%, transparent)', // Adjust gradient direction and colors as needed
  },
  backgroundContainer2: {
    paddingRight: 150,
    baoverflow: 'hidden', // Ensure the gradient doesn't overflow its container
    alignSelf: 'flex-start', // Align the container to the start of its parent
    backgroundColor: 'transparent', // Ensure the text is visible
    // Add gradient background
    backgroundImage: 'linear-gradient(to right, #C7C4F2, transparent)', // Adjust gradient direction and colors as needed
  },
  verticalImage: {
    position: 'absolute',
    top: 0,
    right: 50,
    bottom: 0,
    width: 100, // Adjust the width as needed
    justifyContent: 'center', // Align the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  verticalImageImg: {
    // height: '100%',
    width: '120%',
    aspectRatio: 1, // Maintain aspect ratio
  },

});
