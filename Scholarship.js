import React, { useState } from "react";
import { StyleSheet, Text, Image, ScrollView, View, useWindowDimensions } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import FONT from "./src/components/Titles";
import Button from "./src/components/Button";
import { useNavigation } from "@react-navigation/native";

const Scholarship=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:'10%'}}>
            <View style={{marginLeft:'12%',alignItems: 'center', justifyContent: 'center'}}>
            <FONT style={{marginTop: '10%',borderBottomWidth: 1, paddingBottom: 15, width:width*0.125,color: 'black', textAlign:'center', fontSize: 28}}>Admissions</FONT>
                <View style={{marginTop:'1.5%',  justifyContent: 'center', alignItems: 'center'}}>
                    <Button type="Secondary" text={"Overview"} style={{borderBottomWidth: 1, borderRadius:0}}></Button>
                    <Button type="Secondary" text={"How to Apply"} style={{borderBottomWidth: 1, borderRadius:0}}></Button>
                    <Button type="Secondary" text={"Tuion & Aids"} style={{borderBottomWidth: 1, borderRadius:0}}></Button>
                    <Button type="Secondary" text={"Scholarhip"} style={{ borderRadius:0}}></Button>
                </View>
            </View>
            <Image
                source={require("./assets/scholarship.png")}
                style={[styles.image, {width: width*0.6, height: height*0.6, marginLeft:'5%', borderRadius:10, marginTop:'2%' }]}
            />
            <View style={{zIndex:'100', backgroundColor:'#3D2562', width: '70%', height:'35%', marginTop:'23%', right:'70%', borderRadius:10,justifyContent:'center', alignItems: 'center'}}>
              <View style={{width:'70%',height:'90%', justifyContent:'center', alignItems: 'center'}}>

                <FONT style={{ color: 'white', fontSize: 25, textAlign: 'left',lineHeight: 30,}}>We want to get to know you 
              through your application process, to hear your voice and explore your potential. 
              We will be happy to assist you along the way! Are you ready to take the next step?</FONT>
              </View>

            </View>
        </View>
        <FONT style={{marginLeft:'6%',marginTop:'5%', color:'black', textAlign:'left', fontSize:20, paddingLeft:'25%', paddingRight:'25%'}}>When you decide to apply to Mongolia
         International University you will have the opportunity to explore courses across the programs and colleges that make up our university,
          crossing disciplines and charting your own unique academic path.

          {'\n'}{'\n'}We recognize that the application process might seem challenging; selecting the right undergraduate or graduate program is an important decision. Our admissions team is available to help you navigate this critical journey and make a choice that will affect your intellectual and creative potential in profound ways.
</FONT>

    </ScrollView>
  );
}

export default Scholarship

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
    flex: 1,
  },
  
  image: {

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

    flexDirection: 'column',
    marginTop: 40,
    alignItems:'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell1: {
    flex: 0.5,
    textAlign:'center',
    alignItems: 'center',
    padding: 7,
  },
  cell2: {
    flex: 2,
    alignItems: 'left',
    padding: 10,
  },
  verticalLine: {
    width: 1,
    height: "116%",
    backgroundColor: "#000",
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10, // Adjust as needed for spacing between rows
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
     // Adjust the width as needed
    justifyContent: 'center', // Align the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  verticalImageImg: {
    // height: '100%',

    aspectRatio: 1, // Maintain aspect ratio
  },

});
