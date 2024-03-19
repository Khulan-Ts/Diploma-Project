import React, { useState } from "react";
import { StyleSheet, Text, Image, Animated, View } from "react-native";
import Header from "./src/components/Header";
import CardButton from "./src/components/cardButtons";
import Title from "./src/components/Titles";

export default function App() {
  const [scrollY] = useState(new Animated.Value(0));

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 40],
    outputRange: ["rgba(61, 37, 98, 1)", "rgba(61, 37, 98, 0.5)"],
    extrapolate: "clamp",
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      stickyHeaderIndices={[0]}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
        <Header
          type={"Primary"}
          buttontext={["about us", "academics", "admissions", "LEI"]}
          style ={{backgroundColor: headerBackgroundColor }}
        />
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/2p2.png")}
            style={styles.image}
          />
          <View style={{backgroundColor: '#EDF0FF', marginTop:40, width:'100%'}}>
            <Title type="Body" text={'INTRODUCTION'} style={{color: '#000000', textAlign:'center'}}></Title>
          </View>

          <View style={styles.tableContainer}>
            <View style={styles.row}>
              <Text style={[styles.cell, {fontWeight:'bold'}]}>Why 2+2?</Text>
              <View style={styles.verticalLine} />
              <Text style={styles.cell}>2 years (MIU) + 2 years (SUNY Albany) = 2 Diplomas</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.row}>
              <Text style={[styles.cell, {fontWeight:'bold'}]}>Goal</Text>
              <View style={styles.verticalLine} />
              <Text style={styles.cell}>To cultivate global individuals with academic literacy and international sense</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.row}>
              <Text style={[styles.cell, {fontWeight:'bold'}]}>Why choose 2 + 2? </Text>
              <View style={styles.verticalLine} />
              <Text style={styles.cell}>Low cost and affordable fee
Acquiring English knowledge for 2 years at MIU
Obtain two diplomas (MIU and SUNY Albany)
Experience campus life in Mongolia, USA and other cultures</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoSection}>
            <View style={{backgroundColor: '#EDF0FF', marginTop:40}}>
              <Title type="Body" text={'QUALIFICATIONS'} style={{color: '#000000'}}></Title>
            </View>
            <Text style={styles.text}>• Requirements: Undergraduate students, who completed 2 years at MIU</Text>
            <Text style={styles.text}>• GPA: 3.4/4.0 or higher</Text>
            <Text style={styles.text}>• English Test: TOEFL IBT 70 or IELTS 6.0 or above</Text>
          </View>
          <View style={styles.infoSection}>
            <View style={{backgroundColor: '#EDF0FF', marginTop:40}}>
              <Title type="Body" text={'EXPENSES'} style={{color: '#000000'}}></Title>
            </View>
            <Text style={styles.text}>• 1 year Tuition: USD 28,350</Text>
            <Text style={styles.text}>• 1 year Dormitory: USD 13,882</Text>
            <Text style={[styles.text, {fontWeight:'bold'}]}>• Total: USD 42,132</Text>
          </View>
        </View>



      {/* <View style={{marginLeft: 150}}> */}


      {/* </View> */}
    </Animated.ScrollView>
  );
}

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  image: {
    width: 400,
    height: 300,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    
  },
  text: {
      fontSize: 14,
      marginTop: 5,
  },
  tableContainer: {
    width:"50%",
    flexDirection: 'column',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#000',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 50,
   // justifyContent: 'center',
    alignItems:'center',
  },
  infoSection: {
    flexDirection: 'column',
    width: '45%',
    justifyContent: 'center',
    alignItems:'center',
  },

});
