import * as React from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Location from "../../assets/icons/location";
import Email from "../../assets/icons/email";
import Phone from "../../assets/icons/phone";
import Youtube from "../../assets/icons/youtube";
import Facebook from "../../assets/icons/facebook";
import Linkedin from "../../assets/icons/linkedin";
import Instagram from "../../assets/icons/instagram";
import FONT from "./Titles";


const Footer = ({}) => {
    const { width, height } = useWindowDimensions();
    const rgbaColor = 'rgba(225, 225, 225, 0.6)'
    return (
        <View style={[styles.footer, {height: height * 0.7}]}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: height * 0.05}}>
            <Image source={require('../../assets/images/logoTransparent.png')} style={{height: height * 0.1, width: width * 0.16}} resizeMode="contain"/>
            <View style={{ marginLeft: width * 0.11}}>
              <FONT type="Body" style={{color: 'rgba(225, 225, 225, 0.6)'}}>Copyright © 2024 Mongolia International University</FONT>
            </View>
            <View style={{flexDirection: 'row', marginLeft: width * 0.11 }}>
              <Facebook width={30} height={27} color={rgbaColor}></Facebook>
              <Youtube width={55} height={33} color={rgbaColor}></Youtube>
              <Linkedin width={40} height={27} color={rgbaColor}></Linkedin>
              <Instagram width={45} height={33} color={rgbaColor}></Instagram> 
            </View>
          </View>
          <View style={{borderBottomWidth: 0.8, borderBottomColor: rgbaColor, width: width * 0.8, marginBottom: height * 0.05}}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: width *0.18, marginRight: width * 0.085 }}>
                <FONT type="Body" style={{color: rgbaColor, lineHeight: 25}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor
                  congue massa. Fusce posuere, magna.
                </FONT>
            </View>
            <View style={{flexDirection: 'column', marginRight: width * 0.045}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Location width={25} height={25} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>13th Khoroo, Bayanzurkh District Ulan Bator, Mongolia 13330 Ulaanbaatar, Mongolia</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.02, alignItems: 'center'}}>
                <Email width={25} height={19} color={rgbaColor}/> 
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>admisson.miu.edu</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.03, alignItems: 'center'}}>
                <Phone width={25} height={25} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: '2%'}}>7000 7447</FONT>
                </View>
            </View>
            <Image source={require('../../assets/images/location.png')} resizeMode="contain" style={{height: height * 0.25, width: width * 0.22, borderRadius: 10}}/>
          </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    footer:{
      width: '100%',
      backgroundColor: "#3d2562",
      justifyContent: 'center',
      alignItems: 'center'
    },
});
