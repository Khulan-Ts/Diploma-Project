import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import { useNavigation } from "@react-navigation/native";

const HomeScreen= ({ navigation }) =>{
  const { width, height } = useWindowDimensions();
  
  return(
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/images/homepage-1.png")}
        style={[styles.image, { height: "50%" }]} // Adjusting height dynamically
      />
      
      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: height * 0.2}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Undergraduate</FONT>
            <CardButton image={require("./assets/images/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton image={require("./assets/images/se.png")} text={'Software Engineering'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/images/fd.png")} text={'Fashion Design'} style={{marginTop: 52}}/>
          <CardButton image={require("./assets/images/ir.png")} text={'International Relations'} style={{marginTop: 52}}/>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: height * 0.1}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Graduate</FONT>
            <CardButton type={"Secondary"} image={require("./assets/images/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton type={"Secondary"} image={require("./assets/images/se.png")} text={'Software Engineering'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/fd.png")} text={'Fashion Design'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/ir.png")} text={'International Relations'} style={{marginTop: 51}}/>
        </View>
        </View>
        <View style={{marginTop: height * 0.1, alignItems: 'center'}}>
          <FONT type="Title" >Our History</FONT>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require("./assets/images/homepage-1.png")}
            style={[styles.historyImg, { width: width * 0.5, height: height * 0.6, marginTop: height * 0.1, marginLeft: height * 0.15}]}
          />
          <View style={[styles.history, {marginLeft: width * -0.1, marginTop: height * 0.2, maxWidth: width * 0.45}]}> 
            <FONT type="Body">
              MIU was established in 2002 as a private university located in Ulaanbaatar, Mongolia.
              With great contribution from the former president of Mongolia, Mr. Natsagiin Bagabandi, MIU received free
              land of 17,100 ㎡ on which the first building was built. MIU distinguished itself as a prominent university
              providing English-Speaking higher education in Central Asia. MIU currently offers 14 recognized bachelor’s
              programs and is committed to providing a world-class education to tomorrow’s global servant leaders from Mongolia,
              Russia, China, Republic of Korea, and other nations.
            </FONT>
          </View>
        </View>
        <View style={{marginTop: height * 0.1}}>
          <MapComponent/>
        </View>
        <View style={[styles.apply, { height: height * 0.82, marginTop: height * 0.2 }]}>
          <FONT type="Title" style={{color: "#fff", fontSize: 86}}>APPLY NOW</FONT>
          <View style={{marginTop: height * 0.05, marginBottom: height * 0.08, width: 525}}>
            <FONT type="Title2"style={{color: "#fff", textAlign: 'center', fontSize: 25}}>
              Are you ready to take the next step toward your future career?
            </FONT>
          </View>
          <Button type="Apply" text="Application Form"></Button>
        </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
  },
  historyImg:{
    borderRadius: 10,
  },
  history:{
    backgroundColor: '#EDF0FF',
    borderRadius: 10,
    padding: 20,
    flex: 1,
    alignSelf: 'flex-start'
  },
  apply:{
    width: '100%',
    backgroundColor: '#FCB900',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
