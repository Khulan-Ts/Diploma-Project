import React from "react";
import { StyleSheet, Image, View, ScrollView, useWindowDimensions } from "react-native";
import CardButton from "./src/components/cardButtons";
import Button from "./src/components/Button";
import FONT from "./src/components/Titles";
import MapComponent from "./src/components/Map";
import Location from "./assets/icons/location";
import Email from "./assets/icons/email";
import Phone from "./assets/icons/phone";
import Youtube from "./assets/icons/youtube";
import Facebook from "./assets/icons/facebook";
import Linkedin from "./assets/icons/linkedin";
import Instagram from "./assets/icons/instagram";
import HoverButton from "./src/components/hoverButtons";

const HomeScreen= ({ navigation }) =>{
  const { width, height } = useWindowDimensions();
  
  return(
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
          source={require("./assets/images/overlay_ellipse.png")}
          style={[styles.image, { height: height * 1.3, position: 'absolute', marginTop: '-0.1%', zIndex: 2 }]}
        />
      <Image
        source={require("./assets/images/homepage-3.png")}
        style={[styles.image, { height: height *1.3}]}
      />

      <View style={{position: 'absolute', alignItems: 'center', zIndex: 6, alignSelf: 'center', marginTop: '18%'}}>
        <FONT style={{fontSize: 36, letterSpacing: '-2%', color: '#fff', textAlign: 'center'}}>welcome to MIU</FONT>
        <FONT type="Title3" style={[styles.welcome, {height: height * 0.65, width: width *0.6}]}>
          Educating Global Servant Leaders of Tomorrow
        </FONT>
      </View>
      
      <View style={{alignItems: 'center', marginTop: '-10%', zIndex: 3}}>
        <View style={{flexDirection: 'row'}}>
          <HoverButton icon={require("./assets/icons/teachers.png")} text={"99+ Teachers"} nummber={'99+'}></HoverButton>
          <HoverButton icon={require("./assets/icons/research.png")} text={"12+ Research"} nummber={'12+'} style={{marginLeft: 50}}></HoverButton>
          <HoverButton icon={require("./assets/icons/department.png")} text={"15+ Departments"} nummber={'15+'} style={{marginLeft: 50}}></HoverButton>
        </View> 
      </View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{flexDirection: 'column'}}>
          <View style={[styles.history, {marginLeft: '15%', marginTop: '16%', width: width * 0.5}]}> 
            <FONT type="Title3" style={{textAlign: 'center', fontSize: 36, letterSpacing: '-2%'}}>
              The Most Global and Dynamic University in Mongolia
            </FONT>
          </View>
          <View style={[styles.history, {marginLeft: '20%', marginTop: '-10%', maxWidth: width * 0.55}]}> 
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
            style={[styles.historyImg, { width: width * 0.25, height: height * 0.4, marginTop:'10%', marginLeft: '8%', borderRadius: 50}]}
          />
      </View>
      <View style={{backgroundColor: '#3d2562', width: '100%', height: '2%', marginTop: '10%'}}/>
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
        
        <View style={{marginTop: '10%'}}>
          <MapComponent navigate={[() => navigation.navigate('Dorm'), () => navigation.navigate('Dorm')]}/>
        </View>
        <View style={[styles.apply, { height: height * 0.8, marginTop: '2%' }]}>
          <FONT type="Title" style={{color: "#fff", fontSize: 86}}>APPLY NOW</FONT>
          <View style={{marginTop: '1%', marginBottom: '2%', width: '35%'}}>
            <FONT type="Title2"style={{color: "#fff", textAlign: 'center', fontSize: 25}}>
              Are you ready to take the next step toward your future career?
            </FONT>
          </View>
          <Button type="Apply" text="Application Form"></Button>
        </View>
        <View style={[styles.footer, {height: height * 0.7}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', marginLeft: '-3%'}}>
              <Image source={require('./assets/images/logo-1.png')} style={{height: height * 0.1, width: width * 0.16}} resizeMode="contain"/>
              <View style={{width: width *0.18, marginTop: '5%', marginLeft: '3%'}}>
                <FONT type="Body" style={{color: '#fff', lineHeight: 25}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor
                  congue massa. Fusce posuere, magna.
                </FONT>
              </View>
            </View>
            <View style={{flexDirection: 'column', marginLeft: '5%'}}>
              <FONT type="Title2" style={{fontSize: 25, color: '#fff'}}>Contact us</FONT>
              <View style={{flexDirection: 'row', marginTop: '3%', alignItems: 'center'}}>
                <Location width={25} height={25}/>
                <FONT type="Body" style={{color: '#fff', fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>13th Khoroo, Bayanzurkh District Ulan Bator, Mongolia 13330 Ulaanbaatar, Mongolia</FONT>
              </View>
              <View style={{flexDirection: 'row', marginTop: '3%', alignItems: 'center'}}>
                <Email width={25} height={19}/>
                <FONT type="Body" style={{color: '#fff', fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>admisson.miu.edu</FONT>
              </View>
              <View style={{flexDirection: 'row', marginTop: '5%', alignItems: 'center'}}>
                <Phone width={25} height={25}/>
                <FONT type="Body" style={{color: '#fff', fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>7000 7447</FONT>
              </View>
            </View>
            <View style={{flexDirection:'column', marginLeft: '5%'}}>
              <FONT type="Title2" style={{fontSize: 25, color: '#fff'}}>Find Us On Google Maps</FONT>
              <Image source={require('./assets/images/location.png')} resizeMode="contain" style={{height: height * 0.25, width: width * 0.22, marginTop: '3%'}}/>
            </View>
          </View>
          <View style={[styles.footer2, {height: height * 0.09, justifyContent: 'center'}]}>
            <View style={{flexDirection: 'row', marginLeft: '12%'}}>
              <Facebook width={35} height={32}></Facebook>
              <Youtube width={60} height={38}></Youtube>
              <Linkedin width={45} height={32}></Linkedin>
              <Instagram width={50} height={38}></Instagram>
              <View style={{justifyContent: 'center', marginLeft: '10%'}}>
                <FONT type="Body" style={{color: "#fff"}}>Copyright © 2024 Mongolia International University</FONT>
              </View>
            </View>
          </View>
        </View>
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
    zIndex: 6,
    lineHeight: 80
  },
  footer:{
    backgroundColor: "#3d2562",
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer2:{
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#f8fcfc',
    position: 'absolute',
    bottom: 0,
  }
});
