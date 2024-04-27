import React from "react";
import { StyleSheet, Image, ScrollView, View, useWindowDimensions } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";
import Footer from "../../src/components/footer";

const Twoplus2=({navigation})=>{
  const { width, height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
       <View style={{flexDirection: "row", marginTop: '5%'}}>
        <Image
          source={require("../../assets/images/2p2cal1.png")}
          style={{height: height*0.6, width:width*0.1, marginLeft:'-1%'}}resizeMode="contain"
        />
        <View style={{marginLeft: '2%', width: '18%'}}>
            <View style={{ borderBottomWidth: 1, width: '90%', paddingBottom: 14, paddingLeft:14}}>
                <FONT type="Regular" style={{color: '#000000'}}>Academics</FONT>
            </View>
            <View style={{marginTop: '5%'}}>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Undergraduate"} onPress={() => navigation.navigate('Undergraduate')} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Graduate"} onPress={() => navigation.navigate('Graduate')}></Button>
                </View>
                    <View style={{borderBottomWidth: 1, width: '70%'}}>
                <Button type="Secondary" text={"2+2 program"} isPressedState={true} onPress={() => navigation.navigate('2 + 2 program')}></Button> 
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.13}} onPress={() => navigation.navigate('Exchange student Program')}></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>

          <View style={{flexDirection:'column', alignItems:'flex-start',justifyContent:'left',flex:1, width:'75%', marginTop:'1%'}}>
             <Image
              source={require("../../assets/images/albany.png")}
              style={{width: width*0.6, height: height*0.6}}resizeMode="contain"
            />
            <FONT style={{backgroundColor:'#EDF0FF',marginTop:'5%', marginLeft:'6%', width:'65%',color: '#000000', textAlign:'left', fontSize: 23,}}>INTRODUCTION</FONT>
            <Image
              source={require("../../assets/images/2p2introduction.png")}
              style={{ marginLeft:'-30%',marginTop:'5%',height: height*0.4}}resizeMode="contain"
            />
          </View>
          <Image
            source={require("../../assets/images/miucal.png")}
            style={{height: height*1.2, width:width*0.1, marginTop:'-1%'}}resizeMode="contain"
          />
        </View>
        <View style={[styles.infoContainer, {marginLeft:'12%'}]}>
          <View style={styles.infoSection}>
            <FONT style={{backgroundColor:'#EDF0FF',color: '#000000',  fontSize: 23, textAlign:'center',  width:'100%'}}>QUALIFICATIONS</FONT>

            <FONT style={styles.text}>• Requirements: Undergraduate students,{'\n'}   who completed 2 years at MIU</FONT>
            <FONT style={styles.text}>• GPA: 3.4/4.0 or higher</FONT>
            <FONT style={styles.text}>• English Test: TOEFL IBT 70 or IELTS 6.0 or above</FONT>
          </View>
          <View style={styles.infoSection2}>
            <FONT style={{marginBottom:'5%', backgroundColor: '#EDF0FF',color: '#000000', fontSize: 23, textAlign:'center', width:'150%'}}>EXPENSES</FONT>
            <FONT style={styles.text}>• 1 year Tuition: USD 28,350</FONT>
            <FONT style={styles.text}>• 1 year Dormitory: USD 13,882</FONT>
            <FONT style={[styles.text, {fontWeight:'bold'}]}>• Total: USD 42,132</FONT>
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



{/* <View style={[styles.backgroundContainer, { marginTop:40, width: width*0.5}]}>
              <FONT style={{color: '#000000', textAlign:'left', fontSize: 23}}>INTRODUCTION</FONT>
            </View> */}

            // <View style={[styles.tableContainer, { width: width * 0.5, height: height*0.3}]}>
            //   <View style={styles.row}>
            //     <View style={styles.cell1}>
            //       <FONT style={[styles.text, { fontSize: 25 }]}>Why 2+2?</FONT>
            //     </View>
            //     <View style={styles.verticalLine} />
            //     <View style={styles.cell2}>
            //       <FONT style={[styles.text, { fontSize: 25 }]}>2 years (MIU) + 2 years (SUNY Albany) = 2 Diplomas</FONT>
            //     </View>
            //   </View>
            //   <View style={styles.horizontalLine} />
            //   <View style={styles.row}>
            //     <View style={styles.cell1}>
            //       <FONT style={[styles.text, { fontSize: 18 }]}>Goal</FONT>
            //     </View>
            //     <View style={styles.verticalLine} />
            //     <View style={styles.cell2}>
            //       <FONT style={[styles.text, { fontSize: 18 }]}>To cultivate global individuals with academic literacy and international sense</FONT>
            //     </View>
            //   </View>
            //   <View style={styles.horizontalLine} />
            //   <View style={styles.row}>
            //     <View style={styles.cell1}>
            //       <FONT style={[styles.text, { fontSize: 18 }]}>Why choose {"\n"}      2 + 2?</FONT>
            //     </View>
            //     <View style={styles.verticalLine} />
            //     <View style={styles.cell2}>
            //       <FONT style={[styles.text, { fontSize: 18 }]}>
            //         • Low cost and affordable fee{"\n"}
            //         • Acquiring English knowledge for 2 years at MIU{"\n"}
            //         • Obtain two diplomas (MIU and SUNY Albany){"\n"}
            //         • Experience campus life in Mongolia, USA and other cultures
            //       </FONT>
            //     </View>
            //   </View>
            // </View> 
