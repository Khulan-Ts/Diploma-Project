import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions, ImageBackground } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import HoverButton from "./src/components/hoverButtons";

const HomeScreen= ({ navigation }) =>{
  const { width, height } = useWindowDimensions();
  
  return(
    <ScrollView style={styles.container} >
      <Image
          source={require("./assets/images/overlay_ellipse.png")}
          style={[styles.image, { height: height * 1.3, position: 'absolute', marginTop: '-0.1%', zIndex: 2 }]}
          resizeMode="contain"
        />
      <Image
        source={require("./assets/images/homepage-3.png")}
        style={[styles.image, { height: height *1.3}]}
      />
      <FONT type="Title3" style={[styles.welcome, {height: height * 0.45, width: width *0.6}]} lines={3}>
        Educating Global Servant Leaders of Tomorrow
      </FONT>
      
      <View style={{alignItems: 'center', marginTop: '-10%', zIndex: 3}}>
        <View style={{flexDirection: 'row'}}>
          <HoverButton icon={require("./assets/icons/teachers.png")} text={"99+ Teachers"} nummber={'99+'}></HoverButton>
          <HoverButton icon={require("./assets/icons/research.png")} text={"12+ Research"} nummber={'12+'} style={{marginLeft: 50}}></HoverButton>
          <HoverButton icon={require("./assets/icons/department.png")} text={"15+ Departments"} nummber={'15+'} style={{marginLeft: 50}}></HoverButton>
        </View> 
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{flexDirection: 'column'}}>
          <View style={[styles.history, {marginLeft: '15%', marginTop: '15%', width: width * 0.5}]}> 
            <FONT type="Title3" style={{textAlign: 'center', fontSize: 36, letterSpacing: '-2%'}}>
              The Most Global and Dynamic University in Mongolia
            </FONT>
          </View>
          <View style={[styles.history, {marginLeft: '20%', marginTop: '-8%', maxWidth: width * 0.55}]}> 
            <FONT type="Body" style={{textAlign: 'center', fontSize: 16, lineHeight: 24}}>
              MIU was established in 2002 as a private university located in Ulaanbaatar, Mongolia.
              With great contribution from the former president of Mongolia, Mr. Natsagiin Bagabandi, MIU received free
              land of 17,100 ㎡ on which the first building was built. MIU distinguished itself as a prominent university
              providing English-Speaking higher education in Central Asia. MIU currently offers 14 recognized bachelor’s
              programs and is committed to providing a world-class education to tomorrow’s global servant leaders from Mongolia,
              Russia, China, Republic of Korea, and other nations.
            </FONT>
          </View>
          </View>
        <View style={[styles.overlay, { width: width * 0.25, height: height * 0.4}]}/> 
          <Image
            source={require("./assets/images/flags.png")}
            style={[styles.historyImg, { width: width * 0.25, height: height * 0.4, marginTop:'10%', marginLeft: '7.4%', borderRadius: 50}]}
          />
      </View>
      <View style={{backgroundColor: '#3d3562', width: '100%', height: '2%', marginTop: '5%'}}/>
      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: '5%'}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Undergraduate</FONT>
            <CardButton image={require("./assets/images/cs.png")} text={'Computer Science'} style={{marginTop: '10%'}} onPress={() => navigation.navigate('Academic Calendar')}/>
          </View>
          <CardButton image={require("./assets/images/se.png")} text={'Software Engineering'} style={{marginTop: '5.8%'}}/>
          <CardButton image={require("./assets/images/fd.png")} text={'Fashion Design'} style={{marginTop: '5.8%'}}/>
          <CardButton image={require("./assets/images/ir.png")} text={'International Relations'} style={{marginTop: '5.8%'}}/>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: height * 0.1}}>
          <View>
            <FONT type="Subtitle"style={{color: '#62253E'}}>Graduate</FONT>
            <CardButton type={"Secondary"} image={require("./assets/images/cs.png")} text={'Computer Science'} style={{marginTop: '10%'}}/>
          </View>
          <CardButton type={"Secondary"} image={require("./assets/images/se.png")} text={'Software Engineering'} style={{marginTop: '5.8%'}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/fd.png")} text={'Fashion Design'} style={{marginTop: '5.8%'}}/>
          <CardButton type={"Secondary"} image={require("./assets/images/ir.png")} text={'International Relations'} style={{marginTop: '5.8%'}}/>
        </View>
        </View>
        
        <View style={{marginTop: height * 0.1}}>
          <MapComponent/>
        </View>
        <View style={[styles.apply, { height: '20%', marginTop: '2%' }]}>
          <FONT type="Title" style={{color: "#fff", fontSize: 86}}>APPLY NOW</FONT>
          <View style={{marginTop: '1%', marginBottom: '2%', width: '35%'}}>
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
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
  },
  overlay:{
    backgroundColor: 'rgba(61, 37, 98, 0.6)',
    zIndex: 9,
    marginTop:'10%',
    marginLeft: '63%',
    position: 'absolute',
    borderRadius: 50,
  },
  historyImg:{
    borderRadius: 10,
  },
  history:{
    flex: 1,
    alignSelf: 'flex-start'
  },
  apply:{
    width: '100%',
    backgroundColor: '#FCB900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
    fontSize: 72, 
    textAlign: 'center', 
    letterSpacing: '-5%', 
    color: '#fff', 
    position: 'absolute',
    zIndex: 6,
    marginLeft: '20%',
    marginTop: '20%'
  }
});
