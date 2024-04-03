import React from "react";
import { StyleSheet, Image, View, ScrollView } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import { useNavigation } from "@react-navigation/native";


const HomeScreen= ({ navigation }) =>{
  
  return(
    <ScrollView style={styles.container}>
      <Image
        source={require("./assets/images/homepage-1.png")}
        style={styles.image}
      />
      
      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: 75}}>
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
        <View style={{ flexDirection: "row", marginTop: 27}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Graduate</FONT>
            <CardButton type={"Secondary"} image={require("./assets/images/cs.png")} text={'Computer Science'} style={{marginTop: 17}}/>
          </View>
          <CardButton type={"Secondary"} image={require("./assets/images/se.png")} text={'Software Engineering'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/fd.png")} text={'Fashion Design'} style={{marginTop: 51}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/ir.png")} text={'International Relations'} style={{marginTop: 51}}/>
        </View>
        </View>
        <View style={{marginTop: 137, alignItems: 'center'}}>
          <FONT type="Title" >Our History</FONT>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require("./assets/images/homepage-1.png")}
            style={styles.historyImg}
          />
          <View style={styles.history}> 
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
        <View style={{marginTop: 50}}>
          <MapComponent/>
        </View>
        <View style={styles.apply}>
          <FONT type="Title" style={{color: "#fff", fontSize: 86}}>APPLY NOW</FONT>
          <View style={{marginTop: 33, marginBottom: 38, width: 525}}>
            <FONT type="Title2"style={{color: "#fff", textAlign: 'center', fontSize: 25}}>Are you ready to take the next step toward your future career?</FONT>
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
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  image: {
    width: "100%",
    height: 1000,
  },
  historyImg:{
    width: 705,
    height: 393,
    borderRadius: 10,
    marginTop: 31,
marginLeft: 63
  },
  history:{
    backgroundColor: '#EDF0FF',
    borderRadius: 10,
    maxWidth: 680,
    padding: 20,
    flex: 1,
    marginLeft: -120,
    marginTop: 110, 
    alignSelf: 'flex-start'
  },
  apply:{
    width: '100%',
    height: 523,
    backgroundColor: '#FCB900',
    justifyContent: 'center',
    alignItems: 'center',
marginTop: 66
  }
});
