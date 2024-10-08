import * as React from "react";
import { View, StyleSheet, Image, useWindowDimensions, Linking, Pressable } from "react-native";
import Location from "../../assets/icons/location";
import Email from "../../assets/icons/email";
import Phone from "../../assets/icons/phone";
import Youtube from "../../assets/icons/youtube";
import Facebook from "../../assets/icons/facebook";
import Linkedin from "../../assets/icons/linkedin";
import Instagram from "../../assets/icons/instagram";
import FONT from "./Titles";
import data from "../../static.json";
import mn from "../../staticMN.json";
import en from "../../staticEN.json";
import ru from "../../staticRU.json";


const Footer = ({language}) => {
    const { width, height } = useWindowDimensions();
    const { facebook, linkedin, youtube, instagram, google_map } = data.links;
    const rgbaColor = 'rgba(225, 225, 225, 0.6)';

    let content;
      switch (language){
      case 'mn':
        content = mn.footer;
        break;
      case 'ru':
        content = ru.footer;
        break;
      case 'en':
        content = en.footer;
        break;
    }
    return (
        <View style={[styles.footer, {height: width * 0.3}]}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: width * 0.02}}>
            <Image source={require('../../assets/images/logoTransparent.png')} style={{height: width * 0.04, width: width * 0.14}} resizeMode="contain"/>
            <View style={{ marginLeft: width * 0.12}}>
              <FONT type="Body" style={{color: 'rgba(225, 225, 225, 0.6)', fontSize: 18}}>{content.copyright}</FONT>
            </View>
            <View style={{flexDirection: 'row', marginLeft: width * 0.12 }}>
              <Facebook width={width * 0.02} height={width * 0.021} color={rgbaColor} onPress={()=> Linking.openURL(facebook)}></Facebook>
              <Youtube width={width * 0.031} height={width * 0.025} color={rgbaColor} onPress={()=> Linking.openURL(youtube)}></Youtube>
              <Linkedin width={width * 0.03} height={width * 0.022} color={rgbaColor} onPress={()=> Linking.openURL(linkedin)}></Linkedin>
              <Instagram width={width * 0.03} height={width * 0.025} color={rgbaColor} onPress={()=> Linking.openURL(instagram)}></Instagram> 
            </View>
          </View>
          <View style={{borderBottomWidth: 0.8, borderBottomColor: rgbaColor, width: width * 0.8, marginBottom: width * 0.02}}/>
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: width * 0.18, marginRight: width * 0.085 }}>
                <FONT type="Body" style={{color: rgbaColor, lineHeight: width * 0.018, fontSize: 18}}>
                  {content.description}
                </FONT>
            </View>
            <View style={{flexDirection: 'column', marginRight: width * 0.045}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Location width={width * 0.02} height={width * 0.02} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>{content.address}</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.02, alignItems: 'center'}}>
                <Email width={width * 0.02} height={width * 0.019} color={rgbaColor}/> 
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>{content.email}</FONT>
                </View>
                <View style={{flexDirection: 'row', marginTop: height * 0.03, alignItems: 'center'}}>
                <Phone width={width * 0.02} height={width * 0.02} color={rgbaColor}/>
                <FONT type="Body" style={{color: rgbaColor, fontSize: 16, width: width * 0.25, marginLeft: width * 0.009}}>{content.phone}</FONT>
                </View>
            </View>
            <Pressable onPress={()=> Linking.openURL(google_map)}>
              <Image source={{uri: data.footerImg.google_mapImg}} style={{height: width * 0.11, width: width * 0.21, borderRadius: width * 0.008}}/>
            </Pressable>
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
