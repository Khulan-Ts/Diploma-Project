import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions, Linking } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import OverlayImage from "./src/components/OverlayImage";
import HoverButton from "./src/components/hoverButtons";
import Footer from "./src/components/footer";
import data from "./static.json"

const HomeScreen= ({ navigation }) =>{
  const { width, height } = useWindowDimensions();
  const { apply } = data.links;
  
  return(
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
          source={require("./assets/images/overlay_ellipse.png")}
          style={[styles.image, { height: width * 0.6, position: 'absolute', marginTop: '-0.1%', zIndex: 2 }]}
        />
      <Image
        source={require("./assets/images/homepage-3.png")}
        style={[styles.image, { height: width * 0.6}]}
      />

      <View style={{position: 'absolute', alignItems: 'center', zIndex: 6, alignSelf: 'center', marginTop: '18%'}}>
        <FONT style={{fontSize: 36, color: '#fff', textAlign: 'center'}}>welcome to MIU</FONT>
        <FONT type="Title3" style={{width: width *0.6, fontSize: 72, lineHeight: width * 0.059, textAlign: 'center', color: '#fff', zIndex: 6,}}>
          Educating Global Servant Leaders of Tomorrow
        </FONT>
      </View>
      
      <View style={{alignItems: 'center', marginTop: '-10%', zIndex: 3}}>
        <View style={{flexDirection: 'row'}}>
          <HoverButton icon={require("./assets/icons/teachers.png")} text={"International Faculty"} nummber={'77%'}></HoverButton>
          <HoverButton icon={require("./assets/icons/research.png")} text={"International Students"} nummber={'34%'} style={{marginLeft: width * 0.03}}></HoverButton>
          <HoverButton icon={require("./assets/icons/department.png")} text={"Taught in English"} nummber={'100%'} style={{marginLeft: width * 0.03}}></HoverButton>
        </View> 
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: width * 0.05}}>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={[styles.history, { width: width * 0.49, marginBottom: width * 0.002}]}> 
            <FONT type="Title3" style={{ textAlign: 'center', fontSize: 36 }}>
              The Most Global and Dynamic University in Mongolia
            </FONT>
          </View>
          <View style={[styles.history, { width: width * 0.49,}]}> 
            <FONT type="Body" style={{ textAlign: 'center', fontSize: 16, lineHeight: width * 0.02 }}>
              MIU was established in 2002 as a private university located in Ulaanbaatar, Mongolia.
              With great contribution from the former president of Mongolia, Mr. Natsagiin Bagabandi, MIU received free
              land of 17,100 ㎡ on which the first building was built. MIU distinguished itself as a prominent university
              providing English-Speaking higher education in Central Asia. MIU currently offers 14 recognized bachelor’s
              programs and is committed to providing a world-class education to tomorrow’s global servant leaders from Mongolia,
              Russia, China, Republic of Korea, and other nations.
            </FONT>
          </View>
        </View>
        <OverlayImage 
          image={require('./assets/images/flags.png')} 
          style={{width: width * 0.25, height: width * 0.21, borderRadius: width * 0.037, marginLeft: width * 0.03}}
        />
      </View>

      <View style={{backgroundColor: '#3d2562', width: '100%', height: width * 0.05, marginTop: width * 0.1}}/>

      <View style={{alignItems: 'center'}}>
        <View style={{ flexDirection: "row", marginTop: '5%'}}>
          <Image source={require('./assets/images/homepage/h1.png')} style={{width: width * 0.38, height: width * 0.25}} resizeMode="contain"/>
          <View style={{marginLeft: width * 0.02}}>
            <FONT style={{fontSize: 20}}>UNDERGRADUATE MAJORS</FONT>
            <FONT style={{fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016}}>
            MIU challenges students to explore 
            innovative intellectual interests through scholarly and personal 
            competency programs. Emphasizing on professionalism, MIU students 
            learn to make new connections in a synergistic environment that 
            multiplies the use of resources such as time, energy, and creativity.</FONT>
            <Button type="Ten" text={"Explore Undergraduate Programs"} style={{marginTop: width * 0.033}} onPress={()=> navigation.navigate('Graduate')}/>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: '5%'}}>
          <View style={{marginRight: width * 0.03}}>
            <FONT style={{fontSize: 20}}>GRADUATE MAJORS</FONT>
            <FONT style={{fontSize: 18, width: width * 0.3, marginTop: width * 0.008, letterSpacing: width * 0.0016}}>
            MIU challenges students to explore innovative intellectual interests through 
            scholarly and personal competency programs. Emphasizing on professionalism, MIU 
            students learn to make new connections in a synergistic environment that multiplies 
            the use of resources such as time, energy, and creativity.</FONT>
            <Button type="Ten" text={"Explore Graduate Programs"} style={{marginTop: width * 0.033}} onPress={()=> navigation.navigate('Graduate')}/>
          </View>
          <Image source={require('./assets/images/homepage/h2.png')} style={{width: width * 0.38, height: width * 0.25}} resizeMode="contain"/>
        </View>
      </View>
        
      <View style={{marginTop: '10%'}}>
        <MapComponent navigate={() => navigation.navigate('Dorm')}/>
      </View>
      <View style={[styles.apply, { height: width * 0.4, marginTop: '2%' }]}>
        <FONT type="Title" style={{color: "#fff", fontSize: 86}}>APPLY NOW</FONT>
        <View style={{marginTop: '1%', marginBottom: '2%', width: '35%'}}>
          <FONT type="Title2"style={{color: "#fff", textAlign: 'center', fontSize: 25}}>
          Are you ready to take the next step toward your future career?
          </FONT>
        </View>
        <Button type="Apply" text="Application Form" onPress={() => Linking.openURL(apply)}></Button>
      </View>
      <Footer/>   
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6FAFF"
  },
  image: {
    width: "100%",
  },
  history:{
    alignSelf: 'flex-start'
  },
  apply:{
    width: '100%',
    backgroundColor: '#FCB900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome:{
  },
});
