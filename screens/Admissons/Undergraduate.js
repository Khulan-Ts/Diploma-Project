import React, { useState } from "react";
import { StyleSheet, useWindowDimensions, Image, ScrollView, View } from "react-native";
import FONT from "../../src/components/Titles";
import Button from "../../src/components/Button";

const Undergraduate= ({ navigation }) => {
    const { width, height } = useWindowDimensions();

    return (
    <ScrollView
      style={styles.container}
    >
      <View style={{flexDirection: "row", marginTop: '5%'}}>
        <View style={{marginLeft: '10%', width: '18%'}}>
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
                <Button type="Secondary" text={"2+2 program"} ></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Exchange student Program"} numberOfLines={2} style={{width: width * 0.15}}></Button>
                </View>
                <View style={{borderBottomWidth: 1, width: '70%'}}>
                    <Button type="Secondary" text={"Vision Trip"} ></Button>
                </View>
                <Button type="Secondary" text={"Academic Calendar"} onPress={() => navigation.navigate('Academic Calendar')}></Button>
            </View>
        </View>
        <View style={{width:799, height:648, marginLeft: 61, marginBottom: 132}}>
            <FONT type="Subtitle2" style={{color:'#000000',}}>Degree Programs</FONT>
            <FONT type="Body" style={{color:'#000000', marginTop:30}}>MIU challenges students to explore innovative intellectual interests through scholarly and personal competency programs. Emphasizing on professionalism, MIU students learn to make new connections in a synergistic environment that multiplies the use of resources such as time, energy, and creativity. </FONT>
            <View style={{backgroundColor: '#EDF0FF', height:29, marginTop:34}}>
                <FONT type="Subtitle2" style={{color:'#000000'}}>School of Management (SoM)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Business Administration"} style={{color: '#000000', marginTop:21, marginLeft:7}}></Button>
                <Button type="Seven" text={"Department of Hotel & Tourism Management"} style={{color: '#000000', marginTop:21, marginLeft:68,}}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height:29, marginTop:34}}>
                <FONT type="Subtitle2" style={{color:'#000000'}}>School of Computing Science (SoCS)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Sofware Engineering (SE)"} style={{color: '#000000', marginTop:21, marginLeft:7}}></Button>
                <Button type="Seven" text={"Department of Computer Science (CS)"} style={{color: '#000000', marginTop:21, marginLeft:68,}}></Button>
            </View> 
            <View style={{backgroundColor: '#EDF0FF', height:29, marginTop:34}}>
                <FONT type="Subtitle2" style={{color:'#000000'}}>School of International Studies and Communication (SoISC)</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of International Relations (IR)"} style={{color: '#000000', marginTop:21, marginLeft:7}}></Button>
                <Button type="Seven" text={"Department of Media & Communication (MC)"} style={{color: '#000000', marginTop:21, marginLeft:68,}}></Button>
            </View>
            <View style={{backgroundColor: '#EDF0FF', height:29, marginTop:34}}>
                <FONT type="Subtitle2" style={{color:'#000000'}}>Programs</FONT>    
            </View> 
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of English Education (EE)"} style={{color: '#000000', marginTop:21, marginLeft:7}}></Button>
                <Button type="Seven" text={"Department of Fashion Design (FD)"} style={{color: '#000000', marginTop:21, marginLeft:68,}}></Button>
            </View>
            <View style={{flexDirection: "row"}}>  
                <Button type="Seven" text={"Department of Music Education (ME)"} style={{color: '#000000', marginTop:21, marginLeft:7}}></Button>
                <Button type="Seven" text={"Department of Biotechnology & Food Science (BT)"} style={{color: '#000000', marginTop:21, marginLeft:68,}}></Button>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Undergraduate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});