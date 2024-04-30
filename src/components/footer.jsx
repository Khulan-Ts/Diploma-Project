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
        <View style={[styles.footer, {height: width * 0.3}]}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: width * 0.02}}>
            <Image source={require('../../assets/images/logoTransparent.png')} style={{height: width * 0.04, width: width * 0.14}} resizeMode="contain"/>
            <View style={{ marginLeft: width * 0.12}}>
              <FONT type="Body" style={{color: 'rgba(225, 225, 225, 0.6)', fontSize: 18}}>Copyright © 2024 Mongolia International University</FONT>
            </View>
            <View style={{flexDirection: 'row', marginLeft: width * 0.12 }}>
              <Facebook width={width * 0.02} height={width * 0.021} color={rgbaColor}></Facebook>
              <Youtube width={width * 0.031} height={width * 0.025} color={rgbaColor}></Youtube>
              <Linkedin width={width * 0.03} height={width * 0.022} color={rgbaColor}></Linkedin>
              <Instagram width={width * 0.03} height={width * 0.025} color={rgbaColor}></Instagram> 
            </View>
          </View>
          <View style={{borderBottomWidth: 0.8, borderBottomColor: rgbaColor, width: width * 0.8, marginBottom: width * 0.02}}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: width * 0.18, marginRight: width * 0.085 }}>
                <FONT type="Body" style={{color: rgbaColor, lineHeight: width * 0.018, fontSize: 18}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor
                  congue massa. Fusce posuere, magna.
                </FONT>
            </View>
            <View style={{flexDirection: 'column', marginRight: width * 0.045}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Location width={width * 0.02} height={width * 0.02} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>13th Khoroo, Bayanzurkh District Ulan Bator, Mongolia 13330 Ulaanbaatar, Mongolia</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.02, alignItems: 'center'}}>
                <Email width={width * 0.02} height={width * 0.019} color={rgbaColor}/> 
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>admisson.miu.edu</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.03, alignItems: 'center'}}>
                <Phone width={width * 0.02} height={width * 0.02} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>7000 7447</FONT>
                </View>
            </View>
            <Image source={require('../../assets/images/location.png')} resizeMode="contain" style={{height: width * 0.11, width: width * 0.21, borderRadius: width * 0.008}}/>
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
